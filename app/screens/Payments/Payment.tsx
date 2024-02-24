import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '../../theme/useTheme';
import {useNavigation} from '@react-navigation/native';
// import {AccHeader} from './Header/AccountHeader';
type center = {
  role: string;
  text: string;
  payment: string;
  linkTo: string;
  id: string;
  token: string;
};

const Payment = (props: center) => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const activityHandler = () => {
    navigation.navigate(props.linkTo, {id: props.id, token: props.token});
  };

  return (
    <TouchableOpacity onPress={activityHandler}>
      <View style={styles.socialPayment}>
          <Text style={styles.infoText}>{props.text}</Text>
          <Text style={styles.payment}>{props.payment} ₴</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Payment;

const styles = StyleSheet.create({
  socialPayment: {
    display: 'flex',
    flexDirection:'row',
    position: 'relative',
    marginTop: 10,
    overflow: 'hidden',
    marginBottom: 5,
    padding: 20,
    paddingBottom:45,
    borderRadius: 30,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  infoText: {
    maxWidth: 300,
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'left',
    zIndex: 17,
  },
  payment: {
    position: 'absolute',
    minWidth: 70,
    bottom: 10,
    right: 20,
    color: 'rgb(255, 255, 255)',
    backgroundColor: "#265257",
    padding: 15,
    borderRadius:20,
    paddingBottom:3,
    paddingTop:3,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22.5,
    textAlign: 'center',
  },
});
