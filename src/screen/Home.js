import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Home = ({ text }) => {
  const [value, setValue] = useState("");
  return (
    <View>
        <Text>Name:</Text>
      <TextInput
        style={{
          height: 30,
          borderColor: "lightblue",
          borderWidth: 1,
          outline: "none",
        }}
      />
      <Text>Password:</Text>
      <TextInput
        style={{
          height: 30,
          borderColor: "lightblue",
          borderWidth: 1,
          outline: "none",
          marginBottom: 16,
        }}
      />
      <Button
        title={text}
        style={{
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Home;
