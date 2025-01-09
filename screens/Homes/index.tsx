import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { createCompany } from '../../src/graphql/mutations';
import { getCompany } from '../../src/graphql/queries';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [alert, setAlert] = useState("");
  const [UserName, setUserName] = useState(" ");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
const client = generateClient();

  const navigation = useNavigation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ViewMyAczsz = () => {
    navigation.navigate('ViewMyAczsz');
  };

  const Alertszsz = () => {
    navigation.navigate('Alertszsz');
  };

  const CreateMyAc = () => {
    navigation.navigate('CreateMyAc');
  };

  const CredSlsScreen = () => {
    navigation.navigate('CredSlsScreen');
  };

  const ChamaScreen = () => {
    navigation.navigate('ChamaScreen');
  };

  
  

  // Simulate fetching data (replace with your actual function)
  

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const gtCompDtls = async () =>{
    const signedUser = await getCurrentUser();
    try{
      const ExDtls:any = await client.graphql 
            ({query:getCompany,
              variables: 
              { AdminId: "BaruchHabaB'ShemAdonai2" },
              })
            ;
      
        const sgnInUsr = signedUser.username

         const alrt = ExDtls.data.getCompany.alert
         setUserName(sgnInUsr)
         setAlert(alrt);
        
      }
      
      catch(e){
        console.log(e)
        if(e){
          
      }
      }};

      useEffect(() => {
        gtCompDtls();
      }, []);


      const WelcomeHeader = () => (
        <LinearGradient
          colors={['#e58d29', 'skyblue']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>Welcome, {UserName}</Text>
            <TouchableOpacity onPress={handleSignOut}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <LinearGradient
            colors={['#e58d29', '#f3c642']}
            style={styles.backgroundGradient}
          >
            {/* Header Section */}
            <WelcomeHeader />
    
            {/* Main Buttons */}
            <View style={styles.buttonContainer}>
              <LinearGradient colors={['#72ebd8', '#34a4a1']} style={styles.mainButton}>
                <TouchableOpacity style={styles.mainButton} onPress={CreateMyAc}>
                  <Text style={styles.mainButtonText}>Create Main Account</Text>
                </TouchableOpacity>
              </LinearGradient>
    
              <LinearGradient colors={['#72ebd8', '#34a4a1']} style={styles.mainButton}>
                <TouchableOpacity style={styles.mainButton} onPress={ViewMyAczsz}>
                  <Text style={styles.mainButtonText}>View Main Account</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
    
            {/* Motivational Quote */}
            <LinearGradient colors={['#e58d29', '#f3c642']} style={styles.quoteContainer}>
              <Text style={styles.quoteText}>Life is helping out each other</Text>
            </LinearGradient>
    
            {/* Product Buttons */}
            <View style={styles.productContainer}>
              <View style={styles.productButton}>
                <Text style={styles.productButtonText}>Pal-Pal Products</Text>
              </View>
              <TouchableOpacity style={styles.productButton} onPress={ChamaScreen}>

                <Text style={styles.productButtonText}>Chama Products</Text>
              </TouchableOpacity>
              

              <TouchableOpacity style={styles.productButton} onPress={CredSlsScreen}>
                  <Text style={styles.productButtonText}>Business Products</Text>
                </TouchableOpacity>
            </View>
    
            {/* Loan Button */}
            <View style={styles.loanContainer}>
              <LinearGradient colors={['#72ebd8', '#34a4a1']} style={styles.loanButton}>
                <Text style={styles.loanButtonText}>Make Request</Text>
              </LinearGradient>
            </View>
    
            {/* Alert Section */}
            <LinearGradient colors={['#e58d29', '#f3c642']} style={styles.alertContainer}>
              <TouchableOpacity onPress={Alertszsz}>
                <Text style={styles.alertText} numberOfLines={4} ellipsizeMode="tail">
                  Alert: {alert}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </LinearGradient>
        </SafeAreaView>
      );
    };
    
    export default HomeScreen;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      backgroundGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      header: {
        width: '90%',
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 20,
        overflow: 'hidden',
      },
      headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      signOutText: {
        fontSize: 16,
        color: '#ffffff',
        textDecorationLine: 'underline',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 20,
      },
      mainButton: {
        width: '45%',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mainButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      quoteContainer: {
        width: '90%',
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      quoteText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
      },
      productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 20,
      },
      productButton: {
        width: '30%',
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
      },
      productButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
      },
      loanContainer: {
        width: '90%',
        marginVertical: 20,
      },
      loanButton: {
        width: '100%',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      loanButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      alertContainer: {
        width: '90%',
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      alertText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
      },
    });