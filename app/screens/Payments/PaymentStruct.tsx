import {useTheme} from '../../theme/useTheme';
import {paymentId} from '../../services/services/payment';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const TruncateText = ({initialText = '.', maxChars = 1}) => {
  const [expanded, setExpanded] = useState(false);
  const truncatedText = initialText.slice(0, maxChars);

  return (
    <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
      <View style={{paddingLeft: 10, paddingRight: 10}}>
        <Text>
          {expanded ? initialText : truncatedText}
          {initialText.length > maxChars && !expanded && '...'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const SvgEdit = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        styles.add,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path
          d="M9.31055 14.3322H14.75"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.58501 1.84609C9.16674 1.15084 10.2125 1.04889 10.9222 1.6188C10.9614 1.64972 12.2221 2.62909 12.2221 2.62909C13.0017 3.10039 13.244 4.10233 12.762 4.86694C12.7365 4.90789 5.60896 13.8234 5.60896 13.8234C5.37183 14.1192 5.01187 14.2938 4.62718 14.298L1.89765 14.3323L1.28265 11.7292C1.1965 11.3632 1.28265 10.9788 1.51978 10.683L8.58501 1.84609Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.26562 3.50067L11.3548 6.64102"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

const PaymentStruct = ({route}: {route: any}) => {
  const {id, token} = route.params;
  const [payment, setPayment] = useState<any>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = {token: token};
        const params = {payoutId: id};

        const response = await paymentId(user, params);
        setPayment(response);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  if (!payment) {
    return <></>; 
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../../../assets/bgr_darkBlue_blue.png')}
        resizeMode="cover"
        style={styles.backgroundContainer}>
        <View>
          <Text style={styles.oneTimeFinancialAssistance}>{payment.name}</Text>
          <View style={styles.edit}>
            <View style={styles.autoLayerRow1}>
              <Text style={styles.edit2}>Редагувати</Text>
              <SvgEdit />
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.description5}>Опис:</Text>
            <TruncateText initialText={payment.description} maxChars={200} />
            <Text style={styles.openclose}>натисніть на текст</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.amount}>
              <Text style={styles.amountCurrency}> {payment.amount} ₴ </Text>
            </View>
            <View style={styles.howToGet}>
              <Text style={styles.category}>Київ ↓</Text>
            </View>
          </View>
         
          {console.log(
            'payment.steps.$values',
            JSON.stringify(payment.steps.$values),
          )}
          {payment.steps.$values.map((step:any, index:any) => (
            <View style={styles.step} key={index}>
              <Text style={styles.step1}>
                Крок {index + 1}
              </Text>
              <View style={styles.editStep}>
                <View style={styles.autoLayerRow1}>
                  <Text style={styles.edit2}>Редагувати</Text>
                  <SvgEdit />
                  <View style={styles.home}>
                    <View style={styles.edit3} />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.getDocumentsD}>{step.description}</Text>
              <View style={styles.getDocumentsList}>
                <Text style={styles.getDocumentsL}>Принести документи:</Text>
                {step.documentsBring &&
                  step.documentsBring.$values.map((doc: any, index: number) => (
                    <View key={index}>
                      <Text style={styles.getDocumentsE}>- {doc.name}</Text>
                    </View>
                  ))}
              </View>
              </View>
            </View>
          ))}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default PaymentStruct;

const styles = StyleSheet.create({
  getDocumentsL:{
    marginTop:5,
    textDecorationLine: 'underline',
    fontSize: 17
  },
  getDocumentsList:{

  },
  openclose: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    fontSize: 16,
    color: '#c2c0c0',
  },
  info: {
    top: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  backgroundContainer: {
    // marginTop: 50,
    // paddingBottom: 20,
    // flex: 1,
    // flexGrow: 1,
    minHeight: 718,
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  step: {
    padding: 20,
    display: 'flex',
    marginLeft: '5%',
    // height: 200,
    marginBottom: 20,
    width:"90%",
    flexGrow: 1,
    
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  whereInfo: {
    bottom: 10,
  },
  oneTimeFinancialAssistance: {
    // position: 'absolute',
    width: '96%',
    // height: 60,
    marginTop: '10%',
    // marginLeft: '3%',
    // top: 63,
    // left: 42,

    color: 'rgb(0, 0, 0)',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  edit: {
    position: 'relative',
    width: 140,
    height: 30,
    top: 16,
    // left: 8,
    marginLeft: 29,
    zIndex: 11,
    overflow: 'hidden',
    backgroundColor: '#281A67',
    borderRadius: 30,
    //  marginTop : 20,
    // marginBottom: 20
  },
  editStep: {
    position: 'absolute',
    width: 140,
    height: 26,
    top: 17,
    left: '50%',
    marginLeft: 8,
    zIndex: 11,
    overflow: 'hidden',
    backgroundColor: '#281A67',
    borderRadius: 30,
    //  marginTop : 20,
    // marginBottom: 20
  },
  autoLayerRow1: {
    // position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: 132,
    height: 28,
    top: 3,
    right: 14,
    // zIndex: 12,
  },
  add: {
    left: '100%',
    paddingBottom: 3,
    background: 'rgb(39, 26, 103)',
    // zIndex: 1,
    borderRadius: 30,
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
  home: {
    // position: 'absolute',
    width: 18,
    height: 18,
    top: 5,
    left: 100,
    background: 'rgba(255, 255, 255, 0)',
    zIndex: 15,
  },
  edit3: {
    // position: 'absolute',
    width: '75%',
    height: '75%',
    top: '12.5%',
    left: '12.5%',
    zIndex: 16,
  },
  description: {
    backgroundColor: '#F7F9FB',
    paddingLeft: 10,
    paddingBottom: 35,
    paddingTop: 10,
    borderRadius: 30,
    width: 367,
    marginTop: 35,
    marginBottom: 20,
    left: 14,
    zIndex: 17,
    overflow: 'hidden',
  },
  autoLayerColumn4: {
    // position: 'absolute',
    width: 353,
    height: 200,
    top: 2,
    left: 4,
    zIndex: 18,
  },
  // rectangle: {
  //   // position: 'absolute',
  //   width: 353,
  //   height: 200,
  //   paddingLeft: 10,
  //   paddingTop:10,
  //   paddingRight: 10,
  //   // backgroundColor: '#F7F9FB',
  //   borderRadius: 5,
  // },
  description5: {
    // position: 'absolute',
    width: 200,
    paddingLeft: 17,
    // height: 28,
    marginBottom: 5,

    color: '#1f1f1f',
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 22.5,
    textAlign: 'left',
    // zIndex: 20,
  },
  whoCanReceive: {
    // position: 'absolute',
    // width: 340,
    // height: 267,
    // top: 33,
    // left: 13,

    color: 'rgb(0, 0, 0)',
    fontSize: 17,
    fontWeight: '300',
    lineHeight: 20,
    // textAlign: 'left',
    zIndex: 21,
  },
  amount: {
    // position: 'absolute',
    // width: 356,
    height: 45,
    // top: 370,
    // left: 17,
    zIndex: 22,
    overflow: 'hidden',
  },
  autoLayerRow6: {
    // position: 'absolute',
    width: 344,
    height: 34,
    top: 5,
    left: 6,
    zIndex: 23,
  },
  amount7: {
    // position: 'absolute',
    width: 61,
    height: 28,
    top: 6,
    left: 0,

    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    textAlign: 'left',
    zIndex: 24,
  },
  rectangle8: {
    // position: 'absolute',
    width: 294,
    height: 34,
    top: 0,
    left: 50,
    background: 'rgb(247, 249, 250)',
    zIndex: 25,
    borderRadius: 30,
  },
  amountCurrency: {
    paddingTop: 2,
    borderRadius: 30,
    backgroundColor: '#F7F9FB',
    // padding: ,
    paddingLeft: 30,
    paddingRight: 30, // position: 'absolute',
    // width: "50%",
    height: 30,

    // top: 7,
    // marginTop: 7,
    // left: 60,

    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    textAlign: 'center',
    zIndex: 26,
  },
  howToGet: {
    // position: 'absolute',
    // width: 369,
    height: 48,
    // marginTop: 30,
    // top: 430,
    // left: 12,
    // zIndex: 27,
    overflow: 'hidden',
  },
  autoLayerRow9: {
    // position: 'absolute',
    maxWidth: 250,
    height: 34,
    // top: 4,
    left: 9,
    zIndex: 28,
  },
  howToGetInCity: {
    // position: 'absolute',
    width: 161,
    height: 28,
    // top: 6,
    marginTop: 6,
    left: 0,

    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    textAlign: 'left',
    zIndex: 29,
  },
  rectangleA: {
    // position: 'absolute',
    width: 181,
    height: 34,
    top: 0,
    left: 163,
    background: 'rgb(247, 249, 250)',
    zIndex: 30,
    borderRadius: 30,
  },
  category: {
    borderRadius: 30,
    backgroundColor: '#F7F9FB',
    padding: 2,
    paddingLeft: 20,
    paddingRight: 40,
    // position: 'absolute',
    // maxWidth:"35%",
    height: 30,
    // top: 5,
    // left: 176,

    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    // textAlign: 'left',
    zIndex: 31,
  },
  arrowLeft: {
    // position: 'absolute',
    width: 10,
    height: 5,
    // top: 15,
    left: 3,
    zIndex: 32,
  },
  stroke: {
    // position: 'absolute',
    width: '116.67%',
    height: '133.33%',
    // top: '-16.67%',
    left: '-8.33%',
    zIndex: 33,
  },
  steps: {
    // position: 'absolute',
    // top: 400,
    // left: 13,
    // zIndex: 34,
    // overflow: 'hidden',
  },
  autoLayerRowB: {
    borderRadius: 30,
    backgroundColor: '#F7F9FB',
    padding: 2,
    paddingLeft: 15,

    // position: 'absolute',
    width: '93.48%',
    // height: '120.92%',
    top: '5.73%',
    left: '2.17%',
    zIndex: 35,
  },
  rectangleC: {
    // position: 'absolute',
    width: 344,
    height: 184,
    top: 4,
    left: 0,
    background: 'rgb(247, 249, 250)',
    zIndex: 36,
    borderRadius: 30,
  },
  step1: {
    // position: 'absolute',
    // width: 90,
    height: 31,
    // top: 4,
    // marginTop: 15,
    marginBottom:10,
    right: "35%",

    // color: 'rgb(0, 0, 0)',
    fontSize: 19,
    fontWeight: '600',
    // lineHeight: 21,
    // textAlign: 'center',
    // zIndex: 37,
    wordBreak: 'break-word',
  },
  getDocuments: {
    // position: 'absolute',
    // width: 300,
    // height: 90,
    // top: 15,
    marginTop: 15,
    left: 9,

    // marginBottom: 5,
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 15,
    textAlign: 'left',
    zIndex: 38,
    marginBottom: 15,
  },
  getDocumentsD: {
    // textDecorationLine: 'underline',
    color: 'rgb(0, 0, 0)',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    wordBreak: 'break-word',
  },
  getDocumentsE: {
    color: 'rgb(0, 0, 0)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 17,
    textAlign: 'left',
    wordBreak: 'break-word',
    marginTop:10,
  },
  rectangleF: {
    // position: 'absolute',
    width: 327,
    height: 30,
    // top: 1,
    left: 9,
    background: 'rgb(255, 255, 255)',
    zIndex: 39,
    borderRadius: 30,
  },
  where: {
    // position: 'absolute',
    width: 20,
    height: 15,
    // top: 125,
    marginTop: 40,
    left: 11,

    fontSize: 10,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'left',
    textOverflow: 'initial',
    whiteSpace: 'nowrap',
    zIndex: 40,
  },
  where10: {
    color: 'rgb(0, 0, 0)',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'left',
    textDecoration: 'underline',
  },
  questionMark: {
    color: 'rgb(0, 0, 0)',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'left',
    textDecoration: 'underline',
    wordBreak: 'break-word',
  },
  location: {
    // position: 'absolute',
    width: '3.82%',
    height: '8.38%',
    // top: '79.79%',
    left: '6.1%',
    zIndex: 41,
  },
  link: {
    // position: 'absolute',
    textDecorationLine: 'underline',

    width: 198,
    height: 15,
    // top: 124,
    bottom: 14,
    left: 39,

    color: 'rgb(0, 0, 0)',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 16.5,
    textAlign: 'left',
    zIndex: 42,
  },
  edit11: {
    position: 'absolute',
    width: 42,
    height: 39,
    top: 0,
    left: 302,
    zIndex: 43,
    overflow: 'hidden',
  },
  autoLayerRow12: {
    position: 'absolute',
    width: 32,
    height: 30,
    top: 5,
    left: 5,
    zIndex: 44,
  },
  ellipse: {
    position: 'absolute',
    width: 32,
    height: 30,
    top: 0,
    left: 0,
    zIndex: 45,
  },
  home13: {
    position: 'absolute',
    width: 18,
    height: 18,
    top: 5,
    left: 7,
    background: 'rgba(255, 255, 255, 0)',
    zIndex: 46,
  },
  edit14: {
    // position: 'absolute',
    width: '75%',
    height: '75%',
    // top: '12.5%',
    left: '12.5%',
    zIndex: 47,
  },
});
