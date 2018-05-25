import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
}   from 'react-native'
import Util from '../../utils/util'

export default class WatchControl  extends Component {

    static propTypes = {
        addRecord:      PropTypes.func.isRequired,
        clearRecord:    PropTypes.func.isRequired,
        startWatch:     PropTypes.func.isRequired,
        stopWatch:      PropTypes.func.isRequired,
    }
    constructor(props){
        super(props);
        this.state= {
            watchOn: false,
            startBtnText: '启动',
            startBtnColor: '#60B644',
            stopBtnText: '计次',
            stopBtnColor: '#fff'
        }
    }

    stopBtnClickHandle(){
        const { addRecord , clearRecord } = this.props;
        console.log('addRecord', addRecord)
        if(!this.state.watchOn){
            console.log('props func');
            clearRecord();
        }else if(!!this.state.watchOn){
            console.log('props func');
            addRecord();
            this.setState({
                stopBtnText: '计次'
            })
        }
    }

    startBtnClickHandle(){
        const { startWatch, stopWatch } = this.props 
        if(!this.state.watchOn){
            startWatch();
            this.setState({
                watchOn: true,
                startBtnText: '停止',
                startBtnColor: '#ff0044',
                stopBtnText: '计次',
                stopBtnColor: '#eee'
            })
        }else if(!!this.state.watchOn){
            stopWatch();
            this.setState({
                watchOn: false,
                startBtnText: '启动',
                startBtnColor: '#60B644',
                stopBtnText: '复位',
                stopBtnColor: '#eee'
            })
        }
        
    }

    render() {
        console.log('this.props', this.props)
        return (
            <View style= {styles.WatchControlContainer} >
                <View style= {styles.WatchControlBox} >
                    <TouchableHighlight style= {styles.controlBtn} underlayColor= '#eee' onPress= { () => this.stopBtnClickHandle() } >
                        <Text style= {[styles.controlText, {color: '#555'}]} >{this.state.stopBtnText}</Text>
                    </TouchableHighlight>
                </View>
                <View style= {styles.WatchControlBox} >
                    <TouchableHighlight style= {styles.controlBtn} underlayColor= '#eee' onPress= { () => this.startBtnClickHandle() } >
                        <Text style= {[styles.controlText, {color: this.state.startBtnColor}]} >{this.state.startBtnText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    WatchControlContainer: {
        width: Util.size.width,
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#f3f3f3',
        paddingTop: 40, paddingRight: 30, paddingBottom: 40, paddingLeft: 30,
    },
    WatchControlBox: {
        flex: 1, 
        alignItems: 'center'
    },
    controlBtn: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlText: {
        fontSize: 14,
        backgroundColor: 'transparent'
    },
})