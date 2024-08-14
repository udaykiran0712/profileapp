import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImageColors from 'react-native-image-colors';
import FeedsGrid from '../components/FeedsGrid';

const PersonalScreen = ({ navigation }) => {
  const [colors, setColors] = useState(null);

  useEffect(() => {
    const fetchColors = async () => {
      const result = await ImageColors.getColors('https://example.com/user-profile-pic.jpg', {
        fallback: '#000000',
      });
      setColors(result);
    };

    fetchColors();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors?.background }}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image
          source={{ uri: 'https://example.com/user-profile-pic.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ color: colors?.primary }}>Dr. Vishnu Reddy</Text>
        <Text style={{ color: colors?.secondary }}>ENT, Hyderabad, India</Text>
        <Button title="Follow" color={colors?.detail} />
        <Button title="Share" color={colors?.detail} />
      </View>
      <FeedsGrid navigation={navigation} />
    </View>
  );
};

export default PersonalScreen;
