import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
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

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
