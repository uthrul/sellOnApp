import React,{ Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Loadtabs from '../Tabs';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text> 
        <Button
          title="Go to Home"
          onPress={()=>{
            Loadtabs();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default Login;