import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const SigninScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text>SigninScreen</Text>
      <Button title="Go back to Sign Up" onPress={() => navigation.goBack()} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
