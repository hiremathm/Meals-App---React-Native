import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const FavoriteScreen = () => {
	return (
		<View style = {styles.root}><Text>Favorite Screen</Text></View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default FavoriteScreen;