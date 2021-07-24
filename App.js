import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Home from "./src/screen/Home";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <Text>Head of the App</Text>
        </View>
        <Home text={"Login"} />
        <Text>Foot of the App</Text>
      </View>
    </ScrollView>
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
