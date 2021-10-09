import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from '../routes/homeStack';
import Home from '../screens/home';
import AboutStack from '../routes/aboutStack';
import Header from '../shared/header';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import {
  Image,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import { Fragment } from 'react';
import DrawerContent from '../routes/drawerContent';

const DrawerNav = createDrawerNavigator();
const Stack = createStackNavigator();

function ButtonM() {
  return (
    <Fragment>
      <View style={styles.buttonDesign}>
        <TouchableOpacity onPress={() => alert('This is a button!')}>
          <Ionicons
            name="md-file-tray-full-outline"
            size={24}
            color="black"
            style={{ width: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('This is a button!')}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}
function LogoTitle() {
  return (
    <Fragment>
      <View style={styles.buttonDesign}>
        <Image
          style={{ width: 26, height: 26 }}
          source={require('../assets/rating-1.png')}
        ></Image>
        <Text style={styles.textTitle}>HOME PAGE</Text>
      </View>
    </Fragment>
  );
}

function HeaderBackGround() {
  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={{ flex: 1 }}
    />
  );
}
function Drawer() {
  return (
    <NavigationContainer>
      <DrawerNav.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: '#34495E',
          headerStyle: { backgroundColor: '#34495E' },
          headerRight: () => <ButtonM />,
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <DrawerNav.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#273746',
            title: 'Home',
            headerTitle: () => <LogoTitle />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <DrawerNav.Screen name="AboutStack" component={AboutStack} />
      </DrawerNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonDesign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontFamily: 'sourceSansPro-SemiBold',
    fontSize: 18,
    width: 100,
  },
});
export default Drawer;
