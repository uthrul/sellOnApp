import React,{ Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import {getOrientation, setOrientationListener, removeOrientationListener} from '../../utils/misc';

import Loadtabs from '../Tabs';
import Logo from './logo';
import LogoPanel from './loginPanel';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orientation: getOrientation(500),
      logoAnimation:false
    }
    setOrientationListener(this.chageOrientationListener)
  }
  chageOrientationListener = () => {
    this.setState({
      orientation:getOrientation(500)
    })
  }

  showLogin = () => {
    this.setState({
      logoAnimation: true
    })
  }

  componentWillMount() {
    removeOrientationListener()
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <Logo
            showLogin={this.showLogin}
            orientation={this.state.orientation}
          />
          <LogoPanel
          show={this.state.logoAnimation}
            orientation={this.state.orientation}
          />
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