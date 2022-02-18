import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ViewEditada from '../../components/View/index';


export default function Informacao({navigation, route}) {
    const [cadastros, setCadastros] = useState([]);

    //Essa função vai receber os dados do cadastro e salvar no AsyncStorage
    //Vai executar logo quando entra nessa pagina
    //Vai atulizar o numero de cadastros que foram salvos no array
    useEffect(() => {
        async function loadAsyncs(){
            const {dados} = route.params;
            
            const quant = await AsyncStorage.getItem('@quantidade');
            
            if(quant == null){
                let quantidade = 1;
                await AsyncStorage.setItem('@quantidade', '1');
                
                const dadosFormatados = JSON.stringify(dados);

                await AsyncStorage.setItem(`@${quantidade}`, dadosFormatados);
                loadCadastros();
            }else{
                let quantidade = parseInt(quant);
                
                quantidade = quantidade + 1;

                await AsyncStorage.setItem('@quantidade', quantidade.toString());
                
                const dadosFormatados = JSON.stringify(dados);

                await AsyncStorage.setItem(`@${quantidade}`, dadosFormatados);
                loadCadastros();
            }
        }   
        loadAsyncs();
    } , []);


    //Essa função vai carregar os dados do AsyncStorage quando entrar na pagina
    useEffect(() => {
        loadCadastros();
    },[]);
    
    //Essa função vai pegar os dados do AsyncStorage e colocar no array
    //Vai executar logo quando entra nessa pagina
    //Vai atulizar o numero de cadastros que foram salvos no array
    async function loadCadastros(){
        const quantidade = await AsyncStorage.getItem('@quantidade');

        if(quantidade == null){
            setCadastros([]);
            console.log('Não tem cadastros');
        }
        else{
            const dados = [];
            const quant = parseInt(quantidade);

            for(let i = 1; i <= quant; i++){
                const dadosFormatados = await AsyncStorage.getItem(`@${i}`);
                
                if(dadosFormatados != null){
                    const dadosJson = JSON.parse(dadosFormatados);
                    dados.push(dadosJson);
                }
            }

            setCadastros(dados);
        }
    }




  return (
    <View style={styles.container}>
        <ScrollView style={styles.scroll}>
        <View style={styles.boxInformation}>
            <Text style={styles.texto}>
                Informações
            </Text>

            {/*Percorre o array de cadastros e mostra na tela*/}
            {cadastros?.map((cadastro, index) => (
                cadastro != null ? (
                    <View style={styles.box} key={index}>
                        <ViewEditada identificador={"Nome"} valor={cadastro.nome}/>
                        <ViewEditada identificador={"Telefone"} valor={cadastro.telefone}/>
                        <ViewEditada identificador={"CEP"} valor={cadastro.cep}/>
                        <ViewEditada identificador={"Cidade"} valor={cadastro.cidade}/>
                        <ViewEditada identificador={"Estado"} valor={cadastro.estado}/>
                        <ViewEditada identificador={"Logradouro"} valor={cadastro.logradouro}/>
                        <ViewEditada identificador={"Número"} valor={cadastro.numero}/>
                        <ViewEditada identificador={"Bairro"} valor={cadastro.bairro}/>
                        <ViewEditada identificador={"Complemento"} valor={cadastro.complemento}/>
                    </View>
                ) : (
                   <>

                   </>
                )
            ))}
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
    box: {
        backgroundColor: '#ffffffff',
        margin: 10,
        padding: 10,
        borderRadius: 12,
        width: '90%',
        shadowColor: 'grey',
        elevation: 5,
        alignItems: 'center',
    },
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        color: '#000000',
    },
    scroll:{
        width: '100%',
    },
    boxInformation:{
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
    },
    Alura:{
        color: '#141C83',
    }
});
