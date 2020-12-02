import React from 'react'
import {Text, View, StyleSheet, Switch} from 'react-native'
import Colors from '../constants/Colors'

const FilterItem = (props) => {
	return (
		<View style = {styles.filterContainer}>
			<Text>
				{props.label}
			</Text>				
			<Switch value = {props.state} onValueChange = {props.onChange} trackColor = {{true: "#767577", false: "#767577"}} thumbColor = {Colors.primary}/>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center"
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 10
	},
	title: {
		fontFamily: 'nunito-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	}
})

export default FilterItem;