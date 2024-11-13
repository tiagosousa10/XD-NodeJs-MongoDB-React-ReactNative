import React, {useState, useEffect} from "react";
import * as S from './styles'


//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function QrCode() {
return(
  <S.Container>
    <Header/>
    <S.Content>
      <h1>CAPTURE O QRCODE</h1>
      <S.QrCodeArea></S.QrCodeArea>
      <p>As suas atividades serão sincronizadas com a do seu telemovel</p>
    </S.Content>
    <Footer/> 
  </S.Container>
)


}

export default QrCode;
