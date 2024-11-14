import React, {useState} from "react";
import {Navigate} from 'react-router-dom'
import * as S from './styles'
import {QRCodeSVG} from 'qrcode.react'

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function QrCode() {
const [mac,setMac] = useState()
const [redirect,setRedirect] = useState(false)


async function SaveMac(){ //guardar no localStorage
  if(!mac){
    alert('Precisas de informar o numero do QRCODE através do Telemovel')
  } else {
    localStorage.setItem('@todo/macaddress', mac)
    setRedirect(true)
    window.location.reload()
  }

}

return(
  <S.Container>
    {redirect && <Navigate to='/' />}
    <Header/>

    <S.Content>
      <h1>CAPTURE O QRCODE</h1>
      <p>As suas atividades serão sincronizadas com a do seu telemovel</p>

      <S.QrCodeArea>
        <QRCodeSVG value='getmacaddress' size={350}  />
      </S.QrCodeArea>

      <S.ValidationCode>
        <span>Digite os numeros que apareceram no telemovel</span>
        <input type="text" onChange={(e) => setMac(e.target.value)} value={mac} />
        <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
      </S.ValidationCode>
    </S.Content>

    <Footer/> 
  </S.Container>
)


}

export default QrCode;
