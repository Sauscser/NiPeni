import React, { useEffect, useState } from 'react';

import {  } from 'aws-amplify';
import { createCompany } from '../../../src/graphql/mutations';
import { getCompany } from '../../../src/graphql/queries';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Text, TextInput, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AdminSignIn = (props) => {
  
  const [PWOnes, setPWOne] = useState('');
  const [PWTwos, setPWTwo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const client = generateClient();
  const navigation = useNavigation();

  const moveToRegAdmin = () => {
    navigation.navigate('SettingsHmScreen');
  };

  const goToMainAccount = () => {
    navigation.navigate('Homesss');
  };

  

  const CompCreation = async () => {

    if(isLoading){
      return;
    }
    setIsLoading(true);

    const userInfo = await getCurrentUser();
    
    try {
      await client.graphql( {

        query: createCompany,
        variables:{
          input: {
            AdminId: "BaruchHabaB'ShemAdonai2",
            phoneContact: '0724071582, 0711852707',
            companyEmail: 'myfedha@gmail.com',
            termsNconditions: 'TERMS AND CONDITIONS',
            pw1: PWOnes,
            pw2: PWTwos,
            owner: userInfo.userId,   
  alert: "alert",
  about: "about",
  policy: "policy",
  privacy: "privacy",
  recom: "recom",
  
  agentwithdrawalFee: 0.02,
  agentCom: 57,
  sagentCom: 20,
  companyCom: 20,
  AdvCom: 0.6,
  ChampCom: 3,
  AdvCompanyCom: 0.4,
  bankAdminCom: 0.02,
  sawithdrawalFee: 0.02,
  advuserwithdrawalFee: 0.02,
  bankAdmuserwithdrawalFee: 0.02,
  userLoanTransferFee: 0.02,
  userTransferFee: 0.02,
  chmMmbrTransferFee: 0,
  chmTransferFee: 0,
  biznaTransferFee: 0,
  palpalLnRpymntFee: 0.02,
  chmLnRpymntFee: 0.02,
  crdSllrLnRpymntFee: 0.02,
  biznaCredSaleFee:0.02,  
  biznaCashSaleFee: 0.02,
  dfltWaiverFee:0.02,
  tenderingFee: 0.02,
  EmploymentFee: 0.02,  
  userClearanceFee: 0.02,
  CoverageFee: 0.02,
  vat:0,
  ttlvat:0, 
  enquiryFee: 1,
  UsrWthdrwlFees: 0.02,
  ttlNonLonssRecSM: 0,
  ttlNonLonssSentSM:0,
  ttlNonLonssRecChm: 0,
  ttlNonLonssSentChm:0,
  companyEarningBal: 0,
  companyEarning: 0,
  agentEarningBal: 0,
  agentEarning: 0,
  saEarningBal: 0,
  saEarning: 0,
  AdvEarningBal: 0,
  AdvEarning: 0,
  admEarningBal: 0,
  admEarning: 0,
  ttlUsrDep: 0,
  ttlUserWthdrwl: 0,
  agentFloatIn: 0,
  agentFloatOut: 0,
  ttlActiveUsers: 0,
  ttlInactvUsrs: 0,
  ttlBLUsrs: 0,
  ttlActiveChm: 0,
  ttlInactvChm: 0,
  ttlBLChm: 0,
  ttlActiveChmUsers: 0,
  ttlInactvChmUsrs: 0,
  ttlBLChmUsrs: 0,  
  ttlKFNdgActv: 0,
  ttlKFNdgInActv: 0,
  ttlKNdgBLStts: 0,
  ttlKFKbwActv: 0,
  ttlKFKbwInActv: 0,
  ttlKKbwBLStts: 0,
  ttlKFAdvActv: 0,
  ttlKFAdvInActv: 0,
  ttlKAdvBLStts: 0,
  ttlKFAdmActv: 0,
  ttlKFAdmInActv: 0,
  ttlKAdmBLStts: 0,
  ttlSMLnsInAmtCov: 0,
  ttlChmLnsInAmtCov: 0,
  ttlSellerLnsInAmtCov: 0,
  ttlSMLnsInActvAmtCov: 0,
  ttlChmLnsInActvAmtCov: 0,
  ttlSellerLnsInActvAmtCov: 0,
  ttlSMLnsInClrdAmtCov: 0,
  ttlChmLnsInClrdAmtCov: 0,
  ttlSellerLnsInClrdAmtCov: 0,
  ttlSMLnsInBlAmtCov: 0,
  ttlChmLnsInBlAmtCov: 0,
  ttlSellerLnsInBlAmtCov: 0,  
  ttlSMLnsInTymsCov: 0,
  ttlChmLnsInTymsCov: 0,
  ttlSellerLnsInTymsCov: 0,
  ttlSMLnsInActvTymsCov: 0,
  ttlChmLnsInActvTymsCov: 0,
  ttlSellerLnsInActvTymsCov: 0,
  ttlSMLnsInClrdTymsCov: 0,
  ttlChmLnsInClrdTymsCov: 0,
  ttlSellerLnsInClrdTymsCov: 0,
  ttlSMLnsInBlTymsCov: 0,
  ttlChmLnsInBlTymsCov: 0,
  ttlSellerLnsInBlTymsCov: 0,  
  ttlCompTrnsfrEarningsCov: 0,
  ttlCompBLClrncEarningsCov: 0,
  ttlSMLnsInAmtNonCov: 0,
  ttlChmLnsInAmtNonCov: 0,
  ttlSellerLnsInAmtNonCov: 0,
  ttlSMLnsInActvAmtNonCov: 0,
  ttlChmLnsInActvAmtNonCov: 0,
  ttlSellerLnsInActvAmtNonCov: 0,
  ttlSMLnsInClrdAmtNonCov: 0,
  ttlChmLnsInClrdAmtNonCov: 0,
  ttlSellerLnsInClrdAmtNonCov: 0,
  ttlSMLnsInBlAmtNonCov: 0,
  ttlChmLnsInBlAmtNonCov: 0,
  ttlSellerLnsInBlAmtNonCov: 0,
  
  ttlSMLnsInTymsNonCov: 0,
  ttlChmLnsInTymsNonCov: 0,
  ttlSellerLnsInTymsNonCov: 0,
  ttlSMLnsInActvTymsNonCov: 0,
  ttlChmLnsInActvTymsNonCov: 0,
  ttlSellerLnsInActvTymsNonCov: 0,
  ttlSMLnsInClrdTymsNonCov: 0,
  ttlChmLnsInClrdTymsNonCov: 0,
  ttlSellerLnsInClrdTymsNonCov: 0,
  ttlSMLnsInBlTymsNonCov: 0,
  ttlChmLnsInBlTymsNonCov: 0,
  ttlSellerLnsInBlTymsNonCov: 0,
  
  ttlCompTrnsfrEarningsNonCov: 0,
  ttlCompBLClrncEarningsNonCov: 0,
  ttlCompCovEarnings: 0,

  maxInterestSM: 0,

  maxInterestPwnBrkr: 0,
  maxInterestCredSllr: 0,
  maxInterestGrp: 0,

  maxMFNdogos:0,
  maxBLs:1,

  
  totalLnsRecovered: 0,
  bizBeneficiaryFee: 0,
  bizBenefactorFee: 0,
  senderBeneficiaryFee: 0,
  receiverBeneficiaryFee: 0,
  
  MFNdogoTC: "MFNdogoTC",
  MFKubwaTC: "MFKubwaTC",
  AdvocateTC:"AdvocateTC",
  BiznaTNC:"BiznaTNC",
  ChamaTNC:"ChamaTNC",
  PayPalTNC:"PayPalTNC",
  maxDfltPen: 20,
  bizBLNo: 1
          }
          },
        })
      ;

     
      
    } catch (error) {
      if (error) {
        console.log(userInfo.userId)
      } else
     {
      Alert.alert('Company Created Successfully')
     } ;
      
    }
    fetchExDtls();
  };
  
  const fetchExDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await getCurrentUser();
    try {
      const ExDtls:any = await client.graphql 
      ({query:getCompany,
        variables: 
        { AdminId: "BaruchHabaB'ShemAdonai2" },
        })
      ;


      const pw1s = ExDtls.data.getCompany.pw1;
      const pw2s = ExDtls.data.getCompany.pw2;
      const ownersss = ExDtls.data.getCompany.owner;

      if (PWOnes === pw1s && PWTwos === pw2s && ownersss === userInfo.userId) { 
        moveToRegAdmin();
      } else {
        Alert.alert("Unauthorised Access");
      }
    } catch (e) {
      if(e){console.log(e)};
    }
    setIsLoading(false)
    setPWOne("");
    setPWTwo("");
  }
    useEffect(() =>{
      const PWOnesz=PWOnes
        if(!PWOnesz && PWOnesz!=="")
        {
          setPWOne("");
          return;
        }
        setPWOne(PWOnesz);
        }, [PWOnes]
         );

         useEffect(() =>{
          const PWTwosz=PWTwos
            if(!PWTwosz && PWTwosz!=="")
            {
              setPWTwo("");
              return;
            }
            setPWTwo(PWTwosz);
            }, [PWOnes]
             );
    
    
  

  return (
    <LinearGradient colors={['#87ceeb', '#e58d29']} style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={goToMainAccount} 
        style={styles.titleContainer}>
          <LinearGradient colors={['#87ceeb', '#e58d29']} style={styles.titleGradient}>
            <Text style={styles.title}>Go Home</Text>
          </LinearGradient>
        </TouchableOpacity>

        
          <LinearGradient colors={['#87ceeb', '#e58d29']} style={styles.inputGradient}>
            <Text style={styles.label}>Password 1</Text>
            <TextInput
              value={PWOnes}
              onChangeText={setPWOne}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#555"
            />
          </LinearGradient>
        

        
          <LinearGradient colors={['#87ceeb', '#e58d29']} style={styles.inputGradient}>
            <Text style={styles.label}>Password 2</Text>
            <TextInput
              value={PWTwos}
              onChangeText={setPWTwo}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#555"
            />
          </LinearGradient>
       

        <TouchableOpacity onPress={CompCreation} style={styles.buttonContainer}>
          <LinearGradient colors={['#e58d29', '#87ceeb']} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </LinearGradient>
          {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  titleGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  inputGradient: {
    borderRadius: 10,
    padding: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 10,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AdminSignIn;
