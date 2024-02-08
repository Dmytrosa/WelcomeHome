import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, FlatList, View, TextInput, Image, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '../../theme/useTheme';
import Payment from './Payment';
import SocialPaymentForm from './PaymentCreate/PaymentCreateForm'; 
import { useNavigation } from '@react-navigation/native';
import { Path, Svg } from 'react-native-svg';
import axios from 'axios';
import { getPayments } from '../../services/services/payment';
import { RootState } from '../../store/store';


type payments = {
  text: string;
  citys: string;
  photoLink: string;
};


const SvgAdd = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        styles.add,
        {alignItems: 'center', justifyContent: 'center'},]}>
<Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
<Path d="M6.00002 1.40912V10.5671" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M10.5834 5.9881H1.41675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
    </View>
  );
};


const Payments = (props) => {

  let payments = []

  let user 

  async function fetchData() {
    user = useSelector((state: RootState) => state.user);
    
    const response :any  = await getPayments(user)
    console.log("response : ", response )
    
      payments = response.$values
  }
  fetchData();

  const navigation = useNavigation();

  const inputRef = useRef<TextInput>(null);

  const dispatch = useDispatch();

  const [text, setText] = useState('');


  

  const activityHandler = () => {
    navigation.navigate("PaymentsCreate", {steps: []});
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.autoLayerColumn}>
        <Text style={styles.socialPayments}>Соціальні виплати</Text>
        <View style = {styles.underTitle}>
        <View style={styles.category}>
          <View style={styles.autoLayerRow1}>
            <View style={styles.arrowLeft}>
              <Text style={styles.stroke}>↓</Text>
            </View>
            <Text style={styles.category2}>Категорія</Text>
          </View>
        </View>
{user?.role == "volunteer" ?   
         <View style={styles.edit}>
         <TouchableOpacity onPress={activityHandler}>
           <View style={styles.autoLayerRow}>
             <Text style={styles.edit2}>Додати</Text>
             <SvgAdd/>
           </View>
           </TouchableOpacity>
         </View> : <></>}


        </View>
        <View style={styles.rectangle}>
          {payments.map((item)=>(
  <Payment
  key={item.id}
  text={item.name}
  linkTo={'PaymentStruct'}
  payment={item.amount}
  id={item.id}/>
          ))}
          {/* <Payment
            role ={data.role}
            text={'Програма мікрофінансування бізнесу ветеранів та членів їхніх родин'}
            linkTo={'PaymentStruct'}
            payment={'122K'}
            titlein='Хто має право на отримання одноразової грошової допомоги (ОГД) у разі загибелі (смерті) військовослужбовців?• батьки;• один із подружжя, який не одружився вдруге;• діти, які не досягли повноліття;• утриманці загиблого (померлого).Важливо! Особам, які мають право на одноразову грошову допомогу, виплата їхньої частки здійснюється незалежно від реалізації такого права іншими особами. Також, відповідно до редакції статті 16-1 Закону України «Про соціальний та правовий захист військовослужбовців та членів їх сімей», що діяла до 25 серпня 2022 року, право на призначення та отримання одноразової грошової допомоги мали члени сім’ї, батьки та утриманці загиблого (померлого) військовослужбовця. Відповідно до статті 3 Сімейного кодексу України сім’ю складають особи, які спільно проживають, пов’язані спільним побутом, мають взаємні права та обов`язки.'/>
          <Payment
            role ={data.role}
            text={'Програма мікрофінансування бізнесу ветеранів та членів їхніх родин'}
            linkTo={'PaymentStruct'}
            payment={'122'}
            titlein='aboba'
          /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  mainContainer: {
    overflow: 'hidden',
    backgroundColor: "white",
    height: "100%"
  },
  autoLayerRow: {
    // position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: 132,
    height: 28,
    top: 5,
    right: 14
    // zIndex: 12,
  },
  edit: {
    position: 'absolute',
    width: 140,
    height: 30,
    // top: 116,
    left: 234,
    bottom:5,
    marginLeft: 8,
    zIndex: 11,
    overflow: 'hidden',
    backgroundColor: "#281A67",
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
    top: 5,
    right: 14
    // zIndex: 12,
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
  add: {
    left: "100%",
    paddingBottom:3,
    background: 'rgb(39, 26, 103)',
    // zIndex: 1,
    borderRadius: 20,
  },
  underTitle: {





  },
  socialPayments: {
    // position: 'absolute',
    width: '100%',
    height: 100,
    top: 50,
    left: '24%',
     
    color: 'rgb(0, 0, 0)',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 39,
    textAlign: 'left',
    zIndex: 10,
  },
  category: {
    // position: 'absolute',
    width: '100%',
    height: 45,
    top: 13,
    left: 12,
    zIndex: 11,
    overflow: 'hidden',
  },
  autoLayerRow1: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // position: 'absolute',
    // width: 160,
    // height: 26,
    // top: 8,
    // left: 9,
    // zIndex: 12,
  },
  arrowLeft: {
    // flexShrink: 0,
    // position: 'relative',
    // width: 10,
    // height: 10,
  },
  stroke: {
    // position: 'absolute',
    // width: 100,
    // height: 100,
    // // top: '-11.9%',
    // // left: '-6.08%',
    // zIndex: 13,
    fontSize: 20,
    fontWeight: 'bold',
  },
  category2: {
    flexShrink: 0,
    width: 141,
    height: 26,
     
    color: 'rgb(0, 0, 0)',
    fontSize: 19,
    fontWeight: '300',
    lineHeight: 25.5,
    textAlign: 'left',
  },
  addpayment:{
  },
  rectangle: {
    // position: 'absolute',
    paddingTop:5,
    paddingBottom:300,
    display: 'flex',
    flexDirection: 'column',
    width: '92%',
    // height: '90%',
    // top: -100,
    left: 18,
    backgroundColor: '#F1F3F5',
    borderRadius: 4,
    marginTop: 10,
    // backgroundColor: 'rgb(247, 249, 250)',
    // zIndex: 14,
    // borderRadius: '5px 5px 0 0',
  },
  autoLayerColumn3: {
    // position: 'absolute',
    width: 353,
    height: 99,
    top: -5,
    left: 0,
    zIndex: 16,
  },
  kvartplataPLataZaKomunalnPoslugiTaOpalennyaBudinkv: {
    // position: 'absolute',
    width: 318,
    height: 88,
    top: 0,
    left: 11,
     
    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    textAlign: 'left',
    zIndex: 17,
  },
  line: {
    position: 'absolute',
    width: 353,
    top: 99,
    left: 0,
    // backgroundImage: 'url(../assets/images/3db8b342-ca56-473f-976b-573131efed68.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    zIndex: 18,
  },
  autoLayerRow5: {
    position: 'absolute',
    width: 339,
    height: 88,
    top: 1,
    left: 9,
    zIndex: 20,
  },
  programMicrofinanceVeterans: {
    position: 'absolute',
    width: 261,
    height: 88,
    top: 10,
    left: 0,
     
    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    textAlign: 'left',
    zIndex: 21,
  },
  rectangle6: {
    position: 'absolute',
    width: 72,
    height: 28,
    top: 28,
    left: 267,
    backgroundColor: 'rgb(217, 217, 217)',
    zIndex: 22,
    // borderRadius: '30px',
  },
  k20k: {
    position: 'absolute',
    width: 51,
    height: 49,
    top: 30,
    left: 284,
     
    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22.5,
    textAlign: 'left',
    zIndex: 23,
  },
  line7: {
    position: 'absolute',
    width: 353,
    top: 94,
    left: 0,
    // backgroundImage: 'url(../assets/images/cec32b68-53df-4770-b009-726130e2d816.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    zIndex: 24,
  },
  socialPayment: {
    position: 'relative',
    width: 357,
    height: 100,
    top: 20,
    left: 18,
    zIndex: 25,
    overflow: 'hidden',
    marginBottom: 5,
    marginLeft: -8,
    paddingTop: 20,
    backgroundColor: 'rgb(235, 235, 235)',
  },
  autoLayerRow8: {
    position: 'absolute',
    width: 339,
    height: 88,
    top: 10,
    left: 9,
    zIndex: 26,
  },
  oneTimeFinancialAid: {
    position: 'absolute',
    width: 261,
    height: 88,
    top: 0,
    left: 0,
     
    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    textAlign: 'left',
    zIndex: 27,
  },
  rectangle9: {
    position: 'absolute',
    width: 72,
    height: 28,
    top: 28,
    left: 267,
    backgroundColor: 'rgb(217, 217, 217)',
    zIndex: 28,
    // borderRadius: '30px',
  },
  m15m: {
    position: 'absolute',
    width: 51,
    height: 49,
    top: 30,
    left: 284,
     
    color: 'rgb(0, 0, 0)',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22.5,
    textAlign: 'left',
    zIndex: 29,
  },
  lineA: {
    position: 'absolute',
    width: 353,
    top: 94,
    left: 0,
    // backgroundImage: 'url(../assets/images/c55f9c31-db7f-4517-a79d-8b20234b384d.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    zIndex: 30,
  },
  bottomNavBar: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    // gap: 45,
    position: 'absolute',
    width: 393,
    height: 66,
    top: 771,
    left: 0,
    padding: '15px 30px 20px 30px',
    backgroundColor: 'rgb(255, 255, 255)',
    zIndex: 31,
    // boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.15)',
  },
  ellipse: {
    flexShrink: 0,
    position: 'absolute',
    width: 40,
    height: 40,
    top: 9,
    left: 25,
    backgroundImage:
      'url(../assets/images/742b18b4-dd59-4584-abc0-d40c073488a0.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 32,
    // borderRadius: '50%',
  },
  home: {
    flexShrink: 0,
    width: 30,
    height: 30,
    // backgroundImage: 'url(../assets/images/d9669990-1c8b-4ad4-af43-8cbf24b93baa.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  },
  help: {
    flexShrink: 0,
    position: 'relative',
    width: 31,
    height: 31,
  },
  heart: {
    position: 'absolute',
    width: '79.15%',
    height: '74.99%',
    top: '12.5%',
    left: '10.42%',
    // backgroundImage: 'url(../assets/images/2c027ce8-6744-4b79-ac74-f1296cd8a2e7.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
    zIndex: 33,
  },
  health: {
    flexShrink: 0,
    position: 'relative',
    width: 28,
    height: 28,
    overflow: 'hidden',
  },
  group: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0%',
    left: '0%',
    zIndex: 34,
  },
  groupB: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    // backgroundImage: 'url(../assets/images/d58e6f64-c7e6-4be1-ab72-2061019d3268.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
    zIndex: 35,
  },
  job: {
    flexShrink: 0,
    position: 'relative',
    width: 33,
    height: 29,
  },
  work: {
    position: 'absolute',
    width: 25.424,
    height: 22.04,
    top: 3.323,
    left: 3.781,
    zIndex: 36,
  },
  autoLayerColumnC: {
    position: 'absolute',
    width: '100%',
    height: '76.35%',
    top: 0,
    left: 0,
    zIndex: 37,
  },
  groupD: {
    position: 'absolute',
    width: 25.424,
    height: 22.04,
    top: 0,
    left: 0,
    zIndex: 38,
  },
  autoLayerColumnE: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 39,
  },
  strokeF: {
    position: 'absolute',
    width: '43.76%',
    height: '20.93%',
    top: '-3.4%',
    left: '28.12%',
    // backgroundImage: 'url(../assets/images/c7afa2d5-3c44-4197-9727-a5f781031d84.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
    zIndex: 40,
  },
  stroke10: {
    position: 'absolute',
    width: '105.9%',
    height: '55.11%',
    top: '10.74%',
    left: '-2.95%',
    // backgroundImage: 'url(../assets/images/1fe2f156-b6ce-471f-8d4d-08af3c25ae95.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
    zIndex: 41,
  },
  stroke11: {
    position: 'absolute',
    width: '105.64%',
    height: '37%',
    top: '66.41%',
    left: '-2.82%',
    // backgroundImage: 'url(../assets/images/bf37fa75-c3b7-4062-a2f9-4564745bc1d8.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
    zIndex: 42,
  },
  stroke12: {
    position: 'absolute',
    width: '5.9%',
    height: '27.13%',
    top: '77.33%',
    left: '47.05%',
    // backgroundImage: 'url(../assets/images/94b70406-0ed0-4a7e-9d45-e53f120aaccc.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
    zIndex: 43,
  },
  profile: {
    flexShrink: 0,
    position: 'relative',
    width: 31,
    height: 31,
  },
  profile13: {
    position: 'absolute',
    width: '18.523px',
    height: '23.774px',
    top: '3.635px',
    left: '6.218px',
    zIndex: 44,
  },
  autoLayerColumn14: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 45,
  },
  stroke15: {
    position: 'absolute',
    width: '71.81%',
    height: '55.95%',
    top: '-3%',
    left: '14.1%',
    // backgroundImage: 'url(../assets/images/a14cccce-9cd8-44c2-a695-29933ccfb5bf.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
    zIndex: 46,
  },
  stroke16: {
    position: 'absolute',
    width: '108.1%',
    height: '38.22%',
    top: '64.93%',
    left: '-4.05%',
    // backgroundImage: 'url(../assets/images/03aa3043-df81-47b9-a214-f8c66ea17890.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
    zIndex: 47,
  },
  homeIndicator: {
    position: 'absolute',
    width: 393,
    height: 28,
    top: 824,
    left: 0,
    // backgroundImage: 'url(../assets/images/a7a691be-a5df-42e2-80d0-569dda45f75a.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    zIndex: 48,
  },
});
