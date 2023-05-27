import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    ActivityIndicator,
    Text,
} from "react-native"
import { COLORS, ROUTES } from "../../constants";
import PhoneInput from "react-native-phone-number-input";
import StyledButton from "../../components/StyledButton";
import * as FirebaseAuth from "firebase/auth";
import { auth } from '../../../firebase.config';
import { useNavigation } from '@react-navigation/native'
import { Image } from "react-native";


const Login = ({ navigation }: any) => {

    // const navigation = useNavigation()

    const [value, setValue] = useState("102030405");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);

    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        console.log(value)
        console.log(formattedValue)


    }, [value, formattedValue])

    const onCaptchVerify = () => {
        //@ts-ignore
        if (!global.recaptchaVerifier) {
            //@ts-ignore
            global.recaptchaVerifier = new FirebaseAuth.RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    // callback: (response) => {
                    callback: () => {

                        // signIn();
                    },
                    "expired-callback": () => {
                        //
                    },
                },
                auth
            );
        }
    }

    const singIn = () => {


        console.log('sign up start')
        const checkValid = phoneInput.current?.isValidNumber(value);
        setShowMessage(true);
        setValid(checkValid ? checkValid : false);
        // setLoading(true)
        console.log(formattedValue)
        navigation.navigate(ROUTES.VERIFY_OTP, { phoneNumber: formattedValue })


        // onCaptchVerify();
        ////@ts-ignore
        // const appVerifier = global.recaptchaVerifier;

        // FirebaseAuth.signInWithPhoneNumber(auth, formattedValue, appVerifier)
        //     .then((confirmationResult) => {
        //         // SMS sent. Prompt user to type the code from the message, then sign the
        //         // user in with confirmationResult.confirm(code).
        //         //@ts-ignore
        //         global.confirmationResult = confirmationResult;
        //         console.log("result after send the otp", confirmationResult)
        //         setLoading(false)
        //         console.log('done')
        //         // toast.success('OPT sended successfully!')
        //         navigation.navigate(ROUTES.VERIFY_OTP)
        //         console.log('done')
        //     }).catch((error) => {
        //         // Error; SMS not sent
        //         console.log(error);
        //         setLoading(false);
        //     });

    }
    return (


        < View style={styles.container} >
            <StatusBar backgroundColor={COLORS.primary} />
            <SafeAreaView style={styles.wrapper}>
                <View style={{ marginBottom: 0 }}>
                    <Image
                        source={{ uri: 'https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/9dd99ce3-8177-4817-bb92-d768a71e2de8/design-previews/671cd1d6-a4d6-4eab-8e69-10e778569288/1685141170172-thumbnail.jpeg' }}
                        style={{ width: "100%", alignSelf: 'center', height: 120 }} />
                </View>
                {showMessage && (
                    <View style={styles.message}>
                        <Text>Value : {value}</Text>
                        <Text>Formatted Value : {formattedValue}</Text>
                        <Text>Valid : {valid ? "true" : "false"}</Text>
                    </View>
                )}
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="EG"
                    layout="first"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    codeTextStyle={{}}
                    containerStyle={{ borderRadius: 20 }}
                    textInputStyle={{}}
                    flagButtonStyle={{}}
                    textContainerStyle={{ borderRadius: 20 }}
                    countryPickerButtonStyle={{}}
                />
                <StyledButton style={{ marginTop: 10 }} onPress={singIn}>
                    {
                        loading
                            ? <ActivityIndicator size="small" color="white" />
                            : <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Send Code</Text>
                    }
                </StyledButton>

            </SafeAreaView>
            <View style={{ height: '20%' }}>

            </View>
        </View >
    );
}

export default Login


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        height: '80%'
    },
    message: {

    },
    button: {

    }
});

