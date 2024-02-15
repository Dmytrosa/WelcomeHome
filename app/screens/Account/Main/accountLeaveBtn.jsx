import {useNavigation} from '@react-navigation/native';
import {clearUser} from '../../../store/userSlice';
import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';

const LeaveBtn = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.rectangle}>
        <Text
          style={styles.logout}
          onPress={() => {
            navigation.navigate('ChooseRole');
          }}>
          Вийти з аккаунту
        </Text>
      </View>
    </View>
  );
};
export {LeaveBtn};

const styles = StyleSheet.create({
  rectangle: {
    alignItems: 'center',
  },
  logout: {
    // position: 'absolute',
    width: '50%',
    // height: 58,
    top: '800%',
    // right: 40,

    color: 'rgb(19, 15, 38)',
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 30,
    textAlign: 'center',
    zIndex: 41,
    borderBottomWidth: 2,
  },
});
