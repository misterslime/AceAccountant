/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Learn about Canada’s Banking With us</Text>
        <Text style={styles.title}>We are your new financial guide to recommend the best bank account for you!</Text>
        <Button title="Create account" onPress={() => navigation.navigate('CreateAccount')} />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
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

export { SignUp };
