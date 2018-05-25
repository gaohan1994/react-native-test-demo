import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
 } from 'react-native'
class WeatherInfo extends Component {
    render() {
        const { rise, down, prop, humi, dir, speed, feel, rain, pres, sight, uv} = this.props
        return (
            <View style= {styles.container} >
                <View style= {styles.section} >
                    <Text style= {styles.title} >日出:</Text>
                    <Text style= {styles.value} >{rise}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >日落:</Text>
                    <Text style= {styles.value} >{down}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >降雨概率:</Text>
                    <Text style= {styles.value} >{prop}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >湿度:</Text>
                    <Text style= {styles.value} >{humi}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >风速:</Text>
                    <Text style= {styles.value} >{dir}{speed}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >体感温度:</Text>
                    <Text style= {styles.value} >{feel}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >降水量:</Text>
                    <Text style= {styles.value} >{rain}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >气压:</Text>
                    <Text style= {styles.value} >{pres}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >能见度:</Text>
                    <Text style= {styles.value} >{sight}</Text>
                </View>
                <View style= {styles.section} >
                    <Text style= {styles.title} >紫外线指数:</Text>
                    <Text style= {styles.value} >{uv}</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    section: {
        paddingBottom: 5,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        fontSize: 15,
        color: '#fff',
        textAlign: 'right',
        paddingRight: 10,
    },
    value: {
        flex: 1,
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 10,
    },
})

export default WeatherInfo