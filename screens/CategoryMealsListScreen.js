import React from 'react'
import {Text, View, StyleSheet, Button, Platform, FlatList} from 'react-native'

import {CATEGORIES} from '../data/categories'
import { MEALS } from '../data/meals'
import Colors from '../constants/Colors'
import MealItem from '../components/MealItem'

const CategoryMealsListScreen = (props) => {
	const categoryId = props.navigation.getParam('categoryId')

	const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

	const renderMealItem = itemData => {
		return <MealItem 
			title = {itemData.item.title} 
			complexity = {itemData.item.complexity} 
			affordability = {itemData.item.affordability} 
			duration = {itemData.item.duration} 
			image = {itemData.item.imageUrl}
			onSelectMeal = {() => {props.navigation.navigate({routeName: 'DetailsScreen', params: {mealId: itemData.item.id}})}}
		/>
	}
	
	return(
		<View style = {styles.screen}>
			<FlatList 
				data = {meals} 
				keyExtractor = {(item, index) => item.id} 
				renderItem = {renderMealItem}
				style = {{width: '100%'}}
			/>
		</View>
	)
}

CategoryMealsListScreen.navigationOptions = (navigationData) => {
	const categoryId = navigationData.navigation.getParam('categoryId') 
	const category = CATEGORIES.find( category => category.id === categoryId)

	return {
		headerTitle: category.title, 
	}
}


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},
	textStyle: {
		fontSize: 20,
		fontFamily: 'nunito-light'
	}
})

export default CategoryMealsListScreen;