import React from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Title from '../common/Title'

const Input = ({ title }) => {
    return (
        <View>
            <Text
                style={{
                    color: '#70747A',
                    marginVertical: 6,
                    paddingLeft: 16,
                }}
            >
                {title}
            </Text>

            <TextInput
                style={{
                    backgroundColor: '#e1e2e4',
                    borderRadius: 26,
                    height: 52,
                    paddingHorizontal: 16,
                    fontSize: 20,
                }}
            />
        </View>
    )
}

const Button = ({ title }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#f5f5f5',
                height: 52,
                borderRadius: 26,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20
            }}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const Signin = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: 20
                }}>
                <Title text='Sign Up' />
                <Input title='Username' />
                <Input title='First Name' />
                <Input title='Last Name' />
                <Input title='Password' />
                <Input title='Confirm Password' />
                <Text style={{ textAlign: 'center', marginTop: 40, color: 'white' }}>
                    I have an  account? <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('SignUp')}> Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Signin