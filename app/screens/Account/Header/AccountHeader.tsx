import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';
import Svg, {G, Path, Defs, ClipPath, Rect, Ellipse} from 'react-native-svg';

const Settings = () => {
  return (
    <View>
      <Svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.4041 24.8969C38.0599 25.2452 38.5657 25.7952 38.9217 26.3452C39.6149 27.4819 39.5587 28.8752 38.8842 30.1035L37.5727 32.3035C36.8795 33.4769 35.5867 34.2102 34.2565 34.2102C33.6007 34.2102 32.87 34.0269 32.2705 33.6602C31.7833 33.3485 31.2213 33.2385 30.6217 33.2385C28.7669 33.2385 27.2118 34.7602 27.1556 36.5752C27.1556 38.6835 25.4319 40.3335 23.2772 40.3335H20.7292C18.5558 40.3335 16.8321 38.6835 16.8321 36.5752C16.7946 34.7602 15.2395 33.2385 13.3847 33.2385C12.7664 33.2385 12.2043 33.3485 11.7359 33.6602C11.1364 34.0269 10.3869 34.2102 9.74993 34.2102C8.40095 34.2102 7.10817 33.4769 6.41494 32.3035L5.12217 30.1035C4.42894 28.9119 4.39147 27.4819 5.08469 26.3452C5.38447 25.7952 5.94655 25.2452 6.58357 24.8969C7.10817 24.6402 7.44542 24.2185 7.76393 23.7235C8.70072 22.1469 8.13864 20.0752 6.54609 19.1402C4.69124 18.0952 4.09169 15.7669 5.15964 13.9519L6.41494 11.7885C7.50162 9.97354 9.82487 9.33187 11.6985 10.3952C13.3285 11.2752 15.4456 10.6885 16.4012 9.1302C16.7009 8.61687 16.8696 8.06687 16.8321 7.51687C16.7946 6.80187 17.0007 6.12354 17.3567 5.57354C18.0499 4.43687 19.3052 3.70354 20.673 3.66687H23.3147C24.7012 3.66687 25.9565 4.43687 26.6497 5.57354C26.9869 6.12354 27.2118 6.80187 27.1556 7.51687C27.1181 8.06687 27.2867 8.61687 27.5865 9.1302C28.542 10.6885 30.6592 11.2752 32.3079 10.3952C34.1628 9.33187 36.5048 9.97354 37.5727 11.7885L38.828 13.9519C39.9147 15.7669 39.3152 18.0952 37.4416 19.1402C35.849 20.0752 35.2869 22.1469 36.2425 23.7235C36.5422 24.2185 36.8795 24.6402 37.4041 24.8969ZM16.7009 22.0185C16.7009 24.8969 19.0804 27.1885 22.0219 27.1885C24.9635 27.1885 27.2867 24.8969 27.2867 22.0185C27.2867 19.1402 24.9635 16.8302 22.0219 16.8302C19.0804 16.8302 16.7009 19.1402 16.7009 22.0185Z"
          fill="#01161E"
        />
      </Svg>
    </View>
  );
};

const AccHeader = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.stepanBandera}>{props.name}</Text>
          <Text style={styles.phoneNumber}>{props.email}</Text>
        </View>
        <Settings />
      </View>
    </View>
  );
};
export {AccHeader};

const styles = StyleSheet.create({
  mainContainer: {
    height: 160,
  },
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    color: '#0D0F44',
  },

  stepanBandera: {
    position: 'relative',
    width: 244,
    height: 50.017,
    top: 0,
    left: 0,

    color: 'rgb(19, 15, 38)',
    fontSize: 30,
    fontWeight: '900',
    lineHeight: 45,
    textAlign: 'left',
    zIndex: 12,
    wordBreak: 'break-word',
  },
  setting: {
    position: 'relative',
    width: '11.1%',
    height: '67.25%',
    // top: '32.75%',
    left: '88.9%',
    backgroundColor: 'transparent', // assuming background is an image, use 'transparent' for no background color
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    zIndex: 13,
  },
  phoneNumber: {
    position: 'relative',
    width: 172,
    height: 25.009,
    color: 'rgb(19, 15, 38)',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'left',
    zIndex: 14,
  },
});
