import React, { useState, useEffect } from "react";
import {SafeAreaView,View,Text, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native'

import styles from "./styles";


//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

//api  --ter sempre cuidado com as PERMISSOES da FIREWALL!!!!!
import api from '../../services/api';
import { set } from "date-fns";

export default function Home({navigation}){
  const [filter,setFilter] = useState('all')
  const [tasks,setTasks] = useState([])
  const [load,setLoad] = useState(false)
  const [lateCount,setLateCount] = useState();


  async function loadTasks(){
  setLoad(true)

  try{
    const response = await api.get(`/task/filter/${filter}/11:11:11:11:11:11`,{
      timeout:2000
    })

    setTasks(response.data)

  }catch(e){
    console.log("erro-try-catch: ",e)
  }finally{
    setLoad(false) // sempre que carregar 
  }
 
}

async function lateVerify(){
  try{
    await api.get('/task/filter/late/11:11:11:11:11:11')
    .then((response) => {
      setLateCount(response.data.length)
    })

    console.log(response.data.length)
  }catch(e){
    console.log('erro-lateVerify: ', e)
  }
  }

function Notification(){
  setFilter('late')
}

function New(){
  navigation.navigate('Task')
}

useEffect(() => {
  loadTasks();
  lateVerify()
},[filter])


  return (
    <SafeAreaView style={styles.container}>
      <Header showNotification={true} showBack={false} pressNotification={Notification} late={lateCount} />

      <View style={styles.filter}>

      <TouchableOpacity onPress={() => setFilter('all')} >
        <Text style={
          filter === 'all' ? styles.filterTextActived : styles.filterTextInatived} > Todos </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFilter('today')} >
      <Text style={
          filter === 'today' ? styles.filterTextActived : styles.filterTextInatived} > Hoje </Text>      
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFilter('month')} >
      <Text style={
          filter === 'month' ? styles.filterTextActived : styles.filterTextInatived} > Mês </Text>     
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFilter('week')} >
      <Text style={
          filter === 'week' ? styles.filterTextActived : styles.filterTextInatived} > Semana </Text>   
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFilter('year')} >
      <Text style={
          filter === 'year' ? styles.filterTextActived : styles.filterTextInatived} > Ano </Text>     
     </TouchableOpacity>

      </View>

       <View style={styles.title} >
        <Text style={styles.titleText}>
          Tarefas {filter === 'late' && ' ATRASADAS' }
          </Text>
       </View> 

      <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>

        {
          load
           ?       
            <ActivityIndicator color='#ee6b26' size={50} />
          :
          tasks.map((task) => (

            <TaskCard  done={false} title={task.title} when={task.when} type={task.type} />
          ))
      }

      </ScrollView>

      <Footer  icon={'add'} onPress={New} />

    </SafeAreaView>
  )
}

