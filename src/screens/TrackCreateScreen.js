import { Text } from "@rneui/themed";
import { SafeAreaView, StyleSheet } from "react-native";
import Map from "../components/Map";
import { requestForegroundPermissionsAsync } from "expo-location";
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
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
