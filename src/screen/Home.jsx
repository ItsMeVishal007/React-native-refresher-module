import React, { useState } from "react";
import TextInputComp from "./textInput";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = ({ text }) => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 100,
          border: "2px solid lightgrey",
          borderRadius: 5,
          padding: 5,
          alignItems: 'center'
        }}
      >
        <View>
          <Text>{value.username}</Text>
        </View>
        <View>
          <Text>{value.password}</Text>
        </View>
      </View>

      <Text style={styles.label}>Name:</Text>
      <TextInputComp
        placeholder={"Username"}
        handleChangeText={(text) => {
          setValue((previousData) => ({
            ...previousData,
            username: text,
          }));
        }}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInputComp
        placeholder={"Password"}
        handleChangeText={(text) => {
          setValue((previousData) => ({
            ...previousData,
            password: text,
          }));
        }}
      />
      <View style={{ marginTop: 10 }}>
        <Button
          title={text}
          style={{
            marginTop: 20,
            borderRadius: 5
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: 100,
    backgroundColor: "lightblue",
  },
  label: {
    marginTop: 10,
    fontSize: 21,
    marginBottom: 5,
  },
});

export default Home;
