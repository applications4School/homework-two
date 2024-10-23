import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from "@/constants/Colors";

export default function _layout() {
  return (
    <Tabs 
    screenOptions={{
      headerShown: false, 
      headerTitle: "Home",
    }}>
      <Tabs.Screen name = "index" options={{headerShown: false}}/>
      <Tabs.Screen name = "profile" options={{headerShown: false}}/>
    </Tabs>
  )
}

const styles = StyleSheet.create({
  container: { 
    display: "flex",
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",

  },
  btn: {
    backgroundColor: Colors.CODE_BLUE,
    padding: 10,
    borderRadius: 50,
    marginTop: 8,
  },
  btnText:{
    color: "white",
    textAlign:"center",
  }
})