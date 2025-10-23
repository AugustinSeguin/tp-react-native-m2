import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import * as Battery from "expo-battery";
import * as Brightness from "expo-brightness";
import * as SplashScreen from "expo-splash-screen";

export default function Splash() {
  const router = useRouter();
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        // 1️⃣ On empêche le splash natif de disparaître
        await SplashScreen.preventAutoHideAsync();

        // 2️⃣ Récupération batterie
        const level = await Battery.getBatteryLevelAsync();
        const percent = level * 100;
        setBatteryLevel(percent);

        // 3️⃣ Réglage luminosité
        const { status } = await Brightness.requestPermissionsAsync();
        if (status === "granted") {
          await Brightness.setBrightnessAsync(percent > 50 ? 1 : 0.3);
        }

        // 4️⃣ Attendre 2,5 sec pour afficher le splash
        setTimeout(async () => {
          // 5️⃣ Cacher le splash natif
          await SplashScreen.hideAsync();

          // 6️⃣ Naviguer vers les tabs
          router.replace("/(tabs)");
        }, 2500);
      } catch (err) {
        console.warn("Erreur splash :", err);
        await SplashScreen.hideAsync();
        router.replace("/(tabs)");
      }
    };

    init();
  }, []);

  // Choix de l'image selon batterie
  const imageSource =
    batteryLevel !== null && batteryLevel > 90
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
