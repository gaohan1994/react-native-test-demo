import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Button,
} from 'react-native'
import Util from '../utils/util'
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-search-bar'
class Day4 extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Button title= "back" onPress= {() => {console.log('navigation', navigation)}} ></Button>,
    title: <View style= {{height: 50, width: Util.size.width-150}} ><SearchBar hideBackground= {true}
                      placeholder= 'Search'/></View>,
    headerRight: <Icon name= 'search' size= {30} color= '#515151' ></Icon>
    // header: <Button title= "test" onPress= {() => console.log('navigation', navigation)} ></Button>
  });

  constructor() {
    super();
    this.state = {
      loading: false
    }
  }

  _changeState() {
    this.setState({
      loading: !this.state.loading
    })
  }

  render() {
    return (
      <View style= {styles.container} >
        <View style= {styles.context} >
          <Text>Hello React Native</Text>
          <TestLoading load= {this.state.loading} />
          <TouchableHighlight style= {styles.testTouch} onPress= {() => this._changeState()} >
            <Text>touch me </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const TestLoading = ({load}) => (
  load
  ? <Text>true</Text>
  : <Text>false</Text> 
)

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    width: Util.size.width,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  context: {
    borderBottomWidth: Util.pixel,
  },
  testTouch: {
    height: 50,
    width: 300,
    backgroundColor: 'yellow'
  }
})

export default Day4;