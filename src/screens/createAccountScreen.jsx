/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreateAccount = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Creating your account</Text>
      <Text style={styles.subheader}>Let's organize your expenses and create some goals!</Text>
      <TextInput style={styles.input} placeholder="Full name" />
      <TextInput style={styles.input} placeholder="Email address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const colors = {
  primary: '#31A099',
  secondary: '#FFFFFF',
  tertiary: '#19173D',
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheader: {
    color: colors.secondary,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.secondary,
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 16,
    textAlign: 'center',
  },
});

export { CreateAccount };
