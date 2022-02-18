import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
            }else{
                let quantidade = parseInt(quant);
                
                quantidade = quantidade + 1;

                await AsyncStorage.setItem('@quantidade', quantidade.toString());
                
                const dadosFormatados = JSON.stringify(dados);

                console.log(quantidade);
                console.log(dadosFormatados);

                await AsyncStorage.setItem(`@${quantidade}`, dadosFormatados);
            }
        }   
        loadAsyncs();
    } , []);


    //Essa função vai pegar os dados do AsyncStorage e colocar no array
    //Vai executar logo quando entra nessa pagina
    //Vai atulizar o numero de cadastros que foram salvos no array
    useEffect(() => {
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
                console.log(dados);
            }
        }
        loadCadastros();
    },[]);



  return (
    <View style={styles.container}>
        <ScrollView style={styles.scroll}>
        <View style={styles.boxInformation}>
            <Text style={styles.texto}>
                Informações
            </Text>

            {cadastros?.map((cadastro, index) => (
                cadastro != null ? (
                    <View style={styles.box} key={index}>
                        <View style={styles.boxHeaderTitle}>
                            <Text style={styles.strong}>Nome:</Text>
                            <Text>{cadastro.nome}</Text>
                        </View>

                        <View style={styles.boxHeader}>
                            <Text style={styles.strong}>Telefone:</Text>
                            <Text>{cadastro.telefone}</Text>
                        </View>

                        <View style={styles.boxHeader}>
                            <Text style={styles.strong}>Cidade:</Text>
                            <Text>{cadastro.cidade}</Text>
                        </View>

                        <View style={styles.boxHeader}>
                            <Text style={styles.strong}>Estado:</Text>
                            <Text>{cadastro.estado}</Text>
                        </View>

                        <View style={styles.boxHeader}>
                            <Text style={styles.strong}>Bairro:</Text>
                            <Text>{cadastro.bairro}</Text>
                        </View>

                        <View style={styles.boxHeader}>
                            <Text style={styles.strong}>Rua:</Text>
                            <Text>{cadastro.logradouro}</Text>
                        </View>

                        <View style={styles.boxHeader}> 
                            <Text style={styles.strong}>Número:</Text>    
                            <Text>{cadastro.numero}</Text>
                        </View>

                        <View style={styles.boxHeader}>

                            <Text style={styles.strong}>Complemento:</Text>
                            <Text>{cadastro.complemento}</Text>
                        </View>

                        <View style={styles.boxHeader}>
                            <Text style={styles.strong}>CEP:</Text>
                            <Text>{cadastro.cep}</Text>
                        </View>

                    </View>
                ) : (
                    <View key={index}>
                        
                    </View>
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
    boxHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        fontSize: 20,
        width: '80%',
    },
    boxHeaderTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        fontSize: 30,
        width: '80%',
    },
    strong:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    Alura:{
        color: '#141C83',
    }
});
