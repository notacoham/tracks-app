import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>TrackDetailScreen</Text>
      <Button title="Go to Track List" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
