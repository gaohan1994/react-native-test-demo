/*
  twitter user page
*/
import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  SegmentedControlIOS,
  ScrollView,
  PanResponder,
 } from 'react-native'
import Util from '../utils/util'
import Icon from 'react-native-vector-icons/Ionicons';

class Day9 extends Component<Props, State> {

  static navigationOptions= {
    header: null
  }

  constructor(){
    super();
    this._panResponder = {};
    this.state = {};
    this._previousTop = 0;
    this._iconTop = 95;
    this._scale = 1;
    this._bannerTop = 0;
    this._minTop = -192;
    this._userStyle = {
      style: {
        top: this._previousTop
      }
    };
    this._iconStyle = {
      style: {
        transform: 'scale(1)'
      }
    };
    this.user = (null : ?{ setNativeProps(props: Object): void });
    this.icon = (null : ?{ setNativeProps(props: Object): void });
  }

  componentWillMount = () => {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder : this._handleMoveShouldSetPanResponder,
      onPanResponderGrant         : this._handlePanResponderGrant,
      onPanResponderMove          : this._handlePanResponderMove,
      onPanResponderRelease       : this._handlePanResponderEnd,
      onPanResponderTerminate     : this._handlePanResponderEnd,
      onShouldBlockNativeResponder: this._handleShouldBlockNativeResponder,
    });
  }

  componentDidMount = () => {
    this._updatePosition();
  }

  _handleStartShouldSetPanResponder = (e: any, gestureState: any) => {
    console.log('_handleStartShouldSetPanResponder');
    return true
  }
  
  _handleMoveShouldSetPanResponder = (e, gestureState) => {
    console.log('_handleMoveShouldSetPanResponder');
    return true
  }
  
  _handlePanResponderGrant = (e, gestureState) => {
    console.log('_handlePanResponderGrant');
    return true
  }

  _handlePanResponderMove = (e, gestureState) => {
    console.log('_handlePanResponderMove');
    this._userStyle.style.top = this._previousTop + gestureState.dy;
    this._updatePosition()
    return true
  }

  _handlePanResponderEnd = (e, gestureState) => {
    console.log('_handlePanResponderEnd');
    this._previousTop += gestureState.dy;
  }
  
  _handleShouldBlockNativeResponder = (e, gestureState) => {
    return true
  }

  _updatePosition() {
    this.user && this.user.setNativeProps(this._userStyle);
    this.icon && this.icon.setNativeProps(this._iconStyle);
  }

  render() {
    return (
      <View style= {styles.userContainer} ref= { (user) => { this.user = user} }
        {...this._panResponder.panHandlers}>
        <View style= {styles.userPanel} >
          <Image style= {styles.banner} source= {require('../img/banner.png')} ></Image>
          <View style= {styles.iconContainer} ref= { (icon) => { this.icon = icon } } >
            <Image source= {require('../img/icon.png')} style= {styles.icon} ></Image>
          </View>
          <View style= {styles.userControl} >
            <TouchableHighlight style= {styles.iconBox} >
              <Icon name="ios-settings" color="#8999a5" size={22} ></Icon>
            </TouchableHighlight>
            <TouchableHighlight style= {[styles.iconBoxWithBorder, {width: 40}]} >
              <Icon name="ios-people" color="#8999a5" size={22} ></Icon>
            </TouchableHighlight>
            <TouchableHighlight style= {[styles.iconBoxWithBorder, {width: 120}]} >
              <Text style= {styles.userControlText} >编辑个人资料</Text>
            </TouchableHighlight>
          </View>
          <View style= {styles.userInfo} >
            <Text style= {styles.userInfoTitle} >GitHub</Text>
            <Text style= {styles.userInfoSubTitle} >@GitHub</Text>
            <View style= {styles.userInfoFollow} >
              <Text style= {styles.FollowType} ><Text style= {styles.FollowCount}>2098</Text>正在关注</Text>
              <Text style= {styles.FollowType} ><Text style= {styles.FollowCount}>802K</Text>关注者 </Text>
            </View>
          </View>
          {/* blur层放这里，先写样式 */}
          <View style= {styles.segment} >
            <SegmentedControlIOS values= {['推文', '媒体', '喜欢']} selectedIndex={0} tintColor="#2aa2ef" ></SegmentedControlIOS>
          </View>
        </View>
        <ScrollView contentInset= {{top: 0}} style= {styles.detailScroll} scrollEnabled= {false}  >
          <View style= {{width: Util.size.width, backgroundColor: '#f5f8fa'}} >
            <Image style={{width:Util.size.width, height:0.835*Util.size.width, resizeMode:"contain"}} source={require('../img/moreinfo.png')}></Image>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  userContainer: {
    width: Util.size.width,
    height: Util.size.height,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  userPanel: {
    flex: 1,
    height: 300,
  },
  banner: {
    width: Util.size.width,
    height: 125,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    top: 95,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 5,
  },
  icon: {
    width: 68,
    height: 68,
  },
  userControl: {
    height: 55,
    position: 'absolute',
    top: 125,
    width: 200,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconBox: {
    width: 30
  },
  iconBoxWithBorder: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#8999a5',
    paddingTop: 5, paddingRight: 5, paddingBottom: 5, paddingLeft: 5,
  },
  userControlText: {
    fontSize: 14,
    color: '#8999a5'
  },
  userInfo: {
    width: Util.size.width,
    position: 'absolute',
    top: 165, left: 0,
    paddingTop: 15, paddingBottom: 15, paddingLeft: 15,
    height: 90,
  },
  userInfoTitle: {
    color: '#292f33',
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 5,
  },
  userInfoSubTitle: {
    color: '#66757f',
    paddingBottom: 5,
  },
  userInfoFollow: {
    flexDirection: 'row'
  },
  FollowType: {
    flex: 1,
    color: '#95a4ae'
  },
  FollowCount: {
    color: '#292f33',
    fontWeight: '600'
  },
  segment: {
    position: 'absolute',
    top: 263,
    left: 0,
    width: Util.size.width,
    paddingLeft: 15, paddingRight: 15,
    height: 40,
  },
  detailScroll: {

  },
})

export default Day9
