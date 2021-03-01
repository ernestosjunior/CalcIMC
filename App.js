import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {Button, TextInput, View, Text } from 'react-native';
import {css} from './assets/css/Css'

export default function App() {

    const [altura, setAltura]=useState(0);
    const [peso, setPeso]=useState(0);

  return (
    
    <View style={css.container}>
      <TextInput
      placeholder="Insira sua altura"
      altura={altura}/>
      <TextInput
      placeholder="Insira seu peso"
      peso={peso}/>

      <Button title='Caclular IMC' onClick={()=>setAltura()}/>
      <Text>Sua altura é {altura}</Text>
    </View>
  );
}

