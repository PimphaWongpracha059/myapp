import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, details });
    setName('');
    setDetails('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Details"
        value={details}
        onChangeText={setDetails}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default BookingForm;
