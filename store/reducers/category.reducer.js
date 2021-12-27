import { SELECT_CATEGORY } from "../actions/category.action";
import { GET_CATEGORIES } from "../actions/category.action";

const initialState = {
    categories: [],
    selected: null,
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const categorySelected = state.categories.find(cat => cat === action.categoryId)
            return categorySelected ? 
            {...state, selected: categorySelected}
            :
            {...state, selected: null}
        case GET_CATEGORIES:
            return {...state, categories: action.payload}    
        default:
            return state
    }
}

export default CategoryReducer;