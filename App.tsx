import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNav from './Navigation/HomeTabNav'
// App.js
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const App = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaProvider>    
        <RootNav/>
      <StatusBar style="auto" />
    
    </SafeAreaProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// Configure Amplify


// Export App with Authentication
export default App;
