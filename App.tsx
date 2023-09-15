import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {

  const [name, setName] = React.useState('')
  const [genero, setGenero] = React.useState('')
  const [dataNascimento, setNascimento] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')
  const [idiomaCurriculo, setIdioma] = React.useState('')
  const [user, setUser] = React.useState('')
  const [confirmarSenha, setConfirmarSenha] = React.useState('')
  const [cpf, setCpf] = React.useState('')


  return (
    <View style={styles.container}>
      <TextInput placeholder='Nome' style={styles.input} value={name} onChangeText={setName}></TextInput>
      <TextInput placeholder='Genero' style={styles.input} value={genero} onChangeText={setGenero}></TextInput>
      <TextInput placeholder='Data de nascimento' style={styles.input} value={dataNascimento} onChangeText={setNascimento}></TextInput>
      <TextInput placeholder='Usuário'style={styles.input} value={user} onChangeText={setUser}></TextInput>
      <TextInput placeholder='E-mail' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
      <TextInput placeholder='Senha' style={styles.input} value={senha} onChangeText={setSenha}></TextInput>
      <TextInput placeholder='Confirme a senha' style={styles.input} value={confirmarSenha} onChangeText={setConfirmarSenha}></TextInput>
      <TextInput placeholder='CPF'style={styles.input} value={cpf} onChangeText={setCpf}></TextInput>
      <TextInput placeholder='Idioma do Currículo' style={styles.input} value={idiomaCurriculo} onChangeText={setIdioma}></TextInput>
      
      <TouchableOpacity style={styles.button}><Text style={{color: "white"}}>Cadastrar</Text></TouchableOpacity>
    <View>
      <Text style={styles.info}>Nome: {name}</Text>
      <Text style={styles.info}>Genêro: {genero}</Text>
      <Text style={styles.info}>Data de Nascimento: {dataNascimento}</Text>
      <Text style={styles.info}>Usuario: {user}</Text>
      <Text style={styles.info}>E-mail: {email}</Text>
      <Text style={styles.info}>Senha: {senha}</Text>
      <Text style={styles.info}>CPF: {cpf}</Text>
      <Text style={styles.info}>Idioma do Curriculo: {idiomaCurriculo}</Text>
    </View>
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
  info:{
  marginBottom: 10,
  fontWeight: 'bold'
  }
});
