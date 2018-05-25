import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    StyleSheet,
}   from 'react-native'
import Util from '../../utils/util'

export default class WatchFace extends Component {
  static propTypes = {
    sectionTime: PropTypes.string.isRequired,
    totalTime: PropTypes.string.isRequired,
  }

    render() {
        const { sectionTime, totalTime } = this.props
        return (
            <View style= {styles.WatchFaceContainer} >
                <Text style= {styles.sectionTime} >{sectionTime}</Text>
                <Text style= {styles.totalTime} >{totalTime}</Text>
            </View>
        )
    }   
}
const styles = StyleSheet.create({
    WatchFaceContainer: {
        width: Util.size.width,
        paddingTop: 50, paddingRight: 30, paddingBottom: 30, paddingLeft: 30,
        backgroundColor: '#fff',
        height: 170,
        borderBottomWidth: Util.pixel, borderBottomColor: '#ddd',
        alignItems: 'center'
    },
    sectionTime: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '100',
        color: '#555',
        // paddingRight: 30,
        left: Util.size.width-170,
        top: 30,
    },
    totalTime: {
        fontSize: Util.size.width === 375? 80: 70,
        fontWeight: '100',
        color: '#222',
    },
})