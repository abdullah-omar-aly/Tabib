import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ImageBackground, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Entypo from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uuid from 'react-native-uuid';

import { storage } from '../../firebase.config';

const profilePicturePlaceholder = 'https://imgs.search.brave.com/8GeOJon7zrB0CxwkDACaOlt18BlOevTEj2nzLNb_EaY/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/ZWk5VnNjOHN0eU9H/WjluTjBJM1JBSGFF/OCZwaWQ9QXBp'

export default function ImagePickerExample() {
    const [image, setImage] = useState<string>(profilePicturePlaceholder);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleSubmit = async () => {
        try {
            // get a refrence for the picture
            const uniqueId = uuid.v4();
            const picRef = ref(storage, `images/${uniqueId}`);

            // Fetch the local file and convert it to a Blob
            const response = await fetch(image);
            const fileBlob = await response.blob();

            // get the image extension
            const parts = image.split('.');
            const extension = parts[parts.length - 1];

            uploadBytes(picRef, fileBlob, {
                contentType: 'image/' + extension
            }).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        console.log(image)
    }, [image])

    return (
        <View style={{alignSelf: 'center' , marginBottom: 10}}>
            <TouchableOpacity activeOpacity={0.8} onPress={pickImage}>
                <ImageBackground
                    source={{ uri: image }}
                    style={{ width: 150, height: 150, borderRadius: 100, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Entypo name="camera" size={50} color="rgba(0,0,0,0.5)" />

                </ImageBackground>
            </TouchableOpacity>
            {/* <Button title='Upload' onPress={handleSubmit} /> */}

        </View>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        width: 200,
        height: 200,
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        borderRadius: 100
    },
    image: {
        resizeMode: 'cover',
    },
    contentContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add a semi-transparent background for the centered content
        padding: 10,
    },
});