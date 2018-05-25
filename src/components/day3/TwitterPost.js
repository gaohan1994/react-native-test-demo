import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    Image,
    RefreshControl
 } from 'react-native'
import Util from '../../utils/util'

class TwitterPost extends Component {

    constructor(){
        super();
        this.state = {
            isRefreshing: false
        }
    }

    onRefreshHandle() {
        this.setState({
            isRefreshing: true
        });
        setTimeout(() => {
            this.setState({
                isRefreshing: false
            })
        }, 3000);
    }

    render() {
        return (
            <ScrollView
                refreshControl = {
                    <RefreshControl
                        refreshing= {this.state.isRefreshing}
                        onRefresh= {() => this.onRefreshHandle()}
                        tintColor= "#ddd"
                    />
                }>
                <Image source= {require('../../img/day3.png')} style= {styles.image} ></Image>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: Util.size.width,
        height: Util.size.height- 110
    },
})

export default TwitterPost