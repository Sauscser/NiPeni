import React, {useEffect, useState} from 'react';

import {createAgent, createSAgent, updateCompany, updateMFKOfferz, updateSMAccount} from '../../../src/graphql/mutations';

import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import { Ionicons } from '@expo/vector-icons'; // Eye icon
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
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

import { getCompany, getMFKOfferz, getSMAccount, listSMAccounts } from '../../../src/graphql/queries';
import { LinearGradient } from 'expo-linear-gradient';

const RegisterMFKubwaAcForm = props => {
  const [nationalId, setNationalid] = useState("");
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const[eml, setEml] =useState("");
  const client = generateClient();
  const [pword, setPW] = useState("");
  const [BkName, setBkName] = useState('');
  const [BkAcNu, setBkAcNu] = useState('');
  const[isLoading, setIsLoading] = useState(false);
  const route = useRoute();
const navigation = useNavigation();


  
  const gtCompDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await fetchUserAttributes();   
    

    try{
        const compDtls :any= await client.graphql({
          query:getCompany,
          variables: {AdminId:"BaruchHabaB'ShemAdonai2"}
        })
       
        const actvAKbwa = compDtls.data.getCompany.ttlKFKbwActv


        const ChckPhnUse = async () => {
          try {
            const UsrDtlss:any = await client.graphql({
              query: listSMAccounts,
              variables: { filter: {
                    
                awsemail: { eq: userInfo.email}
                              
                }}
            })
           

            const ChckUsrExistence = async () => {
              try {
                const UsrDtls:any = await client.graphql({
                  query: getSMAccount,
                  variables: { 
                    awsemail:userInfo.email
                  }
                })
                
                const nationalidssss = UsrDtls.data.getSMAccount.nationalid
                const owner = UsrDtls.data.getSMAccount.owner
                const TtlClrdLonsAmtSllrCovs = UsrDtls.data.getSMAccount.TtlClrdLonsAmtSllrCov

                const fetchMFKOffer = async () => {
                  try {
                    const UsrDtlsz:any = await client.graphql({
                      query: getMFKOfferz,
                      variables: { 
                        id:route.params.idz
                      }
                    })
                   
                    const offerStatus = UsrDtlsz.data.getMFKOfferz.offerStatus
                    const acCost = UsrDtlsz.data.getMFKOfferz.acCost
                    const amtPaid = UsrDtlsz.data.getMFKOfferz.amtPaid

                    const mfnOffered = UsrDtlsz.data.getMFKOfferz.mfnOffered
                    const acChamp = UsrDtlsz.data.getMFKOfferz.acChamp
                    const mfkAc = UsrDtlsz.data.getMFKOfferz.mfkAc
                    const acMainAc = UsrDtlsz.data.getMFKOfferz.acMainAc
                  

            const CreateNewSA = async () => {
              
              try {
                await client.graphql({
                  query:createSAgent,
                  variables: {
                    input: {
                      
                      saNationalid: nationalidssss,
                      name: nam,
                      saPhoneContact: acMainAc,
                      pw: pword,
                      TtlEarnings: 0,
                      bankName:BkAcNu,
                      mfnTtl:mfnOffered,
                      bkAcNo:BkName,
                      offerStatus: offerStatus,
                      cost: acCost,
                      costBal: amtPaid,
                      acChamp:acChamp,
                      actvMFNdog:0,
                      InctvMFNdog:0,
                      email: mfkAc,
                      saBalance: 0,   
                      status: 'AccountActive',
                      owner:userInfo.sub,
                      MFKWithdrwlFee:0
                    },
                  }
                })
                
    
                
              } 
    
              catch (error) {
                console.log(error)
                if (error){
                  Alert.alert("Error! Access denied!")
                  return
                }
              }
              setIsLoading(false); 
              await  updtActAdm();              
            };



            if (userInfo.sub !== owner)
                           {Alert.alert ("Please first create main account")}
                           else if(0 >= TtlClrdLonsAmtSllrCovs){
          Alert.alert("Please first purchase this account");
          return;
        } 
        else if (pword.length<8)
        {Alert.alert("Password is too short; at least eight characters");
      return;
    }

    

   else {
          CreateNewSA();
        }
            
    
            const updtActAdm = async()=>{
              
              try{
                  await client.graphql({
                    query:updateCompany,
                    variables: {
                      input:{
                        AdminId:"BaruchHabaB'ShemAdonai2",
                        ttlKFKbwActv:parseFloat(actvAKbwa) + 1,
                      }
                    }
                  })
                  
              }
              catch(error){if(error){
                Alert.alert("Retry or update app or call customer care")
                return
              }}
              await updtSMAc();
              setIsLoading(false);
            }

            const updtSMAc = async()=>{
              if(isLoading){
                return;
              }
              setIsLoading(true);
              try{
                  await client.graphql({
                    query: updateSMAccount,
                    variables: {
                      input:{
                        awsemail:userInfo.email,
                        TtlClrdLonsAmtSllrCov:parseFloat(TtlClrdLonsAmtSllrCovs) - 1,
                      }
                    }
                  })
                  
              }
              catch(error){if (error) {
                console.log(error)
                Alert.alert("Retry or update app or call customer care")
                return;
              }}
              await updtMFKOffer();
              setIsLoading(false);
            }

            const updtMFKOffer = async()=>{
              
              try{
                  await client.graphql({
                    query: updateMFKOfferz,
                    variables: {
                      input:{
                        id:route.params.idz,
                        status:"AccountInactive"
                      }
                    }
                  })
                 
              }
              catch(error){if (error) {
                console.log(error)
                Alert.alert("Retry or update app or call customer care")
                return;
              }}
              Alert.alert("MFKubwa Account registered successfully")   
              setIsLoading(false);
            }

           
            
          } catch (e) {
            if(e){Alert.alert("Retry or update app or call customer care")
          return}
            console.error(e);
          }
        }
         
        await fetchMFKOffer();
      
      } catch (e) {
            if(e){Alert.alert("Retry or update app or call customer care")
          return}
            console.error(e);
          }
        }
         
        await ChckUsrExistence();
      
      } catch (e) {
            if(e){Alert.alert("Retry or update app or call customer care")
          return}
            console.error(e);
          }
        }

        await ChckPhnUse();

        



       
      }

  catch(e){
    if(e){
      Alert.alert("Please ensure all details are filled correctly")
      return
    }
  }
          setIsLoading(false);
          setNationalid('');
          setPW("");
          setName("");
          setEml("");
          setPhoneContact("");
          setBkAcNu("");
          setBkName("");
};

useEffect(() =>{
  const BkNames=BkName
    if(!BkNames && BkNames!=="")
    {
      setBkName("");
      return;
    }
    setBkName(BkNames);
    }, [BkName]
     );

     useEffect(() =>{
      const BkAcNus=BkAcNu
        if(!BkAcNus && BkAcNus!=="")
        {
          setBkAcNu("");
          return;
        }
        setBkAcNu(BkAcNus);
        }, [BkAcNu]
         );
         
         useEffect(() =>{
  const mfkID=nationalId
    if(!mfkID && mfkID!=="")
    {
      setNationalid("");
      return;
    }
    setNationalid(mfkID);
    }, [nationalId]
     );

     useEffect(() =>{
      const mfkpw=pword
        if(!mfkpw && mfkpw!=="")
        {
          setPW("");
          return;
        }
        setPW(mfkpw);
        }, [pword]
         );

         useEffect(() =>{
          const mfknm=nam
            if(!mfknm && mfknm!=="")
            {
              setName("");
              return;
            }
            setName(mfknm);
            }, [nam]
             );

             useEffect(() =>{
              const mfkeml=eml
                if(!mfkeml && mfkeml!=="")
                {
                  setEml("");
                  return;
                }
                setEml(mfkeml);
                }, [eml]
                 );

                 useEffect(() =>{
                  const mfkphn=phoneContact
                    if(!mfkphn && mfkphn!=="")
                    {
                      setPhoneContact("");
                      return;
                    }
                    setPhoneContact(mfkphn);
                    }, [phoneContact]
                     );
                     return (
                      <LinearGradient
                        colors={['#e58d29', 'skyblue']}
                        start={[0, 0]}
                        end={[1, 1]}
                        style={{ flex: 1 }}
                      >
                        <View style={styles.container}>
                          <ScrollView>
                          <TouchableOpacity onPress={() => navigation.navigate('Homesss')} style={styles.button}>
                                
                                  <Text style={styles.locationText}>Go Home</Text>
                                
                              </TouchableOpacity>
                            <View style={styles.formContainer}>
                              <TextInput
                                placeholder="MiFedha Kubwa Name"
                                value={nam}
                                onChangeText={setName}
                                style={styles.input}
                              />
                              <TextInput
                                placeholder="Bank Name"
                                value={BkAcNu}
                                onChangeText={setBkAcNu}
                                style={styles.input}
                              />
                              <TextInput
                                placeholder="Bank Account Number"
                                value={BkName}
                                onChangeText={setBkName}
                                style={styles.input}
                              />
                             
                              <View style={styles.passwordContainer}>
                                                                         <TextInput
                                                                           placeholder="MiFedha Kubwa Password"
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
                             
                                                                       <View style={styles.passwordContainer}>
                                                                         <TextInput
                                                                           placeholder="Confirm Account Password"
                                                                       style={styles.passwordInput}
                                                                                                            
                                                                       value={nationalId}
                                                                       onChangeText={setNationalid}
                                                                       secureTextEntry={!isPasswordVisible}
                                                                       placeholderTextColor="#ccc"
                                                                       />
                                                                       <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                                                      <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                                                       </TouchableOpacity>
                                                                      </View>
                              
                              <TouchableOpacity onPress={gtCompDtls} style={styles.button}>
                                {isLoading ? (
                                  <ActivityIndicator color="#fff" />
                                ) : (
                                  <Text style={styles.locationText}>Submit</Text>
                                )}
                              </TouchableOpacity>
                            </View>
                          </ScrollView>
                        </View>
                      </LinearGradient>
                    );
                  };
                  
                  const styles = StyleSheet.create({
                      gradient: {
                        flex: 1,
                      },
                      container: {
                        flex: 1,
                        padding: 20,
                      },
                      loanTitleView: {
                        marginBottom: 20,
                        alignItems: 'center',
                      },
                      title: {
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        textAlign: 'center',
                      },
                      formContainer: {
                        backgroundColor: '#ffffff',
                        borderRadius: 10,
                        padding: 20,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                      },
                      input: {
                        height: 45,
                        borderColor: '#ccc',
                        borderWidth: 1,
                        marginBottom: 15,
                        borderRadius: 5,
                        paddingLeft: 10,
                      },
                      button: {
                        backgroundColor: '#e58d29',
                        paddingVertical: 12,
                        borderRadius: 5,
                        alignItems: 'center',
                        marginTop: 20,
                      },
                      locationContainer: {
                        marginVertical: 10,
                      },
                      locationText: {
                        fontSize: 16,
                        color: '#333',
                      },
                      passwordContainer: { flexDirection: 'row', alignItems: 'center', 
                          backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, height:50 },
                  passwordInput: { flex: 1, padding: 12 },
                    });
                    
                    

export default RegisterMFKubwaAcForm;