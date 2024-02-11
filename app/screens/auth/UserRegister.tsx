import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Formik} from 'formik';

import * as Yup from 'yup';
import {transformToFormikErrors} from '../../utils/form';
import {Path, Svg} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../store/userSlice';
import {setSecureValue} from '../../utils/keyChain';
import {register} from '../../services/services/auth';

const StepCreateSchema = Yup.object().shape({
  fullName: Yup.string().required("Це поле є обов'язковим"),
  phoneNumber: Yup.string().required("Це поле є обов'язковим"),
  email: Yup.string()
    .email('Введіть коректну електронну пошту')
    .required("Це поле є обов'язковим"),
  password: Yup.string()
    .min(8, 'Пароль повинен містити принаймні 8 символів')
    .required("Це поле є обов'язковим"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати')
    .required("Це поле є обов'язковим"),
});

const UserRegister = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleRegister = (values: any, {setErrors}: any) => {
    const {fullName, phoneNumber, email, password} = values;

    const addUser = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    const func = async () => {
      const response: any = await register(addUser);
      const {accessToken, role, userId, userName, email} = response;
      dispatch(updateUser({accessToken, role, userId, userName, email}));
      setSecureValue('token', accessToken);
      navigation.navigate('FlashScreen', {name: userName});
    };
    func();
  };
  const SVG = () => {
    return (
      <Svg width="10" height="16" viewBox="0 0 10 16" fill="none">
        <Path
          d="M8.5 15L1.5 8L8.5 1"
          stroke="#101010"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  };

  const navigator = useNavigation();

  const goBack = () => {
    navigator.goBack();
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ImageBackground
        source={require('../../../assets/bgr_darkBlue_blue.png')}
        resizeMode="cover"
        style={styles.backgroundContainer}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={goBack}>
            <SVG />
          </TouchableOpacity>
        </View>
        <Formik
          initialValues={{
            fullName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={StepCreateSchema}
          onSubmit={handleRegister}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Text style={styles.heading}>Заповніть основну інформацію</Text>
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
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <Text style={styles.errorText}>{errors.phoneNumber}</Text>
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
                  placeholder="********"
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
                  placeholder="********"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>

              {errors.error && <Text>{errors.error}</Text>}
              <View style={styles.centered}>
                <Text style={styles.linkText}>Вже зареєстровані? Увійти</Text>
              </View>

              <View style={styles.centered}>
                <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
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
    top: 50,
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
    // boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
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

export default UserRegister;
