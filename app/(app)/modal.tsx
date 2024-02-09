import React from "react";
import { View, Text } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Modal() {
  // just in case a user has navigated to this page directly
  const isPresented = router.canGoBack();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Modal</Text>
      {isPresented && <Link href="/">Dismiss</Link>}
      <StatusBar style="light" />
    </View>
  );
}
