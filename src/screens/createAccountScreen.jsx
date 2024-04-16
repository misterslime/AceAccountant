/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const CreateAccount = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}  placeholder="Full name" />
        <TextInput style={styles.input}  placeholder="Email address" />
        <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true} />
        <TextInput style={styles.input}  placeholder="Confirm Password" secureTextEntry={true} />
        <Button title="Create account" onPress={() => navigation.navigate('MainPage')} />
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

  export { CreateAccount};
