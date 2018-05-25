import React, { Component } from 'react'
import { 
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
 } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../../utils/util'
import WeatherInfo from './WeatherInfo'
class Weather extends Component {
    render() {
        const { Data, gobackHandle } = this.props;
        const slide = Data.map( (item, index) => {
            const hourView = item.hours.map( (hourItem, index) => {
                return  (
                    <View key= {hourItem.key} style= {styles.withinDayHoursBox} >
                        <Text style= {
                            index == 0  
                            ? [styles.withinDayHoursTime, {fontWeight: '600'}]
                            : styles.withinDayHoursTime } >{hourItem.time}</Text>
                        <Icon name= {hourItem.icon} size= {25} style= {[styles.withinDayHoursIcon, {color: hourItem.color}]}  ></Icon>
                        <Text style= {
                            index == 0  
                            ? [styles.withinDayHoursTime, {fontWeight: '600'}]
                            : styles.withinDayHoursTime } >{hourItem.degree}</Text>
                    </View>
                );
            });

            const dayView = item.days.map( (dayItem, index) => {
                return(
                    <View key= {dayItem.key} style= {styles.withinWeekLine} >
                        <View style= {styles.withinWeekDay} >
                            <Text style= {styles.withinWeekDayText} >{dayItem.day}</Text>
                        </View>
                        <View style= {styles.withinWeekIcon} >
                            <Icon name= {dayItem.icon} size= {25} style= {styles.withinWeekIconIcon} ></Icon>
                        </View>
                        <View style= {styles.withinWeekDegree} >
                            <Text style= {[styles.withinWeekDegreeText, {color: '#fff'}]} >{dayItem.high}</Text>
                            <Text style= {[styles.withinWeekDegreeText, {color: '#eee'}]} >{dayItem.low}</Text>
                        </View>
                    </View>
                );
            });
            return  (
                <View key= {item.key} >
                    <Image style= {styles.image} source= {item.bg} ></Image>
                    <ScrollView style= {styles.slideContainer} >
                        <View style= {styles.headInfo} >
                            <Text style= {styles.city} >{item.city}</Text>
                            <Text style= {styles.abs} >{item.abs}</Text>
                            <Text style= {styles.degree} >{item.degree}</Text>
                            <Text style= {styles.circle} >°</Text>
                        </View>
                        <View style= {styles.withinDay} >
                            <View style= {styles.withinDayGeneral} >
                                <View style= {styles.withinDayHead} >
                                    <Text style= {[styles.withinDayText, {fontWeight: '400'}]} >{item.today.week}</Text>
                                    <Text style= {[styles.withinDayText, {fontWeight: '300'}]} >{item.today.day}</Text>
                                </View>
                                <View style= {styles.withinDayTail} >
                                    <Text style= {[styles.withinDayTailText, {fontWeight: '200'}]} >{item.today.high}</Text>
                                    <Text style= {[styles.withinDayTailText, {fontWeight: '200'}]} >{item.today.low}</Text>
                                </View>
                            </View>
                            <ScrollView style= {styles.withinDayHoursContainer}  >
                                <View style= {styles.withinDayHours}  >
                                    {hourView}
                                </View>
                            </ScrollView>
                            <View style= {styles.withinWeek} >
                                {dayView}
                            </View>
                            <View style= {styles.weatherInfo} >
                                <Text style= {styles.weatherInfoText} >{item.info}</Text>
                            </View> 
                            <WeatherInfo
                                rise= {item.rise}
                                down= {item.down}
                                prop= {item.prop}
                                humi= {item.humi}
                                dir = {item.dir}
                                speed = {item.speed}
                                feel= {item.feel}
                                rain= {item.rain}
                                pres= {item.pres}
                                sight= {item.sight}
                                uv = {item.uv}
                            />
                        </View>
                    </ScrollView>
                </View>
            )
        })
        return (
            <View style= {styles.weatherContainer} >
                <Swiper paginationStyle= {{bottom: 15, paddingTop: 15, borderTopColor: 'rgba(255, 255, 255, 0.7)', borderTopWidth: Util.pixel}}>
                    {slide} 
                </Swiper>
                <TouchableHighlight style= {styles.slideFooter} onPress = {gobackHandle} >
                    <Icon size= {30} name= 'ios-list-outline' style= {styles.slideFooterIcon}  ></Icon>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,

    },
    slideContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        height: Util.size.height -53,
        width: Util.size.width,
    },
    headInfo: {
        paddingTop: 70, paddingBottom: 60,
        alignItems: 'center'
    },
    city: {
        fontSize: 25,
        color: '#fff',
        paddingBottom: 5,
        backgroundColor: 'transparent',
    },
    abs: {
        fontSize: 15,
        color: '#fff',
        backgroundColor: 'transparent',
    },
    degree: {
        fontSize: 85,
        color: '#fff',
        fontWeight: '100'
    },
    circle: {
        fontSize: 35,
        color: '#fff',
        fontWeight: '300',
        position: 'absolute',
        top: 130,
        right: Util.size.width/2 -55
    }
    ,
    slideFooter: {
        position: 'absolute',
        right: 20,
        bottom: 5,
    },
    slideFooterIcon: {
        color: '#fff'
    },
    withinDay: {

    },
    withinDayGeneral: {
        flexDirection: 'row',
        width: Util.size.width
    },
    withinDayHead: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
    },
    withinDayTail: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    withinDayText: {
        fontSize: 15,
        color: '#fff',
        width: 50
    },
    withinDayTailText: {
        fontSize: 15,
        color: '#fff',
        width: 30
    },
    withinDayHoursContainer: {
        marginTop: 3,
        borderTopColor: 'rgba(255,255,255,0.7)', borderTopWidth: Util.pixel,
        borderBottomColor: 'rgba(255,255,255,0.7)', borderBottomWidth: Util.pixel,
    },
    withinDayHours: {
        paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },

    /*
        hourview css
    */
    withinDayHoursBox: {
        width: 55,
    },
    withinDayHoursTime: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center'
    },
    withinDayHoursIcon: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    /*
        week css
    */
    withinWeek: {
        paddingTop: 5,
    },
    withinWeekLine: {
        flexDirection: 'row',
        height: 28
    },
    withinWeekDay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 25
    },
    withinWeekIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    withinWeekDegree: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 25
    },
    withinWeekDayText: {
        color: '#fff',
        fontSize: 15,
    },
    withinWeekIconIcon: {
        color: '#fff'
    },
    withinWeekDegreeText: {
        fontSize: 16,
        width: 35,
        textAlign: 'right'
    },
    weatherInfo: {
        marginTop: 5,
        borderTopWidth: Util.pixel, borderTopColor: 'rgba(255,255,255,0.7)',
        borderBottomWidth: Util.pixel, borderBottomColor: 'rgba(255,255,255,0.7)',
    },
    weatherInfoText: {
        fontSize: 15,
        color: '#fff',
        paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20
    },
})

export default Weather