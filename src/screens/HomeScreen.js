import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
