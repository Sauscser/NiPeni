import React, {useEffect, useState} from 'react';

import {  createMFKOfferz, updateSMAccount} from '../../../src/graphql/mutations';
import {  getAgent, getSMAccount} from '../../../src/graphql/queries';
import {  generateClient} from 'aws-amplify/api';
import {  fetchUserAttributes} from 'aws-amplify/auth';
import Communications from 'react-native-communications';
import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  Platform,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { updateBankAdmin } from '../../../src/graphql/mutations';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const UpdtMFNPW = (props) => {
  const navigation = useNavigation();
  const [SigntryPW, setSigntryPW] = useState("");
  const [AdminID, setAdminId] = useState("");
  const [LnAcCod, setLnAcCod] = useState("");
  const [MFNS, setMFNS] = useState("");
  const [NewAdmnPW, setNewAdmnPW] = useState("");
  const [OldAdmnPW, setOldAdmnPW] = useState("");
  const [OfferStatus, setOfferStatus] = useState("");
  const [MFChamp, setMFChamp] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  const[ownr, setownr] = useState(null);
  const[names, setName] = useState(null);
  const client = generateClient();

  
  
        const fetchMFNDtls = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            const userInfo = await fetchUserAttributes();
            try{
              const MFNDtls :any= await client.graphql({
                query: getSMAccount,
                variables:{
                  awsemail:AdminID
                }
              })
             
                const TtlClrdLonsAmtSllrCovs = MFNDtls.data.getSMAccount.TtlClrdLonsAmtSllrCov   
                const MFKubwaCosts = MFNDtls.data.getSMAccount.MFKubwaCost
                const MFKubwaNetCosts = MFNDtls.data.getSMAccount.MFKubwaNetCost
                const namezs = MFNDtls.data.getSMAccount.name
                const phonecontact = MFNDtls.data.getSMAccount.phonecontact
                          
                
                          
                                      const updtMFNDtls = async () => {
                                        
                                        try{
                                            await client.graphql({
                                              query: updateSMAccount,
                                              variables: {
                                                input:{
                                                  awsemail:AdminID,
                                                  MFKubwaCost:parseFloat(NewAdmnPW) + parseFloat(MFKubwaCosts),
                                                  MFKubwaNetCost:parseFloat(SigntryPW) + parseFloat(MFKubwaNetCosts),
                                                  TtlClrdLonsAmtSllrCov:parseFloat(TtlClrdLonsAmtSllrCovs) + parseFloat(OldAdmnPW)
                                                }
                                              }
                                            })
                                           
                                    
                                        }
                                        catch(error){if (error){
                                          Alert.alert("Addition unsuccessful; Retry")
                                          return
                                        }
                                    }
                                       

                                        await CreateNewSAOffer ();
                                        
                                      } 

                                      updtMFNDtls();

                                      const CreateNewSAOffer = async () => {
                                        if(isLoading){
                                          return;
                                        }
                                        setIsLoading(true);
                                        try {
                                          await client.graphql({
                                            query: createMFKOfferz,
                                            variables: {
                                              input: {
                                                
                                                offerStatus: OfferStatus,
                                                acCost: NewAdmnPW,
                                                amtPaid:SigntryPW,
                                                mfnOffered: MFNS,
                                                acChamp: MFChamp,
                                                mfnReg: 0,
                                                status:"AccountActive",
                                                mfkAc: AdminID,
                                                acMainAc: LnAcCod,
                                            }
                                          }})
                                         
                                        } 
                              
                                        catch (error) {
                                          console.log(error)
                                          if (error){
                                            Alert.alert("Registration unsuccessful; Retry")
                                            return
                                          }
                                        }
                                        setIsLoading(false); 
                                        Alert.alert("MFKubwa creation successfully authorised");
                                        Communications.textWithoutEncoding(phonecontact,'Hi '+ namezs + '. Your application to create MFKubwa account ' 
                                        + LnAcCod + ' has been approved. Please proceed to create your MFKubwa account on MiFedha App' 
                                         );
                                      };
                                

            } catch (error) {
                if(error){
                  Alert.alert("Retry or update app or call customer care")
                  return
                }
              }
         
           

            setIsLoading(false);
              setNewAdmnPW("");
              setSigntryPW("")
              setOldAdmnPW("")
              setAdminId("")
              setLnAcCod(" ");
              setMFNS(" ")
              setMFChamp ("")
              setOfferStatus(" ")
          
            }
        
        useEffect(() =>{
          const MFChamps=MFChamp
            if(!MFChamps && MFChamps!=="")
            {
              setMFChamp("");
              return;
            }
            setMFChamp(MFChamps);
            }, [MFChamp]
             );

             useEffect(() =>{
              const OfferStatuss=OfferStatus
                if(!OfferStatuss && OfferStatuss!=="")
                {
                  setOfferStatus("");
                  return;
                }
                setOfferStatus(OfferStatuss);
                }, [OfferStatus]
                 );
    

             useEffect(() =>{
              const LnAcCods=LnAcCod
                if(!LnAcCods && LnAcCods!=="")
                {
                  setLnAcCod("");
                  return;
                }
                setLnAcCod(LnAcCods);
                }, [LnAcCod]
                 );


             useEffect(() =>{
              const NewAdmnPWs=NewAdmnPW
                if(!NewAdmnPWs && NewAdmnPWs!=="")
                {
                  setNewAdmnPW("");
                  return;
                }
                setNewAdmnPW(NewAdmnPWs);
                }, [NewAdmnPW]
                 );

             useEffect(() =>{
                const OldAdmnPWs=OldAdmnPW
                  if(!OldAdmnPWs && OldAdmnPWs!=="")
                  {
                    setOldAdmnPW("");
                    return;
                  }
                  setOldAdmnPW(OldAdmnPWs);
                  }, [OldAdmnPW]
                   );

                   useEffect(() =>{
                    const LnAcCods=SigntryPW
                      if(!LnAcCods && LnAcCods!=="")
                      {
                        setSigntryPW("");
                        return;
                      }
                      setSigntryPW(LnAcCods);
                      }, [SigntryPW]
                       );

                       useEffect(() =>{
                        const AdminIDs=AdminID
                          if(!AdminIDs && AdminIDs!=="")
                          {
                            setAdminId("");
                            return;
                          }
                          setAdminId(AdminIDs);
                          }, [AdminID]
                           );


                           useEffect(() =>{
                            const MFNSs=MFNS
                              if(!MFNSs && MFNSs!=="")
                              {
                                setMFNS("");
                                return;
                              }
                              setMFNS(MFNSs);
                              }, [MFNS]
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
                                          {[
                                            { placeholder: 'Enter MiFedha Kubwa Phone', 
                                              value: LnAcCod, setter: setLnAcCod},
                                            { placeholder: 'Enter MiFedha Champion Email', 
                                              value: MFChamp, setter: 
                                              setMFChamp},
                                              { placeholder: 'Enter MiFedha Kubwa Admin email', 
                                                value: AdminID, setter: setAdminId},
                                            { placeholder: 'Offer Status', value: 
                                              OfferStatus, setter: 
                                              setOfferStatus},
                                              { placeholder: 'Number of MiFedha Kubwas', 
                                                value: OldAdmnPW, setter: setOldAdmnPW, 
                                                keyboardType:'decimal-pad'},
                                                { placeholder: 'Cost', 
                                                  value: NewAdmnPW, setter: setNewAdmnPW, 
                                                  keyboardType:'decimal-pad'},
                                                  { placeholder: 'Amount Paid', 
                                                    value: SigntryPW, setter: setSigntryPW, 
                                                    keyboardType:'decimal-pad'},
                                                    { placeholder: 'MiFedha Ndogos registered', 
                                                      value: MFNS, setter: setMFNS, 
                                                      keyboardType:'decimal-pad'},
                                              
                                            
                                            
                                          ].map((field, index) => (
                                            <View style={styles.inputContainer} key={index}>
                                              <TextInput
                                                value={field.value}
                                                onChangeText={field.setter}
                                                style={styles.input}
                                                placeholder={field.placeholder}
                                                keyboardType={field.keyboardType || 'default'}
                                              />
                                            </View>
                                          ))}
                            
                                          {/* Description */}
                                          
                            
                                          {/* Password */}
                                         
                            
                                          {/* Submit Button */}
                                          <TouchableOpacity
                                            style={styles.submitButton}
                                            onPress={fetchMFNDtls}
                                            disabled={isLoading}
                                          >
                                            <LinearGradient
                                              colors={['#87CEEB', '#e58d29']}
                                              start={{ x: 0, y: 0 }}
                                              end={{ x: 1, y: 1 }}
                                              style={styles.gradientWrapper}
                                            >
                                              <Text style={styles.submitButtonText}>
                                                {isLoading ? 'Submitting...' : 'Submit'}
                                              </Text>
                                            </LinearGradient>
                                          </TouchableOpacity>
                                        </View>
                                      </ScrollView>
                                    </LinearGradient>
                                  </KeyboardAvoidingView>
                                </SafeAreaView>
                              );
                            };
                            
                            export default UpdtMFNPW;
                            
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
  
        
        