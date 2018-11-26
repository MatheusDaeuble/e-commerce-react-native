import { StyleSheet } from 'react-native';
import { general, metrics, colors} from 'styles';

const styles = StyleSheet.create({
  container:{
    ...general.box,
    paddingTop: metrics.basePadding/2,
    marginVertical: metrics.baseMargin,
    maxWidth: (metrics.screenWidth - (3 * metrics.baseMargin) - 20)/2,
  },
  avatar:{
    height: 180,
    width:180,
    resizeMode:"contain",
    alignSelf:'center'
  },
  title : {
    fontWeight: 'bold',
    fontSize: 14,
    color:colors.dark,
    marginTop: metrics.baseMargin,
  },

  brand : {
    color:colors.gray,
    fontSize: 11,

  },

  price : {
    color:colors.primary,
    fontSize: 14,

  },
});

export default styles;
