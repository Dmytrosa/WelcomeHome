import React, {useState, useRef} from 'react';

import {
  StyleSheet,
  FlatList,
  View,
  TextInput,
  Image,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '../../theme/useTheme';
import {LeaveBtn} from './Main/accountLeaveBtn';
import AccAction from './Main/accountAction';
import {AccHeader} from './Header/AccountHeader';

const Account = (props) => {
  const data = props.route.params;
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={require('../../../assets/bgr_darkBlue_blue.png')}
      resizeMode="cover"
      style={styles.backgroundContainer}>
      {/* <StatusBar backgroundColor="#C9D8E5" barStyle="light-content" /> */}
      <AccHeader name={data.name} email={data.email} />
      <Text style={styles.text}>Додаткові можливості</Text>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <AccAction
            text={'Розповісти про потреби'}
            imgKey={'icon1'}
            linkTo={'Tell'}
          />
          <AccAction
            text={'Написати відгук'}
            imgKey={'icon2'}
            linkTo={'Tell'}
          />
          <AccAction
            text={'Поділитися застосунком'}
            imgKey={'icon3'}
            linkTo={'Tell'}
          />
          <View
            style={{
              height: 1,
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(135, 135, 135, 0.3)',
            }}></View>
        </View>
      </View>
      <LeaveBtn />
    </ImageBackground>
  );
};

export default Account;

const styles = StyleSheet.create({
  backgroundContainer: {
    padding: 20,
    flex: 1,
    flexGrow: 1,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '500',
  },
});
