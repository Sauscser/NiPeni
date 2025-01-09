import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BusinessDetailsScreen = () => {
  const [ChmPhn, setChmPhn] = useState('');
  const [itemPrys, setitemPrys] = useState('');
  const [lnPrsntg, setlnPrsntg] = useState('');
  const [awsEmail, setAWSEmail] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [pword, setPW] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      Alert.alert('Success', 'Form submitted successfully!');
    } catch (error) {
      Alert.alert('Error', error.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={['#e58d29', '#87CEEB']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBackground}
        >
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.title}>Fill Business Details Below</Text>
            </View>

            <View style={styles.formContainer}>
              {/* Input Fields */}
              {[
                { placeholder: 'Enter phone number', value: ChmPhn, setter: setChmPhn, keyboardType: 'phone-pad' },
                { placeholder: 'Enter item price', value: itemPrys, setter: setitemPrys, keyboardType: 'decimal-pad' },
                { placeholder: 'Enter discount percentage', value: lnPrsntg, setter: setlnPrsntg, keyboardType: 'decimal-pad' },
                { placeholder: 'Enter item name', value: awsEmail, setter: setAWSEmail },
              ].map((field, index) => (
                <View style={styles.inputContainer} key={index}>
                  <TextInput
                    value={field.value}
                    onChangeText={field.setter}
                    style={styles.input}
                    placeholder={field.placeholder}
                    keyboardType={field.keyboardType || 'default'}
                  />
                </View>
              ))}

              {/* Description */}
              <View style={styles.descContainer}>
                <TextInput
                  value={ChmDesc}
                  onChangeText={setChmDesc}
                  style={styles.descInput}
                  placeholder="Enter item description"
                  multiline={true}
                />
              </View>

              {/* Password */}
              <View style={styles.inputContainer}>
                <TextInput
                  value={pword}
                  onChangeText={setPW}
                  style={styles.input}
                  placeholder="Enter business password"
                  secureTextEntry={true}
                />
              </View>

              {/* Submit Button */}
              <TouchableOpacity
                style={styles.submitButton}
                onPress={fetchUserData}
                disabled={isLoading}
              >
                <LinearGradient
                  colors={['#87CEEB', '#e58d29']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.gradientWrapper}
                >
                  <Text style={styles.submitButtonText}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default BusinessDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradientBackground: {
    flex: 1,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
  },
  descContainer: {
    marginBottom: 15,
  },
  descInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
  },
  submitButton: {
    marginTop: 20,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradientWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
