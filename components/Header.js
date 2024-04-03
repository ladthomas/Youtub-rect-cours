import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>YouTube</Text>
      {/* Ajouter d'autres icônes et éléments du header ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // Ajouter des styles supplémentaires pour la mise en forme
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
