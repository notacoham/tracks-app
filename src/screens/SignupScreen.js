import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "@rneui/themed";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text h3>Sign Up for Tracker</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
