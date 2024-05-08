import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, RefreshControl } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchRandomImages = async () => {
  // Pour cet exemple, générons quelques URLs d'images aléatoires
  const images = Array.from({ length: 10 }, (_, index) => ({
    id: `random-image-${index}`,
    uri: `https://picsum.photos/200/300?random=${index}-${Date.now()}`,
    title: `Image aléatoire ${index + 1}`
  }));

  // Simulons une API en renvoyant ces données dans un format d'objet
  return images;
};

// Composant ImageList
const ImageList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery('randomImages', fetchRandomImages);

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries('randomImages');
    setRefreshing(false);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>An error occurred: {error.message}</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.imageItem}>
          <Image source={{ uri: item.uri }} style={styles.thumbnail} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#000000"
          title="Chargement..."
        />
      }
    />
  );
};

// Styles
const styles = StyleSheet.create({
  imageItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  thumbnail: {
    width: 100,
    height: 150, 
    marginRight: 10
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
  }
});

export default ImageList;
 