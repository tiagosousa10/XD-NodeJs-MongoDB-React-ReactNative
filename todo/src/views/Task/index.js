import React,{useState,useEffect} from "react";

import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
  Alert
} 
  from 'react-native'

  import * as Network from 'expo-network'

  import styles from './styles'

  import api from '../../services/api.js'

  //COMPONENTS
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'
  //import DateTimeInputAndroid from "../../components/DateTimeInput/index.android.js";
  import Index from '../../components/DateTimeInput/'
  import typeIcons from '../../utils/typeIcons.js'


  export default function Task({navigation,route,idTask}){
    const [id,setId] = useState(false)

    const [done,setDone] = useState(false)
    const [type,setType] = useState();
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [date,setDate] = useState()
    const [hour,setHour] = useState('12:34')
    const [macaddress,setMacaddress] = useState('11:11:11:11:11:11')

    async function New(){

          if(!title)
            return Alert.alert('Defina o nome da Tarefa!')
          if(!description)
            return Alert.alert('Defina o nome da Tarefa!')
          if(!type)
            return Alert.alert('Defina o Tipo!')
          if(!date)
            return Alert.alert('Defina uma Data para Tarefa!')
          if(!hour)
            return Alert.alert('Defina a HORA da Tarefa!')

          await api.post('/task',{
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}.000`
          }).then(()=> {
            navigation.navigate('Home')
          })
        }
    
    async function getMacAddress(){
      await Network.getIpAddressAsync().then((mac) => { //ios e android novos nao suportam mac logo fiz com o ip
        setMacaddress(mac)
      })
    }

    useEffect(()=> {
      if(route.params){
        setId(route.params.idtask)

      }
      getMacAddress()  
    })


    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Header showBack={true} navigation={navigation} />

        <ScrollView style={{width:'100%'}}>
                            {/* --ICONES--*/}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}} >
            {typeIcons.map((icon,index) => (
              icon !== null &&
              <TouchableOpacity onPress={() => setType(index)} >
              <Image source={icon} style={[styles.imageIcon, type && type !== index && styles.typeIconInative]} />
              </TouchableOpacity>
            ))
}
          </ScrollView>

                            {/* --TITULO--*/}
          <Text style={styles.label}>Titulo</Text>
          <TextInput 
            style={styles.input} 
            maxLength={30}
            placeholder="Lembrar de fazer..." 
            onChange={(text) => setTitle(text)} 
            value={title}
             />
                            {/* --DETALHES--*/}
          <Text style={styles.label}>Detalhes</Text>
          <TextInput 
            style={styles.inputarea} 
            maxLength={200}
            placeholder="Detalhes da atividade..."
            multiline={true}
            onChange={(text) => setDescription(text)}
             />

          <Index type={'date'} save={setDate} date={date}  />
          <Index type={'hour'} save={setHour} date={hour} />

          {id &&
          <View style={styles.inLine}  >
            <View style={styles.inputInline}>  
              <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done? '#00761b' : '#ee6b26'} />
              <Text style={styles.switchLabel}>Concluido</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.removeLabel}>EXCLUIR</Text>
            </TouchableOpacity>
          </View>
          }
        </ScrollView>

        <Footer icon={'save'} onPress={New} />
      </KeyboardAvoidingView>
    )
  }
