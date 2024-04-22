/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/Profile.png')} style={styles.image} />
        <Text style={styles.header}>Mark Jones</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactInfo')}>
          <Text style={styles.buttonText}>Contact Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SavingsGoal')}>
          <Text style={styles.buttonText}>Savings Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CameraScreen')}>
          <Text style={styles.buttonText}>Receipt Scanner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BudgetTracker')}>
          <Text style={styles.buttonText}>Budget Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CustomerSupport')}>
          <Text style={styles.buttonText}>Customer Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  };

const colors = {
    primary: '#31A099',
    secondary: '#FFFFFF',
    tertiary: '#19173D',
  };

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
      marginBottom: 20,
    },
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 15,
      paddingHorizontal: 40,
      marginVertical: 10,
      borderRadius: 20,
      width: '80%',
    },
    buttonText: {
      color: colors.secondary,
      fontSize: 16,
      textAlign: 'center',
    },
    image: {
      width: 180,
      height: 180,
      borderRadius: 90,
    },
  });

export { ProfileScreen };
