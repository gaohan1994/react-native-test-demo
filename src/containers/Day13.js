import React, {Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  CameraRoll,
} from 'react-native'; 
import Util from '../utils/util'
import Icon from 'react-native-vector-icons/Ionicons';

class Day13 extends Component {
  
  constructor() {
    super();
    this.state = {
      numofText: 140
    }
  }

  static navigationOptions = {
    header: null
  }

  _updateText = (text) => {
    this.setState({
      numofText: 140 - text.length
    })
  }

  

  componentDidMount = () => {
    const fetchParams = {
      first: 4
    }
    console.log('CameraRoll', CameraRoll);
    // CameraRoll.getPhotos(fetchParams).done((data) => this.storeImages(data), (err) => this.logImageError(err));
    // CameraRoll.getPhotos(fetchParams).done((data) => console.log(data), (err) => console.log(err))
  }

  render() {
    // console.log('this.state.numofText', this.state.numofText);
    return (
      <View style = {styles.container} >
        <View style = {styles.iconContainer} >
          <Image source= {require('../img/icon.png')} style= {styles.icon} ></Image>
          <Icon name= 'md-close' size= {30} color= '#2aa2ef' ></Icon>
        </View>
        <TextInput
          ref = 'textarea'
          style = {styles.textArea}
          maxLength = {140}
          multiline = {true}
          placeholder = '有什么新鲜事'
          placeholderTextColor = '#ced8de'
          selectionColor = '#2aa2ef'
          onChangeText = {(text) => this._updateText(text)}
        ></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: Util.size.height,
    backgroundColor: '#fff'
  },
  iconContainer: {
    paddingLeft: 15, paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  textArea: {
    height: 335,
    padding: 15,
    fontSize: 20,
  },
  
})  

export default Day13;