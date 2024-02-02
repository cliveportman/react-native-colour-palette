import React from 'react';

import { View, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

import tailwindColours from '../assets/tailwind-colours';
import ColouredBox from '../components/ColouredBox';

export default function Page() {
  return (
    <SafeAreaView style={[styles.safe]}>
      <View style={styles.container}>
        <Link href="/tailwind-colours" asChild style={[styles.box, { marginBottom: 10}]}>
          <Pressable>
            <Image
                source={require('../assets/tailwindcss-logo.png')}
                style={{ width: 198, height: 25 }}
              />     
          </Pressable>
        </Link>
        <Link href="/brand-colours" asChild style={[styles.box]}>
          <Pressable>          
            <Image
              source={require('../assets/mw-logo.png')}
              style={{ width: 158, height: 75 }}
            />
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  heading: {
    fontSize: 24,
    marginBottom: 10,
  },

  box: {
    flex: 0.5,
    backgroundColor: 'white',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});