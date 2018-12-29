import React from 'react';
import { View, Text, Button, Platform, Share } from 'react-native';
import { Link } from '../../routing/routing';

const Detail = props => {
  const back = (
    <View style={{ marginTop: 20 }}>
      <Link to="/">
        <Text style={{ color: 'blue' }}>Back</Text>
      </Link>
    </View>
  );

  const share = () => {
    Share.share({
      message: "I'm sharing this profile with you:",
      url: 'https://www.linkedin.com/in/santiagocamelo'
    });
  };

  if (!props.selectedItem) {
    return (
      <View>
        <Text>No item selected</Text>
        {back}
      </View>
    );
  }

  const { email } = props.selectedItem;

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 10 }}>Say hi!</Text>

      <Text>{email}</Text>

      {Platform.OS !== 'web' && (
        <View>
          <Button onPress={share} title="Share my profile!" />
        </View>
      )}

      {back}
    </View>
  );
};

export default Detail;
