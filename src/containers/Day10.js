import React, {Component} from 'react';
import { 
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native';
import Util from '../utils/util'

/**
 * Day10 10-23
 * 
 * @class Day10
 * @extends {Component}
 */
class Day10 extends Component {

  static navigationOptions = {
    header: null
  }

  constructor() {
    super();
    this.state = {
      shift: new Animated.Value(-120),
      show : false,
    }
  }

  _pushMenu = () => {
    this.setState({
      show: !this.state.show
    });
    Animated.timing(
      this.state.shift,
      {
        toValue: Util.size.width === 375 ? 50 : 30,
        duration: 500,
        easing: Easing.elastic(1),
        delay: 200,
      },
    ).start();
  }

  _popMenu = async() => {
    const promise = new Promise((res, rej) => {
      Animated.timing(
        this.state.shift,
        {
          toValue: -120,
          duration: 200,
          easing: Easing.elastic(1),
          delay: 0,
        }
      ).start();

      res();
    })
    
    promise.then(() => {
      setTimeout(() => {
        this.setState({
          show: false
        });
      },200)
    })
    
  }

  render() {
    console.log('this.state.shift', this.state.shift);
    return (
      <View>
        <TouchableHighlight style = {styles.container} onPress= {() => this._pushMenu()} >
          <Image source= {require('../img/tumblr.png')} style = {styles.img} ></Image>
        </TouchableHighlight>
        {
          this.state.show
          
          ? <Image source = {require('../img/tumblrblur.png')} style = {styles.menu} >

              <Animated.View style= {[styles.menuItem, {top: 80}, {left: this.state.shift}]} >
                  <Image style= {styles.menuImg} source= {require('../img/tumblr-text.png')} ></Image>
                  <Text style = {styles.menuText} >Text</Text>
              </Animated.View>
              <Animated.View style= {[styles.menuItem, {top: 80}, {right: this.state.shift}]} >
                  <Image style= {styles.menuImg} source= {require('../img/tumblr-photo.png')} ></Image>
                  <Text style = {styles.menuText} >Text</Text>
              </Animated.View>
              <Animated.View style= {[styles.menuItem, {top: 250}, {left: this.state.shift}]} >
                  <Image style= {styles.menuImg} source= {require('../img/tumblr-quote.png')} ></Image>
                  <Text style = {styles.menuText} >Text</Text>
              </Animated.View>
              <Animated.View style= {[styles.menuItem, {top: 250}, {right: this.state.shift}]} >
                  <Image style= {styles.menuImg} source= {require('../img/tumblr-link.png')} ></Image>
                  <Text style = {styles.menuText} >Text</Text>
              </Animated.View>
              <Animated.View style= {[styles.menuItem, {top: 420}, {left: this.state.shift}]} >
                  <Image style= {styles.menuImg} source= {require('../img/tumblr-chat.png')} ></Image>
                  <Text style = {styles.menuText} >Text</Text>
              </Animated.View>
              <Animated.View style= {[styles.menuItem, {top: 420}, {right: this.state.shift}]} >
                  <Image style= {styles.menuImg} source= {require('../img/tumblr-audio.png')} ></Image>
                  <Text style = {styles.menuText} >Text</Text>
              </Animated.View>
              {/*
              
              */}

              <TouchableHighlight style = {styles.dismissBtn} onPress= {() => this._popMenu()} >
                <Text style = {styles.dismissText}>dissmiss</Text>
              </TouchableHighlight>
            </Image>

          : <View></View>
        }
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    // height: Util.size.height,
    // width: Util.size.width,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // backgroundColor: '#f1f1f1'
    flex: 1
  },
  img: {
    resizeMode: 'contain',
    height: Util.size.height - 10,
    width: Util.size.width,
    marginTop: 15,
  },
  menu: {
    resizeMode: 'cover',
    height: Util.size.height,
    width: Util.size.width,
    position : 'absolute',
    top: 0,
    left: 0,
  },
  dismissBtn: {
    position: 'absolute',
    width: Util.size.width,
    bottom: 50,
    left: 0,
  },
  dismissText: {
    textAlign: 'center',
    color: 'rgba(255,255,255, 0.2)',
    fontWeight: '700',
    backgroundColor: 'transparent'
  },
  menuImg: {
    width: 120,
    height: 100,
    resizeMode: 'contain'
  },
  menuText: {
    width: 120,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent'
  },
  menuItem: {
    position: 'absolute',
  },
  meunItem1: {
    position: 'absolute',
    left: 50,
    top: 80,
  },
  menuItem2: {
    position: 'absolute',
  },
})  

export default Day10;