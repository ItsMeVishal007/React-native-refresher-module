import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const TextInputComp = ({ handleChangeText, text, placeholder }) => {
  return (
    <View>
      <TextInput
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          outline: 'none' ,
          border: '2px solid lightblue',
          fontSize: 16,
          borderRadius: 5
        }}
        onChangeText={handleChangeText}
        defaultValue={text}
        placeholder={placeholder}
      />
    </View>
  );
};


export default TextInputComp;
