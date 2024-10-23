import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Colors } from "@/constants/Colors"; 
import { useNavigation } from 'expo-router'; 

export default function index() {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to my coding world!</Text>
      </View>

      <Image 
        source={{ uri: 'https://wallpapers.com/images/high/coding-background-9izlympnd0ovmpli.webp' }} 
        style={styles.heroImage} 
      />

      
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>See below!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnSecondary]}  >
        <Text style={styles.btnText}>Explore My Projects!</Text>
      </TouchableOpacity>


      <View style={styles.footer}>
        <Text style={styles.footerText}>copywrite claim</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CODE_BLUE,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    padding: 20,
    backgroundColor: '#ce1141',
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    color: "#eaaa00", 
    fontWeight: "bold",
    textAlign: "center",
  },
  heroImage: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginVertical: 20,
  },
  btn: {
    backgroundColor: Colors.CODE_BLUE,
    padding: 12,
    borderRadius: 50,
    marginTop: 8,
    width: 200,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnSecondary: {
    backgroundColor: "#eaaa00",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    color: "#bbbbbb",
  }
});
