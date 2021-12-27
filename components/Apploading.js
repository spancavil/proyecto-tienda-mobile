import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Apploading = () => {

    const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

    useEffect(
        () => {
            Animated.loop(
                Animated.timing(
                rotateAnimation,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
                })
            ).start(()=> {
                rotateAnimation.setValue(0)
            })
        },
        []
    )

    const interpolateRotating = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'],
      });

    return (
        <Animated.View 
        style = {{
            height: 500,
            // justifyContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            transform: [{rotateX: interpolateRotating}]}
        }
        >
            <FontAwesome 
            name="circle" 
            size={30} 
            color="black"
            />
            <FontAwesome 
            name="circle" 
            size={30} 
            color="black"
            />
            <FontAwesome 
            name="circle" 
            size={30} 
            color="black"
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: '100vw',
        // justifyContent: 'center',
        alignItems: 'center',
    },
})
