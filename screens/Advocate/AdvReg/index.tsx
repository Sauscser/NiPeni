import React, {useEffect, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform} from "react-native"

import {createAdvocate,  updateCompany} from '../../../src/graphql/mutations';

import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Eye icon
import { getCompany, getSMAccount } from '../../../src/graphql/queries';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

  const RegisterMFAdvAcForm = props => {

  const navigation = useNavigation();

  
  const [nationalId, setNationalid] = useState('');
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[pword2, setPW2] =useState("");
  
  const [pword, setPW] = useState('');
  const [advRegNo, setAdvRegNo] = useState('');
  const[officeLocs, setOfficeLoc] = useState("");
  const [BkName, setBkName] = useState('');
  const [BkAcNu, setBkAcNu] = useState('');
  const [isLoading, setIsLoading] =useState(false);
  const client = generateClient ();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  
   const gtCompDtls = async () =>{
     
    if (isLoading) return;
            setIsLoading(true);
            

     const userInfo = await fetchUserAttributes();   
      
    try{
        const compDtls :any= await client.graphql({
          query: getCompany,
          variables: {
            AdminId:"BaruchHabaB'ShemAdonai2"
          }
        })
        
        
        const actvAdv = compDtls.data.getCompany.ttlKFAdvActv

        const ChckUsrExistence = async () => {
          try {
            const UsrDtls:any = await client.graphql({
              query:getSMAccount,
              variables: {
                awsemail:userInfo.email
              }
            })
                       
            const nationalidssss = UsrDtls.data.getSMAccount.nationalid
            const owner = UsrDtls.data.getSMAccount.owner
        
        const CreateNewMFN = async () => {
          
          try {
            await client.graphql({
              query: createAdvocate,
              variables: {
                input:{
                  advregnu: advRegNo,
                  nationalid: nationalidssss,
                  pwd: pword,
                  name: nam,
                  phonecontact: phoneContact,
                  email: userInfo.email,
                  bankName:BkAcNu,
                  bkAcNo:BkName,
                  advBal: 0,
                  officeLoc: officeLocs,
                  TtlEarnings: 0,        
                  owner:userInfo.sub,
                  status: 'AccountActive',
                }
              }
            }) 
          } 
          
          
          catch (error) {    
            console.log(error)   
            if(error)
          {Alert.alert("Not authorised to register as Advocate")
        return;} 
         
      
        } 
        
           await updtActAdm();
        setIsLoading(false);
        };

        if (userInfo.sub !== owner)
    {Alert.alert ("Please first create main account")}
        else if (!advRegNo || !phoneContact || !nam  
          || !BkName || !officeLocs || !pword || !pword2
        ) {
          Alert.alert('All fields are required. Please fill them out.');
          return;
        }
        else if (pword !== pword2) {
          Alert.alert('Passwords do not match.');
          return;
        }
    else{

        CreateNewMFN();
    }
      
      
        const updtActAdm = async()=>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
              await client.graphql ({
                query: updateCompany,
                variables: {
                  input: {
                    AdminId:"BaruchHabaB'ShemAdonai2",
                    ttlKFAdvActv:parseFloat(actvAdv) + 1,
                  }                
                }
              }) 
          }
          catch(error){if(error){
            console.log(error)  
            Alert.alert("Error! Access denied!")
            return;}
        }
        Alert.alert("Advocate "+advRegNo+ " successfully registered.")
        setIsLoading(false);     
      
      }

      
 

    } catch (e) {
      console.error(e);
      
      if(e){Alert.alert("Error! Access denied!")}
      
    }
  }

  

  await ChckUsrExistence();
   
        }

catch(e){
  if(e){
    console.log(e)  
    Alert.alert("Error! Access denied!")
    return;
  }
};


setIsLoading(false);
setNationalid("");
setPW("");
setName("");
setPW2("");
setAdvRegNo("");
setPhoneContact("");
setOfficeLoc("");
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
  const natid=nationalId
    if(!natid && natid!=="")
    {
      setNationalid("");
      return;
    }
    setNationalid(natid);
    }, [nationalId]
     );

     useEffect(() =>{
      const AVdPWs=pword
        if(!AVdPWs && AVdPWs!=="")
        {
          setPW("");
          return;
        }
        setPW(AVdPWs);
        }, [pword]
         );

         useEffect(() =>{
          const nym=nam
            if(!nym && nym!=="")
            {
              setName("");
              return;
            }
            setName(nym);
            }, [nam]
             );

             useEffect(() =>{
              const emyl=pword2
                if(!emyl && emyl!=="")
                {
                  setPW2("");
                  return;
                }
                setPW2(emyl);
                }, [pword2]
                 );

                 useEffect(() =>{
                  const phn=phoneContact
                    if(!phn && phn!=="")
                    {
                      setPhoneContact("");
                      return;
                    }
                    setPhoneContact(phn);
                    }, [phoneContact]
                     );

                     useEffect(() =>{
                      const AVdRegs=advRegNo
                        if(!AVdRegs && AVdRegs!=="")
                        {
                          setAdvRegNo("");
                          return;
                        }
                        setAdvRegNo(AVdRegs);
                        }, [advRegNo]
                         );

                         useEffect(() =>{
                          const officeLocss=officeLocs
                            if(!officeLocss && officeLocss!=="")
                            {
                              setOfficeLoc("");
                              return;
                            }
                            setOfficeLoc(officeLocss);
                            }, [officeLocs]
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
                                          { placeholder: 'Enter Advocate License Number', 
                                            value: advRegNo, setter: setAdvRegNo},
                                          { placeholder: 'Enter Company Phone', value: phoneContact, setter: 
                                            setPhoneContact},
                                            { placeholder: 'Enter Advocacy Firm Name', 
                                              value: nam, setter: setName},
                                          { placeholder: 'Enter Company Bank Name', value: 
                                            BkName, setter: 
                                            setBkName},
                                            { placeholder: 'Enter Firm Office Town', 
                                              value: officeLocs, setter: setOfficeLoc},
                                          
                                          
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

                                          <View style={styles.passwordContainer}>
                                            <TextInput
                                              placeholder="Confirm Account Password"
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
                                          onPress={gtCompDtls}
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
                          
                          export default RegisterMFAdvAcForm;
                          
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

