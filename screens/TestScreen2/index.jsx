import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Eye icon
import { useRouter } from 'expo-router'; // Navigation
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { listSMAccounts, getCompany } from '../../src/graphql/queries';
import { createSMAccount, updateCompany } from '../../src/graphql/mutations';
import { useNavigation } from '@react-navigation/native';



const CreateAccount = () => {
  const router = useRouter();
  const userInfo = ();

  // State variables
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
const navigation = useNavigation();
  const client = generateClient();

  // Function to handle errors with adjustable alerts
  const handleError = (message:any) => {
    const title = "Error";
    const shortMessage = message.length > 50 ? `${message.substring(0, 50)}...` : message;
    Alert.alert(title, shortMessage);
  };

  // Function to check user existence
  const checkUserExistence = async () => {
    
    console.log(userInfo.email_verified);
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
      return response.data.getCompany.ttlActiveUsers;
    } catch (error) {
      console.error('Error fetching company details:', error);
      throw new Error('Unable to fetch company details.');
    }
  };

  // Function to create a new account
  const createAccount = async () => {
    try {
      await client.graphql({
        query: createSMAccount,
        variables: {
          input: {
            nationalid: nationalId,
            name: userInfo.username,
            phonecontact: userInfo.phone_number,
            awsemail: userInfo.email,
            pw: password,
            acStatus: 'AccountActive',
            balance: 0,
            MaxAcBal: 10000000,
            owner: userInfo.sub,
          },
        },
      });

      await client.graphql({
        query: updateCompany,
        variables: {
          input: {
            AdminId: "BaruchHabaB'ShemAdonai2",
            ttlActiveUsers: companyUsers + 1,
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
      const userInfo = await getCurrentUser();
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
    <LinearGradient colors={['#3b5998', '#e58d29']} style={styles.container}>
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
        <LinearGradient colors={['#e58d29', '#3b5998']} style={styles.button}>
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
  goHomeButton: { marginTop: 40, alignSelf: 'flex-start', marginLeft: 20, padding: 10 },
  goHomeText: { color: '#fff', fontWeight: 'bold' },
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
