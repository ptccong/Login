import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, } from 'react-native';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'LOGIN',

  };
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      passWord: '',
    }
  }
  componentDidMount(){
    return fetch('http://5e032d0763d08b0014a28d2b.mockapi.io/test7/user')
      .then((response) => response.json())// lấy dữ liệu từ API rồi gắn giá trị vào response chuyển dữ liệu thành json
      .then((responseJson) => { // có dữ liệu json gắn vào các state

        this.setState({
          dataFromAPI: responseJson,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.layout}>
        <Text style={styles.tx_Logo}>Noname</Text>
        <TextInput
          placeholder='Enter your username'
          style={styles.tv_user}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username} />
        <TextInput
          placeholder='Enter your password'
          secureTextEntry={true}
          style={styles.tv_pass}
          onChangeText={(passWord) => this.setState({ passWord })}
          value={this.state.passWord} />
        <View style={{ width: 310 }}>
          <Button color='#841584' title='LOGIN' onPress={() => {
            if (this.state.username.length == 0 || this.state.passWord.length == 0) {
              Alert.alert("Warning", "Enter your username and password")
            } else if (this.state.passWord.length < 6) {
              Alert.alert("Warning", "Password must be greater than 6 characters")
            }else {
              var data = {
                username: this.state.username,
                password: this.state.passWord
              }
              fetch('http://5e032d0763d08b0014a28d2b.mockapi.io/test7/user', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
              });
              this.setState({
                username: "",
                passWord: ""
              })
              navigate('Profile')
            }
          }}
          />
        </View>
        <View style={{ width: 300, flexDirection: "row", padding: 10, justifyContent: 'center', }}>
          <Text style={styles.tx_vv} onPress={() => navigate('forgetPassWord')}>Forget Password ?</Text>
          <Text style={styles.tx_vv} onPress={() => navigate('register')}>Register  </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tx_vv: { marginRight: 5, color: 'gray', },
  tx_Logo: { fontSize: 35, color: 'white', backgroundColor: '#841584', borderRadius: 5, width: 200, textAlign: 'center', fontWeight: 'bold' },
  tv_user: { height: 40, width: 310, borderColor: '#FFFF00', borderWidth: 2, backgroundColor: '#fff', borderRadius: 5, margin: 10, padding: 5, },
  tv_pass: { height: 40, width: 310, borderColor: '#00FFFF', borderWidth: 2, backgroundColor: '#fff', borderRadius: 5, margin: 10, padding: 5 }
});