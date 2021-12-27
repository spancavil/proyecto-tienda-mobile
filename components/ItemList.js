import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Item } from './Item';
import { Apploading } from './Apploading';

export const ItemList = ({handleSelectedCategory, productsSelected}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Products</Text>
            <TouchableOpacity onPress={()=> handleSelectedCategory(null)}><Text>Go Back</Text></TouchableOpacity>
            {productsSelected.length !== 0 ? 
            <FlatList
            data = {productsSelected}
            keyExtractor={(item)=> item.title.toString()}
            renderItem={({item})=>{
                return <Item {...item}/>
            }}
            >

            </FlatList>
            :
            <Apploading/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        width: '100%',
        fontFamily: 'ubuntu-regular',
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 30,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    }
})
