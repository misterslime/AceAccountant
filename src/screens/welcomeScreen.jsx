/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learn about your Expenses in Canada With us</Text>
      <Text style={styles.subheader}>We are your new financial tracker to help organize your expenses and goals!</Text>
      <Image source={require('../assets/Tracking_Expenses.jpg')} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Sign In</Text>
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
  image: {
    width: '100%', // Adjust the width to fill the screen
    height: 200, // Adjust the height as needed
    marginBottom: 20, // Add margin to separate from the text
    borderRadius: 10, // Add border radius to make it rounded
  },
});

export { Welcome };
