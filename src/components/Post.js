import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SubTitulo from 'components/subtitulo';


export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.infos.title}</Text>
        <Text style={styles.signature}>{this.props.infos.signature}</Text>
        <View style={styles.bar}></View>
        <Text style={styles.content}>{this.props.infos.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    margin:10,
    padding:20
  },

  bar: {
    height:1,
    backgroundColor:'#EEEEEE',
    margin:10
  },
  title: {
    fontSize: 20,
    color:'#333333'

  },
  signature: {
    fontSize: 15,
    color:'#999999'

  },
  content: {
    fontSize: 15,
    color:'#666666'
  }
});

