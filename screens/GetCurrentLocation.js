// import dependencies
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Animated } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function GetCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let latitude = "";
  let longitude = "";
  if (errorMsg) {
    //text = errorMsg;
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }

  // console.log(latitude);
  // console.log(longitude);

  return (
    <View style={{ top: 20, bottom: 0, right: 40 }}>
      <MapView
        style={styles.map}
        region={{
          latitude: Number(latitude),
          longitude: Number(longitude),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: Number(longitude) ? latitude : 0,
            longitude: Number(longitude) ? longitude : 0,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: 280,
    height: 100,
  },
});
