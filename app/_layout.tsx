import "@/global.css";
import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "sans-regular": require("../assets/fonts/Urbanist-Regular.ttf"),
    "sans-medium": require("../assets/fonts/Urbanist-Medium.ttf"),
    "sans-bold": require("../assets/fonts/Urbanist-Bold.ttf"),
    "sans-semibold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "sans-extrabold": require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/Urbanist-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (error) console.error(error);

  if (!fontsLoaded) return null;

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack screenOptions={{ headerShown: false }} />
    </ClerkProvider>
  );
}
