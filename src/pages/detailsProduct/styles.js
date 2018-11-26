import { StyleSheet } from 'react-native';
import { general, metrics, colors} from 'styles';

const styles = StyleSheet.create({
  container:{
    ...general.box,
    paddingTop: metrics.basePadding/2,
    margin: metrics.baseMargin,
  },
  avatar:{
    height:285,
    width:'100%',
    resizeMode:"contain",
    alignSelf:'center'
  },

  infoContent: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },

  button : {
    borderRadius: metrics.baseRadius,
    height:44,
    backgroundColor: colors.primary,
    justifyContent:'center',
    alignItems:'center',
    marginVertical: metrics.baseMargin
  },

  textButton:{
    color:colors.white,
  },

  title : {
    fontWeight: 'bold',
    fontSize: 18,
    color:colors.dark,
    marginTop: metrics.baseMargin,
  },

  brand : {
    color:colors.gray,
    fontSize: 12,

  },

  price : {
    color:colors.primary,
    fontSize: 24,

  },
});

export default styles;
