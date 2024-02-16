import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {transformToFormikErrors} from '../../../utils/form';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {BackSVG} from './ChooseOrg';
import {cityGET} from '../../../services/services/city';
import {volunteerOrg} from '../../../services/services/establishment';

const CreateOrgSchema = Yup.object().shape({
  fullName: Yup.string().required("Це поле є обов'язковим"),
  address: Yup.string().required("Це поле є обов'язковим"),
  phoneNumber: Yup.string().required("Це поле є обов'язковим"),
  website: Yup.string().url('Введіть коректне посилання'),
  city: Yup.string().required("Це поле є обов'язковим"),
  otherContacts: Yup.string(),
});

const CreateOrg = () => {
  const [city, setCity] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const func = async () => {
      const response: any = await cityGET();
      debugger;
      setCity(response);
    };
    func();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ImageBackground
        source={require('../../../../assets/bgr_darkBlue_blue.png')}
        resizeMode="cover"
        style={styles.backgroundContainer}>
        <View style={{top: 30}}>
          <TouchableOpacity onPress={goBack}>
            <BackSVG />
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>
          Заповніть основну інформацію про волонтерську організацію:
        </Text>
        <Formik
          initialValues={{
            fullName: '',
            address: '',
            phoneNumber: '',
            website: '',
            otherContacts: '',
            city: 'Оберіть місто',
          }}
          validationSchema={CreateOrgSchema}
          onSubmit={async (values, {setErrors, resetForm}) => {
            const cityId = parseInt(values.city, 10);
            const formData = {
              name: values.fullName,
              address: values.address,
              phoneNumber: values.phoneNumber,
              pageURL: values.website,
              cityId: cityId,
              otherContacts: values.otherContacts,
            };
            await volunteerOrg(formData);
            goBack;
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Повна назва</Text>
                <TextInput
                  style={styles.input}
                  placeholder="ЦНАП"
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
              </View>
              {errors.fullName && touched.fullName && (
                <Text style={styles.error}>{errors.fullName}</Text>
              )}
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Адреса</Text>
                <TextInput
                  style={styles.input}
                  placeholder="address"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                />
              </View>
              {errors.address && touched.address && (
                <Text style={styles.error}>{errors.address}</Text>
              )}
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Номер телефону</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+38"
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                />
              </View>
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.error}>{errors.phoneNumber}</Text>
              )}
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>
                  Посилання на сайт / соціальні мережі
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="https://www.youraccountlink.com/"
                  onChangeText={handleChange('website')}
                  onBlur={handleBlur('website')}
                  value={values.website}
                />
              </View>
              {errors.website && touched.website && (
                <Text style={styles.error}>{errors.website}</Text>
              )}
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Інші контакти</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  onChangeText={handleChange('otherContacts')}
                  onBlur={handleBlur('otherContacts')}
                  value={values.otherContacts}
                />
              </View>
              <View style={styles.centered}>
                <Text style={styles.smallLabel}>Місто</Text>
                <Picker
                  style={styles.input}
                  selectedValue={values.city}
                  onValueChange={value => handleChange('city')(value)}>
                  <Picker.Item label="Виберіть зі списку" value="-1" />
                  {city.map(item => {
                    <Picker.Item label={item.name} value={item.id} />;
                  })}
                </Picker>
              </View>
              {errors.city && touched.city && (
                <Text style={styles.error}>{errors.city}</Text>
              )}
              {errors.error && <Text style={styles.error}>{errors.error}</Text>}

              <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Додати</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login: {
    fontSize: 15,
    top: '50%',
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
    marginTop: -20,
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

export default CreateOrg;
