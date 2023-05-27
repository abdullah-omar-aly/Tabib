import React from 'react'
import { View, Text, Button, StatusBar, TouchableHighlight, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, StyleSheet, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS, ROUTES } from '../../constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { FlatList, TextInput } from 'react-native-gesture-handler'




const SectionGroup = ({ children }: { children: React.ReactNode }) => (
  <View style={{
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10
  }}>
    {children}
  </View>
)

const SectionItem = ({ children, groupLength, item, ind }: { children: React.ReactNode, groupLength: Number, item?: { text: String, route: String, icon: React.ReactNode }, ind?: Number }) => {

  const navigation = useNavigation()

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="#DDDDDD"
      //@ts-ignore
      onPress={() => navigation.navigate(item.route)}
      style={{
        borderTopRightRadius: ind === 0 ? 10 : 0,
        borderTopLeftRadius: ind === 0 ? 10 : 0,
        borderBottomRightRadius: ind === Number(groupLength) - 1 ? 10 : 0,
        borderBottomLeftRadius: ind === Number(groupLength) - 1 ? 10 : 0,
      }}
    >
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: ind === 0 ? 10 : 0
      }}>
        {children}
      </View>
    </TouchableHighlight>
  )
}
function ProfileScreen({ navigation }: any) {

  return (
    <ScrollView style={{}}>

      {/* Account info */}
      <View style={Styles.headerContainer}>
        <View style={Styles.accountInfoContainer}>
          <Image source={{ uri: 'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1' }}
            style={Styles.accountInfoImage} />
          <View>
            <Text style={Styles.accountInfoName}>Abdullah omar</Text>
            <Text style={Styles.accountInfoEmail}>abdullahomar.dev@gmail.com</Text>
          </View>  
        </View>
      </View>

      {/* User Info */}
      <SectionGroup>
        {
          ProfileScreenData.account.map((item, ind) => (
            <SectionItem key={ind} item={item} ind={ind} groupLength={ProfileScreenData.account.length}>
              <View style={{ flexDirection: 'row' }}>
                <Text> {item.icon}</Text>
                <Text style={{ paddingTop: 3 }}> {item.text}</Text>
              </View>
              <MaterialIcons style={{ fontSize: 22 }} name='keyboard-arrow-right' />
            </SectionItem>

          ))
        }
      </SectionGroup>


      {/* App Info */}
      <SectionGroup>
        {
          ProfileScreenData.support.map((item, ind) => (
            <SectionItem key={ind} item={item} ind={ind} groupLength={ProfileScreenData.support.length}>
              <View style={{ flexDirection: 'row' }}>
                <Text> {item.icon}</Text>
                <Text style={{ paddingTop: 3 }}> {item.text}</Text>
              </View>
              <MaterialIcons style={{ fontSize: 22 }} name='keyboard-arrow-right' />
            </SectionItem>
          ))
        }
      </SectionGroup>


      <SectionGroup>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
          style={{
            borderRadius: 10
          }}
        >
          <View style={{
            flexDirection: 'row', padding: 10
          }}>
            <MaterialCommunityIcons name="logout" size={25} />
            <Text style={{ paddingTop: 3 }}>Logout</Text>
          </View>
        </TouchableHighlight>
      </SectionGroup>

    </ScrollView>

  )
}



export default ProfileScreen

const Styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  accountInfoContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    gap: 10
  },
  accountInfoImage: {
    width: 40,
    height: 40,
    borderRadius: 15
  },
  accountInfoName: {
    color: COLORS.white,
    fontSize: 16
  },
  accountInfoEmail: {
    color: COLORS.lightGray,
    fontSize: 12
  }

})

const ProfileScreenData = {
  support: [
    {
      text: "Terms & conditions",
      route: ROUTES.TERMS_CONDITIONS,
      icon: <MaterialCommunityIcons size={25} name="file-document-outline" />
    },
    {
      text: "Contact Us",
      route: ROUTES.CONTACT_US,
      icon: <MaterialIcons size={25} name='contact-support' />

    },
    {
      text: "About Us",
      route: ROUTES.ABOUT_US,
      icon: <MaterialIcons size={25} name='info-outline' />

    }
  ],
  account: [
    {
      text: "Edit Profile",
      route: ROUTES.EDIT_PROFILE,
      icon: <MaterialCommunityIcons name="account-edit" size={25} />

    },
    {
      text: "Change Password",
      route: ROUTES.CHANGE_PASSWORD,
      icon: <MaterialCommunityIcons name="security" size={25} />
    },
    {
      text: "Payment History",
      route: ROUTES.PAYMENT_HISTORY,
      icon: <MaterialIcons size={25} name='payments' />

    }
  ],

}