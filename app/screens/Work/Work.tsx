import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '../../theme/useTheme';
// import {AccHeader} from './Header/AccountHeader';
type center = {
  text: string;
  citys: string;
  photoLink: string;
};

const Work = () => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  const dispatch = useDispatch();

  const [text, setText] = useState('');

  return (
    <View style={styles.card}>
      <View>
        <Text> . . . In progress</Text>
      </View>
    </View>
  );
};

export default Work;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
