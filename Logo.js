import React from 'react';
import { View, Text, Image } from 'react-native';

export default function App() {
  let nome = 'Campus XX - Castanhal';
  let img = 'http://www.google.com.br/google.jpg';

  return (
    <View>
      <Text>Ola mundo!</Text>
      <Text>Meu primeiro APP</Text>
      <Text style={{color:'#ff0000', fontSize: 25, margin: 15}}>UEPA - BES</Text>
    
      <Image
        source={{uri: img}}
        style={{width: 300, height: 300}}
        resizeMode='contain'
      />    
      <Text style={{fontSize: 30}}>{nome}</Text>
     </View>
  );
}
