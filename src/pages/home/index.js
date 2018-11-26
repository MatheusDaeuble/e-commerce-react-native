import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import ProductCard from './ProductCard'
import Menu from 'components/menu'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as ProductsActions} from 'store/ducks/products';

class Home extends Component {
  static navigationOptions ={
    title: 'GoCommerce',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor}/>,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  componentDidMount(){
    this.props.getProductsRequest();
  }

  renderListItem = ({ item }) => (
    <ProductCard product={item} navigation= {this.props.navigation} />
  );

  renderList = () => (
    <FlatList
      data={this.props.products}
      keyExtractor={(repo) => String(repo.id)}
      renderItem={this.renderListItem}
      numColumns={2}
      columnWrapperStyle={styles.columnContainer}
    />
  );

  render (){
    //console.log(this.props)
    return (
      <View style={styles.container}>
      <Menu/>
        { this.props.loading ?
          <ActivityIndicator style={styles.loading} /> : this.renderList()
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.data,
  loading: state.products.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Home)
