import React, { useState } from 'react'
import { COLORS, ROUTES } from '../../constants';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import StyledButton from '../../components/StyledButton';
import { ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';
import { useRoute } from '@react-navigation/native'

const VerifyOTP = ({ navigation }: any) => {
  const route = useRoute()
  const { phoneNumber }: any = route.params
  console.log('param list ', route.params)
  console.log('param', phoneNumber)

  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: 6 });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleOTPSubmit = () => {
    console.log("OPT", value)
    // console.log(value.length)
    setLoading(true);
    navigation.replace(ROUTES.COMPLETE_PROFILE_INFO)
    //@ts-ignore
    // global.confirmationResult
    //   .confirm(value)
    //   .then(async (res: any) => {
    //     console.log(res._tokenResponse.isNewUser);
    //     console.log(res.user)
    //     // setUser(res.user);
    //     console.log("result after confirm otp", res)
    //     setLoading(false);
    //     if (res._tokenResponse.isNewUser) {
    //       // return navigation.navigate(ROUTES.COMPLETE_PROFILE_INFO)
    //       // return navigate('/auth/personal-info', { replace: true })
    //     }
    //     // navigation.navigate(ROUTES.APP , {})
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  }


  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={colors.primary} />

      <View style={{display: 'flex' , alignItems: 'center' , marginVertical: 20}}>
        <MaterialIcons name="security" size={100} color={COLORS.primary}/>
      </View>
      <View>
          <Text style={{textAlign: 'center' , fontSize: 16}}>We have sent the verification code to your mobile number</Text>
        </View>

      <View style={{ display: 'flex', gap: 5, height: 200 }}>
        <View style={{ marginBottom: 10 }}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>



        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: 'center', gap: 10 }}>
          <Text style={{ fontSize: 18, letterSpacing: 1 }}>{phoneNumber}</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()} style={{ borderWidth: 1, borderColor: COLORS.primary, borderRadius: 100, padding: 3 }}><Feather name='edit-3' size={20} color={COLORS.primary} /></TouchableOpacity>
        </View>

        <StyledButton style={{ marginTop: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', elevation: 0 }} onPress={handleOTPSubmit} disabled={value.length != 6}>
          {
            loading
              ? <ActivityIndicator size="small" color="white" />
              : <Text style={{ color: 'rgb(0,0,0)', fontSize: 18, textAlign: 'center' }}>Send Again</Text>
          }
        </StyledButton>
        <StyledButton style={{ marginTop: 10 }} onPress={handleOTPSubmit} disabled={value.length != 6}>
          {
            loading
              ? <ActivityIndicator size="small" color="white" />
              : <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Submit</Text>
          }
        </StyledButton>
      </View>
    </SafeAreaView>
  )

}



export default VerifyOTP


const styles = StyleSheet.create({
  root: { display: 'flex', justifyContent: 'center' , gap: 10 , padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 45,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: COLORS.primary,
  },
});