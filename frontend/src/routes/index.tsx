import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dias from '../pages/dias/Dias'

const Nvdar = createStackNavigator()

const NvdarRoutes: React.FC = () => (
    <Nvdar.Navigator screenOptions={{
        headerTintColor: '#2eb82e',
        headerStyle: {
            backgroundColor: '#25222a',
        },
        cardStyle: {backgroundColor: '#312e38'},
        title: 'Nvdar',
        headerTitleStyle: {
            alignSelf: 'center',
        }
    }}>
        <Nvdar.Screen name='Dias' component={Dias} />
    </Nvdar.Navigator>
)

export default NvdarRoutes