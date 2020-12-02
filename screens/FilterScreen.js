import React, {useState, useEffect, useCallback} from 'react'
import {Text, View, StyleSheet, Switch} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useDispatch} from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'
import FilterItem from '../components/FilterItem'
import {SET_FILTERS} from '../store/actions/meals'
import {setFilter} from '../store/actions/meals'

const FilterScreen = (props) => {
	const [isGluteenFree, setGluteenFree] = useState(false)
	const [isLactoseFree, setLactoseFree] = useState(false)
	const [isVeganFree, setVeganFree] = useState(false)
	const [isVegitarian, setVegitarian] = useState(false)

	const {navigation} = props;

	const dispatch = useDispatch()


	const saveFilter = useCallback(() => {
		const filterData = {
			gluteenFree: isGluteenFree,
			lactoseFree: isLactoseFree,
			veganFree: isVeganFree,
			vegitarian: isVegitarian
		}
		console.log("SAVED DATA", filterData)

		dispatch(setFilter(filterData))
	}, [isGluteenFree, isLactoseFree, isVeganFree, isVegitarian])

	useEffect(() => {
		navigation.setParams({save: saveFilter})
	},[saveFilter])

	return <View style = {styles.screen}> 
		<Text style = {styles.title}>Available Filter / Restrictions</Text>
		<FilterItem label = "Gluteen Free" state = {isGluteenFree} onChange = {newValue => setGluteenFree(newValue)}/>
		<FilterItem label = "Lactose Free" state = {isLactoseFree} onChange = {newValue => setLactoseFree(newValue)}/>
		<FilterItem label = "Vegan" state = {isVeganFree} onChange = {newValue => setVeganFree(newValue)}/>
		<FilterItem label = "Vegitarian" state = {isVegitarian} onChange = {newValue => setVegitarian(newValue)}/>
	</View>
}

FilterScreen.navigationOptions = navData => {
	return {	
		headerTitle: 'Filter Meals',
		headerLeft: () => <HeaderButtons HeaderButtonComponent = {HeaderButton}>
			<Item title = "Menu" iconName = 'ios-menu'  size = {45} onPress = {() => navData.navigation.toggleDrawer( )}/>
		</HeaderButtons>,
		headerRight: () => <HeaderButtons HeaderButtonComponent = {HeaderButton}>
			<Item title = "Save" iconName = 'ios-save'  size = {45} onPress = {navData.navigation.getParam('save')}/>
		</HeaderButtons>
	}
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center"
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%'
	},
	title: {
		fontFamily: 'nunito-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	}
})

export default FilterScreen;