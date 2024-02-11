import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import {Path, Svg} from 'react-native-svg';
import {Formik} from 'formik';
import * as Yup from 'yup';
import MultiSelect from 'react-native-multiple-select';

const items = [
  {
    id: '92iijs7yta',
    name: 'Меддовідка',
  },
  {
    id: 'a0s0a8ssbsd',
    name: 'Паспорт',
  },
  {
    id: '16hbajsabsd',
    name: 'Медичне Страхування',
  },
];

const MultiSelectComponent = ({selectedItems, onSelectedItemsChange}) => {
  const multiSelectRef = useRef(null);


  return (
    <View style={{flex: 1}}>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        ref={multiSelectRef}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="  Оберіть зі списку"
        searchInputPlaceholderText="Пошук документів..."
        onChangeInput={text => console.log(text)}
        // hideDropdown = {true}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#6b132b"
        tagBorderColor="#878787"
        tagTextColor="#878787"
        selectedItemTextColor="#878787"
        selectedItemIconColor="#878787"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{color: '#CCC'}}
        submitButtonColor="#8a8a8a"
        submitButtonText="Підтвердити"
        fontSize={18}
        styleDropdownMenuSubsection={{borderWidth: 2, borderRadius: 10, height: 45, elevation: 5,
        shadowColor: 'gray',}}
        styleIndicator={{left: 10}}
        searchInputStyle={{ height: 45, fontSize: 18, }}
      />
      <View>
        {multiSelectRef.current &&
          multiSelectRef.current.getSelectedItemsExt(selectedItems)}
      </View>
    </View>
  );
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

const StepCreateSchema = Yup.object().shape({
  sequenceNumber: Yup.number().required("Це поле є обов'язковим"),
  description: Yup.string().required("Це поле є обов'язковим"),
  establishment: Yup.string().required("Це поле є обов'язковим"),
  documentsToReceive: Yup.array().min(
    1,
    'Оберіть хоча б один документ для отримання',
  ),
  documentsToBring: Yup.array().min(
    1,
    'Оберіть хоча б один документ для принесення',
  ),
});

const StepCreate = (props) => {
  debugger
  const [token, setToken] = useState(props.route.params.token)
  // Замість useNavigation можна використовувати navigation prop в компоненті, який постачається з Navigator
  const navigation = useNavigation();

  const handleSubmit = (values, {setErrors, resetForm}) => {
    try {
      console.log(values);
      resetForm();
    } catch (error) {
      setErrors({error: error.message});
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <SVG />
          </View>
        </TouchableOpacity>

        <Text style={styles.heading}>Додайте новий крок:</Text>
        <Formik
          initialValues={{
            sequenceNumber: '',
            description: '',
            establishment: '',
            documentsToReceive: [],
            documentsToBring: [],
          }}
          validationSchema={StepCreateSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View>
              <View style={styles.stepSequenceNumber}>
                <Text style={styles.label}>Крок №</Text>
                <TextInput
                  style={styles.seqInput}
                  onChangeText={handleChange('sequenceNumber')}
                  onBlur={handleBlur('sequenceNumber')}
                  value={values.sequenceNumber}
                  keyboardType="numeric"
                />
              </View>
              {errors.sequenceNumber && touched.sequenceNumber && (
                <Text style={styles.error}>{errors.sequenceNumber}</Text>
              )}
              <View>
                <Text style={styles.smallLabel}>Короткий опис</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                />
                {errors.description && touched.description && (
                  <Text style={styles.error}>{errors.description}</Text>
                )}
              </View>

              <View>
                <Text style={styles.smallLabel}>Тип установи</Text>
                {/* <View > */}
                <Picker
                  style={styles.input}
                  selectedValue={values.establishment}
                  onValueChange={value =>
                    setFieldValue('establishment', value)
                  }>
                  <Picker.Item label="Оберіть зі списку" value="" />
                  <Picker.Item label="ЦНАП" value="tsnap" />
                  <Picker.Item label="Лікарня" value="hospital" />
                  <Picker.Item
                    label="Соціальна підтримка"
                    value="social_support"
                  />
                </Picker>
                {/* </View> */}
                {errors.establishment && touched.establishment && (
                  <Text style={styles.error}>{errors.establishment}</Text>
                )}
              </View>

              <Text style={styles.label}>Документи</Text>
              <View>
                <Text style={styles.smallLabel}>Отримати</Text>
                  <MultiSelectComponent
                    selectedItems={values.documentsToReceive}
                    onSelectedItemsChange={items =>
                      setFieldValue('documentsToReceive', items)
                    }

                  />

                {errors.documentsToReceive && touched.documentsToReceive && (
                  <Text style={styles.error}>{errors.documentsToReceive}</Text>
                )}
              </View>

              <View>
                <Text style={styles.smallLabel}>Принести</Text>
                <MultiSelectComponent
                  selectedItems={values.documentsToBring}
                  onSelectedItemsChange={items =>
                    setFieldValue('documentsToBring', items)
                  }
                />
                {errors.documentsToBring && touched.documentsToBring && (
                  <Text style={styles.error}>{errors.documentsToBring}</Text>
                )}
              </View>

              {/* {errors.error && <Text style={styles.error}>{errors.error}</Text>} */}

              <View>
                <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
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
    backgroundColor: "white",
    flex: 1,
    flexGrow: 1,
    padding: 20,
    minHeight: 791,
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  stepSequenceNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginLeft: 0,
    width: '100%',
    justifyContent: 'space-between',
  },
  label: {
    color: '#878787',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 27,
    marginBottom: 20,
  },
  smallLabel: {
    color: '#878787',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 27,
    marginBottom: 0,
  },
  submit: {
    
    // top: 70,
    left: 'auto',
    // width: 'auto',
    height: 50,
    marginTop: 70,
    flexShrink: 0,
    backgroundColor: '#8EB0D2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,
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
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff',
  },
  input: {
    elevation: 6,
    shadowColor: 'gray',
    width: '100%',
    height: 41,
    flexShrink: 0,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#FFF',
    // boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
    // display: 'inline'
  },
  seqInput: {
    elevation: 5,
    shadowColor: 'gray',
    width: '70%',
    height: 41,
    flexShrink: 0,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
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
});

export default StepCreate;
