import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      
      <View style={{
        flex: 1,
        flexWrap: 'wrap'
      }}>
        <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'steelblue'}} />
        <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'steelblue'}} />
        <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'steelblue'}} />
        <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, width: 50, backgroundColor: 'steelblue'}} />

      </View>
 
    );
  }
};