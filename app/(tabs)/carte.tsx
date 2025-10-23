import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, LatLng } from "react-native-maps";

export default function CarteScreen() {
  const mapRef = useRef<MapView>(null);

  const cities: LatLng[] = [
    { latitude: 43.1242, longitude: 5.928 },   // Toulon
    { latitude: 48.8566, longitude: 2.3522 },  // Paris
  ];

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(cities, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map}>
        {cities.map((city, index) => (
          <Marker key={index} coordinate={city} title={index === 0 ? "Toulon" : "Paris"} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: Dimensions.get("window").width, height: Dimensions.get("window").height },
});
