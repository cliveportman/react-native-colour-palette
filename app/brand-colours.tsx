import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import brandColours from "../assets/brand-colours";
import ColourPallete from "../components/ColourPallete";

export default function Page() {
  return (
    <SafeAreaView style={[styles.safe]}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.heading]}>Brand colours</Text>
        <ColourPallete colours={brandColours} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },

  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
});
