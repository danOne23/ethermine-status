import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import FetchData from "./components/FetchData/FetchData";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FetchData miner={"0xe17c5b456ef63903b245d9bed887f4b00f8fe654"} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
  },
});
