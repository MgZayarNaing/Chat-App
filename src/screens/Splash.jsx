import React, { useEffect, useLayoutEffect } from 'react'
import { Animated, SafeAreaView, StatusBar, View } from 'react-native'
import Title from '../common/Title'

const Splash = () => {

    
    const translateY = new Animated.Value(0)
    const duration = 800


    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: 20,
                    duration: duration,
                    useNativeDriver: true,

                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: duration,
                    useNativeDriver: true,

                })
            ])
        ).start()
    }, [])

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black'
            }}
        >
            <StatusBar barStyle='light-content' />
            <Animated.View style={[{ transform: [{ translateY }] }]}>
                <Title text='Live Chat' color='white' />
            </Animated.View>
        </SafeAreaView>
    )
}

export default Splash