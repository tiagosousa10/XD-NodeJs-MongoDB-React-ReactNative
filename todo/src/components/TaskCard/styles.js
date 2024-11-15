import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
card:{
  flexDirection:'row',
  justifyContent:'space-between',
  padding:10,
  width:'90%',
  height:80,
  marginVertical:10,
shadowColor: '#000',
shadowOffset:{
  width:0,
  height:2
},
shadowOpacity:0.25,
shadowRadius:4,
elevation:5,
borderRadius:10,
backgroundColor:'#fff'

},
cardLeft:{
  flexDirection:'row',
  alignItems:'center'
},
typeActive:{
  width:50,
  height:50
},
cardTitle:{
  marginLeft:10,
  fontWeight:'bold',
  fontSize:16
},
cardRight:{
  alignItems:'flex-end',
  justifyContent:'space-between'
},
cardDate:{
  color:'#ee6b26',
  fontWeight:'bold',
  fontSize:16
},
cardTime:{
  color:'#707070'
},
cardDone:{
  opacity:0.5
}
})


export default styles;
