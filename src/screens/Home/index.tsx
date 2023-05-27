import React from 'react'
import {  StatusBar, ScrollView, StyleSheet, Image, FlatList } from 'react-native'
import { COLORS, ROUTES } from '../../constants'

import Header from '../../components/Header'
import CourseList from '../../components/CourseList'




function HomeScreen({ navigation }: any) {
  // const route = useRoute()

  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar
        backgroundColor={COLORS.primary}
        hidden={false}
      />
      <Header />
      <CourseList />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,

  },
  scrollView: {
    // backgroundColor: COLORS.lightGray,
    // paddingTop: StatusBar.currentHeight ,
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
