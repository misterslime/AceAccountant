/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../config/firebase'

const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = async () => {
    try {
      const auth = getAuth(firebase);
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('MainPage');
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle sign-in error (e.g., display an error message)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In to your Account</Text>
      <Text style={styles.subheader}>Remember, having organized finances is the key to maintaining an organized and stress-free life!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define the colors
const colors = {
  primary: '#31A099', // for any buttons or squares
  secondary: '#FFFFFF', // for the letters/writing
  tertiary: '#19173D', // for the background
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    color: colors.secondary,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 5,
    borderRadius: 10,
    width: '80%',
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: colors.secondary,
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export { SignIn };
