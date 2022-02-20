import React from 'react';
import { View , Text , TextInput, StyleSheet} from 'react-native';


function InputPadrao(props){
    return (
        <>
        <TextInput
            style={styles.input}
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={(text) => props.setValue(text)}
        />
        </>
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
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.4,
      elevation: 8,
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
  
export default InputPadrao;