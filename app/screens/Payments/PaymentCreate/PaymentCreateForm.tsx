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
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { paymentPost } from '../../../services/services/payment';

const SocialPaymentForm = (props) => {
// email: "test@test.test"
// name: "Dmytro"
// role: "volunteer"
// steps: Array(0)
// token: "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IkRteXRybyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InRlc3RAdGVzdC50ZXN0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidm9sdW50ZWVyIiwiZXhwIjoxNzA3NzQ3NTU0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDk2O2h0dHA6Ly9sb2NhbGhvc3Q6NTAwNiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwOTY7aHR0cDovL2xvY2FsaG9zdDo1MDA2In0.gZgbt_idJ2C-pbcI-k3NNg6SnUqe9mfVmYNbfeRNma3qWtlZ-M-E1yZb_dFcAuvDLVpwfSzGsIojLvNaLSWqlg"
// userId: 22

  


  // {
  //   "name": "string",
  //   "description": "string",
  //   "amount": 0,
  //   "userCategoriesId": [
  //     0
  //   ],
  //   "newPaymentSteps": [
  //     {
  //       "sequenceNumber": 0,
  //       "description": "string",
  //       "establishmentTypeId": 0,
  //       "documentsBringId": [
  //         0
  //       ],
  //       "documentsReceiveId": [
  //         0
  //       ]
  //     }
  //   ],
  //   "existingPaymentSteps": [
  //     {
  //       "sequenceNumber": 0,
  //       "stepId": 0
  //     }
  //   ]
  // }
  
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [steps, setSteps] = useState(props.route.params.steps);
  const [token, setToken] = useState(props.route.params.token);

  const navigation = useNavigation();

  const handleSubmit = async() => {
    if (!category || !title || !description || !amount) {
      setError("Будь ласка, заповніть всі обов'язкові поля.");
      return;
    }
    const formData = {
      name : title,
      description: description,
      amount: Number(amount),
      steps: steps,
      category,
    };
    const user = {token: token}
    await paymentPost(formData, user)
    navigation.navigate("Payments", {token: token});
  };

  const activityHandler = () => {
    navigation.navigate("ChouseStep", {steps:steps, token: token});
  };

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>
        Оберіть необхідні поля та створіть нову виплату
      </Text>
      <View style={styles.pick}>
        <Picker
          style={styles.picker}
          selectedValue={category}
          onValueChange={value => setCategory(value)}>
          <Picker.Item label="Оберіть категорію" value="health" />
          <Picker.Item label="Здоров'я" value="health" />
          <Picker.Item label="Освіта" value="education" />
          <Picker.Item label="Соціальна підтримка" value="social_support" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Назва"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Опис"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Сума виплати"
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType="numeric"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View>

        <View>
        <View style={styles.submit}>
      <TouchableOpacity
       onPress={activityHandler}
       >
              <Text style={styles.buttonSubmit}>Додати крок {">"}</Text>
      </TouchableOpacity>
      </View>
          <View style={{ minHeight: 300}}>
          <Text style={styles.label}>Кроки</Text>
          {steps && steps.map((step) => (
            <Text key={step.index} style={styles.stepText}>
              {step.text}
            </Text>
          ))}
          </View>
        </View>
      </View>
      <View style={{    left: 62,
    width: 250,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#8EB0D2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 14,
    bottom:70}}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.buttonSubmit}>Підтвердити</Text>
            </TouchableOpacity>
      </View>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    minHeight:790
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 21,
    marginTop: 5,
    marginBottom: 5,
    color: "#878787",
    fontWeight: "700"
//     font: Inter,
//     font-size: 18,
// // font-style: normal;
//     font-weight: "700",
//     line-height: "150%"
  },
  submit:{
    // top: 200,
    left: 62,
    width: 250,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#8EB0D2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 14,
  },
  buttonSubmit : {
    fontSize: 17,
    paddingLeft: '30%',
    fontWeight: '600',
    color: "#ffffff"
  },
  addStep: {
    marginLeft: '16%',
    marginTop: -20,
    marginBottom: 20,
    width: 250,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#8EB0D2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 17,
    paddingLeft: '13%',
    fontWeight: '600',
    color: "#ffffff"
  },
  pick: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 14,
    marginBottom: 30,
    elevation: 4,
    shadowColor: 'gray',
  },
  input: {
    elevation: 4,
    shadowColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: '100%',
    height: 41,
    flexShrink: 0,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  picker: {
    width: '100%',
    height: 50,
    // backgroundColor: "gray",
    color: '#bababa', // текстовий колір
    fontSize: 16,
    borderRadius: 30,
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
  stepText: {
    marginBottom: 5,
  },
});

export default SocialPaymentForm;
