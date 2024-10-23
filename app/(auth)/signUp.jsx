import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Colors } from "@/constants/Colors";

export default function SignUp() {
  const { signUp, setActive, isLoaded } = useSignUp();
  const router = useRouter();
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [code, setCode] = React.useState('');

  const onSignUp = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });

      setPendingVerification(true);
    } catch (error) {
      console.log('Signup error', error);
    }
  };

  const onVerifyEmail = async () => {
    if (!isLoaded) {
      return;
    }
    if (!code) {
      console.log("Please enter the verification code.");
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({
          session: completeSignUp.createdSessionId,
        });

        router.push("/(tabs)");
      } else {
        console.log('Signup error', JSON.stringify(completeSignUp, null, 2));
      }
    } catch (error) {
      console.log('Verification error', error);
    }
  };

  return (
    <View style={styles.container}>
      {!pendingVerification ? (
        <>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            keyboardType="email-address"
            placeholder="Email Address..."
            onChangeText={setEmailAddress}
            style={styles.input}
          />
          <TextInput
            autoCapitalize="none"
            value={password}
            secureTextEntry={true}
            placeholder="Password..."
            onChangeText={setPassword}
            style={styles.input}
          />
          <Button mode="outlined" onPress={onSignUp} style={styles.btn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </Button>
        </>
      ) : (
        <>
          <TextInput
            value={code}
            keyboardType="numeric"
            placeholder="Verification Code..."
            onChangeText={setCode}
            style={styles.input}
          />
          <Button mode="outlined" onPress={onVerifyEmail} style={styles.btn}>
            <Text style={styles.btnText}>Verify Email</Text>
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: "white", 
    textAlign: "center",
  },
});
