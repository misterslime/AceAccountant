import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text, FlatList, FlatListComponent } from "react-native";
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

            setState({
                ...state,
                data: getReceiptData(file),
                image: file,
                loading: false
            });
        }
    }

    async function getReceiptData(image) {
        var receiptOcrEndpoint = 'https://ocr.asprise.com/api/v1/receipt';

        fetch(receiptOcrEndpoint, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            api_key: 'TEST',
            recognizer: 'auto',
            file: image
        }),
        })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .done();
    }

    return (
        <View style={styles.container}>
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

            {state.data ? (
            <View style={styles.preview}> 
                <FlatList
                    data={state.data.receipts}
                    renderItem={({receipt}) => 
                    <FlatListComponent key={receipt.receipt_no}>
                        <Text>Receipt Number: {receipt.receipt_no}</Text>
                        <Text>Merchant: {receipt.merchant_name}</Text>
                        <Text>Address: {receipt.merchant_address}</Text>
                        <Text>Time: {receipt.time}</Text>
                        <Text>Total: {receipt.total} {receipt.currency}</Text>
                        <Text>Tax: {receipt.tax}</Text>
                        <FlatList
                            data={receipt.items}
                            renderItem={({item}) => <View>
                                <Text>{item.description} x {item.qty}</Text>
                                <Text>Cost: {item.amount} {receipt.currency}</Text>
                            </View>}
                        />
                        </FlatListComponent>
                    }
                />
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