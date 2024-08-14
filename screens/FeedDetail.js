import React from 'react';
import { View, Image, Text } from 'react-native';

const FeedDetail = ({ route }) => {
  const { id } = route.params;
  // Fetch detailed feed info using the id

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: `https://example.com/feed${id}.jpg` }} style={{ width: '100%', height: 400 }} />
      <Text>Feed Detail for ID: {id}</Text>
    </View>
  );
};

export default FeedDetail;
