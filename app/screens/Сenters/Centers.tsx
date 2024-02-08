import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
// import {taskAdded, taskToggled} from '../../store/paymentsSlice';
import {RootState} from '../../store/store';
// import {Task} from '../store/tasksSlice';
// import {Task} from '../../store/paymentsSlice';
import Center from './List/center';
import {useTheme} from '../../theme/useTheme';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import ListItem from '../../components/ListItem';

const Centers = () => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  // const addNewTask = () => {
  //   let temp = text.trim();
  //   if (temp !== '') {
  //     dispatch(taskAdded({id: Date.now(), title: temp, done: false}));
  //   }
  //   inputRef.current?.clear();
  // };

  // const onCheckedHandler = (id: string) => {
  //   dispatch(taskToggled(id));
  // };

  // const renderItem = ({item, index}: {item: Task; index: number}) => (
  //   <ListItem item={item} index={index} onPress={onCheckedHandler} />
  // );

  // const keyExtractor = (item: Task) => `task-${item.id}`;

  const centers = [
    {
      id: 0,
      text: 'Центр реабілітації Recovery',
      citys: 'Дніпро | Одеса',
      photoLink: 'SOMELINK',
    },
    {
      id: 1,
      text: 'Медичний центр Mednean',
      citys: 'Чернівці',
      photoLink: 'SOMELINK',
    },
  ];

  return (
    <Layout>
      <Card
        style={[styles.inputCard,
        //  {borderTopColor: theme?.cardBorderColor}
         ]}>
        {/* TextInput and InputButton starts here */}
        <View style={styles.inputBtnRow}>
          <View style={styles.inputBtnWrp}>
            <TextInput
              ref={inputRef}
              placeholder="Знайти реабілітаційний цетр"
              placeholderTextColor={theme?.color}
              style={[
                styles.input,
                {
                  color: theme?.color,
                  backgroundColor: theme?.layoutBg,
                  borderColor: theme?.layoutBg,
                },
              ]}
              onChangeText={t => setText(t)}
              onSubmitEditing={() => {}}
            />
          </View>
        </View>
        {/* TextInput and InputButton ends here */}
      </Card>
      <View
        style={[
          {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 25,
            marginTop: 20,
            marginLeft: 17,
            backgroundColor: theme?.layoutBg,
          },
        ]}>
        <Text
          style={[
            {
              fontSize: 20,
            },
          ]}>
          Оберіть місто
        </Text>
        <Text
          style={[
            {
              left: 180,
              fontSize: 20,
            },
          ]}>
          Фільтри
        </Text>
      </View>

      {centers.map(el => {
        return (
          <Center
            key={el.id}
            text={el.text}
            citys={el.citys}
            photoLink={el.photoLink}
          />
        );
      })}
      {/* Tasks Listing starts here */}
      {/* <FlatList
        data={todoList}
        renderItem={renderItem} 
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      /> */}
      {/* Tasks Listing ends here */}
    </Layout>
  );
};

export default Centers;

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  tickIcon: {
    width: 22,
    height: 22,
  },
  inputCard: {
    borderTopWidth: StyleSheet.hairlineWidth,
    elevation: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBtnWrp: {
    flexDirection: 'row',
    flex: 1,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    height: 45,
    backgroundColor: '#f6f6f6',
  },
  btnAdd: {
    borderRadius: 20,
    padding: 6,
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0071ff',
    color: '#fff',
    height: 38,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  btnAddText: {
    color: '#fff',
    fontSize: 14,
  },
  btnClear: {
    borderRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: '#c50e29',
    marginRight: 8,
  },
  btnClearText: {
    color: '#c50e29',
    fontSize: 14,
  },
});
