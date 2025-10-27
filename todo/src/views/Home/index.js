import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import * as Network from "expo-network";

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";
import { Badge } from "../../components/ui/Badge";

//api  --ter sempre cuidado com as PERMISSOES da FIREWALL!!!!!
import api from "../../services/api";
import { set } from "date-fns";

export default function Home({ navigation }) {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [lateCount, setLateCount] = useState();
  const [macaddress, setMacaddress] = useState("11:11:11:11:11:11");

  async function getMacAddress() {
    await Network.getIpAddressAsync().then((mac) => {
      //ios e android novos nao suportam mac logo fiz com o ip
      // Alert.alert(mac)
    });
  }

  async function loadTasks() {
    setLoad(true);

    try {
      const response = await api.get(`/task/filter/${filter}/${macaddress}`, {
        timeout: 2000,
      });

      setTasks(response.data);
    } catch (e) {
      console.log("erro-try-catch: ", e);
    } finally {
      setLoad(false); // sempre que carregar
    }
  }

  async function lateVerify() {
    try {
      const response = await api.get(`/task/filter/late/${macaddress}`);
      setLateCount(response.data.length);
      console.log(response.data.length); // ✅ Agora funciona!
    } catch (e) {
      console.log("erro-lateVerify: ", e);
    }
  }

  function Notification() {
    setFilter("late");
  }

  function New() {
    navigation.navigate("Task");
  }

  function Show(id) {
    navigation.navigate("Task", { idtask: id });
  }

  useEffect(() => {
    getMacAddress().then(() => {
      loadTasks();
    });
    lateVerify();
  }, []); // Remover [filter] da dependência

  // Criar um useEffect separado para quando filter mudar
  useEffect(() => {
    loadTasks();
  }, [filter]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Header
        showNotification={true}
        showBack={false}
        pressNotification={Notification}
        late={lateCount}
        navigation={navigation}
      />

      <View style={styles.mainContent}>
        <View style={styles.filter}>
          <TouchableOpacity onPress={() => setFilter("all")}>
            <Badge variant={filter === "all" ? "active" : "default"}>
              Todos
            </Badge>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilter("today")}>
            <Badge variant={filter === "today" ? "active" : "default"}>
              Hoje
            </Badge>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilter("month")}>
            <Badge variant={filter === "month" ? "active" : "default"}>
              Mês
            </Badge>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilter("week")}>
            <Badge variant={filter === "week" ? "active" : "default"}>
              Semana
            </Badge>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilter("year")}>
            <Badge variant={filter === "year" ? "active" : "default"}>
              Ano
            </Badge>
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>
            Tarefas {filter === "late" && " ATRASADAS"}
          </Text>
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {load ? (
            <ActivityIndicator color="#ee6b26" size={50} />
          ) : (
            tasks.map((task, index) => (
              <TaskCard
                key={task._id}
                done={task.done}
                title={task.title}
                when={task.when}
                type={task.type}
                onPress={() => Show(task._id)}
              />
            ))
          )}
        </ScrollView>
      </View>

      <Footer icon={"add"} onPress={New} />
    </KeyboardAvoidingView>
  );
}
