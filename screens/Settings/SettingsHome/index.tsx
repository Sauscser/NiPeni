import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, ScrollView, SafeAreaView, TouchableOpacity, 
  StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const SETTINGS_OPTIONS = [
  { label: 'Create Admin', navigateTo: 'CrtAdmin' },
  { label: 'Update Recommendations', navigateTo: 'Recommendationsss' },
  { label: 'Update Password', navigateTo: 'UpdateCompPW' },
  { label: 'Update Privacy', navigateTo: 'Privacyss' },
  { label: 'Update Transaction Fees', navigateTo: 'TransactionFeess' },
  { label: 'Update Maximums', navigateTo: 'Maximumss' },
  { label: 'Update Contacts', navigateTo: 'Contactsss' },
  { label: 'Update T&C', navigateTo: 'TCsss' },
  { label: 'Update Alerts', navigateTo: 'Alertsss' },
  { label: 'Update About', navigateTo: 'Aboutss' },
  { label: 'Update Policy', navigateTo: 'Policysss' },
  { label: 'Update Commissions', navigateTo: 'Commissionss' },
  { label: 'Deactivate Admin', navigateTo: 'DeactAdms' },
  { label: 'View Company Details', navigateTo: 'VwCompDtlss' },
  { label: 'Withdraw VAT', navigateTo: 'UpdtVatComss' },
  { label: 'Create Exchange Rate', navigateTo: 'CreateExRates' },
];

const SettinsHm = () => {
  const navigation = useNavigation();

  const goToMainAccount = () => {
    navigation.navigate('Homesss');
  };
  
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* LinearGradient Title */}
        <LinearGradient
          colors={['#ffffff', '#87CEEB']}
          style={styles.header}>
            <TouchableOpacity onPress={goToMainAccount} >
          <Text style={styles.headerText}>Go Home</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Render Options */}
        {SETTINGS_OPTIONS.map((option, index) => (
          <Pressable
            key={index}
            onPress={() => navigation.navigate(option.navigateTo)}
            style={styles.optionButton}>
            <LinearGradient
              colors={['#87CEEB', '#e58d29']}
              style={styles.gradientButton}>
              <Text style={styles.optionText}>{option.label}</Text>
            </LinearGradient>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettinsHm;
 



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 15,
  },
  header: {
    marginBottom: 15,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  optionButton: {
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});


