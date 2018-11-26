import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { View, Text, Image, TextInput } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as CarActions} from 'store/ducks/car';

class ProductItem extends Component {
  state = {
    units: ''
  }

  componentDidMount() {
    this.setState({units:this.props.product.units.toString()})
  }

  componentWillReceiveProps(nextProps) {
    nextProps.car.map(product=>{
      if (product.item.id===this.props.product.item.id){
        if (product.units!==this.props.product.units){
          this.setState({ units: product.units });
        }
      }
    })
  }

  render(){
    const product = this.props.product.item;
    return  (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Image style={styles.image} source={{uri:product.image}}/>
          <View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.brand}>{product.brand}</Text>
            <Text style={styles.price}>R${product.price}</Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
        <TextInput
          style={styles.input}
          keyboardType = 'numeric'
          disabled={true}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          value = {this.state.units.toString()}
          onChangeText={ units => this.setState({units})}
          onEndEditing= {()=> this.state.units==='' ? this.setState({units:this.props.product.units}) :this.props.changeUnits(product.id, parseInt(this.state.units))}
          onSubmitEditing= {()=> this.state.units==='' ? this.setState({units:this.props.product.units}) :this.props.changeUnits(product.id, parseInt(this.state.units))}
        />
          <Icon style={styles.icon} onPress={()=>this.props.removeItemCar(this.props.product.item.id) } name="times" size={20}/>
        </View>
      </View>
    );
  }
}



const mapStateToProps = state => ({
  car: state.car,
})
const mapDispatchToProps = dispatch => bindActionCreators(CarActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (ProductItem)
