
import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
 } from 'react-native';
import Util from '../utils/util'
import MovedableCirecle from '../components/day7/MovedableCirecle'
type Props = { /*  */ }
type State = { /*  */ }
class Day7 extends Component<Props, State> {

    static navigationOptions= {
        header: null
    }

    render() {
        return (
            <View style= {styles.container} >
                <Image source= {require('../img/w3.png')} style= {styles.bg} ></Image>
                <View style= {styles.container} >
                    <MovedableCirecle></MovedableCirecle>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Util.size.height,
        width: Util.size.width,
    },
    bg: {
        width: Util.size.width,
        position: 'absolute',
        resizeMode: 'stretch'
    },
    
});

export default Day7
