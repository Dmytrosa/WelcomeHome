import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TextInput,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '../../theme/useTheme';
import {LeaveBtn} from './Main/accountLeaveBtn';
import AccAction from './Main/accountAction';
import {AccHeader} from './Header/AccountHeader';

const Account = (props) => {
  const data = props.route.params
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();

  return (
    <View>
      {/* <StatusBar backgroundColor="#C9D8E5" barStyle="light-content" /> */}
      <AccHeader name={data.name} email={data.email}/>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>додаткові можливості</Text>
          <AccAction
            text={'Розповісти про потреби'}
            imgUrl={'ddf'}
            linkTo={'Tell'}
          />
          <AccAction text={'Написати відгук'} imgUrl={'ddf'} linkTo={'Tell'} />
          <AccAction
            text={'Поділитися застосунком'}
            imgUrl={'ddf'}
            linkTo={'Tell'}
          />
        </View>
      </View>
      <LeaveBtn />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
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
    fontSize: 15,
    marginBottom: 10,
  },
});
