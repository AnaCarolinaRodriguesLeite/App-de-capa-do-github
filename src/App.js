// control m aparece opções do debug menu que é uma API
import React from "react";
import {
  View, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar, 
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlToMyGithub = 'https://github.com/AnaCarolinaRodriguesLeite';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/49570180?v=4';

const App = ()=>{
  const handlePressGoToGithub = async ()=> {
    console.log("Verificando link");
    const res = await Linking.canOpenURL(urlToMyGithub);
    console.log("Link aprovado");
    console.log("Abrindo link...");
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    //proteger para não fugir na área do iphone
    <SafeAreaView style = {style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle = "light-content"/>
      <View  style = {style.content}>
        <Image accessibilityLabel="Imagem da Ana" style = {style.avatar} source={{uri: imageProfileGithub}}/>
        <Text accessibilityLabel="Texto do nome" style = {[style.defaultText, style.name]}>
          Ana Carolina
        </Text>
        <Text accessibilityLabel="nickname" style = {[style.defaultText, style.nickname]}>
        AnaCarolinaRodriguesLeite
        </Text>
        <Text accessibilityLabel="Definição da ana" style = {[style.defaultText, style.description]}>
          Estudante de Engenharia de Software apaixonada em aprender novas tecnologias.
        </Text>
        <Pressable onPress = {handlePressGoToGithub}>
          <View style = {style.button}>
            <Text style = {[style.defaultText,style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    backgroundColor: colorGithub,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  avatar:{
    height: 200,
    weight: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});