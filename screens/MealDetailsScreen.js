import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

import { MEALS } from '../data/meals'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'

const MealDetailsScreen = (props) => {
	const mealId = props.navigation.getParam('mealId')

	const meal = MEALS.find(meal => meal.id === mealId)

	return(
		<View style = {styles.screen}>
			<Text style = {styles.textStyle}>
				{meal.title}
			</Text>
			<Button title = 'Back' onPress = {() => props.navigation.goBack()}/>
			<Button title = 'Home' onPress = {() => props.navigation.popToTop()}/>
		</View>
	)
}

MealDetailsScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId') 

	const meal = MEALS.find(meal => meal.id === mealId)

	return {
		headerTitle: meal.title, 
		headerRight: () => <HeaderButtons HeaderButtonComponent = {HeaderButton}>
			<Item title = "Favorite" iconName = 'ios-star' onPress = {() => console.log("MARK AS Favorite")}/>
		</HeaderButtons>
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textStyle: {
		fontSize: 20,
		fontFamily: 'nunito-light'
	}
})

export default MealDetailsScreen;