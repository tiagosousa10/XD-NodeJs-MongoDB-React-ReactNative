import React,{useState} from "react";

import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} 
  from 'react-native'

  import styles from './styles'

  //COMPONENTS
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'


  import typeIcons from '../../utils/typeIcons.js'

  export default function Task(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Header showBack={true}  />

        <ScrollView style={{width:'100%'}}>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {typeIcons.map((icon) => (
              <TouchableOpacity >
              <Image source={icon} style={styles.imageIcon} />
              </TouchableOpacity>
            ))
           

}
          </ScrollView>

          <Text style={styles.label}>Titulo</Text>
          <TextInput style={styles.input} maxLength={30} placeholder="Lembrar de fazer..." />

          <Text style={styles.label}>Detalhes</Text>
          <TextInput style={styles.input} maxLength={200} placeholder="Detalhes da atividade..." multiline={true} />

        </ScrollView>

      </KeyboardAvoidingView>
    )
  }
