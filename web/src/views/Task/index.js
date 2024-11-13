import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import { format } from "date-fns";

import * as S from './styles'

import api from '../../services/api'

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'


function Task() {
const [lateCount,setLateCount] = useState() // para renderizer API com as TAREFASatrasadas
const [type,setType] = useState() //TIPO da TAREFA
const [taskId,setTaskId] = useState() //--id da TAREFA
const [done,setDone] = useState(false) //-- Se está FEITA ou NAO
const [title,setTitle] = useState();
const [description,setDescription] = useState() //
const [date,setDate] = useState()
const [hour,setHour] = useState()
const [macaddress,setMacaddress] = useState('11:11:11:11:11:11')

const {id} = useParams() // -- loadTaskDetails -- MANEIRA ATUALIZADA 


async function lateVerify(){
  await api.get(`/task/filter/late/11:11:11:11:11:11`)
  .then((response) => {
    setLateCount(response.data.length)

  })
}

async function loadTaskDetails(){
  
  await api.get(`/task/${id}`)
  .then((response) => {
    setType(response.data.type)
    setTitle(response.data.title)
    setDescription(response.data.description)
    setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
    setHour(format(new Date(response.data.when), 'HH:mm'))

  })
}

async function Save(){
  await api.post('/task', {
    macaddress,
    type,
    title,
    description,
    when:`${date}T${hour}:00.000`
    //when: `${date}T${hour}:00.000`
  }).then( () => {
    alert('TAREFA CADASTRADA com SUCESSO!')
  }).catch((e)=> {
    alert('Nao foi possivel',e)
  })
}

useEffect(()=> {
  lateVerify();
  loadTaskDetails()
},[])




  return (
   <S.Container>
     <Header lateCount={lateCount}  />
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
          <button type="button">EXCLUIR</button>
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
