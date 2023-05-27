import React from 'react'
import { View, Text, Button, StatusBar, KeyboardAvoidingView, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS, ROUTES } from '../constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { TextInput } from 'react-native-gesture-handler'


function Header() {
    const navigation = useNavigation()

    return (
        <View
            style={{
                backgroundColor: COLORS.primary,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                position: 'relative',

            }}>
            <View style={{ padding: 20, borderRadius: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1, gap: 10 }}>
                        <Image source={{ uri: 'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1' }}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 50
                            }} />
                        <View>
                            <Text style={{ color: '#afafaf', fontSize: 13 }} >Welcome,</Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>Abdullah omar</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate(ROUTES.NOTIFICATIONS as never )}>
                        <View style={{ borderWidth: 1, borderColor: "white", justifyContent: 'center', borderRadius: 50, width: 40, height: 40, alignItems: 'center' }}>
                            <Fontisto name="bell" color='white' size={20} />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text></Text>
                </View>
                {/* <KeyboardAvoidingView behavior="padding"> */}
                <TextInput
                    cursorColor="#2A5578"
                    style={{
                        backgroundColor: "white",
                        borderRadius: 15,
                        padding: 10,
                        marginTop: 10
                    }}
                    placeholder='Search Course Or Mentor'
                />
                {/* // onChangeText={(text) => this.setState({text})}
                    // value={this.state.text} */}
                {/* </KeyboardAvoidingView>   */}

            </View>

        </View>

        //           {/* <View style={{ backgroundColor: COLORS.lightGray, paddingHorizontal: 20, paddingTop: 30, paddingBottom: 15 }}>
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
        //       <View style={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1, gap: 10 }}>
        //         <Image source={{ uri: 'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1' }}
        //           style={{
        //             width: 40,
        //             height: 40,
        //             borderRadius: 50
        //           }} />
        //         <View>
        //           <Text style={{ color: COLORS.black }}>Abdullah omar</Text>
        //         </View>
        //       </View>
        //       <View style={{ borderWidth: 1, borderColor: COLORS.primary, justifyContent: 'center', borderRadius: 50, width: 40, height: 40, alignItems: 'center' }}>
        //         <Fontisto name="bell" color={COLORS.primary} size={20} />
        //       </View>
        //     </View>
        //   </View>


        //  */}
    )
}

export default Header



// <View style={{
//     //  flexDirection: 'row',
//     //  backgroundColor: 'yellow',
//     flex: 1,
//     // alignItems: 'center' ,
//     justifyContent: 'center',
//     width: '80%',
//     height: 200,
//     position: 'absolute',
//     bottom: -85,
//     left: '10%',
//     //  borderRadius: 20,
//     //  padding: 15
// }}>
//     <Text style={{ height: 30, color: 'white', fontWeight: 'bold', fontSize: 16 }}>Continue Learning</Text>
//     <View
//         style={{
//             flexDirection: 'row',
//             backgroundColor: 'white',
//             // width: '80%',
//             height: 130,
//             // position: 'absolute',
//             // bottom: -65,
//             // left: '10%',
//             borderRadius: 20,
//             padding: 15
//         }}>
//         <Image source={{ uri: 'https://i.ytimg.com/vi/ayxRtBHw754/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBfCy33x9plwfiLrgSzNB5BHMBGLg' }}
//             style={{
//                 flexBasis: '35%',
//                 height: '100%',
//                 borderRadius: 12
//             }} />
//         <View style={{ flexGrow: 1, flexBasis: '60%' }}>
//             <Text>Fullstack JavaScript Developer</Text>
//             <Text>by Abdullah Omar</Text>
//         </View>
//     </View>
// </View>