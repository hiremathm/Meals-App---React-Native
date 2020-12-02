import React from 'react'
import {Text, View, StyleSheet, Button, Platform, FlatList} from 'react-native'
import {useSelector} from 'react-redux'

import {CATEGORIES} from '../data/categories'
// import { MEALS } from '../data/meals'
import Colors from '../constants/Colors'
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText'

const CategoryMealsListScreen = (props) => {
	const categoryId = props.navigation.getParam('categoryId')

	// const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

	const filteredMeals = useSelector(state => state.meals.filteredMeals)

	const meals = filteredMeals.filter(meal => meal.categoryIds.includes(categoryId))

	if(meals.length === 0){
		return <View style = {styles.screen}><DefaultText>No meals found, may be check your filters.</DefaultText></View>
	}else{
		return <MealList listData = {meals} navigation = {props.navigation}/>
	}
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