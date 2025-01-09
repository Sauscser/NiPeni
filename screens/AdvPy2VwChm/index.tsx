import React, {useEffect, useState} from 'react';

import { getCompany, getSMAccount} from '../../src/graphql/queries';
import { Ionicons } from '@expo/vector-icons';
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes } from 'aws-amplify/auth';
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

import { updateCompany, updateSMAccount } from '../../src/graphql/mutations';



const AdvPayToVwChm = (props) => {  
   const navigation = useNavigation()
   const [isLoading, setIsLoading] =useState(false);
    const client = generateClient ();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [AdvReNo, setMFNId] = useState("");
  const [MFNPW, setMFNPW] = useState(""); 
  const [ownr, setownr] = useState(null); 



  const VwMFNAc = () => {
    navigation.navigate("VwAdvAcs", {AdvReNo});
  };

  
    
    
    const fetchUsrDtls = async () => {

      const userInfo = await fetchUserAttributes();
    
    
   
      try {
              const MFNDtls: any = await client.graphql({
                query: getSMAccount,
                variables: {
                  awsemail: userInfo.email
                }
              })
              
              const balances = MFNDtls.data.getSMAccount.balance;
              const owner = MFNDtls.data.getSMAccount.owner;
              
              const fetchCompDtls = async () => {
                try {
                        const MFNDtls: any = await client.graphql({
                          query: getCompany,
                          variables: {AdminId: "BaruchHabaB'ShemAdonai2"}
                        }) 
        
                        const companyEarningBals = MFNDtls.data.getCompany.companyEarningBal;
                        const companyEarnings = MFNDtls.data.getCompany.companyEarning;
                        const enquiryFees = MFNDtls.data.getCompany.enquiryFee;
                        
                        
                                    const updtActAdm = async()=>{
                                      
                                      try{
                                          await client.graphql({
                                            query: updateCompany,
                                            variables: {
                                              input:{
                                                AdminId:"BaruchHabaB'ShemAdonai2",
                                                companyEarningBal:parseFloat(companyEarningBals) + parseFloat(enquiryFees),
                                                companyEarning:parseFloat(companyEarnings) + parseFloat(enquiryFees),
                                              }
                                            }
                                          })
                                         
                                         
                                      }
                                      catch(error){
                                        if(error){
                                          Alert.alert("Check Details")
                                          return;
                                      }
                                      }
                                      updtUsrAc();
                                      
                                    }

                                    const updtUsrAc = async()=>{
                                      
                                      try{
                                          await client.graphql({
                                            query: updateSMAccount,
                                            variables: {
                                              input:{
                                                awsemail:userInfo.email,
                                                balance:parseFloat(balances) - parseFloat(enquiryFees),
                                              }
                                            }
                                          }) 
                                      }
                                      catch(error){
                                        if(error){
                                          Alert.alert("Retry or update app or call customer care")
                                          return;
                                      }
                                      }
                                      VwMFNAc();
                                      
                                    }
                


                

        if(balances < parseFloat(enquiryFees) ){
            Alert.alert("Account Balance cannot facilitate the request");
          }
          else{
              
            updtActAdm();
              }
              
                }
            catch (e)
            {
              if(e){
                Alert.alert("Advocate does not exist; otherwise check internet connection");
                return;
              }
                console.log(e)
               
                
            }    

    
             }
             if (userInfo.sub !== owner)
    {Alert.alert ("Please first create main account")}
    else{
             await fetchCompDtls();}

            }

            catch (e)
            {
              if(e){
                Alert.alert("Advocate does not exist; otherwise check internet connection");
                return;
              }
                console.log(e)
               
                
            }    

            setMFNId("");
            setMFNPW("");
             }


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
                                                   
                                     
                                                   {/* Password */}
                                                   <View style={styles.passwordContainer}>
                                                       <TextInput
                                                         placeholder="Advocate License Number"
                                                     style={styles.passwordInput}
                                                                                          
                                                     value={AdvReNo}
                                                     onChangeText={setMFNId}
                                                     
                                                     placeholderTextColor="#ccc"
                                                             />
                                                   
                                                     </View>
         
                                                     
           
                                                     <View style={styles.passwordContainer}>
                                                       <TextInput
                                                         placeholder="Advocate Account Password"
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
                                                   <TouchableOpacity
                                                     style={styles.submitButton}
                                                     onPress={fetchUsrDtls}
                                                     disabled={isLoading}
                                                   >
                                                     <LinearGradient
                                                       colors={['#87CEEB', '#e58d29']}
                                                       start={{ x: 0, y: 0 }}
                                                       end={{ x: 1, y: 1 }}
                                                       style={styles.gradientWrapper}
                                                     >
                                                       <Text style={styles.submitButtonText}>
                                                         {isLoading ? 'Submitting...' : 'Proceed'}
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
        
        export default AdvPayToVwChm;