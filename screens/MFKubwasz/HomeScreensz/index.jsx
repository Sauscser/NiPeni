import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const KFKubwaScreen = () => {
  const navigation = useNavigation();

  const GoHome = () => {
    navigation.navigate('Homesss');
  };

  // Reusable button component with TouchableOpacity
  const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  const CustomButton2 = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonText2}>
      <Text style={styles.buttonText2}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Section: Go Home */}
        <LinearGradient 
colors={['#ffffff', '#ffffff', 'skyblue']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        
        style={styles.section}>
        <CustomButton2 title="Go Home" onPress={GoHome} />
          
        </LinearGradient>

        <LinearGradient colors={['#ffffff', 'skyblue']} style={styles.section}>
        
          <CustomButton title="View My MFndogos" onPress={GoHome} />
        </LinearGradient>

        {/* Section: My Account */}
        <LinearGradient colors={['skyblue', '#e58d29']} style={styles.section}>
          <Text style={styles.sectionTitle}>My Account</Text>
          <View style={styles.buttonGroup}>
            <CustomButton title="UpdateAc" onPress={GoHome} />
            <CustomButton title="ViewAc" onPress={GoHome} />
            <CustomButton title="CreateAc" onPress={GoHome} />
            <CustomButton title="Apply4Ac" onPress={GoHome} />
          </View>
        </LinearGradient>

        {/* Section: Earnings */}
        <LinearGradient colors={['#e58d29', 'skyblue']} style={styles.section}>
          <Text style={styles.sectionTitle}>Earnings</Text>
          <View style={styles.buttonGroup}>
            <CustomButton title="Withdraw" onPress={GoHome} />
            <CustomButton title="My Withdrawals" onPress={GoHome} />
            <CustomButton title="UpdtCom" onPress={GoHome} />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KFKubwaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  section: {
    width: '90%',
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },

  button2: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',

  },
});
