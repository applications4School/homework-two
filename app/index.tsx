import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
  // console.log(Colors.CODE_BLUE)
  const router = useRouter();
  return (
    <View
     style = {styles.container}
    >
      <View style = {styles.logoContaier}> 
      <Image style = {styles.logo} source={require('./../assets/images/codingImg.jpg')} />
      </View>
      <View style = {styles.subContainer}> 
        <Text style={styles.tagLineTop}>Learn <Text style = {styles.CODE}>CODE!!!</Text></Text>
        <Text  style={styles.tagLine}>We want to help you in your struggles, we know how hard it can be.</Text>
        <Button
        style = {styles.btn}
        mode="text"
        onPress={() => router.push("/(auth)/signIn")}>
          <Text style = {styles.btnText}>Sign In</Text>
        </Button>
        <Button
        style = {styles.btn}
        mode="text"
        onPress={() => router.push("/(auth)/signUp")}
        >
        
           <Text style = {styles.btnText}>Sign Up</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: Colors.CODE_BLUE,
    display: "flex",
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",

  },
  logoContaier: { 
    display: "flex",
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 25,

  },

  logo: {
    width: 300, 
    height: 300,
  },
  subContainer: { 
    padding: 20, 
    marginTop: -20,

  },
  tagLineTop: { 
    fontSize: 40, 
    textAlign: "center",
    color: Colors.CODE_LIGHTGRAY,

  },
  tagLine: { 
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    color: Colors.CODE_LIGHTGRAY,
  },
  CODE: { 
    color: Colors.CODE_GOLD
  },
  btn: {
    backgroundColor: Colors.CODE_RED,
    padding: 10,
    borderRadius: 50,
    marginTop: 8,
  },
  btnText:{
    color: "white",
    textAlign:"center",
  }
})
