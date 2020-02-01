import { NavigationActions } from 'react-navigation'

let _navigator
let _homeNavigator

const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef
}

const setHomeNavigator = (navigatorRef) => {
    _homeNavigator = navigatorRef
}

const navigate = (navigatorName, routeName, params) => {

    let _navigator_
    switch (navigatorName) {
        case 'ROOT':
            _navigator_ = _navigator
            break
        case 'HOME':
            _navigator_ = _homeNavigator
            break
    }

    _navigator_.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }) 
    );
}

const goBack = () => {
    _navigator.dispatch(
        NavigationActions.back()
    );
}

export default {
    navigate,
    setTopLevelNavigator,
    setHomeNavigator,
    goBack
}