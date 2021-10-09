import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Modal, {
  ModalContent,
  ModalPortal,
  SlideAnimation,
} from 'react-native-modals';

function Home({ navigation }) {
  // const navigation = useNavigation();

  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 1,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 2,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal
        visible={modalOpen}
        modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
      >
        <ModalContent
          style={{
            flex: 1,
            backgroundColor: 'fff',
          }}
        >
          <View style={styles.modalContent}>
            <AntDesign
              name="close"
              size={24}
              color="black"
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalClose, ...styles.modalToggle }}
            />

            <Text>Hello from the modal1:</Text>
          </View>
        </ModalContent>
      </Modal>
      <AntDesign
        name="addfolder"
        size={24}
        color="black"
        onPress={() => setModalOpen(true)}
      />
     
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 'center',
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
