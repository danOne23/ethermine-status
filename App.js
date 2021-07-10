import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import AddressInput from "./components/AddressInput/AddressInput";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AddressInput />
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
