import { useAuth } from "@clerk/clerk-expo";
import { Stack, Redirect } from "expo-router";

export default function AuthroutesLayout() {
    const {isSignedIn} = useAuth;
    const {isSignedUp} = useAuth;

    if (isSignedIn) {
        return <Redirect href= "/(tabs)"/>
    }
    if (isSignedUp) {
        return <Redirect href= "/(tabs)"/>
    }

  return (
    <Stack/>
  )
}