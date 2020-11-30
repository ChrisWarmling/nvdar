import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import ListCategorias from './listCategoria'
import CriarCategoria from './criarCategoria'

const CategoriasRotas = createStackNavigator()

const Categorias: React.FC = () => {
  return (
    <CategoriasRotas.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CategoriasRotas.Screen name='ListCategorias' component={ListCategorias} />
      <CategoriasRotas.Screen name='CriarCategoria' component={CriarCategoria} />
    </CategoriasRotas.Navigator>
  )
}

export default Categorias;