import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Eye icon
import { useRouter } from 'expo-router'; // Navigation
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';
import { listSMAccounts, getCompany } from '../../src/graphql/queries';
import { createSMAccount, updateCompany } from '../../src/graphql/mutations';
import { useNavigation } from '@react-navigation/native';



const CreateAccount = () => {
  const router = useRouter();
  
  
  // State variables
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Response, setResponse] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
const navigation = useNavigation();
  const client = generateClient();

  const userInfo = fetchUserAttributes();
  
  console.log(userInfo);

  // Function to handle errors with adjustable alerts
  const handleError = (message:any) => {
    const title = "Error";
    const shortMessage = message.length > 50 ? `${message.substring(0, 50)}...` : message;
    Alert.alert(title, shortMessage);
  };

  // Function to check user existence
  const checkUserExistence = async () => {

    const userInfo = await fetchUserAttributes();
    
  console.log(userInfo);

    try {
      const result = await client.graphql({
        query: listSMAccounts,
        variables: {
          filter: {
            or: [{ nationalid: { eq: nationalId } }, { awsemail: { eq: userInfo.email } }],
          },
        },
      });
      return result.data.listSMAccounts.items.length > 0;
    } catch (error) {
      console.error('Error checking user existence:', error);
      throw new Error('Unable to verify user existence.');
    }
  };

  // Function to fetch company details
  const getCompanyDetails = async () => {
    try {
      const response = await client.graphql({
        query: getCompany,
        variables: { AdminId: "BaruchHabaB'ShemAdonai2" },
      });
      setResponse(response.data.getCompany.ttlActiveUsers);
    } catch (error) {
      console.error('Error fetching company details:', error);
      throw new Error('Unable to fetch company details.');
    }
  };

  // Function to create a new account
  const createAccount = async () => {
    const userInfo = await fetchUserAttributes();
    const userInfoz = await getCurrentUser()
    
    
    try {
      await client.graphql({
        query: createSMAccount,
        variables: {
          input: {
            nationalid: nationalId,
            name: userInfoz.username,
            phonecontact: userInfo.phone_number,
            awsemail: userInfo.email,
            balance: 0,
            p2pchmBenefits:0,           
            pw: password,
            nationality: "Kenyan",
            MFKubwaCost: 0,
            MFKubwaNetCost: 0,
            MFNdogoDue: 0,
            MFNdogoNet: 0,
            beneficiary:   userInfo.email,
            beneficiaryType:"Pal",
            beneficiaryAmt:0,
            loanAcceptanceCode:userInfo.email,
  
            ttlDpstSM: 0,
            TtlWthdrwnSM: 0,
  
            TtlActvLonsTmsLnrCov: 0,
            TtlActvLonsTmsLneeCov: 0,
            TtlActvLonsAmtLnrCov: 0,
            TtlActvLonsAmtLneeCov: 0,
            TtlBLLonsTmsLnrCov: 0,
            TtlBLLonsTmsLneeCov: 0,
            TtlBLLonsAmtLnrCov: 0,
            TtlBLLonsAmtLneeCov: 0,
            TtlClrdLonsTmsLnrCov: 0,
            TtlClrdLonsTmsLneeCov: 0,
            TtlClrdLonsAmtLnrCov: 0,
            TtlClrdLonsAmtLneeCov: 0,
            
            TtlActvLonsTmsLneeChmCov: 0,
            TtlActvLonsAmtLneeChmCov: 0,
            TtlBLLonsTmsLneeChmCov: 0,
            TtlBLLonsAmtLneeChmCov: 0,
            TtlClrdLonsTmsLneeChmCov: 0,
            TtlClrdLonsAmtLneeChmCov: 0,
               
            TtlActvLonsTmsSllrCov: 0,
            TtlActvLonsTmsByrCov: 0,
            TtlActvLonsAmtSllrCov: 0,
            TtlActvLonsAmtByrCov: 0,
            TtlBLLonsTmsSllrCov: 0,
            TtlBLLonsTmsByrCov: 0,
            TtlBLLonsAmtSllrCov: 0,
            TtlBLLonsAmtByrCov: 0,
            TtlClrdLonsTmsSllrCov: 0,
            TtlClrdLonsTmsByrCov: 0,
            TtlClrdLonsAmtSllrCov: 0,
            TtlClrdLonsAmtByrCov: 0,
            
          
            TtlActvLonsTmsLnrNonCov: 0,
            TtlActvLonsTmsLneeNonCov: 0,
            TtlActvLonsAmtLnrNonCov: 0,
            TtlActvLonsAmtLneeNonCov: 0,
            TtlBLLonsTmsLnrNonCov: 0,
            TtlBLLonsTmsLneeNonCov: 0,
            TtlBLLonsAmtLnrNonCov: 0,
            TtlBLLonsAmtLneeNonCov: 0,
            TtlClrdLonsTmsLnrNonCov: 0,
            TtlClrdLonsTmsLneeNonCov: 0,
            TtlClrdLonsAmtLnrNonCov: 0,
            TtlClrdLonsAmtLneeNonCov: 0,
            
            TtlActvLonsTmsLneeChmNonCov: 0,
            TtlActvLonsAmtLneeChmNonCov: 0,
            TtlBLLonsTmsLneeChmNonCov: 0,
            TtlBLLonsAmtLneeChmNonCov: 0,
            TtlClrdLonsTmsLneeChmNonCov: 0,
            TtlClrdLonsAmtLneeChmNonCov: 0,
            
            TtlActvLonsTmsSllrNonCov: 0,
            TtlActvLonsTmsByrNonCov: 0,
            TtlActvLonsAmtSllrNonCov: 0,
            TtlActvLonsAmtByrNonCov: 0,
            TtlBLLonsTmsSllrNonCov: 0,
            TtlBLLonsTmsByrNonCov: 0,
            TtlBLLonsAmtSllrNonCov: 0,
            TtlBLLonsAmtByrNonCov: 0,
            TtlClrdLonsTmsSllrNonCov: 0,
            TtlClrdLonsTmsByrNonCov: 0,
            TtlClrdLonsAmtSllrNonCov: 0,
            TtlClrdLonsAmtByrNonCov: 0,

            TtlActvLonsTmsLnrCredSlsP2P: 0,
            TtlActvLonsAmtLnrCredSlsP2P: 0,
            TtlBLLonsTmsLnrCredSlsP2P: 0,
            TtlBLLonsAmtLnrCredSlsP2P: 0,
            TtlClrdLonsTmsLnrCredSlsP2P: 0,
            TtlClrdLonsAmtLnrCredSlsP2P: 0,
          
            TtlActvLonsTmsLnrCredSlsP2B: 0,
            TtlActvLonsAmtLnrCredSlsP2B: 0,
            TtlBLLonsTmsLnrCredSlsP2B: 0,
            TtlBLLonsAmtLnrCredSlsP2B: 0,
            TtlClrdLonsTmsLnrCredSlsP2B: 0,
            TtlClrdLonsAmtLnrCredSlsP2B: 0,
          
            TtlActvLonsTmsLneeB2P: 0,
            TtlActvLonsAmtLneeB2P: 0,
            TtlBLLonsTmsLneeB2P: 0,
            TtlBLLonsAmtLneeB2P: 0,
            TtlClrdLonsLneeB2P: 0,
            TtlClrdLonsAmtLneeB2P: 0,
          
            TtlActvLonsTmsLneeP2P: 0,
            TtlActvLonsAmtLneeP2P: 0,
            TtlBLLonsTmsLneeP2P: 0,
            TtlBLLonsAmtLneeP2P: 0,
            TtlClrdLonsLneeP2P: 0,
            TtlClrdLonsAmtLneeP2P: 0,
          
            TtlActvLonsTmsLnrP2P: 0,
            TtlActvLonsAmtLnrP2P: 0,
            TtlBLLonsTmsLnrP2P: 0,
            TtlBLLonsAmtLnrP2P: 0,
            TtlClrdLonsLnrP2P: 0,
            TtlClrdLonsAmtLnrP2P: 0,
  
            ttlNonLonsRecSM: 0,
            ttlNonLonsSentSM:0,
            ttlNonLonsRecChm: 0,
            ttlNonLonsSentChm:0,
          
            MaxTymsBL: 0,
            MaxTymsIHvBL: 0,

            TymsIHvGivnLn: 0,
            TymsMyLnClrd: 0,
            

            DefaultPenaltySM:0,

            MaxAcBal:10000000,

            acStatus: 'AccountActive',
            deActvtnReason:"None",
            blStatus: 'AccountNotBL',
            loanStatus: "NoLoan",
            loanLimit: 10000000,
            nonLonLimit:100000,
            withdrawalLimit: 3000000,
            depositLimit: 500000,
            
            owner: userInfo.sub,
          },
        },
      });

      await client.graphql({
        query: updateCompany,
        variables: {
          input: {
            AdminId: "BaruchHabaB'ShemAdonai2",
            ttlActiveUsers: Response + 1,
          },
        },
      });

      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Homesss') },
      ]);
    } catch (error) {
      console.error('Error creating account:', error);
      throw new Error('Failed to create account.');
    }
  };

  // Main handler for account creation
  const handleSubmit = async () => {
    if (!nationalId || !password || !confirmPassword) {
      handleError('All fields are required. Please fill them out.');
      return;
    }

    if (password.length < 8) {
      handleError('Password must be at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      handleError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      
      const userExists = await checkUserExistence(nationalId, userInfo.email);

      if (userExists) {
        Alert.alert('Error', 'An account with this National ID or Email already exists.');
      } else {
        const activeUsers = await getCompanyDetails();
        await createAccount(userInfo, activeUsers);
      }
    } catch (error) {
      handleError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
          placeholder="National ID"
          style={styles.input}
          value={nationalId}
          onChangeText={setNationalId}
          placeholderTextColor="#ccc"
        />

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
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

        {/* Confirm Password Input */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.passwordInput}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!isPasswordVisible}
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <LinearGradient colors={['skyblue', '#3b5998']} style={styles.button}>
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonContent} disabled={isLoading}>
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

export default CreateAccount;
