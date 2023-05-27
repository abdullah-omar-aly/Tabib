import React from 'react'
import { View, Text, Button, StatusBar, KeyboardAvoidingView, ScrollView, StyleSheet, Image, FlatList, TouchableHighlight, ImageBackground } from 'react-native'
import { COLORS, ROUTES } from '../constants'

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';



function CourseList() {
    const navigation = useNavigation()
    return (
        <View>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10
                , paddingHorizontal: 20
            }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Courses</Text>
                <TouchableHighlight
                    activeOpacity={0.8}
                    underlayColor="#DDDDDD"
                    //@ts-ignore
                    onPress={() => navigation.navigate(item.route)}
                    style={{
                        padding: 5,
                        borderRadius: 10
                    }}
                >
                    <Text style={{ color: 'gray' }}>See all</Text>
                </TouchableHighlight>
            </View>

            <FlatList
                style={{ marginHorizontal: 20 }}
                //   horizontal
                data={dummyCoursesData}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        activeOpacity={0.8}
                        underlayColor="#DDDDDD"
                        //@ts-ignore
                        onPress={() => navigation.navigate(ROUTES.COURSE_DETAILS)}
                        style={{
                            // padding: 5,
                            borderRadius: 10,
                            marginBottom: 10
                        }}
                    >
                        <View
                            style={{

                                width: '100%',
                                backgroundColor: 'white',
                                paddingBottom: 10,
                                borderRadius: 15,
                                overflow: 'hidden',
                                // ios
                                shadowColor: 'black',
                                shadowOffset: {
                                    width: 7,
                                    height: -7,
                                },
                                shadowOpacity: 0.5,
                                shadowRadius: 0.2,
                                elevation: 3
                            }}
                        >
                            <Image
                                resizeMode="contain"
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlU91ftppV7E0amVyj9Lj0fiYCsaitn7dg3w&usqp=CAU' }}
                                style={{
                                    // width: '100%',
                                    height: 150,
                                    backgroundColor: COLORS.lightGray ,
                                    borderTopRightRadius: 10,
                                    borderTopLeftRadius: 10
                                }} />
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: moderateScale(17), fontWeight: 'bold' }}>{item.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, gap: 8 }}>
                                        <Image source={{ uri: 'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1' }}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: 50
                                            }} />
                                        <Text style={{ color: COLORS.darkGray }} >{item.instructor}</Text>

                                    </View>
                                    <Text style={{ color: COLORS.primary }}>${item.price}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>

                )}

            />
        </View>
    )
}

export default CourseList


const dummyCoursesData = [
    {
        id: 1,
        thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mhprofessional.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F84c63a40cf0771f03c9446b22a7e0f08%2F9%2F7%2F9781260026627_294.jpeg&tbnid=XcmPWcdUTPdYMM&vet=12ahUKEwiY1aSY-5P_AhXSsEwKHU-sDkcQMygnegUIARC9Ag..i&imgrefurl=https%3A%2F%2Fwww.mhprofessional.com%2Fcatalogsearch%2Fresult%2F%3Fq%3DPutao%2520Cen&docid=rU5_bfTvEsE1DM&w=256&h=400&itg=1&q=hematology%20book%20cover&ved=2ahUKEwiY1aSY-5P_AhXSsEwKHU-sDkcQMygnegUIARC9Ag',
        title: 'Hematology',
        instructor: 'Dr. Ramadan Selim',
        price: 1200
    },
    {
        id: 2,
        thumbnail: 'https://i.ytimg.com/vi/n6DmU1igb_4/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBk-M7-pI3uu4uee4cEECdpDus5xw',
        title: 'Hematology',
        instructor: 'Dr. Ramadan Selim',
        price: 1200

    },
    {
        id: 3,
        thumbnail: 'https://i.ytimg.com/vi/n6DmU1igb_4/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBk-M7-pI3uu4uee4cEECdpDus5xw',
        title: 'Hematology',
        instructor: 'Dr. Ramadan Selim',
        price: 1200

    },
    {
        id: 4,
        thumbnail: 'https://i.ytimg.com/vi/n6DmU1igb_4/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBk-M7-pI3uu4uee4cEECdpDus5xw',
        title: 'Hematology',
        instructor: 'Dr. Ramadan Selim',
        price: 1200

    },
]
