import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function App () {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [phrase, setPhrase] = useState('');

  let phrases = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ];

  const quebraBiscoito = () => {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    setPhrase(`"${phrases[randomNumber]}"`);
    setImg(require('./src/biscoitoAberto.png'));
  }

  const reiniciaBiscoito = () => {
    setPhrase('');
    setImg(require('./src/biscoito.png'));
  }

  return(
    <View style={styles.container}> 
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.textPhrase}> {phrase} </Text>
      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}> 
            Quebrar Biscoitinho
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]}
        onPress={ reiniciaBiscoito }
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, {color: '#121212'}]}> 
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 230,
    width: 230,
  },
  textPhrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#dd7b22",
  }
})

export default App;
