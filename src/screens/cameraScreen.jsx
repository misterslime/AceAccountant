import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import RNTextDetector from "rn-text-detector";

const CameraScreen = ({ navigation }) => {
    const [state, setState] = useState({
        loading: false,
        image: null,
        error: null,
        textRecognition: null
    });

    function onPress() {
        setState({ ...state, loading: true });
        type === "capture" ? launchCamera({ mediaType: "image" }, onImageSelect) : launchImageLibrary({ mediaType: "image" }, onImageSelect);
    }

    async function onImageSelect(media) {
        if (!media) {
            setState({ ...state, loading: false });
            return;
        }
        if (!!media && media.assets) {
            const file = media.assets[0].uri; 
            const textRecognition = await RNTextDetector.detectFromUri(file);
            setState({
                ...state,
                image: file,
                loading: false,
                textRecognition: textRecognition
            });
        }
    }

    async function getReceiptData() {
        var receiptOcrEndpoint = 'https://ocr.asprise.com/api/v1/receipt';
        var request = require('request');
        request.post({
        url: receiptOcrEndpoint,
        formData: {
            api_key: 'TEST',
            recognizer: 'auto',
            file: state.image
        },
        }, function(error, response, body) {
            if(error) {
                console.error(error);
            }
            return body;
        });
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>RN OCR SAMPLE</Text>
            <View style={styles.preview}>
                <TouchableOpacity style={styles.button} onPress={() => onPress("capture")}>
                    <Text>Take Photo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.preview}> 
                <TouchableOpacity style={styles.button} onPress={() => onPress("library")}>
                    <Text>Pick a Photo</Text>
                </TouchableOpacity>
            </View>
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

export { CameraScreen };