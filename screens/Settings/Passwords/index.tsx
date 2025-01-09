import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';

import { LinearGradient } from 'expo-linear-gradient';

import { getCompany, getSMAccount,  } from '../../../src/graphql/queries';
import { updateCompany } from '../../../src/graphql/mutations';
import { useNavigation } from '@react-navigation/native';


const UpdtSMPW = () => {
  
  const [compPW1, setCompPW1] = useState('');
  const [compPW2, setCompPW2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [owner, setOwner] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const client = generateClient();
    const navigation = useNavigation();

    const goToMainAccount = () => {
        navigation.navigate('Homesss');
      };

  // Fetch User Details
  

  // Update Company Details
  const updateCompanyDetails = async () => {
    
    if (!compPW1 || !compPW2) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    setIsLoading(true);
    try {
      const companyDetails: any = await client.graphql(
           {query:getCompany, 
            variables:{                              
                AdminId: "BaruchHabaB'ShemAdonai2" },
            } )
      const companyOwner = companyDetails.data.getCompany.owner;
      const SignedInOwner = getCurrentUser()

      if ((await SignedInOwner).userId !== companyOwner) {
        Alert.alert('Permission Denied', 'You are not the author of this account.');
      } else {
        await client.graphql(
            {query:updateCompany, 
             variables:{ 
                 input : { AdminId: "BaruchHabaB'ShemAdonai2", pw1: compPW1, pw2: compPW2 },
        }});
        
        goToMainAccount();
        setCompPW1('');
        setCompPW2('');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Check your internet connection or user does not exist.');
    } finally {
        
      setIsLoading(false);
      
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <LinearGradient colors={['#ffffff', 'skyblue']} style={styles.gradientContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Update Company Passwords</Text>

          <View style={styles.inputContainer}>
            <TextInput
              value={compPW1}
              onChangeText={setCompPW1}
              secureTextEntry
              placeholder="Enter New PW1"
              placeholderTextColor="#888"
              style={styles.input}
            />
            <TextInput
              value={compPW2}
              onChangeText={setCompPW2}
              secureTextEntry
              placeholder="Enter New PW2"
              placeholderTextColor="#888"
              style={styles.input}
            />
          </View>

          
            <LinearGradient
              colors={['#3b5998', '#e58d29']}
              style={styles.button}
            >
                <TouchableOpacity onPress={updateCompanyDetails} disabled={isLoading}>
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

export default UpdtSMPW;

import { StyleSheet } from 'react-native';

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
  loader: {
    marginLeft: 10,
  },
});


