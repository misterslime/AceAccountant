import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OCRResultScreen = ({ route }) => {
    const { imageUri, recognizedText } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.text}>{recognizedText}</Text>
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
    preview: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

export { OCRResultScreen };