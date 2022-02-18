import React from 'react';
import { View , Text , StyleSheet} from 'react-native';


function ViewEditada(props){
    return (
        <View style={styles.boxHeader}>
            <Text style={styles.strong}>{props.identificador}:</Text>
            <Text>{props.valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    boxHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        fontSize: 20,
        width: '80%',
    },
    strong:{
        fontWeight: 'bold',
        fontSize: 16,
    },
  });
  

export default ViewEditada;