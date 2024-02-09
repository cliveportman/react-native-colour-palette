import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, SafeAreaView } from "react-native";
import { Link, router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Modal() {
  const [useRgb, setUseRgb] = useState(false);
  const [hideValues, setHideValues] = useState(false);
  const toggleRgb = () => setUseRgb((previousState) => !previousState);
  const toggleHideValues = () =>
    setHideValues((previousState) => !previousState);

  // just in case a user has navigated to this page directly
  const isPresented = router.canGoBack();

  return (
    <SafeAreaView style={[styles.safe]}>
      <View style={styles.container}>
        <Stack.Screen
          options={{ headerShown: true, title: "Settings for palettes" }}
        />
        <View style={styles.item}>
          <View>
            <Text style={styles.label}>Use RGB values</Text>
            <Text style={styles.helperText}>Defaults to hex values</Text>
          </View>
          <Switch
            trackColor={{ false: "#f43f5e", true: "#65a30d" }}
            thumbColor={useRgb ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleRgb}
            value={useRgb}
          />
        </View>
        <View style={styles.item}>
          <View>
            <Text style={styles.label}>Hide values</Text>
            <Text style={styles.helperText}>Defaults to hex values</Text>
          </View>
          <Switch
            trackColor={{ false: "#f43f5e", true: "#65a30d" }}
            thumbColor={useRgb ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleHideValues}
            value={hideValues}
          />
        </View>
        {isPresented && <Link href="/">Dismiss</Link>}
        <StatusBar style="light" />
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
  item: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  helperText: {
    color: "gray",
  },
});
