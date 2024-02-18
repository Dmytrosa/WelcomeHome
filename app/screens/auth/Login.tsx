import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Layout from '../../components/Layout';

import {useDispatch} from 'react-redux';
import {updateUser} from '../../store/userSlice';
 
import {login} from '../../services/services/auth';
import {setSecureValue} from '../../utils/keyChain';
import {transformToFormikErrors} from '../../utils/form';
import {useNavigation} from '@react-navigation/native';
import {Path, Svg} from 'react-native-svg';

interface ValuesType {
  email: string;
  password: string;
}

const initialValues: ValuesType = {email: '', password: ''};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

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

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = (values: ValuesType, {setErrors}: any) => {
    async function fetchData() {

      const transformedObject = {
        email: values.email,
        password: values.password,
      };
      const response: any = await login(transformedObject);
      const {accessToken, role, userId, userName, email} = response;
      
      dispatch(updateUser({accessToken, role, userId, userName, email}));
      setSecureValue('token', accessToken);
      navigation.navigate('FlashScreen', {name: userName});
    }
    fetchData();
  };

  const navigator = useNavigation();

  const goBack = () => {
    navigator.goBack();
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ImageBackground
          source={require('../../../assets/bgr_darkBlue_blue.png')}
          resizeMode="cover"
          style={styles.backgroundContainer}>
          <TouchableOpacity onPress={goBack}>
            <View style={styles.backButton}>
              <SVG />
            </View>
          </TouchableOpacity>
          <Text style={styles.heading}>Введіть інформацію для входу</Text>
          <View>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={handleLogin}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  {/* 
                  <View>
                    <Text style={styles.smallLabel}>Електронна пошта</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=""
                      value={values.email}
                      onChangeText={handleChange('email')}
                    />
                  </View> */}
                  <View style={styles.centered}>
                    <Text style={styles.smallLabel}>Електронна пошта</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="example@mail.welhome"
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
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>
                  {/* <Button
                    title="Login"
                    onPress={handleSubmit}
                    testID="Login.Button"
                  /> */}
                  <View testID="Login.Button" style={styles.centered}>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.submit}>
                      <Text style={styles.buttonText}>Увійти</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </ScrollView>
    </Layout>
  );
};

export default Login;

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    left: -5,
    top: -5,
    width: 50,
    height: 50,
    flexShrink: 0,
    // backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
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
    marginLeft: 18,
    marginBottom: 0,
  },
  formWrapper: {
    backgroundColor: '#E5EFFB',
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
    fontWeight: 'bolder',
    textAlign: 'center',
    position: 'absolute',
    top: 27,
    left: 273,
    paddingTop: 4,
    borderRadius: 10,
    boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
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
    color: '#130F26',
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
    // wordWrap: 'break-word',
    marginTop: 0,
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
    backgroundColor: '#FFF',
    // boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
    // display: 'inline'
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
  establishment: {
    // gap: 8,
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
