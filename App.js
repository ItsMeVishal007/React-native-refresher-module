import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FlatListComp from "./src/screen/FlatListComp";

import Home from "./src/screen/Home";

export default function App() {
  return (
    <ScrollView>
      <View style={{padding: 15}}>
      <Home text={"Login"} />
      {/* <FlatListComp />  */}
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
