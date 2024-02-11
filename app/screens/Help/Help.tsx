import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, TextInput,} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTheme} from '../../theme/useTheme';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Event from './Events/event';
import { event } from '../../services/services/event';

const Help = (props) => {
  const user = {...props}

  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const [events, setEvents] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await event(user)
        setEvents(response)
        console.log("events: ", events);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    
    fetchData();
  }, []);
  // const renderItem = ({item, index}: {item: Task; index: number}) => (
  //   <ListItem item={item} index={index} onPress={onCheckedHandler} />
  // );

  return (
    <Layout>
      <Card
        style={[
          styles.inputCard
        ]}>
        <View style={styles.inputBtnRow}>
          <View style={styles.inputBtnWrp}>
            <TextInput
              ref={inputRef}
              placeholder="Знайти підтримку"
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
              // onSubmitEditing={() =>()}
            />
          </View>
        </View>
      </Card>
      <View
        style={[
          {
            marginBottom: 25,
            marginTop: 20,
            marginLeft: 30,
            backgroundColor: theme?.layoutBg,
          },
        ]}>
        {/* <Text
          style={[
            {
              color: 'blue',
              fontSize: 20,
            },
          ]}>
          Категорії
        </Text> */}
      </View>
      <Event text={'Психологічні служби'} />
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

export default Help;

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
