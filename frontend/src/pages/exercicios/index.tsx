import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import ListExer from './listExer'
import CriarExer from './criarExer'
import EditarExer from './editarExer'

const DiasRotas = createStackNavigator()

const Dias: React.FC = () => {
  return (
    <DiasRotas.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DiasRotas.Screen name='ListExer' component={ListExer} />
      <DiasRotas.Screen name='CriarExer' component={CriarExer} />
      <DiasRotas.Screen name='EditarExer' component={EditarExer} />
    </DiasRotas.Navigator>
  )
}

export default Dias;