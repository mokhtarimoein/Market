/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import NavigationService from './routes/NavigationService'
import { RootStack } from './routes'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { mainReducer } from './redux/reducer'
import { createAppContainer } from 'react-navigation'

const rootReducer = combineReducers({ mainResponse: mainReducer })

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const AppContainer = createAppContainer(RootStack)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer ref={(navigatorRef) => {
                    NavigationService.setTopLevelNavigator(navigatorRef)
                }} />
            </Provider>
        )
    }
  }

export default App