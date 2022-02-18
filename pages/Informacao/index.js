import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity , Image} from 'react-native';


export default function Informacao({navigation, route}) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');


    useEffect(() => {
        const {dados} = route.params;
        console.log("Chegaram");
        console.log(dados);
        setNome(dados.nome);
        setTelefone(dados.telefone);
        setCidade(dados.cidade);
        setEstado(dados.estado);
        setCep(dados.cep);
        setNumero(dados.numero);
        setComplemento(dados.complemento);
        setBairro(dados.bairro);
        setLogradouro(dados.logradouro);
        
    } , []);


  return (
    <View style={styles.container}>
        <Text>Informações</Text>
        <Text>Nome: {nome}</Text>
        <Text>Telefone: {telefone}</Text>
        <Text>Cidade: {cidade}</Text>
        <Text>Estado: {estado}</Text>
        <Text>CEP: {cep}</Text>
        <Text>Numero: {numero}</Text>
        <Text>Complemento: {complemento}</Text>
        <Text>Bairro: {bairro}</Text>
        <Text>Logradouro: {logradouro}</Text>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    marginTop: 50,
  },

  Alura:{
    color: '#141C83',
  }
});
