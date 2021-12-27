import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { selectedProduct } from '../store/actions/products.action'

export const Item = ({image, title, price, id}) => {

    const dispatch = useDispatch();

    const handleDetail = () => {
        dispatch(selectedProduct(id));
        Navigation.navigate('Details', {id: id});
    } 

    const Navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Image style = {styles.image} source={{uri: image}} resizeMode='cover'/>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{price}</Text>
            <TouchableOpacity onPress = {handleDetail}>
                <Text>Details</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '90%',
        height: 200,
        borderRadius: 15,
    },
    container: {
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 2,
    },
    text: {
        fontFamily: 'ubuntu-regular',
        fontSize: 12,
    }
})
