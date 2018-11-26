import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as CarActions} from 'store/ducks/car';

class DetailsProduct extends Component {

  state = {
    username:'',
    loading: false,
    errorMessage:null,
  }

  static navigationOptions ={
    title: 'Detalhe do Produto',
    tabBarVisible: true,
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor}/>,
  };


  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  addItem = () => {
    const { navigation } = this.props;
    const product = navigation.getParam('product', 'SEM PRODUTO');
    this.props.addItemCar(product)
    console.log(this.props)
  }


  render(){

    const { navigation } = this.props;
    const product = navigation.getParam('product', 'SEM PRODUTO');
    console.log(product)
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri:product.image}}/>
        <View style={styles.infoContent}>
          <View>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.brand}>{product.brand}</Text>
          </View>
          <Text style={styles.price}>R${product.price}</Text>
        </View>
        <TouchableOpacity onPress={this.addItem} style={styles.button}><Text style={styles.textButton}> Adicionar ao Carrinho</Text></TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  car: state.car
})

const mapDispatchToProps = dispatch => bindActionCreators(CarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (DetailsProduct)
