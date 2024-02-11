import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { transformToFormikErrors } from '../../../utils/form';
import {Path, Svg} from 'react-native-svg';
import { registerVolonteer } from '../../../services/services/auth';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../store/userSlice';
import { setSecureValue } from '../../../utils/keyChain';


const VolonteerRegisterSchema = Yup.object().shape({
    fullName: Yup.string().required('Це поле є обов\'язковим'),
    phone: Yup.string().required('Це поле є обов\'язковим'),
    email: Yup.string().email('Невірний формат електронної пошти').required('Це поле є обов\'язковим'),
    socialMediaLink: Yup.string(),
    password: Yup.string().min(8, 'Пароль повинен містити принаймні 8 символів').required('Це поле є обов\'язковим'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати').required('Це поле є обов\'язковим'),
    organization: Yup.string().required('Це поле є обов\'язковим'),
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


  const VolonteerRegister = () => {
    const [error, setError] = useState('');
    const [establishment, setEstablishment] = useState('');
  
    const navigation = useNavigation();
  
    const goBack = () => {
      navigation.goBack();
    };
    const dispatch = useDispatch()

    return (
      <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
            <View style={styles.backButton}>
              <SVG />
            </View>
          </TouchableOpacity>
          <Text style={styles.heading}>Заповніть основну інформацію</Text>
          <Formik
            initialValues={{
              fullName: '',
              phone: '',
              email: '',
              socialMediaLink: '',
              password: '',
              confirmPassword: '',
              organization: '',
            }}
            validationSchema={VolonteerRegisterSchema}
            onSubmit={(values, { setErrors, resetForm }) => {
              const organizationNumber = parseInt(values.organization, 10); ;
              const { confirmPassword, ...newValues } = { ...values, organization: organizationNumber };

              const transformedObject = {
                fullName: newValues.fullName,
                phoneNumber: newValues.phone, 
                email: newValues.email,
                socialUrl: newValues.socialMediaLink, 
                establishmentId: newValues.organization,
                password: newValues.password,
              };
            const func = async ()=>{
              const response :any  = await registerVolonteer(transformedObject)
                const {accessToken, role, userId, userName, email} = response;
                  dispatch(updateUser({accessToken, role, userId, userName, email}));
                  setSecureValue('token', accessToken);
                  navigation.navigate('ChooseRole', {name: userName});
            }
            func()
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <Text style={styles.smallLabel}>Повне ім'я (ПІБ)</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName && <Text style={styles.error}>{errors.fullName}</Text>}
  
                <Text style={styles.smallLabel}>Номер телефону</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                {errors.phone && touched.phone && <Text style={styles.error}>{errors.phone}</Text>}
  
                <Text style={styles.smallLabel}>Електронна пошта</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
  
                <Text style={styles.smallLabel}>Посилання на соц. мережі</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  onChangeText={handleChange('socialMediaLink')}
                  onBlur={handleBlur('socialMediaLink')}
                  value={values.socialMediaLink}
                />
  
                <Text style={styles.smallLabel}>Пароль</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
  
                <Text style={styles.smallLabel}>Підтвердіть пароль</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}
  
                <Text style={styles.smallLabel}>Волонтерська організація</Text>
                <View style={styles.establishment}>
                  <Picker
                    style={styles.estInput}
                    selectedValue={values.organization}
                    onValueChange={value => handleChange('organization')(value)}
                  >
                    <Picker.Item label="Оберіть зі списку" value= "0" />
                    <Picker.Item label="ЦНАП" value= "1" />
                    <Picker.Item label="Лікарня" value="2" />
                    <Picker.Item label="Соціальна підтримка" value="3" />
                  </Picker>
                </View>
  
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <View>
                <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
                  <Text style={styles.buttonText}>Додати</Text>
                </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          
        </View>
        <Text style={styles.linkText}>Вже зареєстровані? Увійти</Text>
      </ScrollView>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#E5EFFB',
    minHeight: 900,
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
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    // wordWrap: 'break-word',
    textAlign: 'center',
    marginBottom: 30,
    marginTop:30,
  },
  smallLabel: {
    color: '#878787',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: "600",
    lineHeight: 27,
    marginBottom: 0
  },
  submit: {
    top: 50,
    left: 'auto',
    width: 'auto',
    height: 50,
    flexShrink: 0,
    backgroundColor: '#8EB0D2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 14,
  },
  add: {
    width:41,
    height: 41,
    backgroundColor: '#FFFFFF',
    color: 'gray',
    fontSize: 29,
    fontWeight:'bold',
    textAlign: 'center',
    position: 'absolute',
    top:27,
    left: 273,
    paddingTop:4,
    borderRadius: 10,
    // boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
  },
  buttonText: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff',
  },
  input: {
    width: '100%',
    height: 41,
    flexShrink: 0,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 5,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    // boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
    // display: 'inline'
  },
  linkText: {
    color: '#130F26',
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginTop:0,
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
    marginTop:0,
    width:'100%',
    justifyContent: 'space-between',
  },
});

export default VolonteerRegister;