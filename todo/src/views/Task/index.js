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
  Alert,
  ActivityIndicator
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
    const [load,setLoad] = useState(true)

    async function SaveTask(){

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

          try{
            if(id){ //atualizar tarefa
              await api.put(`/task/${id}`,{
                macaddress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}.000`
              }).then(()=> {
                navigation.navigate('Home')
              })
              console.log('consegui')
            }else{
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
          }catch(e){
            console.log('erro: ',e)
          }

         
        }
    
    async function LoadTask(){
      setLoad(true)
      await api.get(`/task/${id}`).then((response) => {
        setDone(response.data.done)
        setType(response.data.type)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(response.data.when)
        setHour(response.data.when)

      })
    }    

    async function getMacAddress(){
      await Network.getIpAddressAsync().then((mac) => { //ios e android novos nao suportam mac logo fiz com o ip
        setMacaddress(mac)
        setLoad(false)
      })
    }

    useEffect(()=> {
      getMacAddress()  
      if(route.params){
        setId(route.params.idtask)
        LoadTask().then(() => {setLoad(false)})
      }
      
    },[LoadTask])


    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Header showBack={true} navigation={navigation} />
        
{ 
        load 
        ?
        <ActivityIndicator color='#ee6b26' size={50} style={{marginTop:150}} />

        :
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
            value={description}
             />

          <Index type={'date'} save={setDate} date={date}  />
          <Index type={'hour'} save={setHour} hour={hour} />

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
        }

        <Footer icon={'save'} onPress={SaveTask} />
      </KeyboardAvoidingView>
    )
  }
