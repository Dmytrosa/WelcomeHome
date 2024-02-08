import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Svg, {Path} from 'react-native-svg';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const SVG = () =>{
    return(
<Svg width="80" height="80" viewBox="0 0 24 24" fill="none" >
<Path d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z" fill="#1C274C"/>
</Svg>
    )
}


const FlashScreen = (props) => {
  const userName = props.route.params.name
  const navigation = useNavigation();
  useEffect(()=>{  setTimeout(()=>{navigation.navigate('Account');
}, 4000)}, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Home,</Text>
        <Text style={styles.stepan}>{userName}</Text>
        <View style = {{left:"40%"}}>
        <SVG/>
        </View>
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#E5EFFB',
    minHeight: 790,
  },
  welcome: {
    fontSize: 30,
    fontWeight: '700',
    wordWrap: 'break-word',
    textAlign: 'center',
    marginBottom: 10,
    marginTop:150,
    color: '#1E2F85',
  },
  stepan: {
    fontSize: 30,
    fontWeight: '700',
    wordWrap: 'break-word',
    textAlign: 'center',
    marginBottom: 30,
    marginTop:0,
    color: '#E7DF19',
  },
});

export default FlashScreen;