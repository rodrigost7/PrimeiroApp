import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Texto = styled.Text`
  margin-top: 58px;
  color: white;
  font-size: 25px;
  text-align: center;
`;

const Tema = styled.Text`
  color: white;
  font-size: 25px;
  margin: 15px;
  background-color: #6D758F;
  padding: 5px;
  border-radius: 3px;
`;

const ImagemQuad = styled.Image`
  width: 150px; 
  height: 150px;
  border-radius: 5px;
`;

const Container = styled.View`
  height: 450px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  border-radius: 5px;
`;

const ImagemRetan = styled.Image`
  width: 300px; 
  height: 150px;
  border-radius: 5px;
`;

const Tela = styled.View`
  flex: 1;
  background-color: #202233;
  align-items: center;
  justify-content: center;
`;

const PainelQuadrado = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 5px;
`;
const PainelRetangulo = styled.View`
  width: 300px;
  height: 150px;
`;

export default function componentName() {

  return (
    <Tela>
      <Texto>Galeria de Imagens do {'\n'} 
        Antonio Rodrigo</Texto>
      <Tema>Carros Aesthetics</Tema>

      <Container>
        <PainelQuadrado >
          <ImagemQuad
            source={require('./src/images/chevette.jpg')}
          />
        </PainelQuadrado>
        <PainelQuadrado>
          <ImagemQuad
          source={require('./src/images/skyline.png')}
          />
        </PainelQuadrado>
        <PainelQuadrado>
          <ImagemQuad
            source={require('./src/images/supra.jpg')}
          />
        </PainelQuadrado>
        <PainelQuadrado>
          <ImagemQuad
            source={require('./src/images/dodge.png')}
          />
        </PainelQuadrado>

        <PainelRetangulo>
          <ImagemRetan
            source={{uri: 'https://i.pinimg.com/originals/bc/41/85/bc418541399b71bf72cb0b072c7ab428.jpg'}}
          />
        </PainelRetangulo>
      </Container>
    </Tela>
  );
}
