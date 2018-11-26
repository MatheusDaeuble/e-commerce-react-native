import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SubTitulo from 'components/subtitulo';


export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GoNative App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width:'100%',
    marginBottom:20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin:20,
  },
});
