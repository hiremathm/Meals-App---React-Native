import {MEALS} from '..//..//data/meals'
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals'

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
	switch(action.type){
		case TOGGLE_FAVORITE : 
			const existingMeal = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)

			if(existingMeal >= 0){
				const updatedMeals = [...state.favoriteMeals]
				updatedMeals.splice(existingMeal, 1)
				const returnData = {
					...state, favoriteMeals: updatedMeals
				}

				return returnData
			}else{
				const existingFavorites = state.favoriteMeals
				const newFavorite = state.meals.find(meal => meal.id === action.mealId)
				const allFavorites = existingFavorites.concat(newFavorite)
				const returnData =  {
					...state, favoriteMeals: allFavorites
				}

				return returnData

			}
		case SET_FILTERS : 
			const appliedFilters = action.filters
			const updatedFilteredMeals = state.meals.filter(meal => {
				if(appliedFilters.gluteenFree && !meal.isGlutenFree){
					return false
				}

				if(appliedFilters.lactoseFree && !meal.isLactoseFree){
					return false
				}

				if(appliedFilters.veganFree && !meal.isVegan){
					return false
				}

				if(appliedFilters.vegitarian && !meal.isVegitarian){
					return false
				}

				return true
			})

			return {...state, filteredMeals: updatedFilteredMeals}
		default: 
			return state;
	}
}

export default mealsReducer;