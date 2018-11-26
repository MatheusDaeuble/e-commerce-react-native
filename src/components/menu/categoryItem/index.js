import React , {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as FiltersActions} from 'store/ducks/filter';


import styles from './styles';

  class CategoryItem extends Component {

    render(){
      const active = this.props.filter.filter===this.props.category.id ? true:false;
      return (
        <TouchableOpacity onPress={()=> this.props.getFilterRequest(this.props.category.id) } style={active ? styles.activeContainer:styles.container}>
          <Text style={active ? styles.activeCategory : styles.category}> {this.props.category.title} </Text>
        </TouchableOpacity>
      )
    }
  }

const mapStateToProps = state => ({
  filter: state.filter,
  products: state.products.data,
})

const mapDispatchToProps = dispatch => bindActionCreators(FiltersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (CategoryItem)


