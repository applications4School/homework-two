import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput, Button } from "react-native-paper";
import { useSignIn, useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Colors } from "@/constants/Colors"; 

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [password, setPassword] = React.useState('');
  // const { isSignedIn } = useAuth();
  const [emailAddress, setEmailAddress] = React.useState('');

  const onSignin = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password: password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs)");
      } else {
        console.error("Sign in error");
      }
    } catch (error) {
      console.error("Sign in error", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize='none'
        value={emailAddress}
        keyboardType='email-address'
        placeholder="Email Address..."
        onChangeText={setEmailAddress}
        style={styles.input}
      />
      <TextInput
        autoCapitalize='none'
        value={password}
        keyboardType='default'
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button mode='outlined' onPress={onSignin} style={styles.btn}>
        <Text style={styles.btnText}>Sign In</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.CODE_BLUE,
  },
  input: {
    backgroundColor: Colors.CODE_GOLD, 
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: Colors.CODE_RED, 
  },
  btn: {
    backgroundColor: Colors.CODE_RED, 
    padding: 10,
    borderRadius: 50,
    width: '80%',
  },
  btnText: {
    color: Colors.CODE_GRAY, 
    textAlign: "center",
  },
});
