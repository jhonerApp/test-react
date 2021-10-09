import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {
  Text,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
  useTheme,
  Drawer,
  Divider,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { cos } from 'react-native-reanimated';
import { Fragment } from 'react';
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

function DrawerContent(props) {
  const paperTheme = useTheme();
  let { activeTintColor, activeBackgroundColor } = props;

  return (
    // <View>
    //   <DrawerContentScrollView {...props}>
    //     <View style={{ justifyContent: 'space-between' }}>
    //       <View style={styles.drawerContent}>
    //         <ImageBackground
    //           source={require('../assets/game_bg.png')}
    //           style={{ flex: 1 }}
    //         >
    //           <View style={styles.userInfoSection}>
    //             <View style={{ flexDirection: 'row', marginTop: 15 }}>
    //               <Avatar.Image
    //                 source={{
    //                   uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
    //                 }}
    //                 size={50}
    //               />
    //               <View style={{ marginLeft: 15, flexDirection: 'column' }}>
    //                 <Title style={styles.title}>John Doe</Title>
    //                 <Caption style={styles.caption}>@j_doe</Caption>
    //               </View>
    //             </View>

    //             <View style={styles.row}>
    //               <View style={styles.section}>
    //                 <Paragraph style={[styles.paragraph, styles.caption]}>
    //                   80
    //                 </Paragraph>
    //                 <Caption style={styles.caption}>Following</Caption>
    //               </View>
    //               <View style={styles.section}>
    //                 <Paragraph style={[styles.paragraph, styles.caption]}>
    //                   100
    //                 </Paragraph>
    //                 <Caption style={styles.caption}>Followers</Caption>
    //               </View>
    //             </View>
    //           </View>
    //         </ImageBackground>
    //         <Drawer.Section style={styles.drawerSection}>
    //           <Drawer.Item
    //             style={{ backgroundColor: '#64ffda' }}
    //             icon={({ color, size }) => (
    //               <Icon name="home-outline" color={color} size={size} />
    //             )}
    //             label="Home"
    //             onPress={() => {
    //               console.log(props);
    //               //props.navigation.navigate('Home');
    //             }}
    //           />
    //           <DrawerItem
    //             icon={({ color = 'red', size }) => (
    //               <Icon name="account-outline" color={color} size={size} />
    //             )}
    //             label="Profile"
    //             onPress={() => {
    //               props.navigation.navigate('AboutStack');
    //             }}
    //           />
    //           <DrawerItem
    //             icon={({ color, size }) => (
    //               <Icon name="bookmark-outline" color={color} size={size} />
    //             )}
    //             label="Bookmarks"
    //             onPress={() => {
    //               props.navigation.navigate('BookmarkScreen');
    //             }}
    //           />
    //           <DrawerItem
    //             icon={({ color, size }) => (
    //               <Icon name="settings-outline" color={color} size={size} />
    //             )}
    //             label="Settings"
    //             onPress={() => {
    //               props.navigation.navigate('SettingsScreen');
    //             }}
    //           />
    //           <DrawerItem
    //             icon={({ color, size }) => (
    //               <Icon
    //                 name="account-check-outline"
    //                 color={color}
    //                 size={size}
    //               />
    //             )}
    //             label="Support"
    //             onPress={() => {
    //               props.navigation.navigate('SupportScreen');
    //             }}
    //           />
    //           <DrawerItem
    //             icon={({ color, size }) => (
    //               <Icon
    //                 name="account-check-outline"
    //                 color={color}
    //                 size={size}
    //               />
    //             )}
    //             label="Support"
    //             onPress={() => {
    //               props.navigation.navigate('SupportScreen');
    //             }}
    //           />
    //         </Drawer.Section>
    //       </View>
    //     </View>
    //   </DrawerContentScrollView>
    // </View>

    <Fragment>
      <View style={{ backgroundColor: '#283747' }}>
        <DrawerContentScrollView {...props}>
          <View style={{ justifyContent: 'space-between' }}>
            <View style={styles.drawerContent}>
              <ImageBackground
                source={require('../assets/game_bg.png')}
                style={{ flex: 1 }}
              >
                <View style={styles.userInfoSection}>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginTop: 15,
                      justifyContent: 'flex-start',
                    }}
                  >
                    <View
                      style={{
                        paddingLeft: 10,
                        paddingBottom: 10,
                        alignSelf: 'center',
                      }}
                    >
                      <Avatar.Image
                        source={require('../assets/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg')}
                        size={95}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        flexDirection: 'column',
                        paddingBottom: 15,
                        paddingTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}
                      >
                        JHONNEL REMOLIN
                      </Text>
                      <Caption
                        style={{
                          fontSize: 10,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}
                      >
                        DRIVER
                      </Caption>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <Divider />
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  color="red"
                  style={{ backgroundColor: '#D5D8DC' }}
                  icon={({ color, size }) => (
                    <AntDesign name="home" size={size} color="#1ABC9C" />
                  )}
                  label={() => <Text style={{color:'black'}}>HOME</Text>}
                  onPress={() => {
                    props.navigation.navigate('SupportScreen');
                  }}
                />
                <DrawerItem
                  icon={({ color = 'red', size }) => (
                    <MaterialCommunityIcons
                      name="face-profile"
                      color="black"
                      size={size}
                    />
                  )}
                  label={() => <Text style={{color:'white'}}>PROFILE</Text>}
                  onPress={() => {
                    props.navigation.navigate('AboutStack');
                  }}
                />
                <DrawerItem
                  icon={({ color = 'red', size }) => (
                    <MaterialIcons
                      name="history-edu"
                      size={size}
                      color="black"
                    />
                  )}
                  label="DELIVERY HISTORY"
                  onPress={() => {
                    props.navigation.navigate('AboutStack');
                  }}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <Ionicons
                      name="md-settings-outline"
                      size={size}
                      color="black"
                    />
                  )}
                  label="SETTINGS"
                  onPress={() => {
                    props.navigation.navigate('BookmarkScreen');
                  }}
                />
              </Drawer.Section>
            </View>
          </View>
        </DrawerContentScrollView>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: '#283747',
        }}
      >
        <View>
          <Divider />
          <DrawerItem
            color="black"
            icon={({ color, size }) => (
              <AntDesign name="logout" size={size} color="black" />
            )}
            label="LOGOUT"
            onPress={() => {
              props.navigation.navigate('SupportScreen');
            }}
          />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    backgroundColor: '#283747',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
