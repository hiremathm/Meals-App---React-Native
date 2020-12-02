export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export const toggleFavorite = (id) => {
	console.log("id is ", id)
	return {
		type: TOGGLE_FAVORITE,
		mealId: id
	}
}