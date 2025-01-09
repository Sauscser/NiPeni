import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const KFNdogoScreen = () => {
  const [alert, setAlert] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsMounted(true);
    setAlert('Explore MFNdogo offerings today!'); // Simulate fetching data
  }, []);

  const navigateTo = (MFNdogoProds) => {
    navigation.navigate("MFNdogoProds");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>MFNdogo Products</Text>
        </View>

        {/* Main Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mainButton} onPress={() => navigateTo('ProductA')}>
            <Text style={styles.mainButtonText}>Product A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mainButton} onPress={() => navigateTo('ProductB')}>
            <Text style={styles.mainButtonText}>Product B</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mainButton} onPress={() => navigateTo('ProductC')}>
            <Text style={styles.mainButtonText}>Product C</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mainButton} onPress={() => navigateTo('ProductD')}>
            <Text style={styles.mainButtonText}>Product D</Text>
          </TouchableOpacity>
        </View>

        {/* Alert Section */}
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>Alert: {alert}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KFNdogoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainContent: {
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
    backgroundColor: '#e58d29',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#87CEEB',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e58d29',
  },
  mainButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#87CEEB',
  },
  alertContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e58d29',
    marginBottom: 20,
  },
  alertText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#87CEEB',
  },
});
