import React from 'react';
import { FlatList, ActivityIndicator, Text, View ,StyleSheet, Image } from 'react-native';
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Quay về màn hình đăng nhập',
  }
  constructor(props){
    super(props);
    this.state ={
      dataFromAPI:[],
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
  
  render(){
    return(
      <View style={{justifyContent:'center',alignItems:'center'}} >
        <FlatList 
          data={this.state.dataFromAPI}
          renderItem={({item}) => 
         <View style={{borderColor:'#fff',borderWidth:1,backgroundColor:'#88FEF8',width:400,paddingLeft:10,borderRadius:5,marginBottom:5}}>
           <Text>Số thứ tự : {item.id} </Text>
            <Text>UserName : {item.username}</Text>
            <Text>PassWord: {item.password}</Text>  
         </View>
        }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

