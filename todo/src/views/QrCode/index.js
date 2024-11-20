import React, {useState,useEffect} from "react";
import {Text,View,TouchableOpacity,Alert, StyleSheet, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import * as Network from 'expo-network'

import { CameraView, Camera } from "expo-camera";

export default function QrCode({navigation}){
  const [hasPermission,setHasPermission] = useState(null)
  const [scanned,setScanned] = useState(false)

  async function getMacAddress(){
    await Network.getIpAddressAsync().then((mac) => { //ios e android novos nao suportam mac logo fiz com o ip
     Alert.alert('o seu numero é', mac)
    })
  }

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);


  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    if(data == 'getmacaddress')
      getMacAddress();
    else
      Alert.alert('QrCode Inválido!')
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return(
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <CameraView 
        onBarCodeScanned={scanned ? undefined : handleBarcodeScanned} 
        style={StyleSheet.absoluteFillObject} />

        <View style={styles.header}>
          <Text style={styles.headerText}>Conectar com conta WEB</Text>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButton}>
              VOLTAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={!scanned ? styles.buttonScanActive : styles.buttonScanInative} 
          onPress={() => setScanned(false)}>
            <Text style={styles.textButton}>
              SCAN NOVAMENTE
            </Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}
