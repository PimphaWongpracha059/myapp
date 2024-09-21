import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoomCard = ({ room }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{room.name}</Text>
      <Text style={styles.details}>{room.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});

export default RoomCard;
