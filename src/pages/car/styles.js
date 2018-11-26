import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.background,
  },
  loading: {
    marginTop: metrics.basePadding,
  },
  columnContainer:{
    marginHorizontal: metrics.basePadding,
    justifyContent: 'space-between',
  },
  subTotalContainer:{
    padding: metrics.basePadding/2,
    height:100,
    alignItems:'center',
    backgroundColor:colors.white,
  },
  subTotalText:{
    color:colors.gray,
    fontSize:14
  },

  price: {
    color: colors.primary,
    fontSize:24,
  }
});

export default styles;
