import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, StatusBar } from 'react-native'
import ImagePickerExample from '../../components/ImagePicker'
import { COLORS, ROUTES } from '../../constants'
import { useForm, Controller } from 'react-hook-form';
import StyledButton from '../../components/StyledButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import uuid from 'react-native-uuid';
import { db, storage } from '../../../firebase.config';
import { getDownloadURL, ref } from 'firebase/storage';
import { User, updateProfile } from 'firebase/auth';
import { useAuthContext } from '../../context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { CommonActions } from '@react-navigation/native';


type FormValues = {
  name: string
  university: string
  college: string
  year: string
}


function CompleteProfileInfo({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const auth = useAuthContext()
  const currentUser = auth.currentUser as User


  const onSubmit = async (data: FormValues) => {

    console.log(data);

    try {
      console.log('form submitted', data)

      // Create a reference to 'images/{uniqueId}.jpg'
      const picRef = ref(storage, `images/${uuid.v4()}`);


      //upload the profile picture
      ////////

      const profilePicUrl = await getDownloadURL(picRef)
      console.log(profilePicUrl)

      //don't forget to make a transaction with the two operations
      //update the user Info in the auth service
      const response = await updateProfile(currentUser as User, { displayName: data.name, photoURL: profilePicUrl })

      // Add a user info copy in firestore collection "users"
      await setDoc(doc(db, "users", currentUser.uid), {
        uid: currentUser.uid,
        name: currentUser.displayName,
        profilePicUrl,
        phoneNumber: currentUser.phoneNumber
      });
      console.log('Profile updated!', response);

      //navigate to the Home Screen
      navigation.navigate(ROUTES.MAIN, { replace: true })

    } catch (error) {
      console.log(error)
    }
    // navigation.push(ROUTES.MAIN)

    // Reset the navigation stack and remove all screens
    navigation.dispatch(
      CommonActions.reset({
        index: 0, // Index of the new screen in the stack
        routes: [
          { name: ROUTES.MAIN }, // New screen to navigate to
        ],
      })
    );
  };
  return (
    <View style={{ flex: 1, display: 'flex', marginTop: 40, paddingHorizontal: 15 }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <ImagePickerExample />
      <View style={{ display: 'flex', gap: 10 }}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Name"
              value={value}
              onChangeText={onChange}
              style={styles.input}
            />
          )}
          name="name"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.name && <Text>This field is required.</Text>}
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="University"
                value={value}
                onChangeText={onChange}
                style={styles.input}
              />
            )}
            name="university"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && <Text>This field is required.</Text>}
        </View>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="College"
                value={value}
                onChangeText={onChange}
                style={styles.input}
              />
            )}
            name="college"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && <Text>This field is required.</Text>}
        </View>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Year"
                value={value}
                onChangeText={onChange}
                style={styles.input}
              />
            )}
            name="year"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && <Text>This field is required.</Text>}
        </View>

        <StyledButton style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={handleSubmit(onSubmit)} >
          <Text style={{ color: 'white' }}>Save & Continue </Text>
          <MaterialIcons size={30} name="double-arrow" color="white" />
        </StyledButton>
      </View>

    </View>
  )
}

export default CompleteProfileInfo




const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 10,
    borderRadius: 15,
  }
})