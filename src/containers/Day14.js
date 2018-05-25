import React, {Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'; 
import Util from '../utils/util'
import Icon from 'react-native-vector-icons/Ionicons';
class Day14 extends Component {
  
  constructor() {
    super();
    this.state = {}
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft  : <TouchableOpacity onPress= {() => {true}} >
                    <Icon name="ios-settings" size={35} color= '#cecece' style= {{paddingLeft: 10}} ></Icon>
                  </TouchableOpacity>,
    title       : <Image source = {require('../img/googlelogo.png')} style = {{width: 100, resizeMode: 'contain'}}></Image> ,
    headerRight : <TouchableOpacity onPress= {() => console.log('navigation', navigation)} >
                    <Icon name="ios-chatbubbles" size={35} color= '#cecece' style= {{paddingRight: 10}} ></Icon>,
                  </TouchableOpacity>
  })

  render() {
    return (
      <View style= {styles.container} >
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: Util.size.height,
    width: Util.size.width,
  },
  headerImg: {
    width: 100
  },
})

export default Day14;