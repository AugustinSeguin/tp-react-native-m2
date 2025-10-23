import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./home";
import CarteScreen from "./carte";
import ClickerScreen from "./clicker";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false, // Pas de header par défaut
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Carte") iconName = "map";
          else if (route.name === "Clicker") iconName = "stats-chart";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Carte" component={CarteScreen} />
      <Tab.Screen name="Clicker" component={ClickerScreen} />
    </Tab.Navigator>
  );
}
