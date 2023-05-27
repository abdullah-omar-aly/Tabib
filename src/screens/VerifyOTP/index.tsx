import React, { useState } from 'react'
import { ROUTES } from '../../constants';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import StyledButton from '../../components/StyledButton';
import { ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';


const VerifyOTP = ({navigation} :any) => {



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
        <StatusBar backgroundColor={colors.primary}/>
        <View style={{display:'flex' ,gap: 10 , height: 200}}>
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
      <StyledButton style={{ marginTop: 10 }} onPress={handleOTPSubmit} disabled={value.length != 6}>
        {
          loading
            ? <ActivityIndicator size="small" color="white" />
            : <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Login</Text>
        }
      </StyledButton>
        </View>
    </SafeAreaView>
  )

}



export default VerifyOTP


const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 , display: 'flex' , justifyContent: 'center' , gap: 10},
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 45,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    borderRadius: 10 ,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});