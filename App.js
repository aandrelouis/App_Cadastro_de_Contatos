import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
const { format,parse } = require('telefone');
import {useState} from 'react';

import Cep from 'cep-promise';
import MaskInput from 'react-native-mask-input';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [logradouro, setLogradouro] = useState('');
  

  // função para através do cep, buscar o endereço completo e precher no formulário
  function usaCep(){
    Cep(cep).then(res => {
      setCidade(res.city);
      setEstado(res.state);
      setLogradouro(res.street);
      setBairro(res.neighborhood);
    })
  }

  function handleSubmit(){
    const dados = {
      nome,
      telefone,
      cidade,
      estado,
      cep,
      numero,
      complemento,
      bairro,
      logradouro
    }
    console.log(dados);
  }



  return (
    <View style={styles.container}>
      <Text>Anota ai</Text>
      
    <ScrollView style={styles.scroll}>

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Nome"
        onChangeText={text => setNome(text)}
        value={nome}
      />

      {/* Telefone recebe apenas numeros - 14 numeros */}
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        placeholder="Telefone"
        maxLength={14}
        value={telefone.replace(/^(\d{2})(\d{5})(\d)/g,'($1)$2-$3')} // mascara para o telefone
        onChangeText={(text) => setTelefone(text)}
      />

      {/* Cep recebe apenas 8 caracteres e atualiza os outros campos*/}
      <TextInput 
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Cep"
        maxLength={8}
        value={cep}
        onChangeText={(text) => setCep(text)}
        onEndEditing={usaCep}
      />


      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Logradouro"
        value={logradouro}
        maxLength={100}
        onChangeText={(text) => setLogradouro(text)}
      />

      {/*Numero pode receber numeros e caracteres, ex: 304B*/}
      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Número"
        value={numero}
        onChangeText={(text) => setNumero(text)}
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Bairro"
        value={bairro}
        onChangeText={(text) => setBairro(text)}

      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Complemento"
        onChangeText={(text) => setComplemento(text)}
        value={complemento}

      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Cidade"
        onChangeText={(text) => setCidade(text)}
        value={cidade}
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Estado"
        onChangeText={(text) => setEstado(text)}
        value={estado}
      />

      <TouchableOpacity onPress={handleSubmit}  style={styles.button}>
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>


    </ScrollView>

    <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
  input:{
    backgroundColor: 'red',
    width: '100%',
    height: 55,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
  },
  scroll:{
    width: '90%',
    backgroundColor: '#fff',
  },
  button:{
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    borderRadius: 7,
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
