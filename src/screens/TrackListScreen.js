import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackListScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to Track Details"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
