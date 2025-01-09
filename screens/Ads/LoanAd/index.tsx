import React, {useEffect, useState} from 'react';

import {  
  createRafikiLnAd} from '../../../src/graphql/mutations';
import {  getSMAccount  } from '../../../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Eye icon

import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
 SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




const CreateBiz = (props) => {

  

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [UsrEmail, setUsrEmail] = useState(null);
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');
  const navigation = useNavigation();
  const [itemPrys, setitemPrys] = useState('');
  const [itemTwn, setitemTwn] = useState('');
  const [lnPrsntg, setlnPrsntg] = useState('');
  const [rpymntPrd, setrpymntPrd] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

const client = generateClient()

      const gtUzr = async () =>{
        if (isLoading) return;
                
        const userInfo = await fetchUserAttributes()
        try{
          const compDtls :any= await client.graphql ({
            query: getSMAccount,
              variables:{
                awsemail:userInfo.email
              }            
          })
          
            const pws = compDtls.data.getSMAccount.pw;
            const phonecontacts = compDtls.data.getSMAccount.phonecontact;
            const owner = compDtls.data.getSMAccount.owner;
            const namez = compDtls.data.getSMAccount.name;
            

      const CreateNewSMAc = async () => {
       
        try {
          await client.graphql({
            query:createRafikiLnAd,
            variables: {
              input:{
                rafikiName: namez,
            rafikicntct:awsEmail,
            rafikiEmail: userInfo.email,
            rafikiamnt: parseFloat(itemPrys),
            rafikidesc:ChmDesc,
            AdvEmail: phonecontacts,
            advLicNo: "ChmRegNo",
            defaultPenalty:0,
            rafikiprcntg: 0,
           
            rafikirpymntperiod: 0,
            
            owner: userInfo.sub,
              }
            }
          }) ;
             

              
            } catch (error) {
              console.log(error)
              if(error){
                Alert.alert("Error! Access denied")
                return;
            } 
            
            }
            
            Alert.alert("Advert successfully Published")
            
          };

          if (pword !== pws)
          {Alert.alert("Wrong User password");
        
      } 

      else if (owner !== userInfo.sub)
      {Alert.alert("Please first create main account")}
      
      
      
      else {
        CreateNewSMAc();
      }

          

        } catch (e) {
          if(e){Alert.alert("Error! Access denied")}
          console.error(e);
        }
        
      }
       
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
                            { placeholder: 'Referral Phone', value: awsEmail, setter: setAWSEmail },
                            { placeholder: 'Amount', value: itemPrys, setter: setitemPrys, keyboardType: 'decimal-pad' },
                            
                             { placeholder: 'More details', value: ChmDesc, setter: setChmDesc},
                             
                            
                             
                             
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
                           <View style={styles.passwordContainer}>
                        <TextInput
                          placeholder="Main Account Password"
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
                           <TouchableOpacity
                             style={styles.submitButton}
                             onPress={gtUzr}
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
                 marginTop: 50
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
             
               
               