export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';

export const selectCategory = (catId) => ({
    type: SELECT_CATEGORY,
    categoryId: catId 
})

export const getCategories = async (dispatch) => {
    try{
        const res = await fetch(`https://fakestoreapi.com/products/categories`);
        const data = await res.json();
        dispatch ({
            type: GET_CATEGORIES,
            payload: data
        })
    }
    catch(e){
        dispatch( {
            type: CATEGORIES_ERROR,
            payload: console.log(e),
        })
    }
} 