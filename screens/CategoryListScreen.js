import React from 'react'
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {CATEGORIES} from '../data/categories'
import CategoryGridTile from '../components/CategoryGridTile'
import HeaderButton from '../components/HeaderButton'

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

CategoryListScreen.navigationOptions = navData => {
	return {	
		headerTitle: 'Meal Categories',
		headerLeft: () => <HeaderButtons HeaderButtonComponent = {HeaderButton}>
			<Item title = "Menu" iconName = 'ios-menu'  size = {45} onPress = {() => navData.navigation.toggleDrawer( )}/>
		</HeaderButtons> 
	}
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