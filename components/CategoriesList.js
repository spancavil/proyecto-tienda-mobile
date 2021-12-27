import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Apploading } from './Apploading';

export const CategoriesList = ({categories, handleSelectedCategory}) => {
    return (
        <>
            <View>
                <Text style={styles.title}>Categories</Text>
            </View>
            {categories.length !== 0 ? 
            <FlatList
            data = {categories}
            keyExtractor={(item)=> item.toString()}
            renderItem={({item})=>{
                return <View>
                    <Text onPress={()=> handleSelectedCategory(item)}>{item}</Text>
                </View>
            }}
            >
            </FlatList>
            :
            // <Apploading/>
            null
            }
        
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'ubuntu-regular',
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 30,
    }
})
