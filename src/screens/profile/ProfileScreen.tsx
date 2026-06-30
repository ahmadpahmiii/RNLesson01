import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👨‍💻</Text>
      <Text style={styles.name}>Fahmi</Text>
      <Text style={styles.role}>Senior Android Developer</Text>
      <Text style={styles.learning}>🚀 Learning React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {fontSize: 72, marginBottom: 16},
  name: {fontSize: 28, fontWeight: 'bold', color: '#1A1A1A'},
  role: {fontSize: 16, color: '#666666', marginTop: 8},
  learning: {fontSize: 14, color: '#007AFF', marginTop: 16},
});

export default ProfileScreen;