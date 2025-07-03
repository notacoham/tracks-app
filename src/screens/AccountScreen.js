import { Button } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Text>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
