import React from "react";
import {  SafeAreaView,View,Image,Text,TouchableOpacity} from 'react-native'

import styles from './styles'

import add from '../../assets/add.png';
import save from '../../assets/save.png'


export default function Footer({icon, onPress}){
return(
  <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={icon === 'add' ? add : save} styles={styles.image}  />
    </TouchableOpacity>

    <Text style={styles.text}>
      Organizando sua vida!
    </Text>
  </SafeAreaView>
)
}
