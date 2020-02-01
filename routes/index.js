import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import HomePage from '../pages/Home'

import MainPage from '../pages/Main'
import FavoritePage from '../pages/Favorite'
import SearchPage from '../pages/Search'
import CategoryPage from '../pages/Category'
import BasketPage from '../pages/Basket'

import HomeTabBarNavigationOption from '../components/HomeTabBar'

export const RootStack = createStackNavigator(
    {
         Home: { screen: HomePage }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
)

export const HomeTabBar = createBottomTabNavigator(
    {
        Basket: { screen: BasketPage },
        Category: { screen: CategoryPage },
        Search: { screen: SearchPage },
        Favorite: { screen: FavoritePage },
        Main: { screen: MainPage },
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: HomeTabBarNavigationOption
    }
);