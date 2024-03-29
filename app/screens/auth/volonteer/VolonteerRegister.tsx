import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {transformToFormikErrors} from '../../../utils/form';
import {Path, Svg} from 'react-native-svg';
import {registerVolonteer} from '../../../services/services/auth';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../../store/userSlice';
import {setSecureValue} from '../../../utils/keyChain';
import { BackSVG } from './ChooseOrg';

const VolonteerRegisterSchema = Yup.object().shape({
  fullName: Yup.string().required("Це поле є обов'язковим"),
  phone: Yup.string().required("Це поле є обов'язковим"),
  email: Yup.string()
    .email('Невірний формат електронної пошти')
    .required("Це поле є обов'язковим"),
  socialMediaLink: Yup.string(),
  password: Yup.string()
    .min(8, 'Пароль повинен містити принаймні 8 символів')
    .required("Це поле є обов'язковим"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати')
    .required("Це поле є обов'язковим"),
  organization: Yup.string().required("Це поле є обов'язковим"),
});


const VolonteerRegister = () => {
  const [error, setError] = useState('');
  const [establishment, setEstablishment] = useState('');

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();

  const handleLogic = (values) => {
      navigation.navigate('ChooseOrg', {values: values});
  }
  const handlerToLogIn = () => {
    navigation.navigate('LogIn');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ImageBackground
        source={require('../../../../assets/bgr_darkBlue_blue.png')}
        resizeMode="cover"
        style={styles.backgroundContainer}
        >
        <View style={{top: 30}}>
          <TouchableOpacity onPress={goBack}>
            <BackSVG />
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>Заповніть основну інформацію</Text>
        <Formik
          initialValues={{
            fullName: '',
            phone: '',
            email: '',
            socialMediaLink: '/',
            password: '',
            organization: '1',
          }}
          validationSchema={VolonteerRegisterSchema}
          onSubmit={handleLogic}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
            <View>
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Повне ім'я (ПІБ)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="ПІБ"
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}
              </View>
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Номер телефону</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+38"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                {errors.phone && touched.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
              </View>
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Електронна пошта</Text>
                <TextInput
                  style={styles.input}
                  placeholder="example@mail.com"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Пароль</Text>
                <TextInput
                  style={styles.input}
                  placeholder="exampleA0"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Підтвердіть пароль</Text>
                <TextInput
                  style={styles.input}
                  placeholder="exampleA0"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
              <View style={styles.centered}>
                <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
                  <Text style={styles.buttonText}>Далі</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlerToLogIn}>
            <Text style={styles.login}>Вже зареєстровані? Увійти</Text>
          </TouchableOpacity>
              </View>
            </View>
            </>
          )}
        </Formik>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login:{
    marginTop: 15,
    fontSize: 15,
    top:"50%",
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: 'black',
  },
  backButton: {
    left: -5,
    top: -5,
    width: 50,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  scrollViewContainer: {
    flexGrow: 1,
    marginTop: -20
  },
  backgroundContainer: {
    padding: 20,
    flex: 1,
    flexGrow: 1,
  },
  centered: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 23,
    fontWeight: '800',
    wordWrap: 'break-word',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  smallLabel: {
    width: '92%',
    color: '#130F26',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 27,
    marginLeft: 16,
    marginBottom: 0,
  },
  submit: {
    top: 10,
    width: '80%',
    height: 54,
    flexShrink: 0,
    backgroundColor: '#01161E',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 30,
  },
  add: {
    width: 41,
    height: 41,
    backgroundColor: '#FFFFFF',
    color: 'gray',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 27,
    left: 273,
    paddingTop: 4,
    borderRadius: 10,
    // boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
  },
  buttonText: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff',
  },
  input: {
    elevation: 5,
    shadowColor: 'gray',
    width: '95%',
    height: 41,
    flexShrink: 0,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  linkText: {
    width: '92%',
    marginLeft: 16,
    color: '#130F26',
    marginTop: 3,
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  estInput: {
    width: '84%',
    height: 41,
    flexShrink: 0,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 0,
    paddingLeft: 10,
    borderRadius: 10,
    background: '#FFF',
    // boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
    // display: 'inline'
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
  establishment: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginLeft: 0,
    marginTop: 0,
    width: '100%',
    justifyContent: 'space-between',
  },
  errorText: {
    color: 'red',
    marginTop: -13,
    marginBottom: 7,
  },
});

export default VolonteerRegister;
