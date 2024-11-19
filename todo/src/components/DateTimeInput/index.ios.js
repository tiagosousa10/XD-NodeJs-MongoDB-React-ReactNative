import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

import styles from "./styles";

export default function DateTimeInputIOS({ type }) {
  const [datetime, setDateTime] = useState(new Date()); // Estado para armazenar data/hora
  const [showPicker, setShowPicker] = useState(false); // Estado para controlar visibilidade do picker

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDateTime(selectedDate); // Atualiza a data/hora selecionada
    }
    setShowPicker(false); // Fecha o picker após seleção
  };

  const formatDate = (date) => {
    if (type === "date") {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setShowPicker(true)} // Abre o picker ao clicar
      >
        <Text style={styles.input}>
          {type === "date" ? formatDate(datetime) : formatDate(datetime)}
        </Text>
        <Image
          style={styles.iconTextInput}
          source={type === "date" ? iconCalendar : iconClock}
        />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={datetime} // Data/hora atual
          mode={type} // "date" ou "time"
          display="spinner" // Estilo do picker no iOS
          onChange={handleDateChange} // Função para tratar mudanças
          minimumDate={type === "date" ? new Date() : undefined} // Data mínima para seleção
        />
      )}
    </View>
  );
}
