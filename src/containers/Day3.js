import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    RefreshControl
} from 'react-native'
import { connect } from 'react-redux'
import Util from '../utils/util'
import TwitterPost from '../components/day3/TwitterPost'
import Entrance from '../components/day3/Entrance'
import TwitterTab from '../components/day3/TwitterTab'
import { NavBarItems } from '../const/data'
import { Change_Toolbar } from '../actions'
class Day3 extends Component {
    static navigationOptions = {
        // title: 'day3'
        header: null
    }

    constructor(){
        super();
        this.state = {
            show: true
        }
    }

    hideEntrance() {
        this.setState({
            show: false
        })
    }

    changeToolbarHandle(index) {
        this.props.dispatch(Change_Toolbar(index))
    }

    render() {
        const { TwitterBar } = this.props;
        const entrance = this.state.show
                         ?   <Entrance hideEntrance = { () => this.hideEntrance() } />
                         :   <View></View>

        return (
            <View style={styles.twitterContainer} >
                <TwitterTab NavBarItems= {NavBarItems} 
                            TwitterBar= {TwitterBar}
                            changeHandle= { this.changeToolbarHandle.bind(this) } ></TwitterTab>
                {entrance} 
            </View>

        )
    }
}

const styles = StyleSheet.create({
    twitterContainer: {
        width: Util.size.width,
        height: Util.size.height
    },
})

const mapStateToProps = (state) => {
    return {
        TwitterBar: state.TwitterBar
    }
}

export default connect(mapStateToProps)(Day3)