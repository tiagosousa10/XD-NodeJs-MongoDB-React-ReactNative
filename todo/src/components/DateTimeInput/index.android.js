import React, { useState } from "react";
import { TouchableOpacity, View, TextInput, Image } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import styles from "./styles";
import { globalStyles } from "../../styles/global";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function DateTimeInputAndroid({ type }) {
  const [datetime, setDateTime] = useState(""); // Inicializado com string vazia

  async function selectDataOrHour() {
    const currentDate = new Date(); // Data atual como padrão
    if (type === "date") {
      // Abrir o picker de data
      DateTimePickerAndroid.open({
        value: currentDate,
        mode: "date",
        onChange: (event, selectedDate) => {
          if (event.type !== "dismissed") {
            const day = selectedDate.getDate();
            const month = selectedDate.getMonth() + 1; // Os meses começam em 0
            const year = selectedDate.getFullYear();
            setDateTime(`${day}/${month}/${year}`);
          }
        },
      });
    } else {
      // Abrir o picker de hora
      DateTimePickerAndroid.open({
        value: currentDate,
        mode: "time",
        is24Hour: true,
        onChange: (event, selectedTime) => {
          if (event.type !== "dismissed") {
            const hours = selectedTime.getHours();
            const minutes = selectedTime.getMinutes();
            setDateTime(`${hours}:${minutes}`);
          }
        },
      });
    }
  }

  return (
    <TouchableOpacity onPress={selectDataOrHour}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={
            type === "date"
              ? "Clique aqui para definir a data"
              : "Clique aqui para definir a hora"
          }
          placeholderTextColor={globalStyles.colors.forest[400]}
          editable={false}
          value={datetime}
        />
        <Image
          style={styles.iconTextInput}
          source={type === "date" ? iconCalendar : iconClock}
        />
      </View>
    </TouchableOpacity>
  );
}
