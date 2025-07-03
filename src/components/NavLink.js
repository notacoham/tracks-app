import { Text } from "@rneui/themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";

const NavLink = ({ linkText, navFunction }) => {
  return (
    <TouchableOpacity onPress={navFunction}>
      <Spacer>
        <Text style={styles.link}>{linkText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default NavLink;
