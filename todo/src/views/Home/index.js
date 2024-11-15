import React, { useState } from "react";
import {SafeAreaView,View,Text, TouchableOpacity, ScrollView} from 'react-native'

import styles from "./styles";


//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

export default function Home(){
  const [filter,setFilter] = useState('today')


  return (
    <SafeAreaView style={styles.container}>
      <Header showNotification={true} showBack={false}/>

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
          Tarefas
          </Text>
          </View> 

        <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>

        <TaskCard done={true}/>

        </ScrollView>

      <Footer  icon={'add'} />

    </SafeAreaView>
  )
}
