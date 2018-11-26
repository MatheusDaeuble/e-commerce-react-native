import { StackNavigator, TabNavigator } from 'react-navigation';
import ProductDetails from 'pages/detailsProduct';
import Home from 'pages/home';
import Car from 'pages/car';
import { metrics, colors } from 'styles'
const createNavigator = () => StackNavigator ({
  ProductDetails: { screen: ProductDetails},
  Home: {
    screen: TabNavigator({
      Home: {screen: Home},
      Car: {screen: Car},
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.gray,
        style: {
          backgroundColor: colors.white,
          height: metrics.heightBars
        }
      },
    }),
  },
},{
  initialRouteName: 'Home',
  navigationOptions: () =>({
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: colors.white,
      height: metrics.heightBars,
    },
    headerTitleStyle:{
      flex: 1,
      textAlign: 'center',
      color: colors.secondary,
      fontSize: 16,
      fontWeight: 'bold',
    },
  }),
});

export default createNavigator;
