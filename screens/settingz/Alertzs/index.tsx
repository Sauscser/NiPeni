import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { getCompany } from '../../../src/graphql/queries';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { listCompanies } from '../../../src/graphql/queries';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';

// Define TypeScript Interface
export interface SMAccount {
  alert: string;
}

// Child Component: SMCvLnStts
const SMCvLnStts = ({ alert }: SMAccount) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Text style={styles.alertText}>{alert}</Text>
    </View>
  </View>
);

// Parent Component: FetchSMNonLnsSnt
const FetchSMNonLnsSnt = () => {
  const [loading, setLoading] = useState(false);
  const [recvrs, setRecvrs] = useState<SMAccount[]>([]);
  const [senderPhn, setSenderPhn] = useState<string | null>(null);
const client = generateClient();
const navigation = useNavigation();

const GoHome = () => {
    navigation.navigate('Homesss');
  };
  // Fetch user phone number
  

  // Fetch Loanees
  const fetchLoanees = async () => {
    setLoading(true);
    try {
      const response: any = await client.graphql({
        query:listCompanies});
      setRecvrs(response.data.listCompanies.items);
    } catch (e) {
      console.log('Error fetching loanees:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    fetchLoanees();
  }, []);

  return (
    <View style={styles.root}>
      {/* Go Home Button with Linear Gradient */}
      <TouchableOpacity
        onPress={GoHome} // Navigate to Home
        style={styles.buttonContainer}
      >
        <LinearGradient
          colors={['#ffffff', '#ffffff', 'skyblue']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Go Home</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Loader or List */}
      {loading ? (
        <ActivityIndicator size="large" color="#e58d29" style={styles.loader} />
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={recvrs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <SMCvLnStts alert={item.alert} />}
          onRefresh={fetchLoanees}
          refreshing={loading}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyMessage}>No alerts available.</Text>
          )}
        />
      )}
    </View>
  );
};

export default FetchSMNonLnsSnt;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  buttonContainer: {
    marginBottom: 15,
    width: '80%',
    borderRadius: 25,
  },
  gradientButton: {
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Adds a subtle shadow on Android
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  loader: {
    marginTop: 20,
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  emptyMessage: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    maxWidth: 400,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardContent: {
    alignItems: 'center',
  },
  alertText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444',
    textAlign: 'center',
  },
});