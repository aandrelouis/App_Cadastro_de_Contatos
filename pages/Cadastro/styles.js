import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffffff',
      alignItems: 'center',
    },
    boxLogo:{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      width: '100%',
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
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonModal: {
      borderRadius: 12,
      padding: 10,
      elevation: 4
    },
    buttonClose: {
      backgroundColor: "#141C83",
      marginTop: 10,
      marginBottom: 10,
      alignSelf: "center",
      width: '90%',
  
    },
    textStyle: {
      color: "#ffffffff",
      fontWeight: "bold",
      textAlign: "center"
    },
    viewTelaModal: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    botaoVoltar:{
      alignContent: 'center',
      alignSelf: 'flex-start',
      marginLeft: 20,
    },
  });
  