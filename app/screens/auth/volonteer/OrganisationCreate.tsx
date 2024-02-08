// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import {useNavigation} from '@react-navigation/native';

// const StepCreate = () => {

//   const [error, setError] = useState('');
//   const [category, setCategory] = useState('');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');

//   const navigation = useNavigation();

//   const handleSubmit = () => {
//     if (!category || !title || !description || !amount) {
//       setError("Будь ласка, заповніть всі обов'язкові поля.");
//       return;
//     }
//     const formData = {
//       category,
//       title,
//       description,
//       amount,
//     };
//     console.log(formData); // Тут можна робити запит

//     setCategory('');
//     setTitle('');
//     setDescription('');
//     setAmount('');
//   };

//   const activityHandler = () => {
//     // console.log(steps)
//     navigation.navigate('ChouseStep');
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.heading}>
//           Оберіть необхідні поля та створіть нову виплату
//         </Text>
//         <View style={styles.pick}>
//           <Picker
//             style={styles.picker}
//             selectedValue={category}
//             onValueChange={value => setCategory(value)}>
//             <Picker.Item label="Оберіть категорію" value="health" />
//             <Picker.Item label="Здоров'я" value="health" />
//             <Picker.Item label="Освіта" value="education" />
//             <Picker.Item label="Соціальна підтримка" value="social_support" />
//           </Picker>
//         </View>
//         <TextInput
//           style={styles.input}
//           placeholder="Назва"
//           value={title}
//           onChangeText={text => setTitle(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Опис"
//           value={description}
//           onChangeText={text => setDescription(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Сума виплати"
//           value={amount}
//           onChangeText={text => setAmount(text)}
//           keyboardType="numeric"
//         />
//         {error ? <Text style={styles.error}>{error}</Text> : null}

//         <View>
//           <View>
//             <View style={styles.submit}>
//               <TouchableOpacity onPress={activityHandler}>
//                 <Text style={styles.buttonSubmit}>Додати крок {'>'}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         <View style={styles.submit}>
//           <TouchableOpacity onPress={handleSubmit}>
//             <Text style={styles.buttonSubmit}>Підтвердити</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     minHeight: 790,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 21,
//     marginTop: 5,
//     marginBottom: 5,
//     color: '#878787',
//     fontWeight: '700',
//     //     font: Inter,
//     //     font-size: 18,
//     // // font-style: normal;
//     //     font-weight: "700",
//     //     line-height: "150%"
//   },
//   submit: {
//     // top: 200,
//     left: 62,
//     width: 250,
//     height: 50,
//     flexShrink: 0,
//     backgroundColor: '#8EB0D2',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     borderRadius: 14,
//   },
//   buttonSubmit: {
//     fontSize: 17,
//     paddingLeft: '30%',
//     fontWeight: '600',
//     color: '#ffffff',
//   },
//   addStep: {
//     marginLeft: '16%',
//     marginTop: -20,
//     marginBottom: 20,
//     width: 250,
//     height: 50,
//     flexShrink: 0,
//     backgroundColor: '#8EB0D2',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     borderRadius: 14,
//   },
//   buttonText: {
//     fontSize: 17,
//     paddingLeft: '13%',
//     fontWeight: '600',
//     color: '#ffffff',
//   },
//   pick: {
//     backgroundColor: '#ffffff',
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 14,
//     marginBottom: 30,
//     elevation: 4,
//     shadowColor: '#000000',
//   },
//   input: {
//     elevation: 4,
//     shadowColor: '#000000',
//     borderRadius: 10,
//     backgroundColor: '#FFF',
//     width: '100%',
//     height: 41,
//     flexShrink: 0,
//     borderColor: 'white',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingLeft: 10,
//   },
//   picker: {
//     width: '100%',
//     height: 50,
//     // backgroundColor: "gray",
//     color: '#bababa', // текстовий колір
//     fontSize: 16,
//     borderRadius: 30,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 15,
//   },
//   stepText: {
//     marginBottom: 5,
//   },
// });

// export default StepCreate;
import { Picker } from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { transformToFormikErrors } from '../../../utils/form';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';

const OrganisationCreateSchema = Yup.object().shape({
  fullName: Yup.string().required("Це поле є обов'язковим"),
  phoneNumber: Yup.string().required("Це поле є обов'язковим"),
  website: Yup.string().url('Введіть коректне посилання'),
  otherContacts: Yup.string(),
  city: Yup.string().required("Це поле є обов'язковим"),
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



const OrganisationCreate = () => {

  const handleSubmit = (values, { setErrors, resetForm }) => {
    try {
      const formData = {
        fullName: values.fullName,
        phoneNumber: values.phoneNumber,
        website: values.website,
        otherContacts: values.otherContacts,
        city: values.city,
      };

      console.log(formData); // Тут можна робити запит

      resetForm();
    } catch (error) {
      if (error.response?.data?.errors) {
        // Якщо є помилки на боці сервера, встановити їх в формі
        let result = transformToFormikErrors(error.response.data.errors);
        setErrors(result);
      } else {
        // Інакше встановити загальну помилку форми
        setErrors({ error: error.message });
      }
    }
  };

  const goBack = () => {
    // код для переходу назад
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={goBack}>
            сюда свг
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>
          Заповніть основну інформацію про волонтерську організацію:
        </Text>
        <Formik
          initialValues={{
            fullName: '',
            phoneNumber: '',
            website: '',
            otherContacts: '',
            city: 'Оберіть місто', 
          }}
          validationSchema={OrganisationCreateSchema}
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
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName && <Text style={styles.error}>{errors.fullName}</Text>}

              <Text style={styles.smallLabel}>Номер телефону</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
              />
              {errors.phoneNumber && touched.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}

              <Text style={styles.smallLabel}>Посилання на сайт / соц. мережі</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={handleChange('website')}
                onBlur={handleBlur('website')}
                value={values.website}
              />
              {errors.website && touched.website && <Text style={styles.error}>{errors.website}</Text>}

              <Text style={styles.smallLabel}>Інші контакти</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={handleChange('otherContacts')}
                onBlur={handleBlur('otherContacts')}
                value={values.otherContacts}
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

              {errors.city && touched.city && <Text style={styles.error}>{errors.city}</Text>}
              {errors.error && <Text style={styles.error}>{errors.error}</Text>}

              <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Додати</Text>
              </TouchableOpacity>
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
    // display: 'inline'
  },
  linkText: {
    color: '#130F26',
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
    wordWrap: 'break-word',
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

export default OrganisationCreate;