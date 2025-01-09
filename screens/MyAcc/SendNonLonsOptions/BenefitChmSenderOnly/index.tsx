import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {
  
  createSMLoansCovered,
  
  
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateGroup,
  updateChamaMembers,
  
} from '../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';


import {useNavigation, useRoute} from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { getChamaMembers, getCompany, getGroup, getSMAccount, listCovCreditSellers, listCvrdGroupLoans, listSMLoansCovereds } from '../../../../src/graphql/queries';


const SMASendNonLns = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  const [SnderPW, setSnderPW] = useState("");
 
  const [amounts, setAmount] = useState("");
  
  const [Desc, setDesc] = useState("");
 
  const[isLoading, setIsLoading] = useState(false);
  
  const route = useRoute();
  const navigation = useNavigation()
  const SndChmMmbrMny = () => {
    navigation.navigate("AutomaticRepayAllTyps")
 }

 const grpDsNtExst = () => {
  navigation.navigate("SendNLBnftNone")
}
  
  
 
    const fetchCvLnSM = async () => {
      setIsLoading(true);

      const userInfo = await Auth.currentAuthenticatedUser();


      try {
        const Lonees1:any = await API.graphql(graphqlOperation(listSMLoansCovereds, 
          { filter: {
              and: {
                status: { eq: "LoanBL"},
                lonBala: { gt: 0},
                loaneeEmail: { eq: userInfo.attributes.email},
              }
            }}
            ));

            
        
                    const fetchCLCrdSl = async () => {
                      setIsLoading(true);
                      try {
                        const Lonees3:any = await API.graphql(graphqlOperation(listCovCreditSellers, 
                          { filter: {
                              and: {
                                status: { eq: "LoanBL"},
                        lonBala: { gt: 0},
                        buyerContact: { eq: userInfo.attributes.email},
                              }
                            }}
                            ));

                            

                                    const fetchCLChm = async () => {
                                      setIsLoading(true);
                                      try {
                                        const Lonees5:any = await API.graphql(graphqlOperation(listCvrdGroupLoans, 
                                          { filter: {
                                              and: {
                                                status: { eq: "LoanBL"},
                                        lonBala: { gt: 0},
                                        loaneePhn: { eq: userInfo.attributes.email},
                                              }
                                            }}
                                            ));

  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const SenderSub =accountDtl.data.getSMAccount.owner;
      const ttlNonLonsSentSMs =accountDtl.data.getSMAccount.ttlNonLonsSentSM;
      const loanLimits =accountDtl.data.getSMAccount.loanLimit;
      
      const names =accountDtl.data.getSMAccount.name;
      const owner =accountDtl.data.getSMAccount.owner;
      
      
      const fetchCompDtls = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
            
          const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
          const UsrTransferFeeAmt = UsrTransferFee*parseFloat(amounts);
          const UsrTransferFee2 = parseFloat(SenderUsrBal) -parseFloat(amounts);
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts);
          const TotalTransacted2 = parseFloat(amounts)  + UsrTransferFee2;
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
          
         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getSMAccount, {awsemail: RecNatId}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;                    
                    const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                    const ttlNonLonsRecSMs =RecAccountDtl.data.getSMAccount.ttlNonLonsRecSM;
                    const namess =RecAccountDtl.data.getSMAccount.name;
                    const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                    const TtlWthdrwnSMs =RecAccountDtl.data.getSMAccount.TtlWthdrwnSM;
                    const MaxAcBals =RecAccountDtl.data.getSMAccount.MaxAcBal;
                    const phonecontact =RecAccountDtl.data.getSMAccount.phonecontact;
                    const p2pchmBenefits =accountDtl.data.getSMAccount.p2pchmBenefits;


                    const fetchMmbrDtls = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try {
                          const RecAccountDtl17:any = await API.graphql(
                              graphqlOperation(getChamaMembers, {ChamaNMember: route.params.ChamaNMember}),
                              );
                              const ttlNonLonAcBal =RecAccountDtl17.data.getChamaMembers.ttlNonLonAcBal; 
                              const groupContact =RecAccountDtl17.data.getChamaMembers.groupContact; 
                              const memberChmBenefit =RecAccountDtl17.data.getChamaMembers.memberChmBenefit; 
                              
                              const fetchChmDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try {
                                    const RecAccountDtl17:any = await API.graphql(
                                        graphqlOperation(getGroup, {grpContact: groupContact}),
                                        );
                                        const grpBal =RecAccountDtl17.data.getGroup.grpBal; 
                                        const ChmBenefits =RecAccountDtl17.data.getGroup.ChmBenefits;

                                        const p2pBen = (parseFloat(p2pchmBenefits) + (parseFloat(UsrTransferFee) * parseFloat(amounts))*0.3).toFixed(0)
                              
                    
                  
                    const sendSMNonLn = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true)
                      try {
                        await API.graphql(
                          graphqlOperation(createNonLoans, {
                            input: {
                              recPhn: RecNatId,
                              senderPhn: userInfo.attributes.email,                                  
                              amount: parseFloat(amounts).toFixed(0),                              
                              description: Desc,
                              RecName:namess,
                              SenderName:names,
                              status: "SMNonLons",
                              owner: userInfo.attributes.sub
                            },
                          }),
                        );


                      } catch (error) {
                        if (error){
                          Alert.alert("Sending unsuccessful; Retry")
                          return
                        }
                      }
                      setIsLoading(false);
                      await updtSendrAc();
                    };

                    const sendSMNonLn2 = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true)
                      try {
                        await API.graphql(
                          graphqlOperation(createNonLoans, {
                            input: {
                              recPhn: RecNatId,
                              senderPhn: userInfo.attributes.email,                                  
                              amount: parseFloat(amounts).toFixed(0),                              
                              description: Desc,
                              RecName:namess,
                              SenderName:names,
                              status: "SMNonLons",
                              owner: userInfo.attributes.sub
                            },
                          }),
                        );


                      } catch (error) {
                        if (error){
                          Alert.alert("Sending unsuccessful; Retry")
                          return
                        }
                      
                      }
                      setIsLoading(false);
                      await updtSendrAc2();
                    };


                    const updtSendrAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:userInfo.attributes.email,
                                ttlNonLonsSentSM: (parseFloat(ttlNonLonsSentSMs)+parseFloat(amounts)).toFixed(0),
                                balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) 
                               
                                
                              }
                            })
                          )


                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtRecAc();
                    }

                    const updtSendrAc2 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:userInfo.attributes.email,
                                ttlNonLonsSentSM: (parseFloat(ttlNonLonsSentSMs)+parseFloat(amounts)).toFixed(0),
                                balance:(parseFloat(SenderUsrBal)-TotalTransacted2).toFixed(0) 
                               
                                
                              }
                            })
                          )


                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtRecAc2();
                    }

                    const updtRecAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:RecNatId,
                                ttlNonLonsRecSM: (parseFloat(ttlNonLonsRecSMs) + parseFloat(amounts)).toFixed(0) ,
                                balance:(parseFloat(RecUsrBal) +  parseFloat(amounts)+ (parseFloat(UsrTransferFee) * parseFloat(amounts))*0.3).toFixed(0) ,                                     
                                p2pchmBenefits: (parseFloat(p2pchmBenefits) + (parseFloat(UsrTransferFee) * parseFloat(amounts))*0.3).toFixed(0) ,                       
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      console.log(p2pBen)
                      setIsLoading(false);
                      await updtChmAc();
                    }

                    const updtChmAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateGroup, {
                              input:{
                                grpContact: groupContact,
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtChmMbrAc();
                    }

                    const updtChmMbrAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateChamaMembers, {
                              input:{
                                ChamaNMember: route.params.ChamaNMember,
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtComp();
                    }

                    const updtRecAc2 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:RecNatId,
                                ttlNonLonsRecSM: (parseFloat(ttlNonLonsRecSMs) + parseFloat(amounts)).toFixed(0) ,
                                balance:(parseFloat(RecUsrBal) + parseFloat(amounts)).toFixed(0)                                     
                                                                
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtComp2();
                    }

                    const updtComp = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany, {
                              input:{
                                AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                               
                                companyEarningBal:(parseFloat(UsrTransferFee) * parseFloat(amounts))*0.7 + parseFloat(companyEarningBals),
                                companyEarning: (parseFloat(UsrTransferFee) * parseFloat(amounts))*0.7 + parseFloat(companyEarnings),                                                    
                                
                                ttlNonLonssRecSM: parseFloat(amounts) + parseFloat(ttlNonLonssRecSMs),
                                ttlNonLonssSentSM: parseFloat(amounts) + parseFloat(ttlNonLonssSentSMs),
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                    return;}
                      }
                      Alert.alert("Amount:Ksh. "+parseFloat(amounts).toFixed(0) + ". Transaction fee: Ksh. "+ UsrTransferFeeAmt.toFixed(0)
                      );
                      Communications.textWithoutEncoding(phonecontact,'Hi '
                              + namess + ", " +names + ' has sent you a non loan of Ksh. ' 
                              + amounts 
                              +'. For clarification call the sender '
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha')
                            
                            setIsLoading(false);
                    }

                    const updtComp2 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany, {
                              input:{
                                AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                               
                                companyEarningBal:UsrTransferFee2 + parseFloat(companyEarningBals),
                                companyEarning: UsrTransferFee2 + parseFloat(companyEarnings),                                                    
                                
                                ttlNonLonssRecSM: parseFloat(amounts) + parseFloat(ttlNonLonssRecSMs),
                                ttlNonLonssSentSM: parseFloat(amounts) + parseFloat(ttlNonLonssSentSMs),
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                    return;}
                      }
                      Alert.alert("Insufficient transaction fees? No worries! Ksh. " +parseFloat(amounts).toFixed(0) + " sent!");
                      Communications.textWithoutEncoding(phonecontact,'Hi '
                              + namess + ", "+names + ' has sent you a non loan of Ksh. ' 
                              + amounts 
                              +'. For clarification call the sender'
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha')
                      setIsLoading(false);
                    }
                    
                                          
                    
                    if (userInfo.attributes.sub!==owner) {
                      Alert.alert("Please first create a main account")
                      return;
                    }  else if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');}
                    else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                    else if(SenderNatId === RecNatId){Alert.alert('You cannot Send money to yourself Yourself');}
                    else if(parseFloat(ttlDpstSMs) === 0 && parseFloat(TtlWthdrwnSMs) ===0){Alert.alert('Receiver ID be verified through deposit at MFNdogo');}
                    else if (
                      UsrTransferFee2 < 0
                    ) {Alert.alert('Requested amount is more than you have in your account');}

                    
                    
                    else if (
                      (parseFloat(RecUsrBal) + parseFloat(amounts)) > parseFloat(MaxAcBals) 
                    ) {Alert.alert('Receiver Call customer care to have wallet capacity adjusted');}
                    
                    else if(usrPW !==SnderPW){Alert.alert('Wrong password');}
                    else if(userInfo.attributes.sub !==SenderSub){Alert.alert('Please send from your own  account');}
                    
                    else if(parseFloat(loanLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');}
                    
                    else if (Lonees1.data.listSMLoansCovereds.items.length > 0 
                      ||
                      
                      Lonees3.data.listCovCreditSellers.items.length > 0 
                      
                      ||
                      Lonees5.data.listCvrdGroupLoans.items.length > 0 
                      

                    
                      ) {
                        SndChmMmbrMny();
                    } 

                    else if (UsrTransferFeeAmt > UsrTransferFee2 
                      ){sendSMNonLn2();}

                     else {
                      sendSMNonLn();
                    }                                                
               
                  }       
                  catch(e) {   
                    
                    if (e){
                      console.log(e)  
                     
                      Alert.alert("Group does not exist!");
                  }                 
                  }
                  setIsLoading(false);
                  }                    
                    await fetchChmDtls();

                  }       
                  catch(e) {   
                    console.log(e)  
                    if (e){
                      
                      
                      Alert.alert("Retry or update app or call customer care");
                  }                 
                  }
                  setIsLoading(false);
                  }                    
                    await fetchMmbrDtls();
                  
                  }       
                catch(e) {   
                  console.log(e)  
                  if (e){Alert.alert("Retry or update app or call customer care")
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchRecUsrDtls();
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Retry or update app or call customer care")
      return;}
        }
        setIsLoading(false);        
      };
      await fetchCompDtls();
    
      
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update app or call customer care")
      return;}
         
    }   
    setIsLoading(false);
    };
    
    await fetchSenderUsrDtls();

  
    
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update app or call customer care")
      return;}
         
    }   
    setIsLoading(false);
    };
    
    await fetchCLChm();
    
   
    
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update app or call customer care")
      return;}
         
    }   
    setIsLoading(false);
    };
    
    await fetchCLCrdSl();
    
    
          
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Retry or update app or call customer care")
          return;}
      };
  
      setIsLoading(false);
      setSenderNatId('');
      setAmount("");
      setRecNatId('');
      
      setDesc("");
      setSnderPW("");
      
}

useEffect(() =>{
  const SnderNatIds=SenderNatId
    if(!SnderNatIds && SnderNatIds!=="")
    {
      setSenderNatId("");
      return;
    }
    setSenderNatId(SnderNatIds);
    }, [SenderNatId]
     );

     useEffect(() =>{
      const amt=amounts
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amounts]
         );

         useEffect(() =>{
          const RecNatIds=RecNatId
            if(!RecNatIds && RecNatIds!=="")
            {
              setRecNatId("");
              return;
            }
            setRecNatId(RecNatIds);
            }, [RecNatId]
             );

             

                 

                     useEffect(() =>{
                      const descr=Desc
                        if(!descr && descr!=="")
                        {
                          setDesc("");
                          return;
                        }
                        setDesc(descr);
                        }, [Desc]
                         );

                         useEffect(() =>{
                          const SnderPWss=SnderPW
                            if(!SnderPWss && SnderPWss!=="")
                            {
                              setSnderPW("");
                              return;
                            }
                            setSnderPW(SnderPWss);
                            }, [SnderPW]
                             );

                             

                                 

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
         
          <View style={styles.amountTitleView}>
            <Text style={styles.title}>Fill account Details Below</Text>
          </View>

          

          <View style={styles.sendAmtView}>
            <TextInput
            placeholder="Receiver Email"
              value={RecNatId}
              onChangeText={setRecNatId}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Receiver Email</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
            keyboardType={"decimal-pad"}
              value={amounts}
              onChangeText={setAmount}
              style={styles.sendAmtInput}
              editable={true}
              ></TextInput>
              
            <Text style={styles.sendAmtText}>Amount Sent</Text>
          </View>


          <View style={styles.sendAmtView}>
            <TextInput
              value={SnderPW}
              onChangeText={setSnderPW}
              secureTextEntry = {true}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Sender PassWord</Text>
          </View>

          

          <View style={styles.sendAmtViewDesc}>
            <TextInput
              multiline={true}
              value={Desc}
              onChangeText={setDesc}
              style={styles.sendAmtInputDesc}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Description</Text>
          </View>

          <TouchableOpacity
            onPress={fetchCvLnSM}
            style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Send</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default SMASendNonLns;