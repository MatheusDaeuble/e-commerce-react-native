import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import ProductItem from './ProductItem'
import { connect } from 'react-redux';

class Car extends Component {
  static navigationOptions ={
    title: 'Carrinho',
    tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor}/>,
  };

  state = {
    data: [],
    loading: false,
    refreshing:false,
  }

  renderListItem = ({ item }) => {
    console.log(item)
    return (<ProductItem product={item}/>);
  }

  renderList = () => (
    <FlatList
      data={this.props.car}
      keyExtractor={(product) => String(product.item.id)}
      renderItem={this.renderListItem}
    />
  );

  subTotal = () => {
    let subTotal = 0;
    this.props.car.map(product => { subTotal+=product.item.price*product.units; });
    return subTotal;
  }
  render (){
    return (
      <View style={styles.container}>
        {this.renderList()}
        <View style={styles.subTotalContainer}>
          <Text style={styles.subTotalText}>Subtotal</Text>
          <Text style={styles.price}>R${this.subTotal().toFixed(2)}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  car: state.car,
})

export default connect(mapStateToProps, null) (Car)
