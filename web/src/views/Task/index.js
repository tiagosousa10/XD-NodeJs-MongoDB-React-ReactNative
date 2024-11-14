import React, {useState, useEffect} from "react";
import {Navigate,useParams} from 'react-router-dom'

import { format } from "date-fns";

import * as S from './styles'

//  utils
import api from '../../services/api'
import isConnected from "../../utils/isConnected";

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'


function Task() {
const [redirect,setRedirect] = useState()
const [type,setType] = useState() //TIPO da TAREFA
const [taskId,setTaskId] = useState() //--id da TAREFA
const [done,setDone] = useState(false) //-- Se está FEITA ou NAO
const [title,setTitle] = useState();
const [description,setDescription] = useState() //
const [date,setDate] = useState()
const [hour,setHour] = useState()

const {id} = useParams() // -- loadTaskDetails -- MANEIRA ATUALIZADA 

async function loadTaskDetails(){
  
  await api.get(`/task/${id}`)
  .then((response) => {
    setType(response.data.type)
    setDone(response.data.done)
    setTitle(response.data.title)
    setDescription(response.data.description)
    setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
    setHour(format(new Date(response.data.when), 'HH:mm'))

  })
}

async function Save(){
//validaçao dos dados
if(!title)
  return alert('Informe o Titulo da Tarefa!')
else if(!description)
  return alert('Informe a Descriçao!')
else if(!type)
  return alert('Informe o Tipo!')
else if(!date)
  return alert('Informe a Data')
else if(!hour)
  return alert('Informe a Hora!')

  if(id){ // se tiver um id vindo dos parametros vou utilizar o PUT para ATUALIZAR , se quiser
    await api.put(`/task/${id}`, {
      macaddress:isConnected,
      type,
      title,
      description,
      when:`${date}T${hour}:00.000`
    }).then( () => {
    setRedirect(true)
    }).catch((e)=> {
      alert('Nao foi possivel ATUALIZAR TAREFA',e)
    })
  } else { //crio uma tarefa com o POST
    await api.post(`/task`, {
      macaddress:isConnected,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`

    }).then( () => {
      setRedirect(true)
    }).catch((e)=> {
      alert('Nao foi possivel CRIAR TAREFA',e)
    })
  }

 
}

async function Remove (){
  const res = window.confirm('Deseja realmente remover a tarefa?')
  if(res === true){
  await api.delete(`/task/${id}`)
  .then(() => setRedirect(true)).catch((e) => {alert('Não foi Possivel Excluir!')})
  }
}

useEffect(()=> {
if(!isConnected){
  setRedirect(true)
}

 if(id){
  loadTaskDetails()
 }
},[id])


  return (
   <S.Container>
   {redirect && <Navigate to="/"  />}
     <Header   />
    <S.Form>

      <S.TypeIcons>
        {
          TypeIcons.map((icon,index) => (
            index > 0 && 
            <button type="button" onClick={()=> setType(index)} >
            <img src={icon} alt="tipo do icon" className={type && type !== index && 'inative'}/>
            </button>
          ))
        }
      </S.TypeIcons>

      <S.Input>
        <span>Titulo </span>
        <input 
          type="text"
          placeholder="Titulo da tarefa" 
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
      </S.Input>

      <S.TextArea>
        <span>Descrição  </span>
        <textarea 
          rows={5} 
          placeholder="Detalhes da Tarefa" 
          onChange={(e) => setDescription(e.target.value)} 
          value={description}  />
      </S.TextArea>


      <S.Input>
        <span>Data</span>
        <input type="date" placeholder="Titulo da tarefa" onChange={(e) => setDate(e.target.value)} value={date} />
        <img src={iconCalendar} alt="Data" />
      </S.Input>

      <S.Input>
        <span>Hora</span>
        <input type="time" placeholder="Titulo da tarefa" onChange={(e) => setHour(e.target.value)} value={hour} />
        <img src={iconClock} alt="Relógio"  />

      </S.Input>

        <S.Options>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
            <span>CONCLUIDO - {done ? 'concluido' : 'falso'}  </span>
          </div>
          {
          id && 
          <button type="button" onClick={Remove}>EXCLUIR</button>
          }
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>GUARDAR</button>
        </S.Save>
    </S.Form>
     
     <Footer/>
   </S.Container>
  );
}

export default Task;
