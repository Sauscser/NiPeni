import React, {useEffect, useState} from 'react';

import {createBizna, createChamaMembers, createGroup,   createPersonel,   updateCompany} from '../../../src/graphql/mutations';
import { getCompany, getSMAccount, listBiznas  } from '../../../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import {getCurrentUser} from 'aws-amplify/auth';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Eye icon

import {
  View,
  Text,
  
  
  TextInput,
  ScrollView,
  
  
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { SafeAreaView } from 'react-native-safe-area-context';



const CreateBiz = (props) => {

  

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
 
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [pword2, setPW2] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');
  const navigation = useNavigation()
  const client = generateClient()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const WorkerID = "00001"+ChmPhn


  const fetchAcDtls = async () => {
    if (!ChmPhn || !ChmNm || !Sign2Phn 
          || !pword2 || !ChmDesc || !pword) {
              Alert.alert('Error', 'Please fill in all fields');
              return;
            }
            setIsLoading(true);
    const userInfo = await fetchUserAttributes();
    
   
    try {
      const accountDtl:any = await client.graphql({
        query:getSMAccount,
        variables:{
          awsemail: userInfo.email
        }
      })
      
  
      const owners = accountDtl.data.getSMAccount.owner;
      const nationalid = accountDtl.data.getSMAccount.nationalid
      const namesz = accountDtl.data.getSMAccount.name

      const ChckBizExistence = async () => {        
        try {
          const UsrDtls:any = await client.graphql({
            query:listBiznas,
            variables:{
              filter: {
                and:{
                  licenseNo: { eq: Sign2Phn},
                  status: {eq: "AccountActive"},
                  noBL: {gt: 0}
                  
              } ,
              
              or: {email: { eq: userInfo.email},
              status: {eq: "AccountActive"},
              noBL: {gt: 0}}
              }
            }
          })
          
          console.log(UsrDtls.data.listBiznas.items)

          

         

      const CreateNewSMAc = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          await client.graphql({
            query:createBizna,
            variables: {
              input:{
                BusKntct:ChmPhn,
                busName: ChmNm,
                pw: pword,
                email: userInfo.email,
                owner2email:userInfo.email,
                TtlEarnings: 0,
                earningsBal: 0,
                bizBeneficiary:userInfo.email,
                beneficiaryType: "Private",
                benefitsAmounts: 0,
                netEarnings:0,
                description: ChmDesc,
                licenseNo: Sign2Phn,
                bizType:"bizType",
                status: "AccountActive",
                owner: userInfo.sub,
                noBL:0,
    
                TtlActvLonsTmsLnrCredSlsB2B: 0,
                TtlActvLonsAmtLnrCredSlsB2B: 0,
                TtlBLLonsTmsLnrCredSlsB2B: 0,
                TtlBLLonsAmtLnrCredSlsB2B: 0,
                TtlClrdLonsTmsLnrCredSlsB2B: 0,
                TtlClrdLonsAmtLnrCredSlsB2B: 0,
                TtlActvLonsTmsLneeCredSlsB2B: 0,
                TtlActvLonsAmtLneeCredSlsB2B: 0,
                TtlBLLonsTmsLneeCredSlsB2B: 0,
                TtlBLLonsAmtLneeCredSlsB2B: 0,
                TtlClrdLonsTmsLneeCredSlsB2B: 0,
                TtlClrdLonsAmtLneeCredSlsB2B: 0,
              
                TtlActvLonsTmsLnrCredSlsB2P: 0,
                TtlActvLonsAmtLnrCredSlsB2P: 0,
                TtlBLLonsTmsLnrCredSlsB2P: 0,
                TtlBLLonsAmtLnrCredSlsB2P: 0,
                TtlClrdLonsTmsLnrCredSlsB2P: 0,
                TtlClrdLonsAmtLnrCredSlsB2P: 0,
                TtlActvLonsTmsLneeCredSlsP2B: 0,
                TtlActvLonsAmtLneeCredSlsP2B: 0,
                TtlBLLonsTmsLneeCredSlsP2B: 0,
                TtlBLLonsAmtLneeCredSlsP2B: 0,
                TtlClrdLonsTmsLneeCredSlsP2B: 0,
                TtlClrdLonsAmtLneeCredSlsP2B: 0,
                
                objectionStatus:"NotObjected",
                objOfficer: "None",
                objReason: "None",
                AdminNo:1,
                Admin1:userInfo.email,
                Admin2:"None",
                Admin3:"None",
                Admin4:"None",
                Admin5:"None",
                Admin6:"None",
                Admin7:"None",
                Admin8:"None",
                Admin9:"None",
                Admin10:"None",
                Admin11:"None",
                Admin12:"None",
                Admin13:"None",
                Admin14:"None",
                Admin15:"None",
                Admin16:"None",
                Admin17:"None",
                Admin18:"None",
                Admin19:"None",
                Admin20:"None",
                Admin21:"None",
                Admin22:"None",
                Admin23:"None",
                Admin24:"None",
                Admin25:"None",
                Admin26:"None",
                Admin27:"None",
                Admin28:"None",
                Admin29:"None",
                Admin30:"None",
                Admin31:"None",
                Admin32:"None",
                Admin33:"None",
                Admin34:"None",
                Admin35:"None",
                Admin36:"None",
                Admin37:"None",
                Admin38:"None",
                Admin39:"None",
                Admin40:"None",
                Admin41:"None",
                Admin42:"None",
                Admin43:"None",
                Admin44:"None",
                Admin45:"None",
                Admin46:"None",
                Admin47:"None",
                Admin48:"None",
                Admin49:"None",
                Admin50:"None",
              }
            }
          })
        

              
              
            } catch (error) {
              if (error){
                Alert.alert("Creation unsuccessful; Retry")
                return
              }
            
            }
            await onCreateNewSMAc();
            
                     };

                     const onCreateNewSMAc = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try {await client.graphql({
                        query: createPersonel,
                        variables:{
                          input: {
                            BusinessRegNo: ChmPhn,
                            phoneKontact:userInfo.email,
                            name: namesz,
                            workerId: WorkerID,
                            workId:"00001",
                            email: userInfo.email,
                            nationalid:nationalid,
                            BiznaName:ChmNm,
                            ownrsss: owners,
                                  }
                        }
                      }) } catch (error) {
                        if (error){
                          Alert.alert("Error: possible this Business Phone exists here")
                          return
                        }
                      
                      }
                      Alert.alert("Business and owner accounts successfully created")
                      
                      setIsLoading(false);
                      
                      
                    };

                 if (pword.length < 8)
      {Alert.alert("password is too short; at least eight characters");
    
  } 
  if (pword !== pword2) {
    Alert.alert('Passwords do not match.');
    return;
  }
 else if (userInfo.sub !== owners)
{Alert.alert ("Please first create main account")}

else if (UsrDtls.data.listBiznas.items.length > 0)
{Alert.alert ("This Business is blacklisted by one of your clients")}


else{
                       await CreateNewSMAc();}

                    
                  
                  } catch (e) {
                    console.log(e)
                        if(e){Alert.alert("Retry or update app or call customer care")
                      return}
                        
                      }
                                
                    }
                    
                    await ChckBizExistence ();
                  
                  }

    catch (e) {
      console.log(e)
      if (e){Alert.alert("Check your Details")
      return;}
          
     }       
     setIsLoading(false);
     setChmPhn('');
     setPW('');
     setPW2('');
     setAWSEmail("")
     setChmDesc("")
     setChmNm("")
     setChmRegNo("")
     setMmbaID("")
     setSign2Phn(""); 
  }; 
    

    
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
                              { placeholder: 'Enter Business Number', value: ChmPhn, setter: setChmPhn},
                              { placeholder: 'Enter Business Name', value: ChmNm, setter: setChmNm},
                              { placeholder: 'Business Registration Number', value: Sign2Phn, setter: setSign2Phn},
                              { placeholder: 'More Business Description', value: ChmDesc, setter: setChmDesc},
                             
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
              
                           <View style={styles.passwordContainer}>
                                     <TextInput
                                       placeholder="Password"
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
                           
                                   {/* Confirm Password Input */}
                                   <View style={styles.passwordContainer}>
                                     <TextInput
                                       placeholder="Confirm Password"
                                       style={styles.passwordInput}
                                       value={pword2}
                                       onChangeText={setPW2}
                                       secureTextEntry={!isPasswordVisible}
                                       placeholderTextColor="#ccc"
                                     />
                                     <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                       <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                     </TouchableOpacity>
                                   </View>
                           
                           
              
                            {/* Submit Button */}
                            <TouchableOpacity
                              style={styles.submitButton}
                              onPress={fetchAcDtls}
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
              
              export default CreateBiz;
              
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
            
              
             
  goHomeButton: { marginTop: 40, alignSelf: 'flex-start', marginLeft: 20, padding: 10, color:'white' },
  goHomeText: { color: 'black', fontWeight: 'bold' },
  
  passwordContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, marginBottom: 10 },
  passwordInput: { flex: 1, padding: 12 },
  button: { borderRadius: 8, marginTop: 20 },
  buttonContent: { paddingVertical: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
                
});     