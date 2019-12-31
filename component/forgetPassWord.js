import React, {Component} from 'react';
import { Button, Text ,StyleSheet} from 'react-native';
export default class forgetPassWord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          user: null,
          passWord: null
        }
      }
    static navigationOptions = {
      title: 'Back',
      headerStyle:{
        backgroudColor:'black',
      },

    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Text>Hello</Text>
      );
    }
  }