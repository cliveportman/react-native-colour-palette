import React from "react";

import { View, Text, StyleSheet, SectionList } from "react-native";
import ColouredBox from "./ColouredBox";

export default function ColourPallete({
  colours,
  isRefreshing,
  refreshFunction,
}) {
  return (
    <SectionList
      sections={colours}
      keyExtractor={(item) => item.hex}
      renderItem={({ item }) => <ColouredBox name={item.name} hex={item.hex} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={[styles.text]}>{title}</Text>
      )}
      SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
      refreshing={isRefreshing}
      onRefresh={() => {
        refreshFunction();
      }}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
