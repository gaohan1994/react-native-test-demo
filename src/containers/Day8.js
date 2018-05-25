
import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight,
  LayoutAnimation,
  PanResponder,
  StatusBar,
 } from 'react-native'
import Util from '../utils/util'
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListSource} from '../const/data'
type Props = { /* */ }
type State = { /* */ }

class Menu extends Component<Props, State>{

  ListItem = ({item}) => {
    return (
      <TouchableHighlight onPress= { () => true } key= {item.id} >
          <View style= {styles.btn} >
            <Icon style= {styles.btnIcon} name= {item.name} size= {15} ></Icon>
            <Text style= {styles.btnText}>{item.title}</Text>
          </View>
      </TouchableHighlight>
    )
  }

  _keyExtractor = (item) => {
    return item.id
  }

  render() {
    const { ListSource, MenuSource } = this.props
    return (
      <View style= {styles.sideMenuContainer} >
        <View style= {styles.sideMenuHeader} >
          <Image source= {require('../img/w3.png')} style= {styles.sideMenuHeaderImg} ></Image>
          <View style= {styles.sideMenuHeaderBox} >
            <Text style= {[styles.sideMenuHeaderText, {fontWeight: '600'}]} >Wei Fang</Text>
            <Text style= {styles.sideMenuHeaderText} >871418277@qq.com</Text>
          </View>
        </View>
        
        <FlatList
          keyExtractor= {this._keyExtractor}
          data= {ListSource}
          renderItem= {this.ListItem}></FlatList>
      </View>
    )
  }
}

class Day8 extends Component<Props, State> {

  static navigationOptions= {
      header: null
  }

  constructor(){
    super();
    this.state = {
      showDrop: false
    }
    //响应系统容器
    this._panResponder = {};
    this._previousLeft = -0.7*Util.size.width-10;
    this._minLeft = -0.7*Util.size.width-10;
    //挂载需要用到的组件
    this.menu = (null : ?{ setNativeProps(props: Object): void});
    this.drop = (null : ?{ setNativeProps(props: Object): void});
    //初始化可能要用到的样式
    this._menuStyles = {
      style: {
        left: this._previousLeft
      }
    };
    this._dropStyles = {};
    this._CustomLayoutLinear = LayoutAnimation.Presets.linear;
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
    StatusBar.setBarStyle(1);
  }
  

  _handleStartShouldSetPanResponder = (e, gestureState) => {
    console.log('_handleStartShouldSetPanResponder');
    return true;
  }

  _handleMoveShouldSetPanResponder = (e, gestureState) => {
    return ((gestureState.dy/gestureState.dx)!= 0)
  }

  _handlePanResponderGrant = (e, gestureState) => {
    console.log('_handlePanResponderGrant');
  }

  _handlePanResponderMove = (e, gestureState) => {
    this._menuStyles.style.left = this._previousLeft + gestureState.dx;
    console.log('gestureState.dx', gestureState.dx)
    console.log('this._menuStyles.style.left', this._menuStyles.style.left)
    
    if(this._menuStyles.style.left > 0){
      this._menuStyles.style.left = 0;
    }
    if(this._menuStyles.style.left < 0){
      this._menuStyles.style.left = this._minLeft;
    }
    this._updatePosition();
    LayoutAnimation.configureNext(this._CustomLayoutLinear)
  }

  _handlePanResponderEnd = (e, gestureState) => {
    if(gestureState.vx < 0 || gestureState.dx < 0){
      this._menuStyles.style.left = this._minLeft;
      this._previousLeft = this._minLeft;
    }
    if(gestureState.vx > 0 || gestureState.dx > 0){
      this._menuStyles.style.left = 0;
      this._previousLeft = 0;

    }
    this._updatePosition();
    LayoutAnimation.configureNext(this._CustomLayoutLinear)
  }

  _handleShouldBlockNativeResponder = (e, gestureState) => {
    console.log('_handleShouldBlockNativeResponder');
    return true
  }

  _updatePosition() {
    this.menu && this.menu.setNativeProps(this._menuStyles)
  }

  render() {
    return (
      <View style= {styles.container} >
        <Icon size= {200} name= 'compass' ></Icon>
        <View 
          ref= {(menu) => {
            this.menu = menu
          }}
          {...this._panResponder.panHandlers}
          style= {styles.sideMenu} >
          <Menu ListSource= {ListSource}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideMenu: {
    height: Util.size.height,
    width: 0.7*Util.size.width+20,
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    left: -0.7*Util.size.width-10
    // left: 0
  },
  sideMenuContainer: {
    height: Util.size.height,
    width : Util.size.width*0.7,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius : 5,
    shadowOffset : {
      height: 0,
      width: 2,
    }
  },
  sideMenuHeader: {
    height: 180,
    width : Util.size.width*0.7,
    paddingTop: 20, paddingRight: 20, paddingBottom: 20, paddingLeft: 20,
    backgroundColor: '#101244',
  },
  sideMenuHeaderImg: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  sideMenuHeaderBox: {
    position: 'absolute',
    left: 20,
    bottom : 20,
  },
  sideMenuHeaderText: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
  btnContainer: {
    paddingTop: 10,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#bbb'
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15, paddingBottom: 15,
    backgroundColor: '#fff',
  },
  btnIcon: {
    flex: 1,
    color: '#555',
    textAlign: 'center'
  },
  btnText: {
    flex: 3,
    fontSize: 14,
    fontWeight: '500',
    color: '#454545'
  }
})

export default Day8