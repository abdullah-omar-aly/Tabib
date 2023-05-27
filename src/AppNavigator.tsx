import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import ROUTES from './constants/routes'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import VideoModal from './screens/home/VideoModal';
import COLORS from './constants/colors'
import { ContactUsScreen, CourseDetailsScreen, CompleteProfileInfoScreen, EditProfileScreen, HomeScreen, ProfileScreen, SignInScreen, TermsNConditionsScreen, VerifyOTPScreen, NotificationsScreen } from './screens';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Your object's properties are variable strings and TypeScript won't let you use them as computed properties 
//for a type unless you make them readonly literals with as const.

// Specifying undefined means that the route doesn't have params.
// A union type with undefined (e.g. SomeType | undefined) means that params are optional.
// referece => https://reactnavigation.org/docs/typescript/#annotating-options-and-screenoptions


export type RootStackParamList = {
    [ROUTES.SIGN_IN]: undefined;
    [ROUTES.VERIFY_OTP]: { phoneNumber: string };
    [ROUTES.COMPLETE_PROFILE_INFO]: undefined;
    [ROUTES.HOME]: undefined
    [ROUTES.MAIN]: undefined
    [ROUTES.COURSE_DETAILS]: undefined
    [ROUTES.NOTIFICATIONS]: undefined
    // [ROUTES.TERMS_CONDITIONS]: undefined
    // [ROUTES.ABOUT_US]: undefined
    // [ROUTES.CONTACT_US]: undefined
    // [Settings]: undefined;
    // [ROUTES.VERIFICATION_SUCCESS]: undefined

};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// const Lol = createStackNavigator()

// const LolNavigator = () => (
//     <Lol.Navigator
// )

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={ROUTES.HOME}
            screenOptions={{
                tabBarShowLabel: false, tabBarActiveTintColor: COLORS.primary, headerShown: false,
            }}
        >
            <Tab.Screen
                name={ROUTES.HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<AntDesign name='home' size={size} color={color} />),
                }}
            />
            <Tab.Screen
                name={ROUTES.PROFILE}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={30} />),
                }}
            />
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                    headerTintColor: COLORS.primary, headerTitleAlign: 'center',
                    headerShown: false,
                    gestureDirection: 'horizontal-inverted'
                }}
            // initialRouteName={ROUTES.APP}

            >
    
                            <Stack.Screen name={ROUTES.MAIN} component={TabNavigator} />
                            <Stack.Screen name={ROUTES.COURSE_DETAILS} component={CourseDetailsScreen} />
                            <Stack.Screen name={ROUTES.NOTIFICATIONS} component={NotificationsScreen} options={{headerShown: true , headerTintColor: 'white'}}/>
       
                            <Stack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} />
                            <Stack.Screen name={ROUTES.VERIFY_OTP} component={VerifyOTPScreen} options={{headerShown: true , headerTintColor: 'white'}}/>
                            <Stack.Screen name={ROUTES.COMPLETE_PROFILE_INFO} component={CompleteProfileInfoScreen} options={{headerShown: true , headerTintColor: 'white' , headerTitle: "Complete your profile" , headerLeft: () => <></> }}/>
    
            </Stack.Navigator>
        </NavigationContainer>
    )
}






export default AppNavigator