import  { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        shadowOffset: {
            width: 0,
            height: 2,
          },
        shadowOpacity: 0.4,
        elevation: 8,
        alignItems: 'center',
    },
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        color: '#000000',
        width: '70%',
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
    },
    boxLoading:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    textoLoading:{
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        color: '#141C83',
    },
    boxHeader:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon:{
        margin: 10,
    },
    botao:{
        width: '90%',
        marginTop: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141C83',
        borderRadius: 12,
        marginBottom: 10,
    },
    textoBotao:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffffff',
    },
});
