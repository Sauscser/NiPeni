import React, {useEffect, useState} from 'react';

import { getAdvocate} from '../../../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
 StyleSheet
} from 'react-native';




const MFNSignIn = (props) => {  
  const navigation = useNavigation();

  const [AdvReNo, setMFNId] = useState("");
  const [MFNPW, setMFNPW] = useState(""); 
  const [MembrPhn, setMembrPhn] = useState("");
  const [ChamPhn, setChamPhn] = useState("");
  const [ownr, setownr] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);  
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const client = generateClient();
  const AdvChmMmbr = ChamPhn+MembrPhn+AdvReNo



  const VwMFNAc = () => {
    navigation.navigate("VwAdvSMCovLnss", {AdvChmMmbr});
  };

  
    
      const fetchMFNDts = async () => {
        const userInfo = await fetchUserAttributes();
                if (isLoading) return;
                setIsLoading(true);
        try {
                const MFNDtls: any = await client.graphql({
                  query: getAdvocate,
                  variables: {advregnu: AdvReNo}
                })
                

                const pw1s = MFNDtls.data.getAdvocate.pwd;
                const owners = MFNDtls.data.getAdvocate.owner;

                


                if(owners!==userInfo.sub){
                  Alert.alert("You dont own this Advocacy");
                }
          else if(MFNPW !== pw1s ){
            Alert.alert("Wrong Advocate credentials");
          }
          else{
              
                  VwMFNAc();
              }
              
            }

            catch (e)
            {
              if(e){
                Alert.alert("Error! Access denied!");
                return;
              }
                console.log(e)
               
                
            }    
            setMFNId("");
            setMFNPW("");
            setMembrPhn("");
            setChamPhn("");
      
    
             }

             useEffect(() =>{
              const MembrPhns=MembrPhn
                if(!MembrPhns && MembrPhns!=="")
                {
                  setMembrPhn("");
                  return;
                }
                setMembrPhn(MembrPhns);
                }, [MembrPhn]
                 );
                 
                 useEffect(() =>{
                  const ChamPhns=ChamPhn
                    if(!ChamPhns && ChamPhns!=="")
                    {
                      setChamPhn("");
                      return;
                    }
                    setChamPhn(ChamPhns);
                    }, [ChamPhn]
                     );
    
             

             useEffect(() =>{
              const mfnID=AdvReNo
                if(!mfnID && mfnID!=="")
                {
                  setMFNId("");
                  return;
                }
                setMFNId(mfnID);
                }, [AdvReNo]
                 );
  
                 useEffect(() =>{
                  const mfnPW=MFNPW
                    if(!mfnPW && mfnPW!=="")
                    {
                      setMFNPW("");
                      return;
                    }
                    setMFNPW(mfnPW);
                    }, [MFNPW]
                     );



          return (
                               <LinearGradient colors={['skyblue', '#e58d29']} style={styles.container}>
                                 {/* Go Home Button */}
                                 <TouchableOpacity style={styles.goHomeButton} onPress
                                 ={() => navigation.navigate('Homesss') }>
                                   <Text style={styles.goHomeText}>Go Home</Text>
                                 </TouchableOpacity>
                           
                                 {/* Form */}
                                 <View style={styles.formContainer}>
                                   <Text style={styles.title}>View Account</Text>
                           
                                   {/* National ID Input */}
                                   <TextInput
                                     placeholder="Loaner Email"
                                     style={styles.input}
                                     value={ChamPhn}
                                     onChangeText={setChamPhn}
                                     placeholderTextColor="#ccc"
                                   />
         
         <TextInput
                                     placeholder="Loanee Email"
                                     style={styles.input}
                                     value={MembrPhn}
                                     onChangeText={setMembrPhn}
                                     placeholderTextColor="#ccc"
                                   />
         
         <TextInput
                                     placeholder="Advocate License Number"
                                     style={styles.input}
                                     value={AdvReNo}
                                     onChangeText={setMFNId}
                                     placeholderTextColor="#ccc"
                                   />
                           
                                   {/* Password Input */}
                                   <View style={styles.passwordContainer}>
                                     <TextInput
                                       placeholder="Password"
                                       style={styles.passwordInput}
                                       value={MFNPW}
                                       onChangeText={setMFNPW}
                                       secureTextEntry={!isPasswordVisible}
                                       placeholderTextColor="#ccc"
                                     />
                                     <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                       <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                     </TouchableOpacity>
                                   </View>
                           
                                   
                           
                                   {/* Submit Button */}
                                   <LinearGradient colors={['skyblue', '#3b5998']} style={styles.button}>
                                     <TouchableOpacity onPress={fetchMFNDts} style={styles.buttonContent} disabled={isLoading}>
                                       <Text style={styles.buttonText}>{isLoading ? 'wait ...' : 'Proceed'}</Text>
                                     </TouchableOpacity>
                                   </LinearGradient>
                                 </View>
                               </LinearGradient>
                             );
                           };
                           
                           const styles = StyleSheet.create({
                             container: { flex: 1 },
                             goHomeButton: { marginTop: 40, alignSelf: 'flex-start', marginLeft: 20, padding: 10, color:'white' },
                             goHomeText: { color: 'black', fontWeight: 'bold' },
                             formContainer: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
                             title: { fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 20 },
                             input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10 },
                             passwordContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, marginBottom: 10 },
                             passwordInput: { flex: 1, padding: 12 },
                             button: { borderRadius: 8, marginTop: 20 },
                             buttonContent: { paddingVertical: 12, alignItems: 'center' },
                             buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
                           });
                 
        export default MFNSignIn;