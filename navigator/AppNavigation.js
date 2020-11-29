import React from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Screens
import CategoryListScreen from '../screens/CategoryListScreen'
import CategoryMealsListScreen from '../screens/CategoryMealsListScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoriteScreen from '../screens/FavoriteScreen'

import Colors from '../constants/Colors'


const RootStack = createStackNavigator({
		Home: {
			screen: CategoryListScreen
		},
		MealList: {
			screen: CategoryMealsListScreen
		},
		DetailsScreen: {
			screen: MealDetailsScreen
		}
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
		 		backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
		 	},
		 	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
		} 
	}
)

const MealFavTabNavigator = createBottomTabNavigator({
	Meals: {screen: RootStack, navigationOptions: {
		tabBarIcon: (tabInfo) => {
			return <Ionicons name = 'ios-restaurant' size = {30} color = {tabInfo.tintColor}/>
		}
	}},
	Favorites: {screen: FavoriteScreen, navigationOptions: {
		tabBarLabel: 'Favorites!',
		tabBarIcon: (tabInfo) => {
			return <Ionicons name = 'ios-star' size = {30} color = {tabInfo.tintColor}/>
		}
	}}
},{
	tabBarOptions: {
		activeTintColor: Colors.primary
	}
});

export default createAppContainer(MealFavTabNavigator);