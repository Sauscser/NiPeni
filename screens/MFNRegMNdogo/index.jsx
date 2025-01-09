import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [alert, setAlert] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const navigation = useNavigation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const CreateMyAc = () => {
    navigation.navigate('CreateMyAc');
  };

  const goToMainAccount = () => {
    navigation.navigate('Homesss');
  };

  // Simulate fetching data (replace with your actual function)
  useEffect(() => {
    setAlert("Sample Alert: Keep pushing forward!");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#ffffff", "#f5f5f5"]}
        style={styles.backgroundGradient}
      >
        {/* Header Section */}
        <LinearGradient
          colors={['#ffffff', 'skyblue']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.header}
        >
          <Pressable onPress={goToMainAccount}>
            <Text style={styles.headerText}>Back Home</Text>
          </Pressable>
        </LinearGradient>

        {/* Main Buttons */}
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={['#e58d29', '#f3c642']}
            style={styles.mainButton}
          >
            <TouchableOpacity style={styles.mainButton} onPress={CreateMyAc}>
              <Text style={styles.mainButtonText}>Create Main Account</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#e58d29', '#f3c642']}
            style={styles.mainButton}
          >
            <TouchableOpacity style={styles.mainButton} onPress={CreateMyAc}>
              <Text style={styles.mainButtonText}>View Main Account</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Motivational Quote */}
        <LinearGradient
          colors={["#ffffff", "#f3f3f3"]}
          style={styles.quoteContainer}
        >
          <Text style={styles.quoteText}>Life is helping out each other</Text>
        </LinearGradient>

        {/* Product Buttons */}
        <View style={styles.productContainer}>
          <LinearGradient
            colors={['#e8e8e8', '#d3d3d3']}
            style={styles.productButton}
          >
            <Text style={styles.productButtonText}>Pal-Pal Products</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#e8e8e8', '#d3d3d3']}
            style={styles.productButton}
          >
            <Text style={styles.productButtonText}>Chama Products</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#e8e8e8', '#d3d3d3']}
            style={styles.productButton}
          >
            <Text style={styles.productButtonText}>Business Products</Text>
          </LinearGradient>
        </View>

        {/* Loan Button */}
        <View style={styles.loanContainer}>
          <LinearGradient
            colors={['#e58d29', '#f3c642']}
            style={styles.loanButton}
          >
            <Text style={styles.loanButtonText}>Request Loan</Text>
          </LinearGradient>
        </View>

        {/* Alert Section */}
        <LinearGradient
          colors={["#ffffff", "#f3f3f3"]}
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
    color: 'white',
    textShadowColor: 'rgba(0,0,255,0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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
    color: '#0000FF',
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
  },
  productButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0000FF',
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
    color: 'white',
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
    color: '#0000FF',
  },
});
