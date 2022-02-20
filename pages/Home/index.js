import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity , Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
  
    function navigateToCadastro() {
        navigation.navigate('Cadastro');
    }

    function navigateToInformacao() {
        navigation.navigate('Informacao');
    }



  return (
    <View style={styles.container}>

      <View>
        <Image 
          source={require('../../assets/logo/anotaLogo.png')} 
          style={styles.logo}/>
      </View>  

      <View style={styles.boxBotao}>
        <TouchableOpacity onPress={navigateToCadastro} style={styles.botao}>  
            <Text style={styles.texto}>Cadastrar</Text>
        
            <Text style={styles.icon}>
                <Icon name="plus-square-o" size={40} color="#ffffffff" />;
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToInformacao} style={styles.botao}>
            <Text style={styles.texto}>Informações</Text>
            <Text style={styles.icon}>
                <Icon name="navicon" size={40} color="#ffffffff" />;
            </Text>
        </TouchableOpacity>
      </View>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    paddingTop:40,
    },
    logo:{
        width: 200,
        height: 200,
        marginTop: 50,
    },
    texto:{
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        color: '#ffffffff',
        alignSelf: 'center',
    },
    icon:{  
        alignSelf: 'center',
    },
    boxBotao:{
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
    },
    botao:{
        backgroundColor: '#141C83',
        width: '60%',
        height: 60,
        borderRadius: 7,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    Alura:{
        color: '#141C83',
    }
});
