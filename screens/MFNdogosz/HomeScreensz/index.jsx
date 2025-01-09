import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const KFNdogoScreen = () => {
  const navigation = useNavigation();

  const GoHome = () => {
    navigation.navigate('Homesss');
  };

  // Reusable pressable button component
  const CustomButton = ({ title, onPress }) => (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );

  const CustomButton2 = ({ title, onPress }) => (
      <TouchableOpacity onPress={onPress} style={styles.buttonText2}>
        <Text style={styles.buttonText2}>{title}</Text>
      </TouchableOpacity>
    );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* View Section */}

        <LinearGradient 
                colors={['#ffffff', '#ffffff', 'skyblue']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                
                style={styles.section}>
                <CustomButton2 title="Go Home" onPress={GoHome} /> 
                  
                </LinearGradient>
        <LinearGradient colors={['#e58d29', 'skyblue']} style={styles.section}> 
          <Text style={styles.sectionTitle}>View</Text>
          <View style={styles.buttonGroup}>
            <CustomButton title="Deposit" onPress={GoHome} />
            <CustomButton title="FloatBght" onPress={GoHome} />
            <CustomButton title="MFNWithdrawls" onPress={GoHome} />
            <CustomButton title="ClientsWthdrwls" onPress={GoHome} />
            <CustomButton title="FltWthdrwls" onPress={GoHome} />
          </View>
        </LinearGradient>

        {/* My Account Section */}
        <LinearGradient colors={['skyblue', '#e58d29']} style={styles.section}>
          <Text style={styles.sectionTitle}>My Account</Text>
          <View style={styles.buttonGroup}>
            <CustomButton title="UpdateAc" onPress={GoHome} />
            <CustomButton title="ViewAc" onPress={GoHome} />
            <CustomButton title="CreateAc" onPress={GoHome} />
          </View>
        </LinearGradient>

        {/* Float Section */}
        <LinearGradient colors={['#e58d29', 'skyblue']} style={styles.section}>
          <Text style={styles.sectionTitle}>Float</Text>
          <View style={styles.buttonGroup}>
            <CustomButton title="MFN Withdraw" onPress={GoHome} />
            <CustomButton title="User Deposit" onPress={GoHome} />
            <CustomButton title="Chama Deposit" onPress={GoHome} />
            <CustomButton title="Biz Deposit" onPress={GoHome} />
          </View>
        </LinearGradient>

        {/* Earnings Section */}
        <LinearGradient colors={['skyblue', '#e58d29']} style={styles.section}>
          <Text style={styles.sectionTitle}>Earnings</Text>
          <View style={styles.buttonGroup}>
            <CustomButton title="Withdraw" onPress={GoHome} />
            <CustomButton title="UpdateCommision" onPress={GoHome} />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KFNdogoScreen;

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
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

  buttonText2: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',

  },
});
