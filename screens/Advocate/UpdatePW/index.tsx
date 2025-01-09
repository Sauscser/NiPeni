import React, {useEffect, useState} from 'react';

import {  updateAdvocate} from '../../../src/graphql/mutations';
import {  getAdvocate} from '../../../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
 StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Platform,
  Button
} from 'react-native';



  


const UpdtMFAdvPW = (props) => {
  
  const [AdvRegNo, setAdvRegNo] = useState("");
  const [LnAcCod, setLnAcCod] = useState("");
  const [NewAdmnPW, setNewAdmnPW] = useState("");
  const [OldAdmnPW, setOldAdmnPW] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  const[ownr, setownr] = useState(null);
  const[names, setName] = useState(null);
  const client = generateClient( )
  const navigation = useNavigation()
  
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  
        const fetchAdvDtls = async () =>{
          const userInfo = await fetchUserAttributes();
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
              const AdvDtls :any= await client.graphql({
                query: getAdvocate,
                variables: {advregnu:AdvRegNo}
              })
              
                const pwds = AdvDtls.data.getAdvocate.pwd   
                const owners = AdvDtls.data.getAdvocate.owner 
                const statuss = AdvDtls.data.getAdvocate.status            
                
                          
                                      const updtAdvDtls = async () => {
                                       
                                        try{
                                            await client.graphql({
                                              query: updateAdvocate,
                                              variables: {
                                                input:{
                                                  advregnu:AdvRegNo,
                                                  pwd:NewAdmnPW
                                                }
                                              }
                                            }) 
                                        }
                                        catch(error){if(error){
                                          console.log(error)
                                          Alert.alert("Error! Access denied!")
                                          
                                      } 
                                    }
                                        setIsLoading(false);
                                        Alert.alert(names +", You have successfully updated your PassWord");
                                      } 

                                       if(userInfo.sub!==owners)
                                      {
                                          Alert.alert("You are not the owner of this Advocate A/c");
                                      }

                                      else if(statuss!=="AccountActive")
                                      {
                                          Alert.alert("This Advocate Account is inactive");
                                      }

                                      
                                      else {updtAdvDtls();}

        
                                

            } catch (error) {
                if(error){
                  Alert.alert("Error! Access denied!")
                  return
                }
              }
         
           

            setIsLoading(false);
              setNewAdmnPW("");
              
              setOldAdmnPW("")
              setAdvRegNo("")
          
            }
        
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
                        const AdvRegNos=AdvRegNo
                          if(!AdvRegNos && AdvRegNos!=="")
                          {
                            setAdvRegNo("");
                            return;
                          }
                          setAdvRegNo(AdvRegNos);
                          }, [AdvRegNo]
                           );
  
                           return (
                            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                              <LinearGradient colors={['#ffffff', 'skyblue']} style={styles.gradientContainer}>
                                <ScrollView contentContainerStyle={styles.scrollView}>
                                   
                                <View style={styles.passwordContainer2}>
                                  <TouchableOpacity 
                                                  onPress={() => navigation.navigate('Homesss')} >

                                        <Text style={styles.buttonText2}>
                                        Go Home
                                      </Text>
                                                 </TouchableOpacity>
                                             </View>
                        
                                     <View style={styles.passwordContainer}>
                                     <TextInput
                                       placeholder="Advocate License Number"
                                       style={styles.passwordInput}
                                       value={AdvRegNo}
                                       onChangeText={setAdvRegNo}
                                      
                                       placeholderTextColor="#ccc"
                                     />
                                    
                                   </View>

                                    

                                   <View style={styles.passwordContainer}>
                                     <TextInput
                                       placeholder="New Password"
                                       style={styles.passwordInput}
                                       value={NewAdmnPW}
                                       onChangeText={setNewAdmnPW}
                                       secureTextEntry={!isPasswordVisible}
                                       placeholderTextColor="#ccc"
                                     />
                                     <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                       <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                     </TouchableOpacity>
                                   </View>

                                   <View style={styles.passwordContainer}>
                                     <TextInput
                                       placeholder="Confirm Password"
                                       style={styles.passwordInput}
                                       value={OldAdmnPW}
                                       onChangeText={setOldAdmnPW}
                                       secureTextEntry={!isPasswordVisible}
                                       placeholderTextColor="#ccc"
                                     />
                                     <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                       <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                     </TouchableOpacity>
                                   </View>
                        
                                  
                                    <LinearGradient
                                      colors={['#3b5998', '#e58d29']}
                                      style={styles.button}
                                    >
                                        <TouchableOpacity onPress={fetchAdvDtls} disabled={isLoading}>
                                      <Text style={styles.buttonText}>
                                        {isLoading ? 'Updating...' : 'Update Passwords'}
                                      </Text>
                                      </TouchableOpacity>
                                      {isLoading && <ActivityIndicator color="#fff" style={styles.loader} />}
                                    </LinearGradient>
                                  
                                </ScrollView>
                              </LinearGradient>
                            </KeyboardAvoidingView>
                          );
                        };
                        
                        
                        
                        
                        
                        const styles = StyleSheet.create({
                          container: {
                            flex: 1,
                          },
                          gradientContainer: {
                            flex: 1,
                            padding: 20,
                            justifyContent: 'center',
                          },
                          scrollView: {
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                          topBar: {
                            padding: 30,
                            backgroundColor: 'skyblue',
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                            alignItems: 'flex-start',
                            marginTop: 50,
                            borderRadius: 20,
                          },
                          title: {
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#3b5998',
                            marginBottom: 30,
                            textAlign: 'center',
                          },
                          inputContainer: {
                            width: '100%',
                            marginBottom: 20,
                          },
                          input: {
                            backgroundColor: '#fff',
                            paddingVertical: 12,
                            paddingHorizontal: 15,
                            borderRadius: 10,
                            marginBottom: 15,
                            fontSize: 16,
                            color: '#333',
                            borderWidth: 1,
                            borderColor: '#ddd',
                            elevation: 2,
                          },
                          button: {
                            width: '100%',
                            borderRadius: 10,
                            paddingVertical: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            elevation: 5,
                          },
                          buttonText: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#fff',
                            
                          },

                          buttonText2: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'black',
                            
                          },
                          loader: {
                            marginLeft: 10,
                          },

                         
                          goHomeButton: { marginTop: 40, alignSelf: 'flex-start', marginLeft: 20, padding: 10, color:'white' },
                          goHomeText: { color: 'black', fontWeight: 'bold' },
                          formContainer: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
                          
                          passwordContainer: { flexDirection: 'row', alignItems: 'center', 
                            backgroundColor: '#fff', borderRadius: 8, marginBottom: 10 },

                            passwordContainer2: { flexDirection: 'row', alignItems: 'center', 
                              backgroundColor: '#fff', borderRadius: 8, marginTop: 60, marginBottom: 50 },
                          passwordInput: { flex: 1, padding: 12,  backgroundColor: '#fff'},
                         
                          buttonContent: { paddingVertical: 12, alignItems: 'center' },
                         
                        });
        export default UpdtMFAdvPW;