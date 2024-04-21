/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';

const EditGoal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Goal</Text>
      <Image source={require('../../assets/Edit_Saving_Goals.png')} style={styles.image} />
      <TextInput style={styles.input} placeholder="Enter Goal:" />
      <TextInput style={styles.input} placeholder="Enter Goal Amount (CAD):" />
      <TextInput style={styles.input} placeholder="Enter Monthly Deposit (CAD):" />
      <TextInput style={styles.input} placeholder="Enter Time to Reach Goal (Months):" />
      <Button title="Save Changes" />
    </View>
  );
};

  // Define the colors
  const colors = {
    primary: '#31A099', // for any buttons or squares
    secondary: '#FFFFFF', // for the letters/writing
    tertiary: '#19173D', // for the background
    quaternary: '#F4F4F4',
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
      marginBottom: 20,
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
      backgroundColor: colors.quaternary,
      width: '80%',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    label: {
      color: colors.secondary,
      fontWeight: 'bold',
      marginTop: 10,
    },
    image: {
      width: 300, // Adjust the width to fill the screen
      height: 200, // Adjust the height as needed
      marginBottom: 20, // Add margin to separate from the text
      borderRadius: 10, // Add border radius to make it rounded
    },
  });

export { EditGoal };
