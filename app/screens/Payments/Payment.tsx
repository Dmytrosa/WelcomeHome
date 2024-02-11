import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '../../theme/useTheme';
import { useNavigation } from '@react-navigation/native';
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
  debugger
  const {theme} = useTheme();
  const navigation = useNavigation();

  const activityHandler = () => {
    navigation.navigate(props.linkTo, {id:props.id, token:props.token});
  };

  return (
    <TouchableOpacity onPress={activityHandler}>
    <View>
      <View style={styles.socialPayment}>
        <View style={styles.autoLayer}>
          <Text style={styles.infoText}>{props.text}</Text>
          <View style={styles.rectangle} />
          <Text style={styles.payment}>{props.payment} ₴</Text>
          <View style={styles.line} />
        </View>
      </View>
    </View>
    </TouchableOpacity>

  );
};

export default Payment;

const styles = StyleSheet.create({
  socialPayment: {
    position: 'relative',
    // width: 357,
    height: 100,
    // top: 20,
    // left: 18,
    zIndex: 25,
    overflow: 'hidden',
    marginBottom: 5,
    // marginLeft: -8,
    paddingTop: 20,
    borderRadius: 4,
    backgroundColor: 'rgb(235, 235, 235)',
  },
  autoLayer: {
    // position: 'absolute',
    width: 353,
    height: 99,
    top: -5,
    left: 0,
    zIndex: 16,
  },
  infoText: {
    // position: 'absolute',
    width: 318,
    height: 88,
    top: 0,
    left: 11,
     
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'left',
    zIndex: 17,
  },
  line: {
    position: 'absolute',
    width: 353,
    top: 99,
    left: 0,
    // backgroundImage: 'url(../assets/images/3db8b342-ca56-473f-976b-573131efed68.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    zIndex: 18,
  },
  rectangle: {
    position: 'absolute',
    width: 72,
    height: 28,
    top: 28,
    left: 267,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    zIndex: 28,
    // borderRadius: '30px',
  },
  payment: {
    position: 'absolute',
    width: 51,
    height: 49,
    top: 30,
    left: 284,
     
    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22.5,
    textAlign: 'left',
    zIndex: 29,
  },
});
