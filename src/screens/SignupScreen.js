import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import Spacer from "./components/Spacer";
import { useLayoutEffect } from "react";

const SignupScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: null,
    });
  });

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer />
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 125,
  },
});

export default SignupScreen;
