import React, { Component } from 'react'
import {
    View,
    Text,
    Animated,
    StyleSheet,
    Easing,
} from 'react-native'
import Util from '../../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Entrance extends Component {

    constructor() {
        super();
        this.state = {
            transformAnim: new Animated.Value(1),
            opacityAnim: new Animated.Value(1),
        }
    }

    componentDidMount = () => {
        const { hideEntrance } = this.props
        Animated.timing(
            this.state.transformAnim, {
                toValue: 50,
                duration: 1200,
                delay: 2000,
                easing: Easing.elastic(2)
            },
        ).start();
        Animated.timing(
            this.state.opacityAnim, {
                toValue: 0,
                duration: 800,
                delay: 2200,
                easing: Easing.elastic(1)
            },
        ).start();
        setTimeout(() => {
            hideEntrance();
        }, 3300);
    }
    

    render() {
        return (
            <Animated.View style= {[styles.entrance, {opacity: this.state.opacityAnim}]} >
                <AnimatedIcon   size= {60} name= 'logo-twitter' 
                                style= {[styles.twitter, {transform: [{scale: this.state.transformAnim}]}]}
                                ></AnimatedIcon>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    entrance: {
        position: 'absolute',
        top: 0, left: 0,
        height: Util.size.height,
        width: Util.size.width,
        backgroundColor: '#1b95e0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    twitter: {
        color: '#fff',
        position: 'relative',
        textAlign: 'center',
    },
})

export default Entrance