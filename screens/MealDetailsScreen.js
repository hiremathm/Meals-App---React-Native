import React, {useEffect, useCallback} from 'react'
import {Text, View, StyleSheet, Button, ScrollView, Image} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import { MEALS } from '../data/meals'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

import { toggleFavorite } from '../store/actions/meals'

const MealDetailsScreen = (props) => {
	const mealId = props.navigation.getParam('mealId')

	const meals = useSelector(state => state.meals.meals)

	const currentMealsIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

	const meal = meals.find(meal => meal.id === mealId)

	const dispatch = useDispatch()

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(
			toggleFavorite(mealId)
		)
	},[dispatch, mealId])


	useEffect(() => {
		// props.navigation.setParams({mealTitle: meal.title})
		props.navigation.setParams({toggleFav: toggleFavoriteHandler})
	},[toggleFavoriteHandler])

	useEffect(() => {
		props.navigation.setParams({isFav: currentMealsIsFavorite})
	}, [currentMealsIsFavorite])

	const ListItem = props => {
		return <View style = {styles.listItem}>
			<DefaultText>
				{props.children}
			</DefaultText>
		</View>
	}

	return(
		<ScrollView>
		<View style = {styles.screen}>
			<Image source = {{uri: meal.imageUrl}} style = {styles.image}/>
    		<View style = {styles.details}>
				<DefaultText>{meal.duration}m</DefaultText>
				<DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
				<DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
			</View>
			<View style = {styles.ingredients}>
				<Text style = {styles.textStyle}>
					Ingredients
  				</Text>
				{meal.ingredients.map(ingredient => <ListItem key = {ingredient}>{ingredient}</ListItem>)}
			</View>
			<View>
				<Text style = {styles.textStyle}>
					Steps
				</Text>
				{meal.steps.map(step => <ListItem key = {step} style = {styles.text}>{step}</ListItem>)}
			</View>
		</View>
		</ScrollView>
	)
}

MealDetailsScreen.navigationOptions = (navigationData) => {
	// const mealId = navigationData.navigation.getParam('mealId') 

	// const meal = MEALS.find(meal => meal.id === mealId)
	const title = navigationData.navigation.getParam('mealTitle')
	const toggleFavorite = navigationData.navigation.getParam('toggleFav')
	const isFavorite = navigationData.navigation.getParam('isFav')

	return {
		headerTitle: title, 
		headerRight: () => <HeaderButtons HeaderButtonComponent = {HeaderButton}>
			<Item title = "Favorite" iconName = {isFavorite ? 'ios-star' : 'ios-star-outline'} onPress = {toggleFavorite}/>
		</HeaderButtons>
	}
}

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	image: {
		width: '100%',
		height: 200
	},
	textStyle: {
		fontSize: 20,
		fontFamily: 'nunito-bold',
		textAlign: 'center'
	},
	text: {
		fontFamily: 'nunito-light',
		fontSize: 18,
		textAlign: 'center'
	},
	ingredients: {
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center'
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10
	}
})

export default MealDetailsScreen;