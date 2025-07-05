import "../_mockLocation";
import { Text } from "@rneui/themed";
import { SafeAreaView, StyleSheet } from "react-native";
import Map from "../components/Map";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { useEffect, useState } from "react";
import Spacer from "../components/Spacer";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const granted = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted.");
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        }
      );
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h3>Create a Track</Text>
      <Spacer>
        <Map />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
