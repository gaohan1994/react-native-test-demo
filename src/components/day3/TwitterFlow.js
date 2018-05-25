import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
 } from 'react-native'
import TwitterPost from './TwitterPost'
import Util from '../../utils/util'
import Icon from 'react-native-vector-icons/Ionicons';
class TwitterFlow extends Component {
    render() {
        return (
        <View>
            <View style= {styles.nav} >
                <View style= {[styles.navBox, {alignItems: 'flex-start'} ]} >
                    <Icon name= 'ios-person-add' size= {30} style= {{color: '#1b95e0'}} ></Icon>
                </View>
                <View style= {[styles.navBox, {alignItems: 'center'} ]} >
                    <Icon name= 'logo-twitter' size= {35} style= {{color: '#1b95e0'}} ></Icon>
                </View>
                <View style= {[styles.navBox, {alignItems: 'center'}, {flexDirection: 'row'}, {justifyContent: 'flex-end'} ]} >
                    <Icon name= 'ios-search' size= {30} style= {{color: '#1b95e0', width: 37}} ></Icon>
                    <Icon name= 'ios-create-outline' size= {30} style= {{color: '#1b95e0', width: 37, paddingRight: 10}} ></Icon>
                </View>
            </View>
            <TwitterPost/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        paddingTop: 30,
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#ddd',
        paddingBottom: 5,
        backgroundColor: '#fff',
    },
    navBox: {
        flex: 1,
    },
})

export default  TwitterFlow