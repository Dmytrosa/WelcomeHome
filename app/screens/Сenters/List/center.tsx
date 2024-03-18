import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

type center = {
  text: string;
  citys: string;
  photoLink: string;
};

const Center = (props: center) => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: 'https://via.placeholder.com/150'}}
        style={styles.image}
      />
      <View style={styles.information}>
        <View style={styles.name_favorite}>
          <Text style={styles.mednean_center}>{props.text}</Text>
        </View>
        <Text style={styles.citys}>{props.citys}</Text>
      </View>
    </View>
  );
};

export default Center;

const styles = StyleSheet.create({
  citys: {
    flexShrink: 0,
    flexBasis: 'auto',
    width: 169,
    height: 18,

    color: 'rgb(135, 135, 135)',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'left',
  },
  mednean_center: {
    flexShrink: 0,
    flexBasis: 'auto',
    width: 237,
    height: 24,

    color: 'rgb(15, 15, 15)',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'left',
  },
  name_favorite: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexShrink: 0,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(196, 194, 194)',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    marginVertical: 8,
    minWidth: 0,
    marginLeft: 15,
    marginTop: -5,
  },
  med_pagespeed: {
    flexShrink: 0,
    width: 97,
    height: 90,
    borderBottomLeftRadius: 5,
    borderTopEndRadius: 5,
    borderBlockStart: 5,
    borderBottomRightRadius: 5,
  },
  card: {
    backgroundColor: "white",
    width: '95%',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 13,
    borderRadius: 25,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
