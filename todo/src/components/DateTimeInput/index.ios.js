import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text,TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

import styles from "./styles";

import {format} from 'date-fns'


export default function DateTimeInputIOS({ type, save }) {
  const [datetime, setDateTime] = useState(new Date()); // Estado para armazenar data/hora
  const [showPicker, setShowPicker] = useState(false); // Estado para controlar visibilidade do picker
  const [hour,setHour] = useState('12:34')
  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDateTime(selectedDate); // Atualiza a data/hora selecionada
    }
    setShowPicker(false); // Fecha o picker após seleção
  };

  const formatDate = (date) => {
    if (type === "date") {
      
      const day = date.getDate();
      const month = date.getMonth()
      const year = date.getFullYear()

      return `${day}/${month + 1}/${year}`;
    }
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setShowPicker(true)} // Abre o picker ao clicar
      >
        <TextInput style={styles.input} value={datetime} editable={false}>
          {type === "date" ? formatDate(datetime) : formatDate(datetime)}
        </TextInput>
        <Image
          style={styles.iconTextInput}
          source={type === "date" ? iconCalendar : iconClock}
        />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={datetime} // Data/hora atual
          mode={type} // "date" ou "time"
          display="inline" // Estilo do picker no iOS
          onChange={handleDateChange} // Função para tratar mudanças
          minimumDate={type === "date" ? new Date() : undefined} // Data mínima para seleção
        />
      )}
    </View>
  );
}
