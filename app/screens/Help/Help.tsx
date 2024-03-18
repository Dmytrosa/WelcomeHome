import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import Event from './Events/event';
import {event} from '../../services/services/event';

const Help = (props: any) => {
  const user = {...props};

  const [events, setEvents] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await event(user);
        setEvents(response);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      <ImageBackground
        source={require('../../../assets/bgr_darkBlue_blue.png')}
        resizeMode="cover"
        style={styles.backgroundContainer}>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Text
            style={{
              marginTop: 30,
              lineHeight: 90,
              color: 'black',
              fontSize: 26,
              fontStyle: 'normal',
              fontWeight: '700',
            }}>
            Психологічна допомога
          </Text>
        </View>
        <Event text={'Групи Підтримки'} svg={
        <Image source={require('../../../assets/public/discussion-circle-svgrepo-com.png')}/>}/>
        <Event text={'Психологічні служби'} svg={
        <Image source={require('../../../assets/public/support-svgrepo-com.png')}/>}/>
        <Event text={'Благодійні заходи'} svg={
        <Image source={require('../../../assets/public/event-svgrepo-com.png')}/>}/>
      </ImageBackground>
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  backgroundContainer: {
    minHeight: 718,
  },
});
