import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ColouredBox = ({ name, hex }) => {
    return (
        <View>
            <Text style={[styles.text, styles.box, { backgroundColor: hex}]}>{name} {hex}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 2,
  },

  heading: {
    fontWeight: 'bold',
  },

  box: {
    backgroundColor: '#2aa198',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    borderRadius: 3,
  }
});

export default ColouredBox;