import React from 'react'
import {
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Request from './Request';
import Friends from './Friends';
import Profile from './Profile';


const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <Image
                            source={require('../assets/img/profile-icon-9.png')}
                            style={{ width: 29, height: 29, borderRadius: 14, backgroundColor: '#eeeeee' }}
                        />
                    </View>
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <FontAwesomeIcon
                            icon={'magnifying-glass'}
                            size={28}
                            color='#404040'
                            style={{ marginRight: 20 }}
                        />
                    </TouchableOpacity>
                ),
                tabBarIcon: ({ focused, color, size }) => {
                    const icons = {
                        Request: 'bell',
                        Friends: 'inbox',
                        Profile: 'user'
                    }
                    const icon = icons[route.name]
                    return (
                        <FontAwesomeIcon icon={icon} size={28} color={color} />
                    )
                },
                tabBarActiveTintColor: '#202020',
                tabBarShowLabel: false
            })}
        >

            <Tab.Screen name="Request" component={Request} />
            <Tab.Screen name="Friends" component={Friends} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    )
}

export default Home