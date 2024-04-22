import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text, FlatList, FlatListComponent, Image } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const CameraScreen = ({ navigation }) => {
    const [state, setState] = useState({
        loading: false,
        data: null,
        image: null,
        error: null
    });

    function onPress(type) {
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
            setState({ ...state, image: file });

            const response = await fetch('https://ocr.asprise.com/api/v1/receipt', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    api_key: 'TEST',
                    recognizer: 'auto',
                    ref_no: 'ocr_nodejs_123',
                    file: file
                }),
            })
            
            const json = await response.json();

            setState({ ...state, 
                data: await json,
                loading: false 
            });
        }
    }

    function getTotal() {
        let total = 0;

        return total;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>RN OCR SAMPLE</Text>
            <Image source={require('../assets/Scanner.png')} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => onPress("capture")}>
                <Text style={styles.buttonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onPress("library")}>
                <Text style={styles.buttonText}>Pick a Photo</Text>
            </TouchableOpacity>

            {state.loading ? (
            <View style={styles.container}> 
                <Text style={styles.title}>Please wait</Text>
            </View>
            ) : null}

            {!!state.data && !state.loading ? (
            <View style={styles.container}> 
                <Text style={styles.title}>Total: {'' + getTotal()}</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BudgetTracker', {total: state.data.total})}>
                    <Text style={styles.buttonText}>Submit Expense</Text>
                </TouchableOpacity>
            </View>
            ) : null}
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
        paddingVertical: 15,
        paddingHorizontal: 60,
        marginVertical: 10,
        borderRadius: 10,
        width: '100%',
      },
      buttonText: {
        color: colors.secondary,
        fontSize: 16,
        textAlign: 'center',
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
    image: {
        width: 300, // Adjust the width to fill the screen
        height: 200, // Adjust the height as needed
        marginBottom: 20, // Add margin to separate from the text
        borderRadius: 10, // Add border radius to make it rounded
      },
});

export { CameraScreen };