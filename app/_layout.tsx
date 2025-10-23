import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Splash screen */}
      <Stack.Screen name="index" />

      {/* Layout des tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
