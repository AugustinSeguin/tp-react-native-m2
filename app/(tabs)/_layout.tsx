import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Map route names to Ionicons glyph names.
const getIconName = (routeName: string): keyof typeof Ionicons.glyphMap => {
  if (routeName === "Carte") return "map";
  if (routeName === "Clicker") return "stats-chart";
  return "home";
};

type TabBarIconRendererProps = {
  routeName: string;
  color: string;
  size: number;
};
const TabBarIconRenderer: React.FC<TabBarIconRendererProps> = ({
  routeName,
  color,
  size,
}) => <Ionicons name={getIconName(routeName)} size={size} color={color} />;

// createScreenOptions is defined outside the component so we don't create inline components inside the render path.
const createScreenOptions = (route: any) => {
  const routeName = route?.name ?? "";
  return {
    headerShown: false,
    tabBarActiveTintColor: "#007AFF",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <TabBarIconRenderer routeName={routeName} color={color} size={size} />
    ),
  };
};

export default function TabsLayout() {
  return (
    <Tabs screenOptions={({ route }) => createScreenOptions(route)}>
      {/* The screen files are discovered by expo-router using the filesystem. */}
      <Tabs.Screen name="Home" options={{ title: "Home" }} />
      <Tabs.Screen name="Carte" options={{ title: "Carte" }} />
      <Tabs.Screen name="Clicker" options={{ title: "Clicker" }} />
    </Tabs>
  );
}
