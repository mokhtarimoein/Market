import React, { Component } from 'react'
import NavigationService from '../routes/NavigationService'
import { createAppContainer } from 'react-navigation'
import { HomeTabBar } from '../routes'
import { StyleSheet, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

let AppContainer

class HomePage extends Component {

    constructor(props) {
        super(props)

        AppContainer = createAppContainer(HomeTabBar)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <AppContainer ref={(navigationRef) => { NavigationService.setHomeNavigator(navigationRef) }} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default HomePage