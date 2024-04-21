/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Canada, Mark!</Text>
        <Text style={styles.subheader}>Are You...?</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={styles.buttonText}>An International Student</Text>
        <Image source={require('../assets/International_Student.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={styles.buttonText}>On a Work Permit</Text>
        <Image source={require('../assets/Small_Business.jpg')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={styles.buttonText}>Planning to Start A Business</Text>
        <Image source={require('../assets/Working_Permit.jpeg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const colors = {
  primary: '#31A099', // for buttons
  secondary: '#FFFFFF', // for text
  tertiary: '#19173D', // for background
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheader: {
    color: colors.secondary,
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 20,
    width: '80%',
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export { MainPage };
