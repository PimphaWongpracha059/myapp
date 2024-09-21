import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import BookingForm from '../components/BookingForm';
import BookCard from '../components/BookCard';

const sampleBooks = [
  { id: '1', title: 'Making China Modern', author: 'Klaus Mühlhahn' },
  { id: '2', title: 'Handbook of Data Science Approaches for Biomedical Engineering', author: 'Valentina Emilia Balas' },
  { id: '3', title: 'ตำราสมุนไพรอารามวัดช้างให้ร่มเย็น', author: 'สมเด็จพระอริยวงศาคตญาณ' },
  { id: '4', title: 'Essentials of Orthognathic Surgery', author: 'Johan P. Reyneke' },
];

const BookingsScreen = () => {
  const handleBookingSubmit = (booking) => {
    console.log('Booking submitted:', booking);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search books"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Book Categories */}
      <View style={styles.categoryTabs}>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Foreign Books</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Thai Books</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>eBooks</Text></TouchableOpacity>
      </View>

      {/* Book List */}
      <FlatList
        data={sampleBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookCard book={item} />}
        style={styles.bookList}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  categoryText: {
    fontWeight: 'bold',
    color: '#333',
  },
  bookList: {
    marginTop: 10,
  },
});

export default BookingsScreen;
