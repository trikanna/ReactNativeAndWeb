import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import data from '../../data';

const Welcome = props => {
  const handlePress = item => {
    props.selectItem(item);
    props.history.push('/detail');
  };

  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: '800', marginBottom: 10, marginLeft: 4 }}>
        Welcome!!
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={{ margin: 10 }}>
              #{item.id} - {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Welcome;
