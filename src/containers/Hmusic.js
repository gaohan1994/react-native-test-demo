import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    FlatList,
    Image,
    RefreshControl,
} from 'react-native'
import SearchBar from 'react-native-search-bar'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Util from '../utils/util'
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video'
import { 
  Receive_SearchData, 
  Check_Song 
} from '../actions/index'
import { connect } from 'react-redux'
import Music from '../utils/func'
import { SourcePATH } from '../const/data'
class ListItem extends Component {

  constructor() {
    super();
    this.state = {
      isRefreshing: false
    }
  }

  _pressHandle = (item) => {
    const { dispatch } = this.props
    dispatch(Check_Song(item))
  }

  _onRefreshHandle = () => {
    this.setState({
        isRefreshing: true
    });
    setTimeout(() => {
        this.setState({
            isRefreshing: false
        })
    }, 2000)
  }
 
  _ListItem = ({item}) => {
    return (
      <TouchableHighlight onPress = { this.props.PressHandle 
                                      ? this.props.PressHandle 
                                      : () => this._pressHandle(item)} 
                          underlayColor= '#f1f1f1' >
        <View style= {styles.ListBox}>
          <Image source= {{uri: 'http://qntest.huanmusic.com/b3dbceb0-a581-11e6-88e5-db0a020267c3.jpg'}} style= {styles.BoxImage} ></Image>
          <View style= {styles.BoxInfo} >
            <Text style= {[styles.BoxInfoTitle, {color: 'black'}]} >{item.name}</Text>
            {
              item.user
              ? <Text style= {[styles.BoxInfoSubTit, {color: 'gray'}]} >{item.user.name}</Text>
              : null
            }
        </View>
        </View>
      </TouchableHighlight>
    )
  }

  _keyExtractor = (item, index) => item._id

  render() {
    const { SearchData } = this.props
    return(
        <FlatList
            keyExtractor= {this._keyExtractor}
            data= {SearchData}
            renderItem= {this._ListItem}
            refreshing= {this.state.isRefreshing}
            onRefresh= {() => this._onRefreshHandle()}
            ></FlatList>
    )
  }
}

class VideoControl extends Component {

  render() {
    const {playing, _playHandle, Song} = this.props
    const SName   = Song.name ? Song.name : '歌曲名称'
    // const SSinger = Song.singers[0].name ? Song.singers[0].name  : '歌手'
    // http://qntest.huanmusic.com/b3dbceb0-a581-11e6-88e5-db0a020267c3.jpg
    const SSinger = 'singer'
    const SPic    = Song.pics ? SourcePATH + Song.pics[0] : 'http://qntest.huanmusic.com/b3dbceb0-a581-11e6-88e5-db0a020267c3.jpg'
    console.log('SName', SName)
    console.log('SSinger', SSinger)
    console.log('SPic', SPic)
    return(
      <View style= {styles.VideoBox} >
        <Image source= {{uri: SPic}} style= {styles.BoxImage} ></Image>
        <View style= {styles.BoxInfo} >
          <Text style= {styles.BoxInfoTitle} >{SName}</Text>
          <Text style= {styles.BoxInfoSubTit} >{SSinger}</Text>
        </View>
        <View style= {styles.ControlBox} >
          <TouchableHighlight onPress= { () => _playHandle()} >
            {
              playing
              ? <Icon size= {30} name= 'pause' color= '#fff' ></Icon>
              : <Icon size= {30} name= 'play' color= '#fff' ></Icon>
            }
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

class Hmusic extends Component {

  constructor() {
    super();
    this.state = {
      playing: false,
      showFLatList: false,
      showSwiperList: false,
      showVideoControl: false,
    }
  }

  static navigationOptions= {
      header: null
  }

  /**
   * 异步发送搜索请求
   * 
   * @memberof Hmusic
   */

  searchData = async (value) => {
    const ret = await Music.searchData(value);
    console.log('ret', ret.data);
    this.props.dispatch(Receive_SearchData(ret.data))
  }

  /**
   * 当输入框内容改变时触发函数
   * 
   * @memberof Hmusic
   */
  onChangeTextHandle = (value) => {
    console.log('value:', value)
  }

  /**
   * 当按下搜索时触发的函数
   * 
   * @memberof Hmusic
   */
  onSearchButtonPressHandle = (value) => {
    this.refs.searchBar.unFocus()
  }

  /**
   * 点击播放/暂停按钮触发的函数
   * 
   * @memberof Hmusic
   */
  _playHandle = () => {
    this.setState({
      playing: !this.state.playing
    })
  }

  /**
   * cdm
   * 
   * @memberof Hmusic
   */
  componentDidMount = () => {
    this.refs.searchBar.focus();
  }
  

  render() {
    const { Data, Song } = this.props
    const URL = Song
    const SUrl = Song.avs ? SourcePATH + Song.avs[0].key : 'http://b.hy233.tv/8afae23f-855a-41ee-87fe-0dc2e1c8ee89.aac?sign=14ebb3101e78eb7d06a029dad5bb24f8&t=59e81915'
    
    return (
        <View  style= {styles.container}>
          <SearchBar
            ref= 'searchBar'
            placeholder= 'Search' 
            onChangeText= {(text) => this.searchData(text)}
            showsCancelButton= {true}
            onSearchButtonPress={(text) => this.onSearchButtonPressHandle(text)}
            hideBackground= {true}
            ></SearchBar>
          <ScrollableTabView>
            <View tabLabel= '单曲'>
              <View style= {styles.FlatListBox} >
                <ListItem SearchData= {Data.musics} {...this.props} ></ListItem>
              </View>
            </View>
            <View tabLabel= '歌单'>
              <View style= {styles.FlatListBox} >
                <ListItem SearchData= {Data.playlists} 
                          PressHandle= {() => {console.log('hello')}}
                          {...this.props} ></ListItem>
              </View>
            </View>
            <View tabLabel= '歌手'>
              <View style= {styles.FlatListBox} >
                <ListItem SearchData= {Data.singers} 
                          PressHandle= {() => {console.log('hello')}}
                          {...this.props} ></ListItem>
              </View>
            </View>
          </ScrollableTabView>
          
          {/*require('../const/wind.mp3')*/}
          <Video  source= {{uri: SUrl}} 
                  rate={this.state.playing ? 1 : 0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal. 
                  volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数 
                  paused={false}               // true代表暂停，默认为false
                  playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
                  onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                  onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
                  onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                  onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
                  onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
          ></Video>
          <VideoControl playing= {this.state.playing} 
                        _playHandle= {() => this._playHandle()}
                        Song= {Song} ></VideoControl>
          
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    width: Util.size.width,
    height: Util.size.height,
  },
  FlatListBox: {
    height: Util.size.height - 200,
  },
  ListBox: {
    height: 60,
    width: Util.size.width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ListText: {
    fontSize: 16,
  },

  /*VideoBox css*/
  VideoBox: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    height: 60,
    width: Util.size.width,
    backgroundColor: 'black',
  },
  BoxImage: {
    height: 60,
    width: 60,
  },
  BoxInfo: {
    paddingLeft: 10,
    // backgroundColor: 'red',
  },
  BoxInfoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal'
  },
  BoxInfoSubTit: {
    color: '#f1f1f1',
    fontSize: 16,
  },
  ControlBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    right: 0,
    paddingTop: 6, paddingRight: 6, paddingBottom: 6, paddingLeft: 6,
    // backgroundColor: 'red',
  },
})

const mapStateToProps = (state) => {
  return {
    Data: state.Search,
    Song: state.Song,
  }
}

export default connect(mapStateToProps)(Hmusic)
