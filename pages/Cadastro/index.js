import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity , Image, Alert} from 'react-native';
import {useState} from 'react';
import InputPadrao from '../../components/Input/index';
import Cep from 'cep-promise';


export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [logradouro, setLogradouro] = useState('');
  
  

  // função para através do cep, buscar o endereço completo e precher no formulário os campos
  function usaCep(){
    Cep(cep).then(res => {
      setCidade(res.city);
      setEstado(res.state);
      setLogradouro(res.street);
      setBairro(res.neighborhood);
    })
  }


  // função para colocar todos os dados do formulário em um objeto
  // Depois fazer uma verificação para ver se todas validações foram feitas
  //depois chama a rota de informações enviando o objeto como parâmetro
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
    
    if(nome == ""){
      Alert.alert('Preencha o campo nome');
      return false;
    }
    else if(telefone == '' || telefone.length < 14){
      Alert.alert('Preencha o campo telefone com 14 dígitos','Formato: (XX)XXXXX-XXXX');
      return false;
    }
    else if(cep == ''){
      Alert.alert('Preencha o campo cep com 8 digitos');
      return false;
    }
    else if(numero == ''){
      Alert.alert('Preencha o campo numero');
      return false;
    }
    else if(logradouro == '' || logradouro == null || logradouro.length < 10){
      Alert.alert('Preencha o campo logradouro com no mínimo 10 caracteres');
      return false;
    }
    else if(cep == '' || cep == null || cep.length < 8){
      Alert.alert('Preencha o campo cep com no mínimo 8 caracteres');
      return false;
    }
    else{
      console.log(dados);
      navigation.navigate('Informacao', {dados});
    }
  }

  //essa função irá dividir o número de telefone em 3 grupos cada um com um certo numero de digitos
  //depois ele organiza os grupos colocando sinais entre eles
  function addMascara(valor){
    return  valor.replace(/^(\d{2})(\d{5})(\d)/g,'($1)$2-$3');
  }

  return (
    <View style={styles.container}>

      <View>
        <Image 
          source={require('../../assets/logo/anotaLogo.png')} 
          style={styles.logo}/>
      </View>  


      
    <ScrollView style={styles.scroll}>
      <View style={styles.divScroll}>
      
     {/* Campo Obrigatório*/}
      <InputPadrao placeholder="Nome" value={nome} setValue={setNome} keyboardType={'default'}/>

      {/* Telefone recebe apenas numeros - 14 numeros */}
      {/* Campo Obrigatório*/}
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        placeholder="Telefone"
        maxLength={14} //recebe até 14 caracteres contando com o "()" e "-", ex: (11)99999-9999"
        value={addMascara(telefone)} // criar mascara para o telefone
        onChangeText={(text) => setTelefone(text)}
      />

      {/* Cep recebe apenas 8 caracteres(numeros) e atualiza os outros campos*/}
      {/* Campo Obrigatório*/}
      <TextInput 
        style={styles.input}
        keyboardType="number-pad"
        placeholder="CEP"
        maxLength={8} //recebe apenas 8 caracteres
        value={cep}
        onChangeText={(text) => setCep(text)}
        onEndEditing={usaCep}
      />


      {/* Logradouro irá receber texto e numero*/}
      {/* Campo Obrigatório*/}
      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Logradouro"
        value={logradouro}
        maxLength={100} //recebe até 100 caracteres e pelo menos 10 caracteres
        onChangeText={(text) => setLogradouro(text)}
      />


      {/*Numero pode receber numeros e caracteres, ex: 304B*/}
      {/* Campo Obrigatório*/}
      <InputPadrao placeholder="Número" value={numero} setValue={setNumero} keyboardType={'default'}/>

      {/*Bairro pode receber texto e numeros*/}
      <InputPadrao placeholder="Bairro" value={bairro} setValue={setBairro} keyboardType={'default'}/>

      {/*Complemento pode receber texto e numeros*/}
      <InputPadrao placeholder="Complemento" value={complemento} setValue={setComplemento} keyboardType={'default'}/>

      {/*Cidade pode receber texto e numeros*/}
      <InputPadrao placeholder="Cidade" value={cidade} setValue={setCidade} keyboardType={'default'}/>

      <InputPadrao placeholder="Estado" value={estado} setValue={setEstado} keyboardType={'default'}/>

      <TouchableOpacity onPress={handleSubmit}  style={styles.button}>
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>

      </View>

    </ScrollView>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
  },
  logo:{
    width: 200,
    height: 200,
    
  },
  input:{
    backgroundColor: '#ffffffff',
    width: '90%',
    height: 55,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#000000',
    fontSize: 16,
    shadowColor: 'grey',
    elevation: 3,
  },
  scroll:{
    width: '100%',
    backgroundColor: '#ffffffff',
  },
  button:{
    backgroundColor: '#141C83',
    width: '90%',
    height: 50,
    borderRadius: 7,
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  buttonText:{
    color: '#ffffffff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  divScroll:{
    width: '100%',
    padding: 10,  
    alignItems: 'center',

  },
  Alura:{
    color: '#141C83',
  }
});
