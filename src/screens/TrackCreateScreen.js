import "../_mockLocation";
import { Text } from "@rneui/themed";
import { SafeAreaView, StyleSheet } from "react-native";
import Map from "../components/Map";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const TrackCreateScreen = () => {
  const [isScreenFocused, setIsScreenFocused] = useState(true);
  const { addLocation } = useContext(LocationContext);

  useFocusEffect(
    useCallback(() => {
      // This runs when the screen is focused
      console.log("TrackCreateScreen focused!");
      setIsScreenFocused(true);

      // This cleanup function runs when the screen blurs or unmounts
      return () => {
        console.log("TrackCreateScreen blurred!");
        setIsScreenFocused(false);
      };
    }, [])
  );

  useLocation(addLocation, isScreenFocused);

  return (
    <SafeAreaView>
      <Text h3>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
