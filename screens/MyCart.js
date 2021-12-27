import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { View, TouchableOpacity, Text, FlatList, Stylesheet, StyleSheet, Modal } from 'react-native';
import { cleanCart, removeItem } from '../store/actions/cart.action';
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

const MyCart = () => {

    const [checkout, setCheckout] = useState(false);
    const [orderId, setOrderId] = useState("");
    const {cart} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (item) => {
        dispatch(removeItem(item))
    }

    //Enviamos la order a firebase
    const handleBuy = async () => {
        try {
            const docRef = await addDoc(collection(db, 'orders'), {
                ...cart
            })
            setOrderId(docRef.id);
            dispatch(cleanCart())
        } catch (error) {
            
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Cart</Text>
            {cart.length !== 0 && orderId === "" ?
                <>
                <FlatList
                data = {cart}
                keyExtractor={(item)=> item.title.toString()}
                renderItem={({item})=>{
                    return <>
                        <Text>{item.title}</Text>
                        <TouchableOpacity style ={styles.buttonRemove} 
                        onPress={()=> handleRemove(item)}>
                            <Text>Remove</Text>
                        </TouchableOpacity>
                    </>
                }}
                >
                </FlatList>
                <TouchableOpacity onPress = {()=> setCheckout(true)}>
                    <Text>Checkout</Text>
                </TouchableOpacity>

                {/* Checkout modal */}
                <Modal
                animationType="slide"
                transparent={true}
                visible={checkout}
                onRequestClose={() => {
                  setCheckout(!checkout);
                }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {orderId === "" ?
                            <>
                                <TouchableOpacity onPress={()=> setCheckout(!checkout)} style={styles.modalButtons}>
                                    <Text>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> handleBuy ()} style={styles.modalButtons}>
                                    <Text>
                                        Confirm purchase
                                    </Text>
                                </TouchableOpacity>
                            </>
                            :
                            <>
                                <Text>Order loaded: {orderId}</Text>
                                <TouchableOpacity onPress={()=> setCheckout(!checkout)} style={styles.modalButtons}>
                                    <Text>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </>
                            }
                        </View>
                    </View>
                </Modal>

                </> 
                :

                <Text>The cart is empty</Text>

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
    },
    buttonRemove: {
        padding: 10,
        backgroundColor: 'red'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalButtons: {
        padding: 10,
        margin: 10,
        backgroundColor: 'blue',
    }
})

export default MyCart;