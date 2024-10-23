import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { Colors } from "@/constants/Colors";
import { useClerk, useUser } from '@clerk/clerk-expo';
import { useNavigation } from 'expo-router';

export default function profile() {
  const { signOut } = useClerk();
  const { user } = useUser(); // Retrieve the user's information
  const navigation = useNavigation();

  const handleSignout = async () => {
    try {
      await signOut();
      navigation.replace("index");
    } catch (error) {
      console.log("signout error");
    }
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'}} 
        style={styles.profileImage} 
      />

      {/* Looked up how to display email address */}
      <Text style={styles.email}>{user.primaryEmailAddress?.emailAddress || 'email@example.com'}</Text>

      <Button style={styles.btn} mode="outlined" onPress={handleSignout}>
        <Text style={styles.btnText}>Sign Out</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: Colors.CODE_BLUE, 
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: "#eaaa00", 
    borderWidth: 4,
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    color: "#bbbbbb", 
    fontWeight: "bold",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#ce1141",
    padding: 10,
    borderRadius: 50,
    width: 200,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
