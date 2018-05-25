import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    ListView,
    StyleSheet,
}   from 'react-native'
import Util from '../../utils/util'

export default class WatchRecord extends Component {
    static propTypes = {
        record: PropTypes.array.isRequired,
    }

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        theDataSource = ds.cloneWithRows(this.props.record);
        return (
            <ListView
                style= {styles.recordList}
                dataSource= {theDataSource}
                renderRow= { (rowData) => 
                    <View style= {styles.recordItem} >
                        <Text style= {styles.recordItemTitle} >{rowData.title}</Text>
                        <View style= {{alignItems: 'center'}}>
                            <Text style= {styles.recordItemTime} >{rowData.time}</Text>
                        </View>
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    recordList: {
        width: Util.size.width,
        height: Util.size.height - 300,
        paddingTop: 20, paddingLeft: 15,
    },
    recordItem: {
        height: 40,
        borderBottomWidth: Util.pixel, borderBottomColor: '#bbb',
        paddingTop: 10, paddingRight: 10, paddingBottom: 5, paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    recordItemTitle: {
        flex: 1,
        backgroundColor: 'transparent',
        textAlign: 'left',
        paddingLeft: 20,
        color: '#777'
    },
    recordItemTime: {
        flex: 1,
        backgroundColor: 'transparent',
        textAlign: 'right',
        paddingTop: 5, paddingRight: 20,
        color: '#222'
    },
})