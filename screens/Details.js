import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/actions/cart.action';

export const Details = () => {

    const product = useSelector(state => state.products.selected);
    const dispatch = useDispatch();
    const Navigation = useNavigation();

    const handleAdd = () => {
        dispatch(addItem(product));
    }

    return (
        <View style={styles.container} >
            { product ? 
                <>
                    <Image source={{uri: product.image}} style={styles.image}></Image>
                    <Text style = {styles.text}>{product.description}</Text>
                    <Text style = {styles.text}>${product.price}</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleAdd}>
                            <Text style = {styles.textButton}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} 
                        onPress={()=> Navigation.goBack()}>
                            <Text style = {styles.textButton}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </>
            :
            <ActivityIndicator color={black} size={'large'}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: 'white',
        padding: 20,
        maxHeight: '90vh',
        marginHorizontal: 20,
        marginVertical: 20,
    },

    image: {
        width: '90%',
        height: 300,
        borderRadius: 10,
    },
    text: {
        fontFamily: 'ubuntu-regular',
        fontSize: 15,
        color: 'black'
    },
    textButton: {
        fontFamily: 'ubuntu-regular',
        fontSize: 15,
        color: 'white'
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
