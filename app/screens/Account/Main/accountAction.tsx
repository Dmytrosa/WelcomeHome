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
  imgUrl: string;
  linkTo: string;
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
        <View style={styles.imageContainer}>
          <Image source={{uri: props.imgUrl}} style={styles.image} />
        </View>
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
    backgroundColor: '#ffffff',
    width: '100%',
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    // borderRadius: 10,
  },
  imageContainer: {
    // flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 2,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
