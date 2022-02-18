import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';


import  Cadastro  from './pages/Cadastro/index';
import Informacao  from './pages/Informacao/index';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  
  //navegação entre as telas
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Desabilita o Header da navegação -  headerShown: false*/}
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro}
          options={{
            headerShown: false,  
          }}
        />

        <Stack.Screen
          name="Informacao"
          component={Informacao}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
