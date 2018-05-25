import React, { Component } from 'react'
import { 
  View,
  Text,
  PanResponder,
  StyleSheet,
 } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class MovedableCirecle extends Component {

  constructor() {
    super();
    this.state= {
      color: 'rgba(255,255,255,0.7)'
    };
    this._panResponder = {};
    this._previousLeft = 10;
    this._previousTop  = 10;
    this.circle = (null : ?{ setNativeProps(props: Object): void});
    this.circleStyles  = {
      style: {
        left: this._previousLeft,
        top : this._previousTop,
      }
    }
  }

  componentWillMount = () => {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder : this._handleMoveShouldSetPanResponder,
      onPanResponderGrant         : this._handlePanResponderGrant,
      onPanResponderMove          : this._handlePanResponderMove,
      onPanResponderRelease       : this._handlePanResponderEnd,
      onPanResponderTerminate     : this._handlePanResponderEnd,
    })
  }
  
  componentDidMount = () => {
    this._updateNativeStyles();
  }
  

  /*
    Test OK
  */
  _handleStartShouldSetPanResponder = (e: Object, gestureState: Object): boolean => {
    // console.log('hello');
    return true
  }

  _handleMoveShouldSetPanResponder = (e: Object, gestureState: Object): boolean => {
    console.log('_handleMoveShouldSetPanResponder');
    return true
  }

  /*
    Test Ok 动画开始时的函数
  */
  _handlePanResponderGrant = (e: Object, gestureState: Object) => {
    console.log('_handlePanResponderGrant');
    this._highlight();
  }

  /*
    Test OK 动画持续时的函数
  */
  _handlePanResponderMove = (e: Object, gestureState: Object) => {
    console.log('_handlePanResponderMove');
    this.circleStyles.style.left = this._previousLeft + gestureState.dx;
    this.circleStyles.style.top  = this._previousTop  + gestureState.dy;
    this._updateNativeStyles();
  }

  /*
    Test OK 动画结束的函数
  */
  _handlePanResponderEnd = (e: Object, gestureState: Object) => {
    console.log('_handlePanResponderRelease');
    this._upHighlight();

    /*
      在动画结束的时候，保存之前移动的信息（dx，dy）准备下次动画
    */
    this._previousLeft += gestureState.dx;
    this._previousTop  += gestureState.dy;
  }

  _highlight() {
    this.setState({
      color: 'rgba(255,255,255,1)'
    })
  }

  _upHighlight() {
    this.setState({
      color: 'rgba(255,255,255,0.7)'
    })
  }

  _updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this.circleStyles);
  }

  render() {
    return (
      <View style= {styles.MoveableCircle} >
        <Icon ref= {(circle) => {
                this.circle = circle
              }} 
              {...this._panResponder.panHandlers}  
              name="circle" color= {this.state.color} size={120}></Icon>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MoveableCircle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
  }
})

export default MovedableCirecle