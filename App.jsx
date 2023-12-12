import React, { useState } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, Text } from 'react-native'
import Splash from './src/screens/Splash'
import Home from './src/screens/Home';
import Signin from './src/screens/Signin';
import SignUp from './src/screens/Signup';
import Search from './src/screens/Search';
import Message from './src/screens/Message';
import './src/core/fontawsome'

const Stack = createNativeStackNavigator();

const LigitTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'black'
    }
}

const App = () => {

    const [init] = useState(true)
    const [auth] = useState(false)


    return (
        <NavigationContainer theme={LigitTheme}>
            <StatusBar barStyle='light-content' />
            <Stack.Navigator>
                {!init ? (
                    <>
                        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                    </>
                ) : !auth ? (
                    <>
                        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
                        <Stack.Screen name='SignIn' component={Signin} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                        <Stack.Screen name='Search' component={Search} />
                        <Stack.Screen name='Message' component={Message} />
                    </>
                )}



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App