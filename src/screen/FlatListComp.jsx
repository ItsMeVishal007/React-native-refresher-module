import React from "react";
import { FlatList, Text, View } from "react-native";

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const FlatListComp = () => {
  const arr = [
    {
      name: "vishal",
    },
    {
      name: "Rahul",
    },
    {
      name: "Raman",
    },
    {
      name: "Rohit",
    },
    {
      name: "Kamal",
    },
  ];

  const renderItem = ({ item }) => <Item title={item.name} />;

  return (
    <View>
      <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default FlatListComp;
