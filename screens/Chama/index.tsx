import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MyLoanAccount = () => {
  const navigation = useNavigation();

  const navigateTo = (screen, params = {}) => {
    navigation.navigate(screen, params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#87CEEB', '#FFA500']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable style={styles.button2} onPress={() => navigateTo('Homesss')}>
              <Text style={styles.buttonText}>Go Home</Text>
            </Pressable>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Group Deals</Text>
            <Pressable style={styles.button} onPress={() => navigateTo('VwGrp2LnCov')}>
              <Text style={styles.buttonText}>Grant Request</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('ChmSignInss')}>
              <Text style={styles.buttonText}>Group Status</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('ChmLnsRec')}>
              <Text style={styles.buttonText}>Member Status</Text>
            </Pressable>
           
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Registration</Text>
            <Pressable style={styles.button} onPress={() => navigateTo('AddChmMembrsss')}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('RemoveChmMbrs')}>
              <Text style={styles.buttonText}>Deregister</Text>
            </Pressable>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Accounts</Text>
            <Pressable style={styles.button} onPress={() => navigateTo('CreateChms')}>
              <Text style={styles.buttonText}>Create Account</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('DissolveChms')}>
              <Text style={styles.buttonText}>Dissolve Account</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('UpdateChmAc')}>
              <Text style={styles.buttonText}>Update Account</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('ChamSignIn3s')}>
              <Text style={styles.buttonText}>View Account</Text>
            </Pressable>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Remittance</Text>
            <Pressable style={styles.button} onPress={() => navigateTo('ChamSignIn4s')}>
              <Text style={styles.buttonText}>Chama Remittance</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('ChamaMmbrRemtss')}>
              <Text style={styles.buttonText}>Member Remittance</Text>
            </Pressable>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Membership</Text>
            <Pressable style={styles.button} onPress={() => navigateTo('ChmSignIn6s')}>
              <Text style={styles.buttonText}>Chama Membership</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('ChmMmbrMmbrsss')}>
              <Text style={styles.buttonText}>Member Membership</Text>
            </Pressable>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Contributions</Text>
            <Pressable style={styles.button} onPress={() => navigateTo('ElimChmVwCntrMembrs')}>
              <Text style={styles.buttonText}>View Contributions</Text>
            </Pressable>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Repayments</Text>
            <Pressable style={styles.button} onPress={() => navigateTo('ElimRpyChmCvs')}>
              <Text style={styles.buttonText}>Covered Repayments</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('ElimRpyChmNonCvs')}>
              <Text style={styles.buttonText}>Non-Covered Repayments</Text>
            </Pressable>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Signatory Actions</Text>
            <Pressable style={styles.button} onPress={() => navigateTo('SignitoryWthdrwFndsss')}>
              <Text style={styles.buttonText}>Withdraw Funds</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('Sgn2CnfrmWthdrwlsss')}>
              <Text style={styles.buttonText}>Confirm Withdrawal</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('SgnIn2VwChmDpstss')}>
              <Text style={styles.buttonText}>View Deposits</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigateTo('SgnIn2VwChmWthdrwlss')}>
              <Text style={styles.buttonText}>View Withdrawals</Text>
            </Pressable>
          </View>

        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },

  button2: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
    marginTop: 60
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default MyLoanAccount;
