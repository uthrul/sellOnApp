import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Image } from 'react-native';

import BackImage from '../../../assets/images/loginPanel.jpg'

class LoginPanel extends Component {

    state ={
        animFinished: false,
        backImage: new Animated.Value(0),
        inputForm: new Animated.Value(0),
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.show && !this.state.animFinished){
            Animated.parallel([
                Animated.timing(this.state.backImage,{
                    tovalue:1,
                    duration:1000
                }),
                Animated.timing(this.state.inputForm,{
                    tovalue:1,
                    duration:1500
                }),
            ]).start(
                this.setState({animFinished:true})
            )
        }
    }   

  render() {
    return (
      <View>
        <Animated.View
            style={{
                opacity:this.state.backImage
            }}
        >
            <Image
                style={style.imageStyle}
                source={BackImage}
                resizeMode={'contain'}
            />
        </Animated.View>
      </View>
    );
  }
}

const style = StyleSheet.create({
    imageStyles:{
        width:270,
        height:150
    },
});

export default LoginPanel;