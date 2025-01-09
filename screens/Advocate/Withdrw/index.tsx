import React, {useEffect, useState} from 'react';

import {
  createAdvocateWithdrawals,
  
  updateAdvocate,
  
  updateSMAccount,
  
} from '../../../src/graphql/mutations';
import { Ionicons } from '@expo/vector-icons';
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {getAdvocate,  getSMAccount} from '../../../src/graphql/queries';
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


const AdvWthdwl = props => {


  const[UsrPWd, setUsrPWd] = useState("");
  const [AdvReNo, setAdvReNo] = useState("");
  const [amount, setAmount] = useState("");
  
                 const navigation = useNavigation()
 const [isLoading, setIsLoading] =useState(false);
  const client = generateClient ();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  

  const fetchAcDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await fetchUserAttributes();
   
    try {
      const accountDtl:any = await client.graphql({
        query: getSMAccount,
        variables: {awsemail: userInfo.email}
      })
     

      const usrBala = accountDtl.data.getSMAccount.balance;      
      
      const usrStts = accountDtl.data.getSMAccount.acStatus; 
      
     
      const owners = accountDtl.data.getSMAccount.owner;
         
      
      const fetchAdvDtls = async () => {
       
        try {
          const AdvDtl:any = await client.graphql({
            query: getAdvocate,
            variables: { 
              advregnu: AdvReNo
            }
          })
           
         
          const advBals = AdvDtl.data.getAdvocate.advBal;
          const pwds = AdvDtl.data.getAdvocate.pwd;
          const names = AdvDtl.data.getAdvocate.name;
          const statussssss = AdvDtl.data.getAdvocate.status;
          const bankNames = AdvDtl.data.getAdvocate.bankName;
          const bkAcNos = AdvDtl.data.getAdvocate.bkAcNo;
          
          
                          
                          const CrtAdvWthdrwls = async () => {
                            try {
                              await client.graphql({
                                query: createAdvocateWithdrawals,
                                variables: {
                                  input: {
                                  
                                    bankAdmnId: "BnkkAdmNatId",                    
                                    advregnu: AdvReNo,  
                                    owner: userInfo.sub,
                                    amount: amount,
                                    bankName: bankNames,
                                    bkAcNo: bkAcNos,
                                    status: 'AccountActive',
                                  },
                                }
                              })
                             
                            
            
                    } catch (error) {
                     
                        if (error){
                          Alert.alert("Error! Access denied!")
                          return}
                        
                    
                    
                    }
                    setIsLoading(false);
                    await onUpdtAdvBal();
                    };  
        
                    const onUpdtAdvBal = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try {
                        await client.graphql({
                          query: updateAdvocate,
                          variables: {
                            input: {
                              advregnu: AdvReNo,
                  
                              advBal: (parseFloat(advBals) - parseFloat(amount)).toFixed(2) ,
                              
                            },
                          }
                        })
                       
                      }
        
                      catch (error) {
                        if (error){Alert.alert("Error! Access denied!")
                        return;}
                      }
                      Alert.alert(names + ", You have Withdrawn Ksh. "+ amount )
                      setIsLoading(false);
                      
                      }; 
                      

        
                      
                    
                    if (parseFloat(amount) > parseFloat(advBals)) {
                      Alert.alert("Insufficient Advocate Balance")
                      return;
                    } 
        
                    
                    else if (statussssss==="AccountInactive") {
                      Alert.alert("Advocate Account is inactive")
                      return;
                    } 

                    else if (userInfo.sub!==owners) {
                      Alert.alert("This is not your Advocate Account")
                      return;
                    }  

                    
                   
                    
                    if (UsrPWd!==pwds) {
                      Alert.alert("Advocate credentials are wrong; access denied")
                      return;
                    } 
        
                    else{await CrtAdvWthdrwls()}   
        
        
                   
                    
      
    }     
    catch (e) {
      if (e){Alert.alert("Error! Access denied!")
      return;}
         
    }   
  setIsLoading(false);
};

if (userInfo.sub !== owners)
    {Alert.alert ("Please first create main account")}
    else{

    await fetchAdvDtls();}
    }

    catch (e) {
      if (e){Alert.alert("Error! Access denied!")
      return;}
          
     }       
    setIsLoading(false)
    
    setAmount("");
    setUsrPWd("")
    setAdvReNo("");    
  }; 

  

       useEffect(() =>{
        const amt=amount
          if(!amt && amt!=="")
          {
            setAmount("");
            return;
          }
          setAmount(amt);
          }, [amount]
           );

           useEffect(() =>{
            const UsrPWdss=UsrPWd
              if(!UsrPWdss && UsrPWdss!=="")
              {
                setUsrPWd("");
                return;
              }
              setUsrPWd(UsrPWdss);
              }, [UsrPWd]
               );

               useEffect(() =>{
                const AdvReNos=AdvReNo
                  if(!AdvReNos && AdvReNos!=="")
                  {
                    setAdvReNo("");
                    return;
                  }
                  setAdvReNo(AdvReNos);
                  }, [AdvReNo]
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
                                            onChangeText={setAdvReNo}
                                            
                                            placeholderTextColor="#ccc"
                                                    />
                                          
                                            </View>

                                            <View style={styles.passwordContainer}>
                                              <TextInput
                                                placeholder="Amount"
                                            style={styles.passwordInput}
                                                                                 
                                            value={amount}
                                            onChangeText={setAmount}
                                            keyboardType={"decimal-pad"}
                                            placeholderTextColor="#ccc"
                                                    />
                                          
                                            </View>
  
                                            <View style={styles.passwordContainer}>
                                              <TextInput
                                                placeholder="Advocate Account Password"
                                            style={styles.passwordInput}
                                                                                 
                                            value={UsrPWd}
                                            onChangeText={setUsrPWd}
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
  
export default AdvWthdwl;