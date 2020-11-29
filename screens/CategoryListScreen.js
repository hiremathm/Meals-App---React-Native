import React from 'react'
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native'

import {CATEGORIES} from '../data/categories'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoryListScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile color = {itemData.item.color} title = {itemData.item.title} onSelect = {() => props.navigation.navigate({routeName: 'MealList', params: {categoryId: itemData.item.id}})}/>
		)
	}

	return(
		<FlatList data = {CATEGORIES} renderItem = {renderGridItem} numColumns = {2}/>
	)
};

CategoryListScreen.navigationOptions = {
	headerTitle: 'Meal Categories'
};

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

export default CategoryListScreen;