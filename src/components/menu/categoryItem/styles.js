import { StyleSheet } from 'react-native';
import { general, metrics, colors} from 'styles';

const styles = StyleSheet.create({
  container:{
    marginTop:12,
    marginHorizontal: metrics.baseMargin
  },
  activeContainer:{
    marginTop:12,
    marginHorizontal: metrics.baseMargin,
    borderBottomColor:colors.white,
    borderBottomWidth: 5,
  },
  category:{
    fontSize:12,
    color:colors.white,
    fontWeight:'bold',
    opacity:0.4,
  },
  activeCategory:{
    fontSize:12,
    color:colors.white,
    fontWeight:'bold',

  }
});

export default styles;
