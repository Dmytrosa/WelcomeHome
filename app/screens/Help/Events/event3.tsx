import React, {useState, useRef, ReactNode} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {taskAdded, taskToggled} from '../../store/tasksSlice';
// import {RootState} from '../../store/store';
// import {Task} from '../store/tasksSlice';
// import {Task} from '../../store/tasksSlice';
import {SvgXml} from 'react-native-svg'; // Імпортуйте SvgXml з 'react-native-svg'

import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

import {useTheme} from '../../../theme/useTheme';
import Layout from '../../../components/Layout';
// import Card from '../../components/Card';
// import ListItem from '../../components/ListItem';

type event = {
  text: string;
};

const Charity = () => {
  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <Path
        d="M59.5 50C59.5 60.7696 50.7696 69.5 40 69.5C29.2304 69.5 20.5 60.7696 20.5 50C20.5 39.2304 29.2304 30.5 40 30.5C50.7696 30.5 59.5 39.2304 59.5 50Z"
        fill="#86C8E4"
        stroke="#060722"
      />
      <Path
        d="M25.1333 63.3333H13.3333C12.4493 63.3333 11.6014 62.9821 10.9763 62.357C10.3512 61.7319 10 60.884 10 60V16.6667C10 15.7826 10.3512 14.9348 10.9763 14.3096C11.6014 13.6845 12.4493 13.3333 13.3333 13.3333H66.6667C67.5507 13.3333 68.3986 13.6845 69.0237 14.3096C69.6488 14.9348 70 15.7826 70 16.6667V60C70 60.884 69.6488 61.7319 69.0237 62.357C68.3986 62.9821 67.5507 63.3333 66.6667 63.3333H54.8667"
        stroke="#002877"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 30H70M53.3333 10V20M26.6667 10V20M40 30C36.0444 30 32.1776 31.173 28.8886 33.3706C25.5996 35.5682 23.0362 38.6918 21.5224 42.3463C20.0087 46.0009 19.6126 50.0222 20.3843 53.9018C21.156 57.7814 23.0608 61.3451 25.8579 64.1421C28.6549 66.9392 32.2186 68.844 36.0982 69.6157C39.9778 70.3874 43.9991 69.9913 47.6537 68.4776C51.3082 66.9638 54.4318 64.4004 56.6294 61.1114C58.827 57.8224 60 53.9556 60 50C60 44.6957 57.8929 39.6086 54.1421 35.8579C50.3914 32.1071 45.3043 30 40 30ZM40 54.4L44.3333 56.6667L43.5 51.8333L46.8333 48.5L42 47.8L40 43.3333L37.8333 47.7333L33 48.4333L36.3333 51.7667L35.6667 56.6667L40 54.4Z"
        stroke="#003676"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const Event3: React.FC<event> = ({text}) => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  //   const addNewTask = () => {
  //     let temp = text.trim();
  //     if (temp !== '') {
  //       dispatch(taskAdded({id: Date.now(), title: temp, done: false}));
  //     }
  //     inputRef.current?.clear();
  //   };

  //   const onCheckedHandler = (id: string) => {
  //     dispatch(taskToggled(id));
  //   };

  //   const renderItem = ({item, index}: {item: Task; index: number}) => (
  //     <ListItem item={item} index={index} onPress={onCheckedHandler} />
  //   );

  //   const keyExtractor = (item: Task) => `task-${item.id}`;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Charity />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      {/* {svg} */}
    </View>
  );
};

export default Event3;

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    shadowColor: 'gray',
    backgroundColor: '#C9D8E5',
    borderBottomStartRadius: 7,
    width: '93%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft: 13,
    marginBottom: 13,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  text: {
    fontFamily: 'Cochin',
    // font-family: 'Inter',
    // font-style: normal,
    // line-height: 150%,
    lineHeight: 70,
    fontWeight: '700',
    color: '#0D0F44',
    fontSize: 22,
    textAlign: 'center',
  },
});
