import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import * as Battery from "expo-battery";
import * as Brightness from "expo-brightness";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // On empêche le splash natif de se cacher tout seul

export default function Splash() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const level = await Battery.getBatteryLevelAsync();
        const percent = level * 100;
        setBatteryLevel(percent);

        const { status } = await Brightness.requestPermissionsAsync();
        if (status === "granted") {
          await Brightness.setBrightnessAsync(percent > 50 ? 1 : 0.3);
        }

        setReady(true);
        await SplashScreen.hideAsync(); // On cache enfin le splash Expo
        setTimeout(() => router.replace("/(tabs)"), 2500);
      } catch (err) {
        console.warn("Erreur splash :", err);
        await SplashScreen.hideAsync();
        router.replace("/(tabs)");
      }
    };
    init();
  }, []);

  if (!ready) return null;

  const imageSource =
    batteryLevel && batteryLevel > 50
      ? require("../assets/images/splash-icon51.png")
      : require("../assets/images/splash-icon49.png");

  return (
    <ImageBackground source={imageSource} style={styles.container} resizeMode="cover">
      <Text style={styles.text}>
        Bienvenue sur {"\n"} Chat is my best hybrid friend
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
