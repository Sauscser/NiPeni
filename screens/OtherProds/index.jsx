import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getCurrentUser } from 'aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [alert, setAlert] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsMounted(true);
    setAlert('Sample Alert: Keep pushing forward!'); // Simulate fetching data
  }, []);

  

  const MFNdogoProds = () => {
    navigation.navigate('MFNRegMNdogo');
  };

  const SettingsSignIn = () => {
    navigation.navigate('SettingsSignIn');
  };

  const MFKHmScreen = () => {
    navigation.navigate('MFKHmScreen');
  };

  const MFNHmScreen = () => {
    navigation.navigate('MFNHmScreen');
  };

  const MFAdvocate = () => {
    navigation.navigate('AdvocateHm');
  };

  const MFKubwa = () => {
    navigation.navigate('MFKubwa');
  };

  const MFAdmin = () => {
    navigation.navigate('KFAdminSignInScreen');
  };

  const MFNdogo = () => {
    navigation.navigate('MFNdogoszx');
  }; 
  


  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#ffffff', '#4682B4', '#add8e6']}
        style={styles.backgroundGradient}
      >
        {/* Header Section */}
        <LinearGradient
          colors={['#ffffff', 'skyblue']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.header}
        >
          <Text style={styles.headerText}>Welcome to MiFedha</Text>
        </LinearGradient>

        {/* Main Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mainButton} onPress={MFNdogo}>
            <LinearGradient colors={['#f3c642', '#e58d29']} style={styles.gradientButton}>
              <Text style={styles.mainButtonText}>MFNdogo Products</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mainButton} onPress={MFKubwa}>
            <LinearGradient colors={['#f3c642', '#e58d29']} style={styles.gradientButton}>
              <Text style={styles.mainButtonText}>MFKubwa Products</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mainButton} onPress={MFAdvocate}>
            <LinearGradient colors={['#f3c642', '#e58d29']} style={styles.gradientButton}>
              <Text style={styles.mainButtonText}>MFAdvocate Products</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mainButton} onPress={MFAdmin}>
            <LinearGradient colors={['#f3c642', '#e58d29']} style={styles.gradientButton}>
              <Text style={styles.mainButtonText}>MFAdmin Products</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mainButton} onPress={() => navigateTo('References')}>
            <LinearGradient colors={['#f3c642', '#e58d29']} style={styles.gradientButton}>
              <Text style={styles.mainButtonText}>References</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mainButton} onPress={SettingsSignIn}>
            <LinearGradient colors={['#f3c642', '#e58d29']} style={styles.gradientButton}>
              <Text style={styles.mainButtonText}>Settings</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Alert Section */}
        <LinearGradient
          colors={['#e58d29', '#f3c642']}
          style={styles.alertContainer}
        >
          <Text style={styles.alertText}>Alert: {alert}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    overflow: 'hidden',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  mainButton: {
    width: '45%',
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  gradientButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    fontSize: 14,
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
