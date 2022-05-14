import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, Dimensions} from "react-native";
const imagem = {uri: "https://i.pinimg.com/736x/da/f6/70/daf67016b36f3ba824a9bf76145b1062.jpg"}

const width = Dimensions.get('screen').width;

export default function SaoPaulo(){
  return<>
    
    <ImageBackground style={styles.fotoFundo} source={imagem}>
    <View style={styles.bottom}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
       <Image
        style={styles.ImagemField}
        source={require('./assets/Imagem.png')}
       />
       <View style={styles.botoes}>
         <TextInput  placeholder="Digite seu nome:" style={styles.inputText}/>
         <TouchableOpacity style={styles.buttonSocio}>
          <Text style={styles.textButton}>Seja Sócio</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttonLoja}>
          <Text style={styles.textButton}>Loja Oficial</Text>
         </TouchableOpacity>
       </View>
    </View>
    </ImageBackground>
  </>
}

const styles = StyleSheet.create({
  fotoFundo:{
    flex: 1
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
  }, 
  logo: {
    width: 90,
    height: 90,
    marginTop: 20,
  },
  ImagemField:{
    width: 350,
    height: 350,
    marginLeft: 25,
  },
  buttonSocio: {
    marginTop: 20,
    width: 150,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#a01f1d',
    padding: 10,
    borderRadius: 30,
    marginLeft: 28,
  }, 
  textButton:{
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 3,
    color: '#fff'
  }, 
  buttonLoja:{
    marginTop: 10,
    width: 150,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#a01f1d',
    padding: 10,
    borderRadius: 30,
    marginLeft: 28,
    marginBottom: 10,
  },
  inputText:{
    textAlign: 'center',
    backgroundColor: '#fff',
    width: 200,
    height: 50,
    borderRadius: 30,
    fontWeight: '600',
  },
})

{/*<Entypo name="login" size={24} color="black"  /> */}