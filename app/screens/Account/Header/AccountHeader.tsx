import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text} from 'react-native';
import Svg, {G, Path, Defs, ClipPath, Rect, Ellipse} from 'react-native-svg';

const Settings = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        // {alignItems: 'center', justifyContent: 'center'},
        {position: 'absolute', top: 20, left: 350},
      ]}>
      <Svg width="39" height="43" viewBox="0 0 39 43" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.3472 12.646L36.0505 10.3924C34.9534 8.48558 32.5223 7.82776 30.6157 8.92188V8.92188C29.7081 9.45732 28.6252 9.60923 27.6056 9.34412C26.5861 9.079 25.7137 8.41863 25.1809 7.50864C24.8381 6.93023 24.6539 6.27142 24.647 5.59885V5.59885C24.6779 4.52054 24.2717 3.4756 23.5209 2.70209C22.7701 1.92857 21.7386 1.49235 20.6614 1.4928H18.0489C16.9937 1.49279 15.9819 1.91392 15.2375 2.66302C14.4931 3.41212 14.0774 4.42742 14.0825 5.48426V5.48426C14.0512 7.66628 12.276 9.41866 10.097 9.41843C9.42542 9.41145 8.7676 9.22698 8.19005 8.88369V8.88369C6.28344 7.78956 3.8523 8.44738 2.75527 10.3542L1.3632 12.646C0.267501 14.5504 0.915396 16.9837 2.81248 18.0889V18.0889C4.04561 18.8019 4.80525 20.1196 4.80525 21.5456C4.80525 22.9716 4.04561 24.2893 2.81248 25.0023V25.0023C0.917806 26.1001 0.269203 28.5274 1.3632 30.4261V30.4261L2.67899 32.6988C3.19299 33.6276 4.0554 34.3131 5.07538 34.6034C6.09536 34.8937 7.18881 34.765 8.11377 34.2457V34.2457C9.02306 33.7143 10.1066 33.5688 11.1236 33.8413C12.1406 34.1139 13.0067 34.782 13.5295 35.6972C13.8723 36.2756 14.0565 36.9344 14.0634 37.6069V37.6069C14.0634 39.8114 15.8478 41.5984 18.0489 41.5984H20.6614C22.8552 41.5984 24.6365 39.823 24.647 37.626V37.626C24.6419 36.5659 25.0601 35.5477 25.8087 34.798C26.5572 34.0484 27.5739 33.6295 28.6325 33.6346C29.3024 33.6525 29.9575 33.8362 30.5394 34.1693V34.1693C32.441 35.2667 34.8706 34.6178 35.9742 32.7179V32.7179L37.3472 30.4261C37.8786 29.5126 38.0245 28.4245 37.7525 27.4029C37.4805 26.3813 36.813 25.5105 35.8979 24.9832V24.9832C34.9828 24.456 34.3154 23.5851 34.0433 22.5635C33.7713 21.5419 33.9172 20.4539 34.4486 19.5403C34.7942 18.936 35.2945 18.435 35.8979 18.0889V18.0889C37.7836 16.9843 38.43 14.5653 37.3472 12.6651V12.6651V12.646Z"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Ellipse
          cx="19.3647"
          cy="21.5456"
          rx="5.49199"
          ry="5.5002"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

const AccHeader = (props) => {
  return (
    <View style={styles.container}>
      <Settings />
      <View style={styles.autoLayerRow}>
        <Text style={styles.stepanBandera}>{props.name}</Text>
        <View style={styles.setting} />
      </View>
      <Text style={styles.phoneNumber}>{props.email}</Text>
    </View>
  );
};
export {AccHeader};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#afc9de',
    color: '#0D0F44',
  },
  autoLayerRow: {
    position: 'relative',
    height: '23%',
    top: '15%',
    right: 16,
    left: 21,
    zIndex: 5,
  },
  stepanBandera: {
    position: 'relative',
    width: 244,
    height: 50.017,
    top: 0,
    left: 0,
     
    color: 'rgb(19, 15, 38)',
    fontSize: 30,
    fontWeight: '800',
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
    top: 40,
    left: 24,
     
    color: 'rgb(19, 15, 38)',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'left',
    zIndex: 14,
  },
});
