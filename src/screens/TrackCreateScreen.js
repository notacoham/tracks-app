import { Text } from "@rneui/themed";
import { SafeAreaView, StyleSheet } from "react-native";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h3>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
