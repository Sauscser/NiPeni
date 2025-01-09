import React, {useEffect, useState} from 'react';

import {createBizna, createChamaMembers,  createGroup,      
  createSokoAd,   updateCompany} from '../../../src/graphql/mutations';
import { getBizna, getCompany, getSMAccount, 
   listPersonels,  } from '../../../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import { Ionicons } from '@expo/vector-icons'; // Eye icon
import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  StyleSheet,
  
  TouchableOpacity,
  Alert,
 SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




const CreateBiz = (props) => {

  

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);

  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');

  const [itemPrys, setitemPrys] = useState('');
  const [itemTwn, setitemTwn] = useState('');
  const [lnPrsntg, setlnPrsntg] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const client = generateClient();
  const navigation = useNavigation()


  const gtUzr = async () =>{
    if (!ChmPhn || !itemPrys || !lnPrsntg 
      || !awsEmail || !ChmDesc || !pword) {
          Alert.alert('Error', 'Please fill in all fields');
          return;
        }
        setIsLoading(true);
        

    const userInfo = await fetchUserAttributes();
    try{
      const compDtls :any= await client.graphql({
        query:getSMAccount,
        variables: {
        awsemail:userInfo.email}}
        );
        
        const owner = compDtls.data.getSMAccount.owner;
        const pwz = compDtls.data.getSMAccount.pw;


      const ChckPersonelExistence = async () => {
        try {
          const UsrDtls:any = await client.graphql({
            query:listPersonels,
            variables:{
              filter: {
                  and: {
                phoneKontact: { eq: userInfo.email},
                BusinessRegNo:{eq: ChmPhn}
              }
            }
          }});
          
          
      const gtBizna = async () =>{
        
        try{
          const compDtls:any = await client.graphql({
            query:getBizna,
            variables: { BusKntct:ChmPhn
            },
          });
          
         
            const pws = compDtls.data.getBizna.pw;
            
            const busNames = compDtls.data.getBizna.busName;


            
            

      const CreateNewSMAc = async () => {
        
        try {
          await client.graphql({
            query: createSokoAd,
            variables: {
              input: {
                sokokntct:ChmPhn,
            
            sokoname: awsEmail,
            sokoprice: parseFloat(itemPrys),
            sokotown: "itemTwn",
            sokolnprcntg: parseFloat(lnPrsntg),
            sokolpymntperiod: 61,
            sokodesc:ChmDesc,
            owner: userInfo.sub,
              }
            }
          })
          
         

              if (pword !== pwz)
          {Alert.alert("Wrong Main Account password");
        
      } 
      else if (UsrDtls.data.listPersonels.items.length < 1) {
        Alert.alert("You do not work here");
        return;
        
      }
      
      else {
        Alert.alert("Advert successfully Published")
      }

              
            } catch (error) {
              console.log(error)
              if(error){
                Alert.alert("Error! Access denied")
                return;
            } 
            
            }
            
            
            
          };

          CreateNewSMAc();

       
      


        } catch (e) {
          if(e){Alert.alert("Error! Access denied")}
          console.error(e);
        }

          }
        
        await gtBizna();
      }

      catch(e){
      console.log(e)
      if(e){
      Alert.alert("Error! Access denied")
      return;
      }
      }

                            
                        
    };

    if (userInfo.sub !== owner)
    {Alert.alert ("Error! Access denied")}
    else{

    await ChckPersonelExistence();
    }
  } catch (e) {
  
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
                      { placeholder: 'Enter Business phone number', value: ChmPhn, setter: setChmPhn},
                      { placeholder: 'Enter item price', value: itemPrys, setter: setitemPrys, keyboardType: 'decimal-pad' },
                      { placeholder: 'Enter discount percentage', value: lnPrsntg, 
                        setter: setlnPrsntg},
                      { placeholder: 'Enter item name', value: awsEmail, setter: setAWSEmail },
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
                    <View style={styles.descContainer}>
                      <TextInput
                        value={ChmDesc}
                        onChangeText={setChmDesc}
                        style={styles.descInput}
                        placeholder="Enter item description"
                        multiline={true}
                      />
                    </View>
      
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
      
        
        