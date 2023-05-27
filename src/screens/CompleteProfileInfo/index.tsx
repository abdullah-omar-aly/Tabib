

import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, StatusBar } from 'react-native'
import ImagePickerExample from '../../components/ImagePicker'
import { COLORS, ROUTES } from '../../constants'
import { useForm, Controller } from 'react-hook-form';
import StyledButton from '../../components/StyledButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
type FormValues = {
  name: string
  univesity: string
  college: File

}
function CompleteProfileInfo({navigation}: any) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    // Perform form submission logic here
    console.log(data);
    navigation.push(ROUTES.MAIN )
  };
  return (
    <View style={{flex: 1 , display: 'flex' , marginTop: 40 , paddingHorizontal: 15}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <ImagePickerExample />
      <View style={{display: 'flex' , gap: 10}}>
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
            name="name"
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
            name="name"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && <Text>This field is required.</Text>}
        </View>


        <StyledButton onPress={handleSubmit(onSubmit)} >
          <Text style={{ color: 'white', textAlign: 'center' }}>Save</Text>
        </StyledButton>
      </View>
      <View style={{marginTop: 50 ,display: 'flex' , flexDirection: "row" , justifyContent: 'flex-end' }}>
        <Text style={{textAlign: 'right' , color: COLORS.primary , fontSize: 18 , display: 'flex' , justifyContent : 'center'}}>Continue</Text>
        <MaterialIcons size={30} name="double-arrow" color={COLORS.primary} />
        
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
    // marginTop: 10,
    // marginVertical:20,
    borderRadius: 15,

  }
})