import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import logo from '../assets/rating-4.png';

function ReviewDetails({ route, navigation }) {
  const rating = route.params.rating;

  //   const pressHandler = () => {
  //     navigation.goBack();
  //   };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>Gamezone rating:</Text>
          <Image
            source={images.ratings[rating]}
            style={{ width: 66, resizeMode: 'center' }}
          />
        </View>
        <br />
        <View style={styles.buttonDesign}>
          <Button title="Back" onPress={() => navigation.goBack()}></Button>
          <Button title="Back" onPress={() => navigation.goBack()}></Button>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  buttonDesign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default ReviewDetails;
