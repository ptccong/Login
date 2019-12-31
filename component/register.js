import React, {Component} from 'react';
import { Button, Text ,StyleSheet,View,TextInput} from 'react-native';
export default class register extends React.Component {
    static navigationOptions = {
      title: 'Back',
      headerStyle:{
        backgroudColor:'black',
      },

    };
    constructor(props) {
        super(props)
        this.state = {
          user: null,
          passWord: null,
          email: null
        }
      }
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
    

        <Text style={{ fontSize: 35, color: 'white', backgroundColor: '#841584', borderRadius: 5, width: 200, textAlign: 'center', fontWeight: 'bold' }}>RESITER</Text>
        <TextInput placeholder='Enter your username' style={styles.tv_user}  onChangeText={(user) => this.setState({ user })} value={this.state.user} />
        <TextInput placeholder='Enter your password' secureTextEntry={true} style={styles.tv_pass}  onChangeText={(passWord) => this.setState({ passWord })} value={this.state.passWord} />
        <TextInput placeholder='Enter your email' style={styles.tv_user}  onChangeText={(email) => this.setState({ email })} value={this.state.email} />
        <View style={{width: 310}}>
        <Button color='#841584' title='Register' onPress={() => navigate('LOGIN',{data:this.state.user},{data:this.state.passWord})} />
        </View>
      </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center'
  
    },
    tv_user: { height: 40, width: 310, borderColor: '#FFFF00', borderWidth: 2, backgroundColor: '#fff', borderRadius: 5, margin: 10, padding: 5, },
    tv_pass: { height: 40, width: 310, borderColor: '#00FFFF', borderWidth: 2, backgroundColor: '#fff', borderRadius: 5, margin: 10, padding: 5 }
  });
