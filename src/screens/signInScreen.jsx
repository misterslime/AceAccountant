/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const SignIn = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <Button title="Sign In" onPress={() => navigation.navigate('MainPage')} />
        <Button title="Go Back" onPress={() => navigation.navigate('Welcome')} />
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
    title: {
      color: colors.secondary,
      fontSize: 24,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: colors.primary,
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: colors.secondary,
      fontSize: 18,
    },
    input: {
      backgroundColor: colors.secondary,
      width: '80%',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
  });

  export { SignIn };
