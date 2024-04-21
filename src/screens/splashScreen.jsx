/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.greenSquare}>
        <Text style={styles.title}>ACE ACCOUNTING</Text>
        <Text style={styles.title}>Made for Canadian New Comers</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={() => navigation.navigate('Welcome')} />
      </View>
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
  greenSquare: {
    backgroundColor: colors.primary,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export { SplashScreen };

