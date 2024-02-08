import React, {useState, useRef, ReactNode} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

import {useTheme} from '../../../theme/useTheme';
import Layout from '../../../components/Layout';

type event = {
  text: string;
};

const Event1 = () => {
  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <Path
        d="M31.975 50.05L28.225 51.6625C26.9625 52.2 25.5375 52.2 24.2875 51.6625L20.5375 50.05C18.7 49.2625 17.5125 47.45 17.5125 45.45V38.75C17.5125 34.6125 20.875 31.25 25.0125 31.25H27.5125C31.65 31.25 35.0125 34.6125 35.0125 38.75V45.45C35.0125 47.45 33.825 49.2625 31.9875 50.05H31.975Z"
        fill="#E0E0E0"
      />
      <Path
        d="M42.675 57.5C40.4 55.1875 37.2375 53.75 33.75 53.75H30C30 55.825 28.325 57.5 26.25 57.5C24.175 57.5 22.5 55.825 22.5 53.75H18.75C11.85 53.75 6.25 59.35 6.25 66.25V75H33.75L38.75 57.5H42.675Z"
        fill="#274C77"
      />
      <Path
        d="M20 70H22.5C23.875 70 25 71.125 25 72.5V75H20V70Z"
        fill="#E0E0E0"
      />
      <Path
        d="M13.75 40.9125C13.3875 41.125 12.95 41.25 12.5 41.25C11.125 41.25 10 40.125 10 38.75C10 37.375 11.125 36.25 12.5 36.25C13.025 36.25 13.5125 36.4125 13.925 36.7"
        fill="#274C77"
      />
      <Path
        d="M38.75 40.9125C39.1125 41.125 39.55 41.25 40 41.25C41.375 41.25 42.5 40.125 42.5 38.75C42.5 37.375 41.375 36.25 40 36.25C39.475 36.25 38.9875 36.4125 38.575 36.7"
        fill="#274C77"
      />
      <Path
        d="M22.5 50.8875L24.275 51.65C25.5375 52.2 26.9625 52.2 28.225 51.65L30 50.8875V53.75C30 55.825 28.325 57.5 26.25 57.5C24.175 57.5 22.5 55.825 22.5 53.75V50.8875Z"
        fill="#A3A3A3"
      />
      <Path d="M33.75 75L38.75 57.5H66.25L61.25 75" fill="#8B8C89" />
      <Path
        d="M34.2375 35.475C33.525 35.1875 32.7 35 31.6625 35C26.25 35 26.25 40 20.825 40C19.4125 40 18.3625 39.6625 17.5 39.1625V38.75C17.5 34.6125 20.8625 31.25 25 31.25H27.5C30.4625 31.25 33.025 32.975 34.2375 35.475Z"
        fill="#274C77"
      />
      <Path
        d="M35 44.5V38.75C35 34.6125 31.6375 31.25 27.5 31.25H25C20.8625 31.25 17.5 34.6125 17.5 38.75V43.75H15C14.3125 43.75 13.75 43.1875 13.75 42.5V38.75C13.75 31.85 19.35 26.25 26.25 26.25C29.7 26.25 32.825 27.65 35.0875 29.9125C37.35 32.175 38.75 35.3 38.75 38.75V42.725C38.75 43.325 38.325 43.8375 37.75 43.95L35 44.5Z"
        fill="#E7ECEF"
      />
      <Path
        d="M50 65C50.6875 65 51.25 65.5625 51.25 66.25C51.25 66.9375 50.6875 67.5 50 67.5V65Z"
        fill="#A3CEF1"
      />
      <Path
        d="M26.25 46.25C26.1125 45.575 26.55 44.9125 27.225 44.775L37.5 42.725V39.15C37.5 33.1625 32.9875 27.925 27.025 27.525C20.475 27.0875 15 32.2875 15 38.75V42.5H17.5V45H15C13.625 45 12.5 43.875 12.5 42.5V39.15C12.5 32 17.8 25.725 24.925 25.0625C33.1 24.2875 40 30.725 40 38.75V42.725C40 43.9125 39.1625 44.9375 37.9875 45.175L27.7125 47.225C27.0375 47.3625 26.375 46.925 26.2375 46.25H26.25Z"
        fill="#6096BA"
      />
      <Path
        d="M26.25 75H23.75V72.5C23.75 71.8125 23.1875 71.25 22.5 71.25H13.75C13.0625 71.25 12.5 70.6875 12.5 70V65C12.5 64.6625 12.6375 64.35 12.8625 64.1125L14.475 62.5C14.9625 62.0125 15.75 62.0125 16.2375 62.5C16.725 62.9875 16.725 63.775 16.2375 64.2625L14.9875 65.5125V68.75H22.4875C24.5625 68.75 26.2375 70.425 26.2375 72.5V75H26.25Z"
        fill="#6096BA"
      />
      <Path d="M66.25 73.75H3.75V76.25H66.25V73.75Z" fill="#A3CEF1" />
      <Path
        d="M57.5 41.25C67.8553 41.25 76.25 32.8553 76.25 22.5C76.25 12.1447 67.8553 3.75 57.5 3.75C47.1447 3.75 38.75 12.1447 38.75 22.5C38.75 32.8553 47.1447 41.25 57.5 41.25Z"
        fill="#A3CEF1"
      />
      <Path d="M58.75 43.75H56.25V46.25H58.75V43.75Z" fill="#6096BA" />
      <Path d="M55 48.75H52.5V51.25H55V48.75Z" fill="#6096BA" />
      <Path d="M50 51.25H47.5V53.75H50V51.25Z" fill="#6096BA" />
      <Path
        d="M43.75 21.25H52.5L51.725 24.3625C51.45 25.475 50.45 26.25 49.3 26.25H43.75"
        fill="#E0E0E0"
      />
      <Path
        d="M48.75 21.25H46.25V20C46.25 19.3125 46.8125 18.75 47.5 18.75C48.1875 18.75 48.75 19.3125 48.75 20V21.25Z"
        fill="#A3A3A3"
      />
      <Path d="M45 20H42.5V27.5H45V20Z" fill="#6096BA" />
      <Path
        d="M71.25 26.25H62.5L63.275 23.1375C63.55 22.025 64.55 21.25 65.7 21.25H71.25"
        fill="#E0E0E0"
      />
      <Path
        d="M67.5 28.75C66.8125 28.75 66.25 28.1875 66.25 27.5V26.25H68.75V27.5C68.75 28.1875 68.1875 28.75 67.5 28.75Z"
        fill="#A3A3A3"
      />
      <Path d="M72.5 20H70V27.5H72.5V20Z" fill="#6096BA" />
      <Path
        d="M59.9 8.75C59.6125 9.8125 58.65 10.6125 57.5 10.6125C56.35 10.6125 55.375 9.825 55.1 8.75C53.5625 9.6 52.5 11.225 52.5 13.1125C52.5 15.875 57.5 19.3625 57.5 19.3625C57.5 19.3625 62.5 15.875 62.5 13.1125C62.5 11.225 61.45 9.6125 59.9 8.75Z"
        fill="#F76C5E"
      />
      <Path d="M60 35H58.75V37.5L55 35H52.5V30H60V35Z" fill="#6096BA" />
    </Svg>
  );
};

const Event: React.FC<event> = ({text}) => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Event1 />
        {/* {svg && <SvgXml xml={svg} width="70" height="70" />} */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Event;

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
