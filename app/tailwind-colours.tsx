import React from 'react';

import { View, Text, SafeAreaView, StyleSheet, SectionList } from 'react-native';

import tailwindColours from '../assets/tailwind-colours';
import ColouredBox from '../components/ColouredBox';

export default function Page() {
  return (
    <SafeAreaView style={[styles.safe]}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.heading]}>Tailwind colours</Text>
        <SectionList
          sections={tailwindColours}
          keyExtractor={(item) => item.hex}
          renderItem={({ item }) => <ColouredBox name={item.name} hex={item.hex} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={[styles.text]}>{title}</Text>
          )}
          SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
});