import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/StackNavigator";
import { PlaceContext } from "./src/Context/PlaceContext";

export default function App() {
  return (
    <>
      <PlaceContext>
        <Navigation />
      </PlaceContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
