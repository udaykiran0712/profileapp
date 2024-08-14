import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { feeds } from '../mockData';

const FeedsGrid = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('FeedDetail', { id: item.id })}>
      <Image source={{ uri: item.image }} style={{ width: '33%', height: 120 }} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={feeds}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default FeedsGrid;
