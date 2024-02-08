import { useNavigation } from '@react-navigation/native';
import { clearUser } from '../../../store/userSlice';
import React, { useState, useRef } from 'react';
import { StyleSheet, FlatList, View, TextInput, Image, Text } from 'react-native';


const LeaveBtn = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.line_f} />
            <View style={styles.rectangle}>
                <Text style={styles.logout} onPress={()=>{navigation.navigate('ChooseRole')}}>Вийти з аккаунту</Text>
            </View>
        </View>
    )
}
export { LeaveBtn };

const styles = StyleSheet.create({
    line_f: {
        position: 'absolute',
        width: 357,
        top: 445,
        left: 15,
        backgroundColor: "red",
    },
    rectangle: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // width: 312,
        // height: 58,
        // flexShrink: 0,
        // position: 'absolute',
        // width: 312,
        // height: 58,
        // top: 695,
        // left: 38,
        // backgroundColor: 'rgb(255, 255, 255)',
        // borderWidth: 1,
        // borderColor: 'rgba(0, 0, 0, 0.5)',
        // zIndex: 40,
        // borderRadius: 10,
        // shadowColor: 'rgba(0, 0, 0, 0.07)',
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 12,
    },
    logout: {
        // position: 'absolute',
        width: "100%",
        // height: 58,
        top: "800%",
        // right: 40,
         
        color: 'rgb(19, 15, 38)',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 30,
        textAlign: 'center',
        zIndex: 41,
        textShadowOffset: {
            width: 0,
            height: 4,
        },
        textShadowRadius: 12,
    },
})