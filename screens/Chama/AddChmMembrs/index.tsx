import React, {useEffect, useState} from 'react';

import {createChamaMembers,  updateCompany, updateGroup} from '../../../src/graphql/mutations';
import { getCompany, getGroup, getSMAccount, listSMAccounts, } from '../../../src/graphql/queries';
import { Ionicons } from '@expo/vector-icons';
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
Platform,
StyleSheet,
KeyboardAvoidingView,
SafeAreaView,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
 
} from 'react-native';


const AddChmMmbrs = (props) => {

  const [AdvReNo, setMFNId] = useState("");
    const [MFNPW, setMFNPW] = useState(""); 
    const [ownr, setownr] = useState(null); 
    const [isLoading, setIsLoading] =useState(false);
    const client = generateClient ();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();
  const [ChmPhn, setChmPhn] = useState('');
  const [phoneContacts, setPhoneContacts] = useState("");  
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [SubFreq, setSubFreq] = useState('');
  const [SubAmt, setSubAmt] = useState('');
  const [lateSub, setlateSub] = useState('');
  const [MmbaID, setMmbaID] = useState('');

  const ChmPhnNphoneContacts = MmbaID+ChmPhn



  const ChckUsrExistence2 = async () => {
    const userInfo = await fetchUserAttributes();
    const userInfosz = await getCurrentUser();
    if (isLoading)
    {
      return;
    }
    setIsLoading(true)
    try {
      const UsrDtls3:any = await client.graphql({
        query: listSMAccounts,
        variables: {
          filter: {
            awsemail: { eq: phoneContacts}
          }
        }
      })
      const clts = UsrDtls3.data.listSMAccounts.items

      const ChckAdmDtls = async () => {
       
        try {
          const UsrDtls2:any = await client.graphql({
            query: getSMAccount,
            variables: {
              awsemail:userInfo.email
            }
          })
          
            
            const pw = UsrDtls2.data.getSMAccount.pw;

      const ChckUsrExistence = async () => {
        const userInfo = await fetchUserAttributes();
      
     
        try {
          const UsrDtls:any = await client.graphql({
            query: getSMAccount,
            variables: { awsemail:phoneContacts}
          }) 

          const nationalidsss = UsrDtls.data.getSMAccount.nationalid;
          const namess = UsrDtls.data.getSMAccount.name;
          
        
          const gtCompDtls = async () =>{
            
            try{
              const compDtlsz :any= await client.graphql({
                query: getCompany,
                variables: {
                  AdminId:"BaruchHabaB'ShemAdonai2"
                }
              })
              
                const ttlActiveChmUserss = compDtlsz.data.getCompany.ttlActiveChmUsers;
                
                const gtChmDtls = async () =>{
                 
                  try{
                    const compDtls :any= await client.graphql({
                      query: getGroup,
                      variables: {grpContact:ChmPhn}
                    })
                    
                      const ttlGrpMemberss = compDtls.data.getGroup.ttlGrpMembers;  
                      const grpNames = compDtls.data.getGroup.grpName; 
                      const owners = compDtls.data.getGroup.owner;   
                      const regNos = compDtls.data.getGroup.regNo;   
                      const signitoryPWs = compDtls.data.getGroup.signitoryPW;    
                      const signitory2Subs = compDtls.data.getGroup.signitory2Sub;  
                      const objectionStatus =compDtls.data.getGroup.objectionStatus;
                      const Admin1 = compDtls.data.getGroup.Admin1;      
                      const Admin2 = compDtls.data.getGroup.Admin2;
                      const Admin3 = compDtls.data.getGroup.Admin3;
                      const Admin4 = compDtls.data.getGroup.Admin4;
                      const Admin5 = compDtls.data.getGroup.Admin5;
                      const Admin6 = compDtls.data.getGroup.Admin6;
                      const Admin7 = compDtls.data.getGroup.Admin7;
                      const Admin8 = compDtls.data.getGroup.Admin8;
                      const Admin9 = compDtls.data.getGroup.Admin9;
                      const Admin10 = compDtls.data.getGroup.Admin10;
                      const Admin11 = compDtls.data.getGroup.Admin11;
                      const Admin12 = compDtls.data.getGroup.Admin12;
                      const Admin13 = compDtls.data.getGroup.Admin13;
                      const Admin14 = compDtls.data.getGroup.Admin14;
                      const Admin15 = compDtls.data.getGroup.Admin15;
                      const Admin16 = compDtls.data.getGroup.Admin16;
                      const Admin17 = compDtls.data.getGroup.Admin17;
                      const Admin18 = compDtls.data.getGroup.Admin18;
                      const Admin19 = compDtls.data.getGroup.Admin19;
                      const Admin20 = compDtls.data.getGroup.Admin20;  
                      const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)   
                    
                      const CrtChm = async () => {
                       
                        try {
                          await client.graphql({
                            query: createChamaMembers,
                            variables: {
                              input: {
                                MembaId:MmbaID,
                                groupContact: ChmPhn,
                                memberContact: phoneContacts,
                                regNo:regNos,
                                ChamaNMember:ChmPhnNphoneContacts,
                                memberNatId: nationalidsss,
                                memberChmBenefit:0,
                                GrossLnsGvn:0,
                                LonAmtGven: 0,
                                AmtRepaid:0,
                                LnBal: 0,
                                NonLoanAcBal: 0,
                                ttlNonLonAcBal: 0,
                                timeCrtd:daysUpToDate,
                                subscribedAmt:0,
                                groupName:grpNames,
                                memberName:namess,
                                AcStatus: "AccountActive",
                                loanStatus: "NoLoan",
                                blStatus: "AccountNotBL",
                                owner: owners,
                                totalSubAmt:0,
                                subscriptionFrequency: SubFreq,
                      subscriptionAmt: SubAmt,
                      lateSubscriptionPenalty:lateSub,
                      ttlLateSubs:0
                                
                                      },
                            }
                          })
                         
                              
                            } catch (error) {
                              if (error){
                                console.log(Error)
                                Alert.alert("Error! Access denied!")
                                return}
                            
                            }
                            await updtActAdm();
                            setIsLoading(false);
                            
                          };
                          
          
                     if (pword !== pw)
                          {Alert.alert("Wrong Admin password");
                        return;
                      } 

                      else  if (userInfo.sub !== owners 
                        && signitory2Subs !== userInfo.sub
                        &&Admin1 !== userInfo.email
                      &&
                      Admin2 !== userInfo.email 
                      &&
                      Admin3 !== userInfo.email
                      &&
                      Admin4 !== userInfo.email 
                      &&
                      Admin5 !== userInfo.email
                      &&
                      Admin6 !== userInfo.email 
                      &&
                      Admin7 !== userInfo.email
                      &&
                      Admin8 !== userInfo.email 
                      &&
                      Admin9 !== userInfo.email
                      &&
                      Admin10 !== userInfo.email 
                      &&
                      Admin11 !== userInfo.email
                      &&
                      Admin12 !== userInfo.email 
                      &&
                      Admin13 !== userInfo.email
                      &&
                      Admin14 !== userInfo.email 
                      &&
                      Admin14 !== userInfo.email
                      &&
                      Admin15 !== userInfo.email 
                      &&
                      Admin16 !== userInfo.email
                      &&
                      Admin17 !== userInfo.email 
                      &&
                      Admin18 !== userInfo.email
                      &&
                      Admin19 !== userInfo.email 
                      &&
                      Admin20 !== userInfo.email)
                      {Alert.alert("You are neither the author nor signatory nor admin of this Group")
                      return;}
                      
                      else if (objectionStatus === "Objected")
                      {Alert.alert ("Group account is locked by the admin")}
                      else if (clts.length <1) {
                        Alert.alert("Member first create main account");
                       
                      }
                      else {
                        CrtChm();
                      }
                
                          const updtActAdm = async()=>{
                            
                            try{
                                await client.graphql({
                                  query: updateCompany,
                                  variables: {
                                    input:{
                                      AdminId:"BaruchHabaB'ShemAdonai2",
                                      ttlActiveChmUsers:parseFloat(ttlActiveChmUserss) + 1,
                                    }
                                  }
                                })
                                
                            }
                            catch(error){
                              if(error){
                                console.log(Error)
                                Alert.alert("Error! Access denied!")
                                return;
                            }
                            }
                            await updtChm();
                            
                            setIsLoading(false);
                          }                       
                          const updtChm = async()=>{
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                                await client.graphql({
                                  query: updateGroup,
                                  variables: {
                                    input:{
                                      grpContact:ChmPhn,
                                      ttlGrpMembers:parseFloat(ttlGrpMemberss) + 1,
                                    }
                                  }
                                })
                                
                            }
                            catch(error){
                              if(error){
                                console.log(Error)
                                Alert.alert("Error! Access denied!")
                                return;
                            }
                            }
                            Alert.alert("Congrats " + userInfosz.username 
                              + ", You have added " + namess +" to " +grpNames)
                            setIsLoading(false);
                          }
                          
          
          
            }          
            
            
            catch(e){
              console.log(e)
              if(e){
                console.log(Error)
                Alert.alert("Error! Access denied!")
                return;
            }
            }
                        setIsLoading(false)
                        console.log(4)        
            };
              
               await gtChmDtls();

            
              
      }
      
      catch(e){
        console.log(e)
        if(e){
          console.log(Error)
          Alert.alert("Error! Access denied!")
          return;
      }
      }
      setIsLoading(false)
      console.log(3)         
      };
        
         await gtCompDtls();
        
        } catch (e) {
          console.error(e);
          if (e){
            console.log(Error)
            Alert.alert("Retry or update app or call customer care")
        return}
        }
        setIsLoading(false)
        
        console.log(2)
      }
      await ChckUsrExistence()

    } catch (e) {
      console.error(e);
      if (e){
        console.log(Error)
        Alert.alert("Retry or update app or call customer care")
    return}
    }
    setIsLoading(false)
    
    console.log(2)
  }
  await ChckAdmDtls()

    } catch (e) {
      console.error(e);
      if (e){
        console.log(Error)
        Alert.alert("Retry or update app or call customer care")
    return}
    }
    console.log(1)
    setIsLoading(false)
                  setChmPhn('');
                  setPW('');
                  setPhoneContacts("")
                  setChmDesc("")
                  setChmNm("")
                  setMmbaID("")
                  setSubAmt("");
                  setSubFreq("");
                  setlateSub("")
      }

      
    
      useEffect(() =>{
        const lateSubs=lateSub
          if(!lateSubs && lateSubs!=="")
          {
            setlateSub("");
            return;
          }
          setlateSub(lateSubs);
          }, [lateSub]
           );

           useEffect(() =>{
            const SubAmts=SubAmt
              if(!SubAmts && SubAmts!=="")
              {
                setSubAmt("");
                return;
              }
              setSubAmt(SubAmts);
              }, [SubAmt]
               );
           
           useEffect(() =>{
        const SubFreqs=SubFreq
          if(!SubFreqs && SubFreqs!=="")
          {
            setSubFreq("");
            return;
          }
          setSubFreq(SubFreqs);
          }, [SubFreq]
           );

  
    
      useEffect(() =>{
        const MmbaIDs=MmbaID
          if(!MmbaIDs && MmbaIDs!=="")
          {
            setMmbaID("");
            return;
          }
          setMmbaID(MmbaIDs);
          }, [MmbaID]
           );
           
           useEffect(() =>{
        const phoneContactss=phoneContacts
          if(!phoneContactss && phoneContactss!=="")
          {
            setPhoneContacts("");
            return;
          }
          setPhoneContacts(phoneContactss);
          }, [phoneContacts]
           );

      useEffect(() =>{
        const ChmNms=ChmNm
          if(!ChmNms && ChmNms!=="")
          {
            setChmNm("");
            return;
          }
          setChmNm(ChmNms);
          }, [ChmNm]
           );

           useEffect(() =>{
            const ChmDescs=ChmDesc
              if(!ChmDescs && ChmDescs!=="")
              {
                setChmDesc("");
                return;
              }
              setChmDesc(ChmDescs);
              }, [ChmDesc]
               );

useEffect(() =>{
  const ChmPhns=ChmPhn
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [ChmPhn]
     );

     useEffect(() =>{
      const pws=pword
        if(!pws && pws!=="")
        {
          setPW("");
          return;
        }
        setPW(pws);
        }, [pword]
         );
        
          return (
                                                   <SafeAreaView style={styles.container}>
                                                     <KeyboardAvoidingView
                                                       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                                                       style={{ flex: 1 }}
                                                     >
                                                       <LinearGradient
                                                         colors={['#e58d29', '#87CEEB']}
                                                         start={{ x: 0, y: 0 }}
                                                         end={{ x: 1, y: 1 }}
                                                         style={styles.gradientBackground}
                                                       >
                                                         <ScrollView>
                                                          <TouchableOpacity 
                                                             style={styles.header} onPress={() => navigation.navigate('Homesss')} >
                                                            <Text>
                                                             Go Home
                                                           </Text>  
                                                           </TouchableOpacity>
                                               
                                                           <View style={styles.formContainer}>
                                                             {/* Input Fields */}
                                                 
                                               
                                                             {/* Description */}
                                                             
                                               
                                                             
                                                             <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Chama Phone Number"
                                                               style={styles.passwordInput}                                                                                                    
                                                               value={ChmPhn}
                                                               onChangeText={setChmPhn}                                                               
                                                               placeholderTextColor="#ccc"
                                                                       />                                                             
                                                               </View>

                                                               <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Member Email"
                                                               style={styles.passwordInput}                                                                                                    
                                                               value={phoneContacts}
                                                               onChangeText={setPhoneContacts}                                                               
                                                               placeholderTextColor="#ccc"
                                                                       />                                                             
                                                               </View>

                                                               <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Group Member Number"
                                                               style={styles.passwordInput}                                                                                                    
                                                               value={MmbaID}
                                                               onChangeText={setMmbaID}                                                               
                                                               placeholderTextColor="#ccc"
                                                                       />                                                             
                                                               </View>   

                                                               <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Subscription Amount"
                                                               style={styles.passwordInput}                                                                                                    
                                                               value={SubAmt}
                                                               onChangeText={setSubAmt}                                                               
                                                               placeholderTextColor="#ccc"
                                                               keyboardType='decimal-pad'
                                                                       />                                                             
                                                               </View>

                                                               <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Subscription Freduency in days"
                                                               style={styles.passwordInput}                                                                                                    
                                                               value={SubFreq}
                                                               onChangeText={setSubFreq}                                                               
                                                               placeholderTextColor="#ccc"
                                                                keyboardType='decimal-pad'
                                                                       />                                                             
                                                               </View>

                                                               <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Late Subscription Penalty"
                                                               style={styles.passwordInput}                                                                                                    
                                                               value={lateSub}
                                                               onChangeText={setlateSub}                                                               
                                                               placeholderTextColor="#ccc"
                                                               keyboardType='decimal-pad'
                                                                       />                                                             
                                                               </View>              
                                                               
                     
                                                               <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Group Main Account Password"
                                                               style={styles.passwordInput}                                                                                                    
                                                               value={pword}
                                                               onChangeText={setPW}
                                                               secureTextEntry={!isPasswordVisible}
                                                               placeholderTextColor="#ccc"
                                                               />
                                                               <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                                              <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                                               </TouchableOpacity>
                                                              </View>
                                               
                                                             {/* Submit Button */}
                                                             
                                                           </View>
                                                         </ScrollView>
                                                       </LinearGradient>
                                                     </KeyboardAvoidingView>
                                                   </SafeAreaView>
                                                 );
                                               };
                                               
                                              
                                               
                                               const styles = StyleSheet.create({
                                                 container: {
                                                   flex: 1,
                                                   backgroundColor: '#fff',
                                                 },
                                                 gradientBackground: {
                                                   flex: 1,
                                                 },
                                                 header: {
                                                   marginVertical: 20,
                                                   alignItems: 'center',
                                                   marginTop:60
                                                 },
                                                 title: {
                                                   fontSize: 20,
                                                   fontWeight: 'bold',
                                                   color: '#333',
                                                 },
                                                 formContainer: {
                                                   paddingHorizontal: 20,
                                                   paddingVertical: 10,
                                                 },
                                                 inputContainer: {
                                                   marginBottom: 15,
                                                 },
                                                 input: {
                                                   backgroundColor: 'white',
                                                   borderRadius: 10,
                                                   paddingHorizontal: 15,
                                                   height: 50,
                                                   borderColor: '#ddd',
                                                   borderWidth: 1,
                                                   fontSize: 16,
                                                 },
                                                 descContainer: {
                                                   marginBottom: 15,
                                                 },
                                                 descInput: {
                                                   backgroundColor: 'white',
                                                   borderRadius: 10,
                                                   paddingHorizontal: 15,
                                                   paddingVertical: 10,
                                                   height: 100,
                                                   textAlignVertical: 'top',
                                                   borderColor: '#ddd',
                                                   borderWidth: 1,
                                                   fontSize: 16,
                                                 },
                                                 submitButton: {
                                                   marginTop: 20,
                                                   height: 50,
                                                   borderRadius: 25,
                                                   overflow: 'hidden',
                                                 },
                                                 gradientWrapper: {
                                                   flex: 1,
                                                   justifyContent: 'center',
                                                   alignItems: 'center',
                                                 },
                                                 submitButtonText: {
                                                   color: 'white',
                                                   fontSize: 18,
                                                   fontWeight: 'bold',
                                                 },
                                                 passwordContainer: { flexDirection: 'row', alignItems: 'center', 
                                                   backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, height:50 },
                                           passwordInput: { flex: 1, padding: 12 },
                                               });
                  
        
        export default AddChmMmbrs;