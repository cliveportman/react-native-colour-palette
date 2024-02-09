import { SafeAreaView, StyleSheet, Image } from "react-native";
import { Tabs } from "expo-router/tabs";
import SafeViewAndroid from "../components/SafeViewAndroid";

export default function Layout() {
  return (
    <>
      <SafeAreaView style={[styles.safe, SafeViewAndroid.AndroidSafeArea]}>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("../assets/home-icon-grey.png")}
                  style={{ width: 20, height: 20, opacity: focused ? 1 : 0.25 }}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="(app)"
            options={{
              href: null,
              headerShown: false,
            }}
          />
        </Tabs>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
