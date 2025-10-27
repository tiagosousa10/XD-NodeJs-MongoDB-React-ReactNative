import React, { useState, useEffect } from "react";

import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import * as Network from "expo-network";

import styles from "./styles";
import { globalStyles } from "../../styles/global";

import api from "../../services/api.js";

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Switch as CustomSwitch } from "../../components/ui/Switch";
import { Label } from "../../components/ui/Label";
//import DateTimeInputAndroid from "../../components/DateTimeInput/index.android.js";
import Index from "../../components/DateTimeInput/";
import typeIcons from "../../utils/typeIcons.js";

export default function Task({ navigation, route, idTask }) {
  const [id, setId] = useState(false);

  const [done, setDone] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState("12:34");
  const [macaddress, setMacaddress] = useState("11:11:11:11:11:11");
  const [load, setLoad] = useState(true);

  async function SaveTask() {
    if (!title) return Alert.alert("Defina o nome da Tarefa!");
    if (!description) return Alert.alert("Defina o nome da Tarefa!");
    if (!type) return Alert.alert("Defina o Tipo!");
    if (!date) return Alert.alert("Defina uma Data para Tarefa!");
    if (!hour) return Alert.alert("Defina a HORA da Tarefa!");

    try {
      if (id) {
        //atualizar tarefa
        await api
          .put(`/task/${id}`, {
            macaddress,
            done,
            type,
            title,
            description,
            when: `${date}T${hour}.000`,
          })
          .then(() => {
            navigation.navigate("Home");
          });
        console.log("consegui");
      } else {
        await api
          .post("/task", {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}.000`,
          })
          .then(() => {
            navigation.navigate("Home");
          });
      }
    } catch (e) {
      console.log("erro: ", e);
    }
  }

  async function LoadTask() {
    setLoad(true);
    await api.get(`/task/${id}`).then((response) => {
      setDone(response.data.done);
      setType(response.data.type);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDate(response.data.when);
      setHour(response.data.when);
    });
  }

  async function getMacAddress() {
    await Network.getIpAddressAsync().then((mac) => {
      //ios e android novos nao suportam mac logo fiz com o ip
      setMacaddress(mac);
      console.log("🚀 ~ getMacAddress ~ getMacAddress:", mac);
      setLoad(false);
    });
  }

  async function DeleteTask() {
    await api.delete(`/task/${id}`).then(() => {
      navigation.navigate("Home");
    });
  }

  async function Remove() {
    Alert.alert(
      "Remover Tarefa",
      "Deseja realmente remover a tarefa?",
      [
        { text: "Cancelar" },
        { text: "Confirmar", onPress: () => DeleteTask() },
      ],
      { cancelable: true }
    );
  }

  useEffect(() => {
    getMacAddress();
    if (route.params) {
      setId(route.params.idtask);
      LoadTask().then(() => {
        setLoad(false);
      });
    }
  }, []); // Empty dependency array - runs only once on mount

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Header showBack={true} navigation={navigation} />

      <View style={styles.mainContent}>
        {load ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              color={globalStyles.colors.sage[600]}
              size={50}
            />
          </View>
        ) : (
          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Seção de Ícones */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Tipo de Tarefa</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.iconsContainer}
                contentContainerStyle={{ paddingHorizontal: 4 }}
              >
                {typeIcons.map(
                  (icon, index) =>
                    icon !== null && (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setType(index)}
                        style={styles.imageIconContainer}
                      >
                        <Image
                          source={icon}
                          style={[
                            styles.imageIcon,
                            type === index && styles.imageIconActive,
                            type && type !== index && styles.imageIconInactive,
                          ]}
                        />
                      </TouchableOpacity>
                    )
                )}
              </ScrollView>
            </View>

            {/* Seção de Título */}
            <View style={styles.sectionContainer}>
              <View style={styles.inputContainer}>
                <Label>Título</Label>
                <TextInput
                  style={styles.input}
                  maxLength={30}
                  placeholder="Lembrar de fazer..."
                  placeholderTextColor={globalStyles.colors.forest[400]}
                  onChangeText={(text) => setTitle(text)}
                  value={title}
                />
              </View>
            </View>

            {/* Seção de Detalhes */}
            <View style={styles.sectionContainer}>
              <View style={styles.inputContainer}>
                <Label>Detalhes</Label>
                <TextInput
                  style={styles.inputarea}
                  maxLength={200}
                  placeholder="Detalhes da atividade..."
                  placeholderTextColor={globalStyles.colors.forest[400]}
                  multiline={true}
                  onChangeText={(text) => setDescription(text)}
                  value={description}
                />
              </View>
            </View>

            {/* Seção de Data e Hora */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Data e Hora</Text>
              <View style={styles.dateTimeContainer}>
                <View style={styles.dateTimeItem}>
                  <Index type={"date"} save={setDate} date={date} />
                </View>
                <View style={styles.dateTimeItem}>
                  <Index type={"hour"} save={setHour} hour={hour} />
                </View>
              </View>
            </View>

            {/* Seção de Ações (apenas para edição) */}
            {id && (
              <View style={styles.sectionContainer}>
                <View style={styles.inLine}>
                  <View style={styles.switchContainer}>
                    <CustomSwitch
                      value={done}
                      onValueChange={() => setDone(!done)}
                    />
                    <Text style={styles.switchLabel}>Concluído</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={Remove}
                  >
                    <Text style={styles.removeLabel}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </ScrollView>
        )}
      </View>

      <Footer icon={"save"} onPress={SaveTask} />
    </KeyboardAvoidingView>
  );
}
