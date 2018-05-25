import React, {Component} from 'react'
import Routes from './routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers'

const store = createStore(Reducers);

class App extends Component {
  render() {
    return (
        <Provider store= {store} >
            <Routes/>
        </Provider>
    )
  }
}

export default App