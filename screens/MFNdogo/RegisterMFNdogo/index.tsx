import React, { useEffect, useState } from 'react';
import { Alert, View, Text, TextInput, ScrollView, 
    TouchableOpacity, ActivityIndicator, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import * as Location from 'expo-location'; // Importing Expo Location
import { Ionicons } from '@expo/vector-icons';
import { generateClient } from 'aws-amplify/api';
import { 
    getCompany, getSAgent,  getSMAccount,  listSMAccounts
} from '../../../src/graphql/queries';

import { 
    createAgent, updateCompany, updateSAgent, updateSMAccount
} from '../../../src/graphql/mutations';
import { fetchUserAttributes, getCurrentUser } from '@aws-amplify/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const RegisterKFNdgAcForm = () => {
    const navigation = useNavigation();
    const [nationalId, setNationalid] = useState('');
    const [nam, setName] = useState("");
    const [phoneContact, setPhoneContact] = useState("");
    const[eml, setEml] =useState("");
  
    
    const [pword, setPW] = useState('');
    const [saRegNo, setSARegNo] = useState('');
    const [BkName, setBkName] = useState('');
    const [BkAcNu, setBkAcNu] = useState('');
    const[lat, setLat] = useState('');
    const[twn, settwn] = useState("");
    const[lon, setLon] = useState("");
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [town, setTown] = useState('');
  const [owner, setOwner] = useState('');
  const [isLoading, setIsLoading] = useState(false);
    const client = generateClient()
    const [PhnUser, setPhnUser] = useState([])
    const [CheckUser, setCheckUser] = useState([])
    const [SA, setSA] = useState([])
    const [Comp, setComp] = useState([])
    const [ownerz, setownerz] = useState()
    const [nationalidssss, setnationalidssss] = useState()
    const [TtlClrdLonsAmtByrCovs, setTtlClrdLonsAmtByrCovs] = useState()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const [actvMFNdogs, setactvMFNdogs] = useState()
    const [names, setnames] = useState()
    const [mfnTtl, setmfnTtl] = useState()
    const [offerStatus, setofferStatus] = useState()

    const [actvNdg, setactvNdg] = useState()
    const [maxMFNdogoss, setmaxMFNdogoss] = useState()

  // Fetch user attributes and location on component mount

    const initializeData = async () => {
      setIsLoading(true);
      try {
        // Fetch user attributes
        const userAttributes = await fetchUserAttributes();
        const currentUser = await getCurrentUser();
        setOwner(currentUser.username);

        // Fetch location
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
          setIsLoading(false);
          return;
        }

        const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest,});
        const Lttde = location.coords.latitude.toString()
        const Lngtde = location.coords.longitude.toString()
        setLatitude(Lttde);
        setLongitude(Lngtde);

      } catch (error) {
        Alert.alert('Error', 'Failed to initialize data. Please try again.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      initializeData();
    }, []);

        const checkPhoneUsage = async () => {
            try {
              const response: any = await client.graphql({
                query: listSMAccounts,
                variables: {
                filter: {phonecontact:
                    {eq: phoneContact}
                } }}
            )
            const phn = response.data.listSMAccounts.items
               setPhnUser(phn) 
               console.log (phn.length)
              
              
               const checkUserExistence = async () => {
                   const userInfo = await fetchUserAttributes()
                   try {
                     const UsrDtls:any = await client.graphql({
                       query: getSMAccount,
                       variables: {awsemail: userInfo.email },
                     });
                       const ownerz = UsrDtls.data.getSMAccount.owner
                       const nationalidssss = UsrDtls.data.getSMAccount.nationalid
                       const TtlClrdLonsAmtByrCovs = UsrDtls.data.getSMAccount.TtlClrdLonsAmtByrCov
                      
                       console.log (nationalidssss)

                       const getMFNDetails = async () => {
                           try {
                             const MFKb: any = await client.graphql({ 
                              query: getSAgent,
                               variables:
                               {                                  
                                       saPhoneContact:saRegNo                                  
                               }
                              });
                              const actvMFNdogs = MFKb.data.getSAgent.actvMFNdog;
                              const names = MFKb.data.getSAgent.name
                              const mfnTtl = MFKb.data.getSAgent.mfnTtl;
                              const offerStatus = MFKb.data.getSAgent.offerStatus
                             console.log(names)
                       
                              const getCompanyDetails = async () => {
                                  try {
                                    const compDtls: any = await client.graphql({ query: getCompany,
                                      variables: 
                                      {AdminId:"BaruchHabaB'ShemAdonai2"}
                                     });
                                    
                                     

                                       const createNewAgent = async () => {
                                          if (isLoading) return;
                                      
                                          setIsLoading(true);
                                          try { await client.graphql({
                                              query: createAgent,
                                              variables: {
                                                   input : {
                                                      phonecontact: phoneContact,
                                                      nationalid: nationalidssss,
                                                      name: nam,
                                                      ttlEarnings: 0,
                                                      pw: lat,
                                                      email: eml,
                                                      sagentregno: saRegNo,
                                                      bankName: BkName,
                                                      bkAcNo: BkAcNu,
                                                      TtlFltIn: 0,
                                                      TtlFltOut: 0,
                                                      floatBal: 0,
                                                      latitude: latitude,
                                                      longitude: longitude,
                                                      agentEarningBal: 0,
                                                      MFNWithdrwlFee: 0,
                                                      town: twn,
                                                      owner: owner,
                                                      status: 'AccountActive',
                                                    }
                                              
                                              }
                                          })
                                            
                                      
                                            
                                           
                                      
                                            Alert.alert('Success', `Agent ${nam} created successfully!`);
                                          } catch (error) {
                                            Alert.alert('Error', 'Failed to create agent. Please try again.');
                                            console.error(error);
                                          } finally {
                                            setIsLoading(false);
                                          }
                                          await updateSA();
                                        };
                                        
                                        
                                                      const updateSA = async () => {
                                                          try {
                                                            const response = await client.graphql({
                                                              query: updateSAgent,
                                                              variables: { input:{
                                                                  saPhoneContact:saRegNo,
                                                                  actvMFNdog:actvMFNdogs + 1,
                                                                }
                                                          }});
                                                            Alert.alert('Update Success', 'SA updated successfully.');
                                                            return response;
                                                          } catch (error) {
                                                            console.error('Error updating SA:', error);
                                                          }
                                                          await updateSMAc()
                                                        };

                                                        const updateSMAc = async () => {
                                                            const userInf = await fetchUserAttributes()
                                                            try {
                                                              const response = await client.graphql({
                                                                query: updateSMAccount,
                                                                variables: { input:{
                                                                    awsemail:userInf.email,
                                                                    TtlClrdLonsAmtByrCov:parseFloat(TtlClrdLonsAmtByrCovs) - 1,
                                                                  } },
                                                              });
                                                              Alert.alert('Update Success', 'SM Account updated successfully.');
                                                              return response;
                                                            } catch (error) {
                                                              console.error('Error updating SM Account:', error);
                                                            }
                                                            await updateActAdm();
                                                          };
                                                        
                                                          const updateActAdm = async () => {
                                                            try {
                                                              const response = await client.graphql({ query: updateCompany,
                                                                variables:{
                                                                    input:{
                                                                        AdminId:"BaruchHabaB'ShemAdonai2",
                                                                        ttlKFNdgActv:parseFloat(actvNdg) + 1,
                                                                      }
                                                                }
                                                               });
                                                              Alert.alert('Update Success', 'Account Admin updated successfully.');
                                                              return response;
                                                            } catch (error) {
                                                              console.error('Error updating Account Admin:', error);
                                                            }
                                                          };

                                                          const actvNdg = compDtls.data.getCompany.ttlKFNdgActv
                                                          const maxMFNdogoss = compDtls.data.getCompany.maxMFNdogos
                                                  
                                                         console.log(actvNdg)
                                                         if (PhnUser.length > 1) {
                                                          Alert.alert("This phone is registered as a main account")
                                                        }
                                                  
                                                       
                                                                else if (lat !== lon) {
                                                                  Alert.alert('Passwords do not match.');
                                                                  return;
                                                                }
                                                                else {
                                                                  await createNewAgent();
                                                                }
                                                        
                                  } catch (error) {
                                    console.error('Error fetching company details:', error);
                                  }
                                  
                                };

                                 await getCompanyDetails();
                              
                           } catch (error) {
                             console.error('Error fetching MFN details:', error);
                           }
                           
                         };
                          await getMFNDetails();
                   } catch (error) {
                     console.error('Error checking user existence:', error);
                   }
                   
                 };

                  await checkUserExistence();
            } catch (error) {
              console.error('Error checking phone usage:', error);
            }
        
            

                      setNationalid('');
    setPW('');
    setName('');
    setEml("");
    setLat("");
    setLon("");
    setBkAcNu("");
    setBkName("");
    setPhoneContact('');
    setSARegNo('');
    settwn("")
          };

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
                    const natId=nationalId
                      if(!natId && natId!=="")
                      {
                        setNationalid("");
                        return;
                      }
                      setNationalid(natId);
                      }, [nationalId]
                       );
        
               useEffect(() =>{
                const twns=twn
                  if(!twns && twns!=="")
                  {
                    settwn("");
                    return;
                  }
                  settwn(twns);
                  }, [twn]
                   );
          
               useEffect(() =>{
                const pws=pword
                  if(!pws && pws!=="")
                  {
                    setPW("");
                    return;
                  }
                  setPW(pws);
                  }, [pword]
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
                        const name=nam
                          if(!name && name!=="")
                          {
                            setName("");
                            return;
                          }
                          setName(name);
                          }, [nam]
                           );
        
                           useEffect(() =>{
                            const email=eml
                              if(!email && email!=="")
                              {
                                setEml("");
                                return;
                              }
                              setEml(email);
                              }, [eml]
                               );
                          
                               useEffect(() =>{
                                const lati=lat
                                  if(!lati && lati!=="")
                                  {
                                    setLat("");
                                    return;
                                  }
                                  setLat(lati);
                                  }, [lat]
                                   );
                          
                                   useEffect(() =>{
                                    const long=lon
                                      if(!long && long!=="")
                                      {
                                        setLon("");
                                        return;
                                      }
                                      setLon(long);
                                      }, [lon]
                                       );
                          
                                       
                            
                                           useEffect(() =>{
                                            const saRN=saRegNo
                                              if(!saRN && saRN!=="")
                                              {
                                                setSARegNo("");
                                                return;
                                              }
                                              setSARegNo(saRN);
                                              }, [saRegNo]
                                               );
        

  return (
    <LinearGradient
      colors={['#e58d29', 'skyblue']}
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Homesss')} style={styles.button}>
              
                <Text style={styles.locationText}>Go Home</Text>
              
            </TouchableOpacity>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="MFkubwa Phone Number"
              value={saRegNo}
              onChangeText={setSARegNo}
              style={styles.input}
            />
            <TextInput
              placeholder="MFNdogo Phone number"
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.input}
            />

<TextInput
              placeholder="MFNDogo Name"
              value={nam}
              onChangeText={setName}
              style={styles.input}
            />

            <TextInput
              placeholder="MFNdogo Bank Name"
              value={BkName}
              onChangeText={setBkName}
              style={styles.input}
            />

<TextInput
              placeholder="MFNdogo Bank Account Number"
              value={BkAcNu}
              onChangeText={setBkAcNu}
              style={styles.input}
            />

<TextInput
              placeholder="MFNdogo Email"
              value={eml}
              onChangeText={setEml}
              style={styles.input}
            />
           
            <TextInput
              placeholder="Town"
              value={twn}
              onChangeText={settwn}
              style={styles.input}
            />
            <View style={styles.passwordContainer}>
                                                       <TextInput
                                                         placeholder="Main Account Password"
                                                     style={styles.passwordInput}
                                                                                          
                                                     value={lat}
                                                     onChangeText={setLat}
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
                                                                                          
                                                     value={lon}
                                                     onChangeText={setLon}
                                                     secureTextEntry={!isPasswordVisible}
                                                     placeholderTextColor="#ccc"
                                                     />
                                                     <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                                    <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                                     </TouchableOpacity>
                                                    </View>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>Latitude: {latitude || 'Fetching...'}</Text>
              <Text style={styles.locationText}>Longitude: {longitude || 'Fetching...'}</Text>
            </View>
            <TouchableOpacity onPress={checkPhoneUsage} style={styles.button}>
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.locationText}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    loanTitleView: {
      marginBottom: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
    },
    formContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    input: {
      height: 45,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 15,
      borderRadius: 5,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: '#e58d29',
      paddingVertical: 12,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    locationContainer: {
      marginVertical: 10,
    },
    locationText: {
      fontSize: 16,
      color: '#333',
    },
    passwordContainer: { flexDirection: 'row', alignItems: 'center', 
        backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, height:50 },
passwordInput: { flex: 1, padding: 12 },
  });
  
  export default RegisterKFNdgAcForm;