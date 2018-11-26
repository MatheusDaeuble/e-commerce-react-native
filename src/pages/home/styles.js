import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

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

});

export default styles;
