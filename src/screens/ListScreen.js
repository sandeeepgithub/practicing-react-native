import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ListScreen = () => {
  const listArray = [
    {
      name: "Item #1",
    },
    {
      name: "Item #2",
    },
    {
      name: "Item #3",
    },
    {
      name: "Item #4",
    },
  ];

  return (
    <FlatList
      data={listArray}
      renderItem={({ item }) => <Text key={ind}> {item.name} </Text>}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
