import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

class Logo extends Component {

    state = {
        sellAnim: new Animated.Value(0),
        onAnim: new Animated.Value(0)
    }

    componentWillMount() {
        Animated.sequence([
            Animated.timing(this.state.sellAnim, {
                toValue: 1,
                duration:1000,
                easing:Easing.easeOutcubic
            }),
            Animated.timing(this.state.onAnim, {
                toValue: 1,
                duration:500,
                easing:Easing.easeOutcubic
            }),
        ]).start(()=>{
            this.props.showLogin()
        })
    }

    render() {
        return (
            <View>
                <View style={
                    this.props.orientation === "portrait"
                    ? styles.LogoStylesPortrait
                    : styles.LogoStylesLandscape
                }>
                    <Animated.View 
                        style={{ 
                            opacity: this.state.sellAnim,
                            top: this.state.sellAnim.interpolate({
                                inputRange:[0,1],
                                outputRange:[100,0]
                            })
                        }}
                    >
                        <Text style={styles.LogoSell}>Selling</Text>
                    </Animated.View>

                    <Animated.View
                        style={{ 
                            opacity: this.state.onAnim
                        }}
                    >
                        <Text style={styles.LogoOn}>On</Text>
                    </Animated.View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LogoStylesPortrait:{
        marginTop: 50,
        flexDirection: 'row',
        flex:1,
        maxHeight:100
    },
    LogoStylesLandscape:{
        marginTop: 20,
        flexDirection: 'row',
        flex:1,
        maxHeight:50
    },
    LogoSell:{
        fontSize: 40,
        fontFamily: 'RobotoCondensed-Regular',
        color:'#555555'
    },
    LogoOn:{
        fontSize: 40,
        fontFamily: 'RobotoCondensed-Regular',
        color:'#00ADA9'
    },
});

export default Logo;
