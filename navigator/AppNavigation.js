import React from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
// Navigators
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Screens
import CategoryListScreen from '../screens/CategoryListScreen'
import CategoryMealsListScreen from '../screens/CategoryMealsListScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import FilterScreen from '../screens/FilterScreen'

import Colors from '../constants/Colors'

const defaultNavigationOptions = {
	headerStyle: {
 		backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
 	},
 	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
 	headerTitleStyle: {
 		fontFamily: 'nunito-bold',
 		fontSize: 20
 	},

} 

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
		defaultNavigationOptions: defaultNavigationOptions
	}
)

const FavoritesStack = createStackNavigator({
		Favorites: {
			screen: FavoriteScreen
		},
		DetailsScreen: {
			screen: MealDetailsScreen
		}
	},
	{
		defaultNavigationOptions: defaultNavigationOptions
	}
)

const bottomTabScreenConfig = {
	Meals: {screen: RootStack, navigationOptions: {
		tabBarIcon: (tabInfo) => {
			return <Ionicons name = 'ios-restaurant' size = {30} color = {tabInfo.tintColor}/>
		},
		tabBarLabel: <Text style = {{fontFamily: 'nunito-regular', fontSize: 18}}>Meals</Text>,

	}},
	Favorites: {screen: FavoritesStack, navigationOptions: {
		tabBarLabel: 'Favorites!',
		tabBarIcon: (tabInfo) => {
			return <Ionicons name = 'ios-star' size = {30} color = {tabInfo.tintColor}/>
		},
		tabBarLabel: <Text style = {{fontFamily: 'nunito-regular', fontSize: 18}}>Favorites</Text>,
		tabBarColor: Colors.accent
	}}
}

const MealFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(bottomTabScreenConfig,{
	activeTintColor: Colors.primary, shifting: true
}) : createBottomTabNavigator(bottomTabScreenConfig,{
	tabBarOptions: {
		labelStyle: {
			fontFamily: 'nunito-bold',
			fontSize: 20
		},
		activeTintColor: "Colors.primary"
	}
});

const FilterStack = createStackNavigator({
		Filters: FilterScreen
	}
	,
	{
	// 	navigationOptions: {drawerLabel: 'Filters!!!'},
		defaultNavigationOptions: defaultNavigationOptions
	}
)

const MianNavigator = createDrawerNavigator({
	Meals: {screen: MealFavTabNavigator, navigationOptions: {drawerLabel: 'Meals!!!'}},
	Filters: {screen: FilterStack, navigationOptions: {drawerLabel: 'Filters!!!'}}
},{
	contentOptions: {
		activeTintColor: Colors.primary,
		labelStyle: {
			fontFamily: 'nunito-bold',
			fontSize: 20
		}
	}
})

export default createAppContainer(MianNavigator);