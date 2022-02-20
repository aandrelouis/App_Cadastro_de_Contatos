import { StyleSheet, 
        Text, View, TextInput, 
        Button, ScrollView, 
        TouchableOpacity , Image, Alert, Modal, Pressable} from 'react-native';
import {useState} from 'react';
import InputPadrao from '../../components/Input/index';
import Cep from 'cep-promise';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles.js';
import {addMascara} from './function.js';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [problema, setProblema] = useState("");
  
  

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
      setProblema("O campo nome é obrigatório");
      setModalVisible(true);
      return false;
    }
    else if(telefone == '' || telefone.length < 14){
      setProblema("Preencha o campo telefone com 14 dígitos,Formato: (XX)XXXXX-XXXX");
      setModalVisible(true);
      return false;
    }
    else if(cep == ''){
      setProblema("Preencha o campo cep com 8 digitos");
      setModalVisible(true);
      return false;
    }
    else if(numero == ''){
      setProblema("Preencha o campo numero");
      setModalVisible(true);
      return false;
    }
    else if(logradouro == '' || logradouro == null || logradouro.length < 10){
      setProblema("Preencha o campo logradouro com no mínimo 10 caracteres");
      setModalVisible(true);
      return false;
    }
    else if(cep == '' || cep == null || cep.length < 8){
      setProblema("Preencha o campo CEP com no mínimo 8 caracteres");
      setModalVisible(true);
      return false;
    }
    else{
      console.log(dados);
      navigation.navigate('Informacao', {dados});
    }
  }

  //redirecionar para a pagina home
  function navigationHome(){
    navigation.navigate('Home');
  }



  return (
    <View style={styles.container}>

      <View style={styles.boxLogo}>
        <TouchableOpacity onPress={navigationHome} style={styles.botaoVoltar}>
          <Text style={styles.icon}>
              <Icon name="arrow-left" size={25} color="#000" />
          </Text>
        </TouchableOpacity>

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

    {/* Modal para mostrar as validações dos campos obrigatorios */}
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.viewTelaModal}>
            <View style={styles.modalView}>
              <Text>{problema}</Text>
              <Pressable
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

