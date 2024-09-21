import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { colors } from '../styles/colors'; // Importing colors from the styles
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Icons for the bottom navigation

const HomeScreen = ({ navigation }) => {
  const userInfo = {
    name: 'นางสาว ดวงจันทร์ ดวงจันทร์',
    studentId: '6531503000',
    status: 'ปกติ',
    profileImage: require('../assets/profile-image.png') // Replace with the correct image
  };

  const services = [
    { id: '1', name: 'Enrolled Course', icon: require('../assets/library-image.png') }, 
    { id: '2', name: 'Exam Schedule', icon: require('../assets/library-image.png') }, 
    { id: '3', name: 'Transcript', icon: require('../assets/library-image.png') }, 
    { id: '4', name: 'Enrolled Result', icon: require('../assets/library-image.png') },
    { id: '5', name: 'Finance', icon: require('../assets/library-image.png') },
    { id: '6', name: 'Student Card', icon: require('../assets/library-image.png') },
    { id: '7', name: 'MFU Library', icon: require('../assets/library-image.png'), navigateTo: 'Bookings' }, // Add navigateTo for MFU Library
  ];
  
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={userInfo.profileImage} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.nameText}>{userInfo.name}</Text>
          <Text style={styles.detailText}>รหัส : {userInfo.studentId}</Text>
          <Text style={styles.detailText}>สถานะ : {userInfo.status}</Text>
        </View>
      </View>
  
      {/* Service Section */}
      <Text style={styles.sectionTitle}>Educational Service</Text>
      <FlatList
        data={services}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => item.navigateTo ? navigation.navigate(item.navigateTo) : null} // Navigate if navigateTo is defined
          >
            {item.icon ? (
              <Image source={item.icon} style={styles.serviceIcon} />
            ) : (
              <View style={styles.emptyService} />
            )}
            <Text style={styles.serviceText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
  
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={28} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('News')}>
          <MaterialCommunityIcons name="newspaper-variant-outline" size={28} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('QR')}>
          <Ionicons name="qr-code-outline" size={28} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={28} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Stylesheet outside of the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  profileDetails: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 14,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    margin: 20,
    fontWeight: 'bold',
  },
  serviceItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    height: 100,
  },
  serviceIcon: {
    width: 50,  // Set the width for all icons
    height: 50, // Set the height for all icons
    marginBottom: 10,
  },
  emptyService: {
    width: 50,
    height: 50,
  },
  serviceText: {
    fontSize: 14,
    color: '#333',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;
