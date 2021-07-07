import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import List from './components/List';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.TextH1}>Countries</Text>
        <List />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  TextH1: {
    fontSize: 30,
    padding: 10,
    margin: 'auto',
  },
});
