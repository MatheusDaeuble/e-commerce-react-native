import React, { Component } from 'react';
import { View, AsyncStorage, ActivityIndicator, FlatList, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as CategoriesActions} from 'store/ducks/categories';
import CategoryItem from './categoryItem';

class Menu extends Component {
  state = {

  }

  componentDidMount(){
    this.props.getCategoriesRequest();
  }


  renderListItem = ({ item }) => (
    <CategoryItem key={item.id} category={ item } />
  );

  renderList = () => (
    <FlatList
      data={this.props.categories}
      keyExtractor={(category) => category.id.toString()}
      renderItem={this.renderListItem}
      horizontal={true}
      rowWrapperStyle={{justifyContent:'center'}}
    />
  );

  render (){
    console.log(this.props)
    return (
      <View style={styles.container}>
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.data,
  loading: state.categories.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Menu)

