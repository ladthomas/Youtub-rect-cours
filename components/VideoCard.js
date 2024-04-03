// VideoCard.js

import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const VideoCard = ({ title, channel, thumbnailUri }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.thumbnail}
        source={{ uri: thumbnailUri }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.channel}>{channel}</Text>
        {/* You can add more details here */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // Add styles for the card container
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
    // Add styles for the thumbnail image
  },
  infoContainer: {
    padding: 10,
    // Add styles for the container of the info section
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    // Add styles for the video title text
  },
  channel: {
    fontSize: 14,
    color: 'grey',
    // Add styles for the channel name text
  },
  // You can add more styles as needed
});

export default VideoCard;
