import React from 'react'
import { Text } from 'react-native'

const Title = ({ text }) => {
    return (
        <Text style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 48,
            fontFamily: 'LeckerliOne-Regular',
            marginBottom: 40
        }}>{text}</Text>
    )
}

export default Title