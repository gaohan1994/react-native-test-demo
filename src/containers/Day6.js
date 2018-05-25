
import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    MapView, 
 } from 'react-native'
import Util from '../utils/util'
import Icon from 'react-native-vector-icons/FontAwesome';
class Day6 extends Component {
    render() {
        return (
            <View style= {styles.container} >
                <View>
                    <View style= {styles.logo} >
                        <View style= {styles.logoIconContainer} >
                            <Icon size= {60} name= 'spotify' color= '#fff' ></Icon>
                        </View>
                        <View style= {styles.logoIconContainer} >
                            <Text style= {styles.logoText} >Spotify</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Util.size.width,
        height: Util.size.height,
    },
    logo: {
        position: 'absolute',
        top: 50,
        width: Util.size.width,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logoIconContainer: {
        backgroundColor: 'transparent',
        paddingRight:5,
        marginTop: 5,
    },
    logoText: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '700'
    },
})

export default Day6