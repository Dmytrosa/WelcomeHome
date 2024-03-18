import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Event = (props: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>{props.svg}</View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '93%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginLeft: 13,
    marginBottom: 13,
    borderRadius: 20,
  },
  imageContainer: {
    marginLeft: 5,
    flex: 1,
  },
  textContainer: {
    flex: 2,
  },
  text: {
    marginLeft: -45,
    fontFamily: 'Cochin',
    lineHeight: 70,
    fontWeight: '800',
    color: '#0D0F44',
    fontSize: 22,
  },
});
