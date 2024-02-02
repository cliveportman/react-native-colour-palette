import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { Tabs } from 'expo-router/tabs';
import { Slot } from 'expo-router';
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
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            
            <Image
                source={require('../assets/home-icon-grey.png')}
                style={{ width: 20, height: 20, opacity: focused ? 1 : 0.25 }}
              /> 
          ),
        }}
      />
      <Tabs.Screen
        name="tailwind-colours"
        options={{
          headerShown: false,
          tabBarLabel: 'Tailwind colours',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            
            <Image
                source={require('../assets/tailwind-icon-grey.png')}
                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.25 }}
              /> 
          ),
        }}
      />
      <Tabs.Screen
        name="brand-colours"
        options={{
          headerShown: false,
          tabBarLabel: 'Brand colours',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            
            <Image
                source={require('../assets/mw-icon-grey.png')}
                style={{ width: 40, height: 25, opacity: focused ? 1 : 0.25 }}
              /> 
          ),

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
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});