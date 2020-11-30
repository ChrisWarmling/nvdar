import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import ListTreinos from './listTreinos'
import TreinoDia from './treinoDia'
import CriarTreino from './criarTreino'

const TreinosRotas = createStackNavigator()

const Treinos: React.FC = () => {
  return (
    <TreinosRotas.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TreinosRotas.Screen name='ListTreinos' component={ListTreinos} />
      <TreinosRotas.Screen name='TreinoDia' component={TreinoDia} />
      <TreinosRotas.Screen name='CriarTreino' component={CriarTreino} />
    </TreinosRotas.Navigator>
  )
}

export default Treinos;