import React, {useEffect, useState} from 'react';

import {createChamasNPwnBrkrs, createSAgent, updateCompany, updateSMAccount} from '../../../src/graphql/mutations';

import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes, getCurrentUser} from 'aws-amplify/auth';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getCompany, getSMAccount, listSMAccounts } from '../../../src/graphql/queries';
import { LinearGradient } from 'expo-linear-gradient';


const RegisterMFKubwaAcForm = props => {
  const [nationalId, setNationalid] = useState("");
  const [nam, setName] = useState("");
 
  const[eml, setEml] =useState("");
  
  const [pword, setPW] = useState("");
  const [BkName, setBkName] = useState('');
  const [BkAcNu, setBkAcNu] = useState('');
  const [userz, setuserz] = useState('');
  const[isLoading, setIsLoading] = useState(false);
  const client = generateClient()
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);

const navigation = useNavigation()

        const ChckPhnUse = async () => {
          const userInfo = await fetchUserAttributes();   
          const userInf = await getCurrentUser();
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try {
            const UsrDtlss:any = await client.graphql({
              query: listSMAccounts,
              variables: { filter: {
                    
                awsemail: { eq: userInfo.email}
                              
                }}
            })
            const users = UsrDtlss.data.listSMAccounts.items
            setuserz(users)

            const ChckUsrExistence = async () => {
              try {
                const UsrDtls:any = await client.graphql({
                  query: getSMAccount,
                  variables: { 
                    awsemail:userInfo.email
                  }
                })
                
                const owner = UsrDtls.data.getSMAccount.owner
                const pws = UsrDtls.data.getSMAccount.pw
                


            const CreateNewSA = async () => {
             
              try {
                await client.graphql({
                  query: createChamasNPwnBrkrs,
                  variables: {
                    input: {
                      
                      contact: userInfo.email,
                      regNo: userInfo.phone_number,
                      
                      AcStatus: 'AccountActive',
                      owner:userInf.username,
                      
                    },
                  }
                })
               
                console.log (owner)
                console.log(userInfo.sub)
                console.log(userInfo.phone_number)
                console.log(userInfo.email)
                console.log(userInf.username)
              } 
    
              catch (error) {
                console.log(error)
                if (error){
                  
                  Alert.alert("Application unsuccessful; Retry")
                  return
                }
              }
              setIsLoading(false); 
              Alert.alert("Successful, wait for communication from MiFedha LTD")           
            };

            if (userInfo.sub !== owner)
              {Alert.alert ("Please first create main account")}
              else if (pword !== pws)
            {Alert.alert("Wrong Main Account Password");
          return;
    
          
        }
             else if(userz.length < 1){Alert.alert("Please first create a main account")}
            
                     else if (!nam || !pword  
                       
                     ) {
                       Alert.alert('All fields are required. Please fill them out.');
                       return;
                     }

        else { await CreateNewSA();}
        
          } catch (e) {
            if(e){Alert.alert("Please first sign up")
          return}
            console.error(e);
          }
        }

       
               
        await ChckUsrExistence();
      
      } catch (e) {
            if(e){Alert.alert("Please first sign up")
          return}
            console.error(e);
          }

         

          setIsLoading(false);
          setNationalid('');
          setPW("");
          setName("");
          setEml("");
         
          setBkAcNu("");
          setBkName("");
        }

         

        



       
 

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

                 
                 return (
                  <LinearGradient colors={['skyblue', '#e58d29']} style={styles.container}>
                    {/* Go Home Button */}
                    <TouchableOpacity style={styles.goHomeButton} onPress={() => navigation.navigate('Homesss') }>
                      <Text style={styles.goHomeText}>Go Home</Text>
                    </TouchableOpacity>
              
                    {/* Form */}
                    <View style={styles.formContainer}>
                      <Text style={styles.title}>Create Account</Text>
              
                      {/* National ID Input */}
                      <TextInput
                        placeholder="Nationality"
                        style={styles.input}
                        value={nam}
                        onChangeText={setName}
                        placeholderTextColor="#ccc"
                      />
              
                      {/* Password Input */}
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
                      
              
                      {/* Submit Button */}
                      <LinearGradient colors={['skyblue', '#3b5998']} style={styles.button}>
                        <TouchableOpacity onPress={ChckPhnUse} style={styles.buttonContent} disabled={isLoading}>
                          <Text style={styles.buttonText}>{isLoading ? 'Creating...' : 'Create Account'}</Text>
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
export default RegisterMFKubwaAcForm;