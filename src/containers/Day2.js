import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
}   from 'react-native'
import Weather from '../components/day2/Weather'
import { connect } from 'react-redux'
import { weatherData } from '../const/data'
import { Receive_Weather } from '../actions'
class Day2 extends Component {
    static navigationOptions= {
        header: null
    }

    componentWillMount = () => {
        const { dispatch } = this.props;
        dispatch(Receive_Weather(weatherData));
    }

    gobackHandle() {
        this.props.navigation.goBack();
    }

    render() {
        const { Data } = this.props;
        console.log(this.props)
        return (
            <Weather Data= {Data} gobackHandle= { () => this.gobackHandle() } />
        )
    }
}

const styles = StyleSheet.create({
})

const mapStateToProps = (state) => {
    return {
        Data: state.Weather
    }
}

export default connect(mapStateToProps)(Day2)