import React from 'react';

import { View, Text, SafeAreaView, StyleSheet, SectionList } from 'react-native';
import SafeViewAndroid from "../components/SafeViewAndroid";
import ColouredBox from '../components/ColouredBox';

const tailwindColours = [
  { title: 'Slate', data: [{ name: 'Slate 950', hex: '#020617' }, { name: 'Slate 900', hex: '#0f172a' }, { name: 'Slate 800', hex: '#1e293b' }, { name: 'Slate 700', hex: '#334155' }, { name: 'Slate 600', hex: '#475569'}, { name: 'Slate 500', hex: '#64748b'}, { name: 'Slate 400', hex: '#94a3b8'}, { name: 'Slate 300', hex: '#cbd5e1'}, { name: 'Slate 200', hex: '#e2e8f0'}, { name: 'Slate 100', hex: '#f1f5f9'}, { name: 'Slate 50', hex: '#f8fafc'} ] },
  { title: 'Gray', data: [{ name: 'Gray 950', hex: '#030712' }, { name: 'Gray 900', hex: '#111827' }, { name: 'Gray 800', hex: '#1f2937' }, { name: 'Gray 700', hex: '#374151' }, { name: 'Gray 600', hex: '#4b5563' }, { name: 'Gray 500', hex: '#6b7280' }, { name: 'Gray 400', hex: '#9ca3af' }, { name: 'Gray 300', hex: '#d1d5db' }, { name: 'Gray 200', hex: '#e5e7eb' }, { name: 'Gray 100', hex: '#f3f4f6' }, { name: 'Gray 50', hex: '#f9fafb' } ] },
];


const App = () => {
  return (
    <SafeAreaView style={[styles.safe, SafeViewAndroid.AndroidSafeArea]}>
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

export default App;