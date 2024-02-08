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

const SocialPaymentForm = (props) => {

  console.log("Props:")
  console.log(props.route.params.steps)
  
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [steps, setSteps] = useState(props.route.params.steps);

  useEffect(() => {
    setSteps(props.route.params.steps);
  }, [props.route.params.steps]);

  // console.log("steps:")
  // console.log(steps)

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!category || !title || !description || !amount) {
      setError("Будь ласка, заповніть всі обов'язкові поля.");
      return;
    }
    const formData = {
      category,
      title,
      description,
      amount,
      steps,
    };
    console.log(formData); // Тут можна використовувати реальні дії, такі як відправлення даних на сервер або інші дії
   
   
    setCategory('');
    setTitle('');
    setDescription('');
    setAmount('');
    setError('');
    setSteps([]);
  };

  const activityHandler = () => {
    // console.log(steps)
    navigation.navigate("ChouseStep", {steps:steps});
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
