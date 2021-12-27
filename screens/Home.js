import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/actions/category.action';
import { filteredProducts } from '../store/actions/products.action';

import { CategoriesList } from '../components/CategoriesList';
import { ItemList } from '../components/ItemList';

const Home = ({navigation}) => {

    const categories = useSelector(state => state.categories.categories);
    const categorySelected = useSelector(state => state.categories.selected);
    const productsSelected = useSelector(state => state.products.filteredProducts)

    const dispatch = useDispatch();

    const handleSelectedCategory = (item) => {
        dispatch (selectCategory(item));
        dispatch (filteredProducts(item));
        console.log("Debería navegar hacia", item);
    }

    console.log(navigation)

    return (
        <>
        {!categorySelected ?
        <CategoriesList 
        categories={categories}
        handleSelectedCategory={(item) => handleSelectedCategory(item)}
        />
        :
        <ItemList 
        productsSelected={productsSelected} 
        handleSelectedCategory={(item) => handleSelectedCategory(item)
        }
        />
        }
        </>
    )
}

export default Home
