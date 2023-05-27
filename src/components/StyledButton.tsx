import React from 'react'
import { Text, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type StyledButtonProps = {
    children: React.ElementType;
    style?: ViewStyle | TextStyle | ImageStyle;
    onPress: () => void

}

const StyledButton = (props: any) => {
    const { onPress, style, children , disabled } = props
    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.9} style={{ backgroundColor: 'transparent' , opacity: disabled ? 0.5 : 1 }} onPress={onPress}>
            <View style={[styles.button, style]}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default StyledButton



const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 20 ,
        shadowColor: 'black',
        shadowOffset: {
            width: 7,
            height: -7,
        },
        shadowOpacity: 0.8,
        shadowRadius: 0.8,
        elevation: 10
    },
    buttonText: {
        color: COLORS.white,
        textAlign: 'center'
    }
})