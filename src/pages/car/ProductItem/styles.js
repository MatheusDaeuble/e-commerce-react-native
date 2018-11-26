import { StyleSheet } from 'react-native';
import { general, metrics, colors} from 'styles';

const styles = StyleSheet.create({
  container:{
    ...general.box,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
    flexDirection:'row',
    //alignItems:'space-between',
    justifyContent:'space-between',

  },

  repoTitle:{
    fontWeight: 'bold',
    fontSize: 14,
  },

  image:{
    height:60,
    width:60,
    resizeMode:"contain",
  },

  infoContainer:{
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  info:{
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
  },
  name : {
    fontWeight: 'bold',
    fontSize: 14,
    color:colors.dark,
  },

  brand : {
    marginTop:0,
    color:colors.gray,
    fontSize: 11,

  },

  price : {
    marginTop: metrics.baseMargin/2,
    color:colors.primary,
    fontSize: 14,

  },

  actionsContainer : {
    alignItems:'center',
    flexDirection:'row',
    marginHorizontal:metrics.baseMargin
  },

  icon : {
    color:colors.gray
  },

  input:{
    //backgroundColor: '#DDD',
    borderWidth:1,
    borderColor:'#DDD',
    color:colors.grey,
    //color:'red',
    //backgroundColor:'red',
    //fontSize:8,
    padding:0,
    marginHorizontal:metrics.baseMargin/2,
    borderRadius: 3,
    height: 20,
    width:40,

  },

});

export default styles;
