import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
// import {taskAdded, taskToggled} from '../../store/tasksSlice';
// import {RootState} from '../../store/store';
// import {Task} from '../store/tasksSlice';
// import {Task} from '../../store/tasksSlice';

import {useTheme} from '../../../theme/useTheme';
import Layout from '../../../components/Layout';
// import Card from '../../components/Card';
// import ListItem from '../../components/ListItem';

type center = {
  text: string;
  citys: string;
  photoLink: string;
};

const Center = (props: center) => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

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
  {
    /* <View style={styles.imageContainer}>

      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
        <Text>{props.citys}</Text>
      </View> */
  }
  return (
    <View style={styles.card}>
      <Image
        source={{uri: 'https://via.placeholder.com/150'}}
        style={styles.image}
      />
      {/* <View style={styles.med_pagespeed} /> */}
      <View style={styles.information}>
        <View style={styles.name_favorite}>
          <Text style={styles.mednean_center}>{props.text}</Text>
        </View>
        <Text style={styles.citys}>{props.citys}</Text>
      </View>
    </View>
  );
};

export default Center;

const styles = StyleSheet.create({
  citys: {
    flexShrink: 0,
    flexBasis: 'auto',
    width: 169,
    height: 18,
     
    color: 'rgb(135, 135, 135)',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'left',
  },
  mednean_center: {
    flexShrink: 0,
    flexBasis: 'auto',
    width: 237,
    height: 24,
     
    color: 'rgb(15, 15, 15)',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'left',
  },
  name_favorite: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // В React Native за замовчуванням flexDirection: 'column', тому вам слід вказати 'row' для горизонтального вирівнювання
    flexWrap: 'nowrap',
    flexShrink: 0,
    // marginHorizontal: 38, // Замість gap використовуйте marginHorizontal для відступів між елементами
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(196, 194, 194)',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    marginVertical: 8,
    minWidth: 0,
    marginLeft: 15,
  },
  med_pagespeed: {
    flexShrink: 0,
    width: 97,
    height: 90,
    borderBottomLeftRadius: 5,
    borderTopEndRadius: 5,
    borderBlockStart: 5,
    borderBottomRightRadius: 5,
    // background: no-repeat center,
    // background-size: cover,
    // border-radius: 5px,
  },
  card: {
    elevation: 2,
    shadowColor: 'gray',
    borderBottomStartRadius: 7,
    width: '95%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    marginBottom: 13,
    borderRadius: 10,

    // backgroundColor: "#000000",
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
    fontSize: 20,
    textAlign: 'center',
  },
});
