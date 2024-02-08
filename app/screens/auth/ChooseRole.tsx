import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native';


const ChooseRole = () => {
  const navigation = useNavigation();
  
const handlerToLogIn =()=>{
    navigation.navigate('LogIn');
}
const handlerToUser =()=>{
    navigation.navigate('UserReg');
}
const handlerToVolonteer =()=>{
    navigation.navigate('VolonteerReg');
}

  return (
    <ScrollView>
      <View style={styles.container}>


      <TouchableOpacity onPress={handlerToUser} style = {styles.card}> 
        <Text style={styles.userText}>Мені потрібна допомога</Text>
        <Image
        style={styles.logo}
        source={require('../../../assets/user.png')}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlerToVolonteer} style = {styles.card}> 
        <Text style={styles.volonteerText}>Я хочу допомогти</Text>
        <Image
        style={styles.logo}
        source={require('../../../assets/volonteer.png')}
      />
        </TouchableOpacity>


        <TouchableOpacity onPress={handlerToLogIn}> 
        <Text style={styles.logIn}>Вже зареєстровані? Увійти</Text>
        </TouchableOpacity>
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
    justifyContent: 'center'
  },
  logo:{
  },
  card:{
    elevation: 10,
    shadowColor: 'gray',
    width: 263,
    height: 206, 
    marginBottom: 65,
    marginLeft: "14%",
    // padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },

  ///////
  userText:{
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    top:5,
    color: 'black',
  },
  volonteerText: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    top:5,
    color: 'black',
  },
  logIn: {
    fontSize: 15,
    fontWeight: '600',
    // wordWrap: 'break-word',
    textAlign: 'center',
    // marginBottom: 30,
    textDecorationLine:'underline',
    // marginTop:100,
    top: 80,
    color: 'black',
  },
});

export default ChooseRole;