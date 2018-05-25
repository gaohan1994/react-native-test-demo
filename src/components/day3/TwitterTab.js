import React, { Component } from 'react'
import {
    View,
    Text,
    TabBarIOS,
    Button,
} from 'react-native'
import Util from '../../utils/util'
import Icon from 'react-native-vector-icons/Ionicons';
import TwitterFlow from './TwitterFlow'
class TwitterTab extends Component {

    pressHandle(index) {
        console.log(index)
    }

    render() {
        const { NavBarItems, TwitterBar, changeHandle } = this.props;
        return (
            <TabBarIOS>
                
                {
                    NavBarItems.map( (item, index) => {
                        return  <Icon.TabBarItem
                                    key= {item.key}
                                    title= {item.title}
                                    iconName= {item.iconName}
                                    selectedIconName= {item.selectedIconName}
                                    onPress = { () => changeHandle(item.selected) }
                                    selected= {item.selected == TwitterBar ? true : false} >
                                    <View>
                                        <TwitterFlow/>
                                    </View>
                                </Icon.TabBarItem>
                    })
                }
            </TabBarIOS>
        )
    }
}

export default TwitterTab