import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';
import Day1 from './containers/Day1'
import Swiper from 'react-native-swiper'
import Util from './utils/util'
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { days } from './const/data'
class Home extends Component {

    static navigationOptions= {
        title: '我爱学习'
    }

    onPressHandle(index){
      index
      ? console.log('hello', index)
      : console.log('hello');
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <ScrollView>
            <Swiper height= {200} showsButtons={false} autoplay= {true} >
              <TouchableHighlight onPress= { () => this.onPressHandle(1) } >
                <View style= {styles.slide} >
                  <Image style= {styles.image} source= {require('./img/day1.png')} ></Image>
                  <Text style = {styles.slideText} >day1</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress= { () => this.onPressHandle(2) }>
                <View style= {styles.slide} >
                  <Image style= {styles.image} source= {require('./img/day2.png')} ></Image>
                  <Text style = {styles.slideText} >day2</Text>
                </View>
              </TouchableHighlight>
            </Swiper>
          <View style= {styles.touchBoxContainer} >
             {
              days.map( (item, index) => {
                return  <TouchableHighlight key= {item.key} style= {[styles.touchBox, (index+1)%3==2 ? styles.touchBox2: styles.touchBox1]} underlayColor="#eee" 
                                            onPress= { () => navigate(item.component) } 
                                            title = {item.component}
                                            >
                          <View style= {styles.boxContainer} >
                            <Text style= {styles.boxText} >Day {index + 1}</Text>
                            {
                              item.isFA
                              ? <IconFA size= {item.size} name= {item.icon} style= {[styles.boxIcon, {color: item.color}]} ></IconFA>
                              : <Icon size= {item.size} name= {item.icon} style= {[styles.boxIcon, {color: item.color}]}></Icon>
                            }
                          </View>
                        </TouchableHighlight>
              })
            }
          </View>

        </ScrollView>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  //图片轮换
  slide: {
    flexGrow: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: Util.size.width,
    flex: 1,
    alignSelf: 'stretch',
  },
  slideText: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: Util.size.width,
    textAlign: 'center',
    fontSize: 12,
  },

  //warp style
  touchBox: {
    width: Util.size.width/3 - 0.33334,
    height: Util.size.width/3,
    backgroundColor: '#fff'
  },
  touchBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },

  //different border
  touchBox1: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ccc',
    borderRightWidth: Util.pixel,
    borderRightColor: '#ccc'
  },
  touchBox2: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ccc',
    // borderLeftWidth: Util.pixel,
    // borderLeftColor: '#ccc'
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Util.size.width/3,
    height: Util.size.width/3,
  },
  boxText: {
    position: 'absolute',
    bottom: 15,
    width: Util.size.width/3,
    textAlign: 'center',
    left: 0,
    backgroundColor: 'transparent'
  },
  boxIcon: {
    position: 'relative',
    top: -10
  },
});

export default Home