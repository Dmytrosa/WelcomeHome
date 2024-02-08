import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Picker } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { transformToFormikErrors } from '../../../utils/form';

const VolonteerAuthSchema = Yup.object().shape({
  title: Yup.string().required('Це поле є обов\'язковим'),
  phone: Yup.string().required('Це поле є обов\'язковим'),
  link: Yup.string(),
  contacts: Yup.string(),
  city: Yup.string(),
});

const VolonteerAuth = () => {
  const [error, setError] = useState('');

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      if (!values.title || !values.phone) {
        throw new Error('Будь ласка, заповніть всі обов\'язкові поля.');
      }
  
      const formData = {
        sequenceNumber: values.sequenceNumber,
        establishment: values.establishment,
        description: values.description,
        title: values.title,
        amount: values.amount,
      };
  
      // Ваш запит тут, наприклад:
      // const response = await api.post('/your-endpoint', formData);
  
      // Інші дії, які вам потрібно виконати після успішного відправлення форми
  
      // Очищення форми після успішного відправлення
      resetForm();
    } catch (e) {
      if (e.response?.data?.errors) {
        let result = transformToFormikErrors(e.response.data.errors);
        setErrors(result);
      }
    }
  };
  

  const goBack = () => {
    // Повернення назад
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={goBack}>
            {/* Сюда можна вставити SVG */}
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Заповніть основну інформацію про волонтерську організацію:</Text>
        <Formik
          initialValues={{ title: '', phone: '', link: '', contacts: '', city: '' }}
          validationSchema={VolonteerAuthSchema}
          onSubmit={handleSubmit}
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
              <Text style={styles.smallLabel}>Повна назва</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              {errors.title && touched.title && <Text style={styles.error}>{errors.title}</Text>}

              <Text style={styles.smallLabel}>Номер телефону</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              {errors.phone && touched.phone && <Text style={styles.error}>{errors.phone}</Text>}

              <Text style={styles.smallLabel}>Посилання на сайт / соц. мережі</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={handleChange('link')}
                onBlur={handleBlur('link')}
                value={values.link}
              />

              <Text style={styles.smallLabel}>Інші контакти</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={handleChange('contacts')}
                onBlur={handleBlur('contacts')}
                value={values.contacts}
              />

              <Text style={styles.smallLabel}>Місто</Text>
              <Picker
                style={styles.input}
                selectedValue={values.city}
                onValueChange={value => handleChange('city')(value)}
              >
                <Picker.Item label="Оберіть зі списку" value="" />
                <Picker.Item label="ЦНАП" value="tsnap" />
                <Picker.Item label="Лікарня" value="hospital" />
                <Picker.Item label="Соціальна підтримка" value="social_support" />
              </Picker>

              {error ? <Text style={styles.error}>{error}</Text> : null}
              <View style={styles.submit}>
                <TouchableOpacity styles={styles.submit}  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Додати</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
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
  },
  submit: {
    top: 200,
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
  backButton: {
    left: -15,
    top:-15,
    width:50,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 14,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
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
    top: 200,
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

export default VolonteerAuth;