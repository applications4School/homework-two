// Projects.jsx
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from "@/constants/Colors";

const Projects = () => {
  return (
    <ScrollView 
      contentContainerStyle={styles.container} // Use contentContainerStyle for child layout
    >
      <View style={styles.projectContainer}>
        <Image source={{ uri: 'https://welearncode.com/building-a-kickass-portfolio/og-portfolio.png' }} style={styles.image} />
        <Text style={styles.title}>Portfolio Website</Text>
        <Text style={styles.description}>Application built with React Native.</Text>
      </View>

      <View style={styles.projectContainer}>
        <Image source={{ uri: 'https://user-images.githubusercontent.com/61280281/99399723-0b3fa980-290c-11eb-8728-03d974be548d.png' }} style={styles.image} />
        <Text style={styles.title}>To-Do App</Text>
        <Text style={styles.description}>Application built with React Native.</Text>
      </View>

      <View style={styles.projectContainer}>
        <Image source={{ uri: 'https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1600' }} style={styles.image} />
        <Text style={styles.title}>Weather App</Text>
        <Text style={styles.description}>Application built with React Native.</Text>
      </View>

      <View style={styles.projectContainer}>
        <Image source={{ uri: 'https://bloggerspassion.com/wp-content/uploads/2020/03/Best-Blogging-Apps.jpg' }} style={styles.image} />
        <Text style={styles.title}>Blogging Platform</Text>
        <Text style={styles.description}>Application built with React Native.</Text>
      </View>

      <View style={styles.projectContainer}>
        <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_apps.jpg?v=1665592014' }} style={styles.image} />
        <Text style={styles.title}>E-Commerce App</Text>
        <Text style={styles.description}>Application built with React Native.</Text>
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.CODE_BLUE,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  projectContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    width: '90%',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#13274f',
    marginVertical: 5,
  },
  description: {
    textAlign: 'center',
    color: '#aaaaaa',
  },
  btn: {
    backgroundColor: '#ce1141',
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  btnSecondary: {
    backgroundColor: '#13274f',
  },
});


export default Projects;