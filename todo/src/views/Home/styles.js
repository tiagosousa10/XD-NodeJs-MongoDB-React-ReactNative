import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center', //alinhamento - HORIZONTAL
    justifyContent:'flex-start' //alinhamento - VERTICAL
  },
  filter:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    height:70,
    alignItems:'center'
  },
  filterTextActived:{
    fontWeight:'bold',
    fontSize:18,
    color:'#ee6b26'
  },
  filterTextInatived:{
    color:'#2029f5',
    fontWeight:'bold',
    fontSize:18,
    opacity:0.5,
  }
})


export default styles;
