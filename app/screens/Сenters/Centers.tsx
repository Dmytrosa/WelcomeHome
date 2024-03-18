import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Center from './List/center';
import {useTheme} from '../../theme/useTheme';
import {SearchSVG} from '../../../assets/public/svg/search';
import { establishmentId } from '../../services/services/establishment';

const Centers = (props:any) => {
  const {id, token} = props.route.params;

  const {theme} = useTheme();

  const [text, setText] = useState('');
  const [centers, setCenters] = useState([]);

  const inputRef = useRef<TextInput>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = {token: token};
        const params = {id : id};

        const response = await establishmentId(user, params);

        debugger
        setCenters(response);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);


  const mockcenters = [
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
    <ScrollView style={styles.mainContainer}>
      <ImageBackground
        source={require('../../../assets/bgr_darkBlue_blue.png')}
        resizeMode="cover"
        style={styles.backgroundContainer}>
        <Text style={styles.socialPayments}>Реабілітаційні центри</Text>
        <View>
          <View style={styles.search}>
            <View style={{marginTop: 5, marginRight: 5}}>
              <SearchSVG />
            </View>
            <TextInput
              style={{
                width: '90%',
                fontSize: 16,
                fontWeight: '700',
                color: 'gray',
              }}
              ref={inputRef}
              placeholder="Знайти за назвою"
              placeholderTextColor={theme?.color}
              onChangeText={t => setText(t)}
            />
          </View>

          <View style={styles.category}>
            <View style={styles.autoLayerRow1}>
              <Text style={styles.stroke}>↨</Text>
              <Text style={styles.category2}>Фільтрувати</Text>
            </View>
          </View>
        </View>

        {centers.map((el:any) => {
          return (
            <Center
              key={el.id}
              text={el.name}
              citys={el.address}
              photoLink={el.photoLink}
            />
          );
        })}
      </ImageBackground>
    </ScrollView>
  );
};

export default Centers;

const styles = StyleSheet.create({
  search: {
    maxHeight: 40,
    width: '85%',
    borderWidth: 1,
    marginLeft: '7%',
    padding: 6,
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    zIndex: 100,
    borderRadius: 30,
  },
  category: {
    // position: 'absolute',
    width: '100%',
    height: 45,
    top: 13,
    left: 12,
    zIndex: 11,
    overflow: 'hidden',
  },
  socialPayments: {
    width: '100%',
    height: 100,
    top: 50,
    color: 'rgb(0, 0, 0)',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 39,
    textAlign: 'center',
    zIndex: 10,
  },
  category2: {
    flexShrink: 0,
    paddingLeft: 20,
    color: 'rgb(0, 0, 0)',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 25.5,
    textAlign: 'left',
  },
  stroke: {
    left: 10,
    bottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
  },
  autoLayerRow1: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainContainer: {
    height: '100%',
  },
  backgroundContainer: {
    minHeight: 718,
  },
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
