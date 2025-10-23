import React, { useState, useCallback } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function ClickerScreen() {
  const [chatClicks, setChatClicks] = useState(0);
  const [dogClicks, setDogClicks] = useState(0);

  // Recharge les compteurs chaque fois que l'écran est affiché
  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadClicks = async () => {
        const chat = await AsyncStorage.getItem("chatClicks");
        const dog = await AsyncStorage.getItem("dogClicks");
        if (isActive) {
          setChatClicks(chat ? Number.parseInt(chat) : 0);
          setDogClicks(dog ? Number.parseInt(dog) : 0);
        }
      };

      loadClicks();

      return () => {
        isActive = false;
      };
    }, [])
  );

  const resetClicks = async () => {
    await AsyncStorage.setItem("chatClicks", "0");
    await AsyncStorage.setItem("dogClicks", "0");
    setChatClicks(0);
    setDogClicks(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistiques des clics</Text>
      <Text style={styles.stats}>Chat : {chatClicks}</Text>
      <Text style={styles.stats}>Dog : {dogClicks}</Text>
      <Button title="Réinitialiser" onPress={resetClicks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  stats: { fontSize: 18, marginVertical: 5 },
});
