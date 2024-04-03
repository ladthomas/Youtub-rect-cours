
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Error404Screen = ({ onGoBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oups!</Text>
      <Text style={styles.message}>La page que vous cherchez n'existe pas.</Text>
      <Button title="Retour à l'accueil" onPress={onGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Error404Screen;
