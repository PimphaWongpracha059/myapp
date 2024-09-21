import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

// Sample data for rooms and availability
const sampleRooms = [
  { id: '1', name: 'Multimedia 1', timeSlots: ['Free', 'Free'] },
  { id: '2', name: 'Multimedia 2', timeSlots: ['Free', 'Free'] },
  { id: '3', name: 'Multimedia 3', timeSlots: ['Free', 'Free'] },
  { id: '4', name: 'Multimedia 4', timeSlots: ['Free', 'Free'] },
  { id: '5', name: 'Multimedia 5', timeSlots: ['Free', 'Free'] },
  { id: '6', name: 'Multimedia 6', timeSlots: ['Free', 'Free'] },
];

const RoomsScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Floor 3');

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Reservation Room</Text>

      {/* Reservation Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Reservations can be made from 06:00 A.M. - 11:00 P.M.</Text>
        <Text style={styles.infoText}>Only reserved 1 day in advance</Text>
        <Text style={styles.warningText}>
          If you don’t pick up the room key within 15 minutes, the reservation will be automatically canceled.
        </Text>
      </View>

      {/* Floor Tabs */}
      <View style={styles.tabsContainer}>
        {['Floor 3', 'Floor 4', 'Floor 5'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.selectedTabButton]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Room Availability Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <Text style={styles.cellHeader}>Date / Time</Text>
            <Text style={styles.cellHeader}>08:30 - 09:30</Text>
            <Text style={styles.cellHeader}>09:30 - 10:30</Text>
          </View>
          <FlatList
            data={sampleRooms}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.name}</Text>
                {item.timeSlots.map((slot, index) => (
                  <Text key={index} style={styles.cell}>
                    {slot}
                  </Text>
                ))}
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#fffbea',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  warningText: {
    fontSize: 13,
    color: '#ff6347',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  selectedTabButton: {
    backgroundColor: '#ff6347',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  selectedTabText: {
    color: '#fff',
  },
  tableContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cellHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    width: 120,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  cell: {
    fontSize: 14,
    padding: 10,
    width: 120,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default RoomsScreen;
