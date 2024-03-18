import React from 'react';
import {StyleSheet, ScrollView, View, Text, Switch, Image, ImageBackground} from 'react-native';

import {useDispatch} from 'react-redux';
import {clearUser} from '../store/userSlice';
import {removeSecureValue} from '../utils/keyChain';

import {useTheme} from '../theme/useTheme';
import Layout from '../components/Layout';
import Card from '../components/Card';
import MenuItem from '../components/MenuItem';

const avatar = require('../assets/images/avatar.png');

const Settings = () => {
  const {theme, toggleTheme} = useTheme();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Remove both access token and refresh token from Local
    removeSecureValue('token');
    removeSecureValue('refresh_token');
    // Remove access token from redux store
    dispatch(clearUser());
  };

  return (
  <ScrollView style={styles.mainContainer}>
    <ImageBackground
      source={require('../../../assets/bgr_darkBlue_blue.png')}
      resizeMode="cover"
      style={styles.backgroundContainer}>

        <Card style={{backgroundColor: theme.cardBg}}>
          <View style={styles.avatarRow}>
            <Image source={avatar} style={styles.avatar} />
            <View>
              <Text style={{color: theme.color}}>Hermione Granger</Text>
              <Text style={{color: theme.color}}>u/hermione</Text>
            </View>
          </View>
          <>
            <MenuItem label="Clear Cache" onPress={() => console.log('here')} />
            <MenuItem
              label="Clear History"
              onPress={() => console.log('here')}
            />

            <MenuItem
              label="Dark Mode"
              onPress={() => console.log('here')}
              rightItem={
                <Switch
                  value={theme.name === 'dark'}
                  onValueChange={value => toggleTheme(value)}
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={theme.name === 'dark' ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                />
              }
            />
            <MenuItem
              label="Terms & Conditions"
              onPress={() => console.log('here')}
            />
            {/* <MenuItem label="About" onPress={() => console.log('here')} /> */}
            <MenuItem label="Logout" onPress={handleLogout} />
          </>
        </Card>
      </ImageBackground>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  backgroundContainer: {
    minHeight: 718,
  },
  btnHamburger: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  avatarRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
});
