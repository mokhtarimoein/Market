import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { BottomTabBar } from 'react-navigation-tabs'
import NavigationService from '../routes/NavigationService'
import Colors  from '../utils/Colors'
import Strings from '../utils/Strings'
import Styles from '../utils/Styles'

const TabBarComponent = (props) => {
    const onTabPress = ({ route }) => {
        NavigationService.navigate('HOME', route.routeName)
    }
    return <BottomTabBar {...props} style={[styles.tabBarButton, { backgroundColor: Colors.white }]} onTabPress={onTabPress} />
}

const TabBarIcon = ({ focused, tintColor, navigation }) => {
    const { routeName } = navigation.state
    let icon = ''
    let text = ''

    switch (routeName) {
        case 'Basket':
            icon = require('../assets/tab.png')
            text = Strings.basket
            break
        case 'Category':
            icon = require('../assets/tab.png')
            text = Strings.category

            break
        case 'Search':
            icon = require('../assets/tab.png')
            text = Strings.search
            break
        case 'Favorite':
            icon = require('../assets/tab.png')
            text = Strings.favorite
            break
        case 'Main':
            icon = require('../assets/tab.png')
            text = Strings.main
            break
    }

    return <View>
        <View style={styles.tabBarIconContainer}>
            <View style={styles.callToActionContainer}>
                <Image source={icon} style={[styles.callToActionLogo, { tintColor: focused ? Colors.blue : Colors.gray }]}
                />
            </View>
            <Text style={[Styles.font, styles.tabBarIconText, { color: focused ? Colors.blue : Colors.gray }]}>{text}</Text>
        </View>
    </View>

}

const HomeTabBarNavigationOption = ({ navigation }) => ({
    tabBarIcon: (props) => <TabBarIcon {...props} navigation={navigation} />,
    tabBarOptions: {
        activeTintColor: Colors.blue,
        inactiveTintColor: Colors.gray,
        style: styles.tabBarItem,
        iconStyle: styles.tabBarIcon,
        showLabel: false
    },
    tabBarComponent: (props) => <TabBarComponent {...props} />,
})

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 25,
        height: 25
    },
    tabBarItem: {
        padding: 10,
        backgroundColor: Colors.black,
    },
    tabBarIconContainer: {
        alignItems: 'center'
    },
    tabBarIconText: {
        marginTop: 2
    },
    callToActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    callToActionLogo: {
        width: 22,
        height: 27,
        tintColor: Colors.gray
    },
    tabBarButton: {
        backgroundColor: Colors.black,
        paddingHorizontal: 10,
        height: 60
    },
})
export default HomeTabBarNavigationOption