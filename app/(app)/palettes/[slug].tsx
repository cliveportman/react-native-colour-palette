import React, { useState, useCallback, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useLocalSearchParams, Tabs } from "expo-router";

import ColourPallete from "../../../components/ColourPallete";
import { Link } from "expo-router";

export default function Page() {
  const { slug } = useLocalSearchParams();
  const url = `https://json-server-eta-dusky.vercel.app/palettes/${slug}.json`;

  // state
  const [colours, setColours] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(true);

  // api call to fetch the colours
  const fetchColours = useCallback(async () => {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setColours(data.colours);
      setIsRefreshing(false);
    }
  }, [slug]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchColours();
    setIsRefreshing(false);
  };

  // passing empty array as second argument will only run the effect once
  // but we want to fetch the colours every time the slug changes
  useEffect(() => {
    setIsRefreshing(true);
    fetchColours();
  }, [slug]);

  return (
    <SafeAreaView style={[styles.safe]}>
      <Tabs.Screen options={{ headerShown: false }} />
      <Link href="/modal">Present modal</Link>
      <View style={styles.container}>
        <Text style={[styles.text, styles.heading]}>{slug} colours</Text>
        <ColourPallete
          colours={colours}
          isRefreshing={isRefreshing}
          refreshFunction={handleRefresh}
        />
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
    textTransform: "capitalize",
  },
});
