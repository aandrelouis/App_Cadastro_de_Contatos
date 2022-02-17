import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Anota ai</Text>
      
    <ScrollView style={styles.scroll}>

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Nome"
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Telefone"
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Cep"
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Logradouro"
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Número"
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Bairro"
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Complemento"
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Cidade"
      />

      <TextInput 
        style={styles.input}
        keyboardType="default"
        placeholder="Estado"
      />


      <Button title="Salvar" />
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
  }
});
