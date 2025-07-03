import { StyleSheet, View } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: null,
    });
  });

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
        linkText="Already have an account? Sign in instead!"
        navFunction={() => navigation.navigate("Signin")}
      />
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
