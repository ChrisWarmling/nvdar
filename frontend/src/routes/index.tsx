import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Dias from '../pages/dias/Dias'
import Categorias from '../pages/categorias/Categorias'
import Exercicios from '../pages/exercicios/Exercicios'

const Nvdar = createMaterialBottomTabNavigator()

const NvdarRoutes: React.FC = () => (
    <Nvdar.Navigator
        initialRouteName='Dias'
        activeColor='#2eb82e'
        barStyle={{ backgroundColor: '#25222a' }}>
        <Nvdar.Screen name='Dias' component={Dias}
            options={{
                tabBarLabel: 'Treinos',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="calendar-alt" color={color} size={18} />
                ),
            }} />
        <Nvdar.Screen name='Exercicios' component={Exercicios}
            options={{
                tabBarLabel: 'Exercicios',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="dumbbell" color={color} size={18} />
                ),
            }} />
        <Nvdar.Screen name='Categorias' component={Categorias}
            options={{
                tabBarLabel: 'Categorias',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="project-diagram" color={color} size={18} />
                ),
            }} />
    </Nvdar.Navigator>
)

export default NvdarRoutes