import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles'

export default class ProductCard extends Component {

  openProductDetails = () => {
    this.props.navigation.navigate('ProductDetails', {product:this.props.product})
  }

  render () {
    const product = this.props.product

    return (
      <TouchableOpacity onPress={this.openProductDetails} style={styles.container}>
        <Image style={styles.avatar} source={{uri:product.image}}/>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.price}>R${product.price}</Text>
      </TouchableOpacity>
    )
  }
}
