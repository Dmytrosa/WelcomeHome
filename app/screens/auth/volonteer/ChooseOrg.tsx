import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Path, Svg} from 'react-native-svg';
import {
  establishmentForVols,
  registerVolonteer,
} from '../../../services/services/auth';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../../store/userSlice';
import {setSecureValue} from '../../../utils/keyChain';
import {SvgAdd} from '../../../screens/Payments/Payments';

const ChooseOrgSchema = Yup.object().shape({
  socialMediaLink: Yup.string().required("Це поле є обов'язковим"),
  // organization: Yup.string().required("Це поле є обов'язковим"),
});

export const BackSVG = () => {
  return (
    <Svg width="25" height="25" viewBox="0 0 10 16" fill="none">
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

const ChooseOrg = (props) => {
  const params = props.route.params.values
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [error, setError] = useState('');
  const [establishments, setEstablishments] = useState([]);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const func = async () => {
      const response: any = await establishmentForVols({TypeId:1}, {});
      setEstablishments(response);
    };
    func();
  }, []);



  const handleLogic = (values) => {
    
    const transformedObject = {
      fullName: params.fullName,
      phoneNumber: params.phone,
      email: params.email,
      socialUrl: values.socialMediaLink,
      establishmentId: value,
      password: params.password,
    };
    const func = async () => {
      const response: any = await registerVolonteer(transformedObject);
      const {accessToken, role, userId, userName, email} = response;
      dispatch(
        updateUser({accessToken, role, userId, userName, email}),
      );
      setSecureValue('token', accessToken);
      navigation.navigate('FlashScreen', {name: userName});
    };
    func();
  }

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

        <Text style={styles.heading}>Підтвердження діяльності</Text>
        <Formik
          initialValues={{
            socialMediaLink: '',
          }}
          validationSchema={ChooseOrgSchema}
          onSubmit={handleLogic}>
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
                <Text style={styles.smallLabel}>
                  Посилання на соціальні мережі
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="https://www.youraccountlink.com/"
                  onChangeText={handleChange('socialMediaLink')}
                  onBlur={handleBlur('socialMediaLink')}
                  value={values.socialMediaLink}
                />
              </View>
              <View style={[styles.centered]}>
                <Text style={styles.smallLabel}>Волонтерська організація</Text>
                <View style={{display: 'flex', flexDirection:'row'}}>
                <DropDownPicker
                  style={styles.estInput}
                  open={open}
                  value={value}
                  items={establishments.map(item => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setEstablishments}
                />
                 <TouchableOpacity onPress={()=>{ ; navigation.navigate('CreateOrg');}}>
                  <View style={{position: 'absolute', right: 25, top: 25}}>
                    <SvgAdd />
                  </View>
                </TouchableOpacity>
                </View>
              </View>

              {error ? <Text style={styles.errorText}>{error}</Text> : null}

              <View style={styles.centered}>
                <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
                  <Text style={styles.buttonText}>Зареєструватись</Text>
                </TouchableOpacity>
              </View>
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
  edit2: {
    // position: 'absolute',
    width: 82,
    height: 21,
    // top: 3,
    left: 35,

    color: 'rgb(255, 255, 255)',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    textAlign: 'center',
    zIndex: 14,
  },
  autoLayerRow: {
    // position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: 132,
    height: 28,
    top: 5,
    right: 14,
    // zIndex: 12,
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
    elevation: 5,
    shadowColor: 'gray',
    marginBottom: 20,
    marginLeft: 10,
    paddingLeft: 15,
    borderRadius: 20,
    // backgroundColor: 'white',
    width: '84%',
    height: 41,
    flexShrink: 0,
    borderColor: 'white',
    borderWidth: 1,
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

export default ChooseOrg;
