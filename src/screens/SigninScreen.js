import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { useContext, useEffect, useLayoutEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: null,
    });
  });

  useEffect(() => {
    clearErrorMessage();

    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => signin({ email, password })}
      />
      <NavLink
        linkText="Don't have an account? Sign up instead!"
        navFunction={() => navigation.goBack()}
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

export default SigninScreen;
