import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import {Path, Svg} from 'react-native-svg';

const SvgAdd = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        styles.add,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <Path
          d="M6.00002 1.40912V10.5671"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.5834 5.9881H1.41675"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
const TruncateText = ({initialText, maxChars}) => {
  const [expanded, setExpanded] = useState(false);
  const truncatedText = initialText.slice(0, maxChars);

  return (
    <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
      <View>
        <Text style={{fontSize: 17}}>
          {expanded ? initialText : truncatedText}
          {initialText.length > maxChars && !expanded && '...'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};



const ChouseStep = (props) => {
  
  const [steps, setSteps] = useState(props.route.params.steps)
  const [token, setToken] = useState(props.route.params.token)
  const [stepsForChoise, setStepsForChoise] = useState([]);






  useEffect(()=>{
    const fetchData = async () => {
      try {
        
        const response = await payment(user);
        

        setStepsForChoise(response.$values)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    
    fetchData();
  }, [])



  const navigation = useNavigation();

  const activityHandler = (id) => {
    let stepsNew = [...steps, stepsForChoise[id]] 
    navigation.navigate('PaymentsCreate', {stepsNew:stepsNew, steps: steps, token:token});
  };

  const addStepHandler = () => { 
    navigation.navigate('StepCreate', {token:token});
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
      {/* <TextInput
          style={styles.findStep}
          placeholder="Знайти крок ..."
          // value={description}
          // onChangeText={text => setDescription(text)}
        /> */}
      <View style={styles.rectangleInput}>
        {/* <View style={styles.iconly}>
          <View style={styles.search} />
        </View> */}
        <TextInput
          style={styles.findStep}
          placeholder="Знайти крок ..."
          // value={description}
          // onChangeText={text => setDescription(text)}
        />
          <TouchableOpacity style={{bottom: 62}} onPress={addStepHandler}>
              <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
      </View>
      <View style={styles.ellipse} />
        <View style={styles.installation}>
          <Text style={styles.selectInstallationType}>
            Оберіть тип установи ↑↓
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.steps}>

{stepsForChoise.map((el)=>(
  <View style={styles.step}>
              <View style={styles.rectangle}>
              <Text style={styles.title}>
               {el.title}
              </Text>
              <View style={styles.divOtrimatiDokumenti}>
                <Text style={styles.spanOtrimatiDokumenti}>
                  Отримати документи:
                </Text>
                <View style={styles.span}>
                  {/* <TruncateText initialText={el.text} maxChars={200} /> */}
                </View>
              </View>
                        <TouchableOpacity onPress={()=>{activityHandler(el.id)}}>
              <View style={styles.autoLayerRow}>
                <Text></Text>
                <SvgAdd />
              </View>
                        </TouchableOpacity>
              <Text style={{marginLeft: 10, marginBottom: 10, fontSize:11}}>Натисніть на текст щоб розгорнути</Text>
              </View>
            </View>
))}
            


        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  rectangleInput: {
    // display: 'flex',
    // alignItems: 'center',
    // flexWrap: 'nowrap',
    // position: 'absolute',
    // width: 299,
    // height: 55,
    // top: 53,
    left: 10,
    // padding: 16,
    // borderColor: '#130f26',
    // borderWidth: 1,
    // borderRadius: 16,
  },
  iconly: {
    flexShrink: 0,
    position: 'relative',
    width: 20,
    height: 20,
  },
  search: {
    position: 'relative',
    width: 15,
    height: 16,
    // background: url(../assets/images/81e8a021-a855-44dd-a3e5-c89e605898a1.png)
    //   no-repeat center;
    // background-size: 100% 100%;
    // z-index: 47;
  },
  findStep: {
    elevation: 4,
    shadowColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: '80%',
    height: 41,
    flexShrink: 0,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  // plus: {
  //   position: 'absolute',
  //   height: 45,
  //   // top: 58,
  //   left: 340,
  //   // font-family: Inter;
  //   // color: rgb(135, 135, 135);
  //   // font-size: 30px;
  //   // font-weight: 600;
  //   // line-height: 45px;
  //   // text-align: center;
  //   // z-index: 37;
  // },
  add: {
    width: 60,
    height: 40,
    backgroundColor: '#8EB0D2',
    borderRadius: 20,
  },
  autoLayerRow: {
    zIndex: 20,
    // top: 150,
    left: 300,
    bottom: 30
  },
  step: {
    marginBottom: 20,
  },
  span: {
    // fontSize: 20,
    // fontFamily: 'sans-serif-light',
  },
  installation: {
    position: 'relative',
    width: '100%',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    fontSize: 10,
    zIndex: 49,
  },
  selectInstallationType: {
    position: 'relative',
    height: 26,
     
    color: 'black',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 25.5,
    textAlign: 'left',
    zIndex: 52,
  },
  line: {
    position: 'relative',
    width: 357,
    zIndex: 53,
  },
  steps: {
    position: 'relative',
    width: 368,
    // height: 192,
  },
  rectangle: {
    // position: 'absolute',
    // width: 344,



///////////////////////////////

    // minHeight: 184,
    top: 15,
    left: 8,
    backgroundColor: '#f7f9fa',
    borderRadius: 30,
  },
  title: {
    // height: 21,
    marginTop: 20,
    marginBottom: 10,
    // top: 25,
    left: 17,
     
    color: 'black',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 21,
    textAlign: 'center',
    zIndex: 3,
  },
  divOtrimatiDokumenti: {
    width: 327,
    minHeight: 220,
    // top: 39,
    left: 17,
     
    // fontSize: 15,
    fontWeight: '300',
    lineHeight: 15,
    textAlign: 'left',
    zIndex: 4,
    // marginBottom: 50,
    // backgroundColor:"gray"
  },
  spanOtrimatiDokumenti: {
    position: 'relative',
     
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 15,
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  search: {
    position: 'relative',
    width: 15.637,
    height: 16.018,
    margin: '2.315px 0 0 2.315px',
    zIndex: 47,
  },
  plus: {
    position: 'absolute',
    height: 45,
    width: 45,
    // top: 58,
    left: 310,
     
    color: 'rgb(135, 135, 135)',
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 45,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 30,
    zIndex: 37,
    borderColor:"#878787",
  },
  ellipse: {
    position: 'absolute',
    width: 35,
    height: 35,
    // top: 65,
    left: 333,
    backgroundSize: 'cover',
    zIndex: 36,
    borderRadius: 50,
  },
  bottomNavBar: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    gap: 45,
    position: 'absolute',
    width: 393,
    height: 66,
    top: 771,
    left: 0,
    padding: '15px 30px 20px 30px',
    background: 'rgb(255, 255, 255)',
    zIndex: 16,
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.15)',
  },
  home: {
    flexShrink: 0,
    position: 'relative',
    width: 30,
    height: 30,
    backgroundSize: 'cover',
    zIndex: 18,
  },
  help: {
    flexShrink: 0,
    position: 'relative',
    width: 31,
    height: 31,
    zIndex: 19,
  },
  heart: {
    position: 'relative',
    width: 24.538,
    height: 23.248,
    margin: '3.875px 0 0 3.229px',
    backgroundSize: '100% 100%',
    zIndex: 20,
  },
  health: {
    flexShrink: 0,
    position: 'relative',
    width: 28,
    height: 28,
    zIndex: 21,
    overflow: 'hidden',
  },
  group: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0%',
    left: 0,
    zIndex: 22,
  },
  job: {
    flexShrink: 0,
    position: 'relative',
    width: 33,
    height: 29,
    zIndex: 24,
  },
  work: {
    position: 'relative',
    width: 25.424,
    height: 22.04,
    margin: '3.323px 0 0 3.781px',
    zIndex: 25,
  },
  stroke: {
    position: 'relative',
    width: 1.5,
    height: 4.566,
    margin: '13.013px 0 0 11.962px',
    zIndex: 26,
  },
  groupA: {
    position: 'absolute',
    width: 25.424,
    height: 22.04,
    top: 0,
    left: 0,
    zIndex: 27,
  },
  strokeB: {
    position: 'relative',
    width: 11.125,
    height: 4.613,
    margin: '-0.75px 0 0 7.15px',
    zIndex: 29,
  },
  strokeC: {
    position: 'relative',
    width: 26.924,
    height: 12.145,
    margin: '-1.495px 0 0 -0.75px',
    zIndex: 28,
  },
  strokeD: {
    position: 'relative',
    width: 26.856,
    height: 8.154,
    margin: '0.12px 0 0 -0.72px',
    zIndex: 30,
  },
});

export default ChouseStep;
