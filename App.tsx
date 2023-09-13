import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [name, setName] = React.useState
  const [genero, setGenero] = React.useState
  const [dataNascimento, setNascimento] = React.useState
  const [email, setEmail] = React.useState
  const [idiomaCurriculo, setIdioma] = React.useState


  return (
    <View style={styles.container}>
      <TextInput placeholder='Nome' style={styles.input}></TextInput>
      <TextInput placeholder='Genero' style={styles.input}></TextInput>
      <TextInput placeholder='Data de nascimento' style={styles.input}></TextInput>
      <TextInput placeholder='Usuário'style={styles.input}></TextInput>
      <TextInput placeholder='E-mail' style={styles.input}></TextInput>
      <TextInput placeholder='Senha' style={styles.input}></TextInput>
      <TextInput placeholder='Confirme a senha' style={styles.input}></TextInput>
      <TextInput placeholder='CPF'style={styles.input}></TextInput>
      <TextInput placeholder='Idioma do Currículo' style={styles.input}></TextInput>
      
      <TouchableOpacity style={styles.button}><Text style={{color: "white"}}>Cadastrar</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    marginBottom: 30,
    borderBottomWidth: 1,
    width: 200,
    height: 30

  },
  button:{
    display: 'flex',
    width: 200,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#4b98b8",
  
  },
});
