import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/ginastica.png')} 
          style={styles.logo}
        />
        <Text style={styles.titulo}>FitTrak</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Link href="/adm" asChild>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/" asChild>
          <TouchableOpacity>
            <Text style={styles.linkTexto}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </Link>

        <View style={styles.divisorContainer}>
          <View style={styles.divisorLinha} />
          <Text style={styles.divisorTexto}>ou</Text>
          <View style={styles.divisorLinha} />
        </View>

        <Link href="/" asChild>
          <TouchableOpacity style={styles.botaoSecundario}>
            <Text style={styles.textoBotaoSecundario}>Criar nova conta</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  titulo: {
    color: '#ffc107',
    fontSize: 28,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 24,
    elevation: 2,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#2d2d2d',
    color: '#fff',
    fontSize: 16,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffc107',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#ffc107',
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  textoBotao: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  linkTexto: {
    color: '#ffc107',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  divisorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divisorLinha: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },
  divisorTexto: {
    color: '#aaa',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  botaoSecundario: {
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffc107',
    marginTop: 10,
  },
  textoBotaoSecundario: {
    color: '#ffc107',
    fontSize: 18,
    fontWeight: 'bold',
  },
});