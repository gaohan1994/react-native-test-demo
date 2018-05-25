import { combineReducers } from 'redux'
import Counter from './Counter'
import Weather from './Weather'
import TwitterBar from './TwitterBar'
import Search from './Search'
import Song from './Song'
export default combineReducers({
    Counter: Counter,
    Weather: Weather,
    TwitterBar: TwitterBar,
    Search: Search,
    Song: Song,
})