import React, { useEffect, useState } from 'react';
import { Alert, View, Text, TextInput, ScrollView, 
    TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import * as Location from 'expo-location'; // Importing Expo Location
import { Ionicons } from '@expo/vector-icons';
import { generateClient } from 'aws-amplify/api';
import { 
    getCompany, getSAgent,  getSMAccount,  listSMAccounts
} from '../../src/graphql/queries';

import { 
    createAgent, updateCompany, updateSAgent, updateSMAccount
} from '../../src/graphql/mutations';
import { fetchUserAttributes, getCurrentUser } from '@aws-amplify/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';

const RegisterKFNdgAcForm = () => {
    const navigation = useNavigation();
  const [nationalId, setNationalId] = useState('');
  const [name, setName] = useState('');
  const [phoneContact, setPhoneContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [saRegNo, setSARegNo] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
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
  useEffect(() => {
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

        const location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude.toString());
        setLongitude(location.coords.longitude.toString());
      } catch (error) {
        Alert.alert('Error', 'Failed to initialize data. Please try again.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  // Utility Functions
  const checkPhoneUsage = async () => {
    try {
      const response = await client.graphql({
        query: listSMAccounts,
        variables: {
        filter: {phonecontact:
            {eq: phoneContact}
        } }}
    )
    const phn = response.data.listSMAccounts.items
       setPhnUser(phn) 
      
      
    } catch (error) {
      console.error('Error checking phone usage:', error);
    }

    if (PhnUser.length > 1) {
        Alert.alert("This phone is registered as a main account")
      }

      else if (!password || !password2 || !town  
                || !bankAccountNumber || !bankName
                 || !saRegNo || email

                 || !name || !nationalId
                
              ) {
                Alert.alert('All fields are required. Please fill them out.');
                return;
              }
              else if (password !== password2) {
                Alert.alert('Passwords do not match.');
                return;
              }
              else {
    checkUserExistence();
              }
  };

  const checkUserExistence = async () => {
    const userInfo = await fetchUserAttributes()
    try {
      const UsrDtls = await client.graphql({
        query: getSMAccount,
        variables: {awsemail: userInfo.email },
      });
        const ownerz = UsrDtls.data.getSMAccount.owner
        const nationalidssss = UsrDtls.data.getSMAccount.nationalid
        const TtlClrdLonsAmtByrCovs = UsrDtls.data.getSMAccount.TtlClrdLonsAmtByrCov
        setownerz(ownerz)
        setnationalidssss(nationalidssss)
        setTtlClrdLonsAmtByrCovs(TtlClrdLonsAmtByrCovs)
    } catch (error) {
      console.error('Error checking user existence:', error);
    }
    getMFNDetails();
  };

  const getMFNDetails = async () => {
    try {
      const MFKb = await client.graphql({ query: getSAgent,
        variables:{
            input:{
                saPhoneContact:saRegNo
            }
        }
       });
       const actvMFNdogs = MFKb.data.getSAgent.actvMFNdog;
       const names = MFKb.data.getSAgent.name
       const mfnTtl = MFKb.data.getSAgent.mfnTtl;
       const offerStatus = MFKb.data.getSAgent.offerStatus
       setactvMFNdogs(actvMFNdogs)
       setnames(names)
       setmfnTtl(mfnTtl)
       setofferStatus(offerStatus)

       
    } catch (error) {
      console.error('Error fetching MFN details:', error);
    }
    getCompanyDetails();
  };

  const getCompanyDetails = async () => {
    try {
      const compDtls = await client.graphql({ query: getCompany,
        variables: 
        {AdminId:"BaruchHabaB'ShemAdonai2"}
       });
      
        const actvNdg = compDtls.data.getCompany.ttlKFNdgActv
        const maxMFNdogoss = compDtls.data.getCompany.maxMFNdogos

        setactvNdg(actvNdg)
        setmaxMFNdogoss(maxMFNdogoss)
    } catch (error) {
      console.error('Error fetching company details:', error);
    }
    createNewAgent();
  };

  const createNewAgent = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try { await client.graphql({
        query: createAgent,
        variables: {
             input : {
                phonecontact: phoneContact,
                nationalid: nationalId,
                name: name,
                ttlEarnings: 0,
                pw: password,
                email: email,
                sagentregno: saRegNo,
                bankName: bankName,
                bkAcNo: bankAccountNumber,
                TtlFltIn: 0,
                TtlFltOut: 0,
                floatBal: 0,
                latitude: latitude,
                longitude: longitude,
                agentEarningBal: 0,
                MFNWithdrwlFee: 0,
                town: town,
                owner: owner,
                status: 'AccountActive',
              }
        
        }
    })
      

      
     

      Alert.alert('Success', `Agent ${name} created successfully!`);
    } catch (error) {
      Alert.alert('Error', 'Failed to create agent. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    updateSA();
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
    updateSMAc()
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
    updateActAdm();
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
              placeholder="National ID"
              value={nationalId}
              onChangeText={setNationalId}
              style={styles.input}
            />
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <TextInput
              placeholder="Phone Number"
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            
            <TextInput
              placeholder="Agent Registration Number"
              value={saRegNo}
              onChangeText={setSARegNo}
              style={styles.input}
            />
            <TextInput
              placeholder="Bank Name"
              value={bankName}
              onChangeText={setBankName}
              style={styles.input}
            />
            <TextInput
              placeholder="Bank Account Number"
              value={bankAccountNumber}
              onChangeText={setBankAccountNumber}
              style={styles.input}
            />
            <TextInput
              placeholder="Town"
              value={town}
              onChangeText={setTown}
              style={styles.input}
            />
            <View style={styles.passwordContainer}>
                                                       <TextInput
                                                         placeholder="Main Account Password"
                                                     style={styles.passwordInput}
                                                                                          
                                                     value={password}
                                                     onChangeText={setPassword}
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
                                                                                          
                                                     value={password2}
                                                     onChangeText={setPassword2}
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