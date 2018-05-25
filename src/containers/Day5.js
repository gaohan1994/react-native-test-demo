import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
 } from 'react-native'
import Util from '../utils/util'
class Day5 extends Component {

    

    render() {
        return (
            <View >
                {/*   */}
                <Text>Day5</Text>
                <TouchableHighlight>
                    <Text >find</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        width: Util.size.width,
        height: 300
    }
})

export default Day5
