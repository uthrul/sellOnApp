import React,{ Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Loadtabs from '../Tabs';

import Logo from './logo';

class Login extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <Logo/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;