import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Audio } from "expo-av";
import * as SMS from "expo-sms";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loadingDog, setLoadingDog] = useState(false);

  // Jouer le son du chat + compteur
  const handleChat = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/cat.mp3")
      );
      await sound.playAsync();

      let newCount = await AsyncStorage.getItem("chatClicks");
      let newCountInt = (newCount ? Number.parseInt(newCount) : 0) + 1;
      await AsyncStorage.setItem("chatClicks", newCountInt.toString());
    } catch (err) {
      console.warn("Erreur son chat :", err);
    }
  };

  // Clique sur le bouton Dog : fetch image + préparation SMS
  const handleDogButton = async () => {
    try {
      setLoadingDog(true);
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogImage(data.message);

      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        await SMS.sendSMSAsync(["0606060606"], "Je n'aime pas les chats");
      } else {
        Alert.alert("SMS non disponible sur cet appareil");
      }
    } catch (err) {
      console.warn("Erreur Dog :", err);
      Alert.alert("Erreur lors de l'appel à l'API Dog");
    } finally {
      setLoadingDog(false);
    }
  };

  // Clique sur l'image du chien : +1 compteur
  const handleDogImageClick = async () => {
    try {
      let newCount = await AsyncStorage.getItem("dogClicks");
      let newCountInt = (newCount ? Number.parseInt(newCount) : 0) + 1;
      await AsyncStorage.setItem("dogClicks", newCountInt.toString());
    } catch (err) {
      console.warn("Erreur compteur Dog :", err);
    }
  };

  const handleQuit = () => {
    Alert.alert("Quit", "L'application va se fermer", [
      { text: "OK", onPress: () => {} },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>

      {/* Image du chat */}
      <TouchableOpacity onPress={handleChat}>
        <Image
          source={require("../../assets/images/cat.png")}
          style={styles.catImage}
        />
      </TouchableOpacity>
      <Text style={styles.label}>Chat</Text>

      {/* Bouton Dog */}
      <TouchableOpacity style={styles.button} onPress={handleDogButton}>
        <Text style={styles.buttonText}>Dog</Text>
      </TouchableOpacity>

      {/* Image du chien (clic incrémente compteur) */}
      {dogImage && (
        <TouchableOpacity onPress={handleDogImageClick}>
          <Image source={{ uri: dogImage }} style={styles.dogImage} />
        </TouchableOpacity>
      )}

      {loadingDog && (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={{ marginTop: 20 }}
        />
      )}

      {/* Bouton Quit */}
      <TouchableOpacity style={styles.button} onPress={handleQuit}>
        <Text style={styles.buttonText}>Quit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  catImage: { width: 200, height: 200, marginVertical: 10, borderRadius: 15 },
  dogImage: { width: 250, height: 250, marginTop: 20, borderRadius: 15 },
  label: { fontSize: 18, marginBottom: 20, fontWeight: "bold" },
});
