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
import {useNavigation} from '@react-navigation/native';
import Svg, {G, Path, Defs, ClipPath, Rect, Ellipse} from 'react-native-svg';
import {useSelector, useDispatch} from 'react-redux';
// import {taskAdded, taskToggled} from '../../store/tasksSlice';
// import {RootState} from '../../store/store';
// import {Task} from '../store/tasksSlice';
// import {Task} from '../../store/tasksSlice';

import {useTheme} from '../../../theme/useTheme';
import Layout from '../../../components/Layout';
import {string} from 'yup';
// import Card from '../../components/Card';
// import ListItem from '../../components/ListItem';

type ection = {
  text: string;
  imgKey: string;
  linkTo: string;
};

const images = {
  icon1: (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.7162 16.2234H8.49622"
        stroke="#130F26"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.7162 12.0369H8.49622"
        stroke="#130F26"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.2513 7.86011H8.49634"
        stroke="#130F26"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9086 2.74976C15.9086 2.74976 8.23161 2.75376 8.21961 2.75376C5.45961 2.77076 3.75061 4.58676 3.75061 7.35676V16.5528C3.75061 19.3368 5.47261 21.1598 8.25661 21.1598C8.25661 21.1598 15.9326 21.1568 15.9456 21.1568C18.7056 21.1398 20.4156 19.3228 20.4156 16.5528V7.35676C20.4156 4.57276 18.6926 2.74976 15.9086 2.74976Z"
        stroke="#130F26"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  icon2: (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
        stroke="#130F26"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  icon3: (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.8325 8.17463L10.109 13.9592L3.59944 9.88767C2.66675 9.30414 2.86077 7.88744 3.91572 7.57893L19.3712 3.05277C20.3373 2.76963 21.2326 3.67283 20.9456 4.642L16.3731 20.0868C16.0598 21.1432 14.6512 21.332 14.0732 20.3953L10.106 13.9602"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
};

const AccAction = (props: ection) => {
  const navigation = useNavigation();
  const {theme} = useTheme();
  const dispatch = useDispatch();

  const activityHandler = () => {
    navigation.navigate(props.linkTo);
  };

  return (
    <TouchableOpacity onPress={activityHandler}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>{images[props.imgKey]}</View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccAction;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minHeight: 65,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1, // Задаємо товщину верхнього контуру
    borderTopColor: 'rgba(135, 135, 135, 0.3)',
    // borderRadius: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 9,
    borderRadius: 15,
    marginRight: 10,
    // flex: 1,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
