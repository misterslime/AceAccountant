import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RNCamera } from '@react-native-camera/camera';
import { FirebaseMLVision } from '@react-native-firebase';
import RNTextDetector from "react-native-text-detector";

const CameraScreen = () => {
  return (
    <View style={styles.container}>
        <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
        />
    </View>
  );
};

const processImageForOCR = async (imageUri) => {
    try {
        const processedImage = await FirebaseMLVision.cloudDocumentTextRecognizerProcessImage(imageUri);
        const recognizedText = processedImage.text;
        return recognizedText;
    } catch (error) {
        console.error('Error processing image for OCR:', error);
    }
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

export { CameraScreen };