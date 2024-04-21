/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';

const NewGoal = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create a New Goal</Text>
        <Image source={require('../../assets/Saving_Goals.jpg')} style={styles.image} />
        <TextInput style={styles.input} placeholder="What's your Goal?" />
        <TextInput style={styles.input} placeholder="Goal Amount (CAD)" />
        <TextInput style={styles.input} placeholder="Monthly Deposit (CAD)" />
        <TextInput style={styles.input} placeholder="Time to Reach your Goal: (Months)" />
        <Button title="Save Goal" />
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
    image: {
      width: 300, // Adjust the width to fill the screen
      height: 200, // Adjust the height as needed
      marginTop: 20,
      marginBottom: 20, // Add margin to separate from the text
      borderRadius: 10, // Add border radius to make it rounded
    },
  });

  export { NewGoal };
