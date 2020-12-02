import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import MealList from '../components/MealList'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux'
import DefaultText from '../components/DefaultText'
// import { MEALS } from '../data/meals'
import HeaderButton from '../components/HeaderButton'

const FavoriteScreen = (props) => {
	const meals = useSelector(state => state.meals.favoriteMeals)

	// const favMeals = meals.filter(meal => meal.id === 'm1' || meal.id === 'm2')
	if(meals.length == 0){
		return <View style = {styles.screen}><DefaultText>No favorite meals found. Start adding some!</DefaultText></View>
	}else{
		return <MealList navigation = {props.navigation} listData = {meals}/>
	}
}

FavoriteScreen.navigationOptions = navData => {
	return {	
		headerTitle: 'Your Favorites',
		headerLeft: () => <HeaderButtons HeaderButtonComponent = {HeaderButton}>
			<Item title = "Menu" iconName = 'ios-menu'  size = {45} onPress = {() => navData.navigation.toggleDrawer( )}/>
		</HeaderButtons> 
	}
};


const styles = StyleSheet.create({
	screen: {flex: 1, justifyContent: 'center', alignItems: 'center'}
})

export default FavoriteScreen;