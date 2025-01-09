import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, ScrollView, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';
import { listSMAccounts, getSMAccount } from '../../src/graphql/queries';

const FetchSMNonCovLns = ({ navigation }) => {
  const [loanees, setLoanees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({ balance: 0, owner: null });

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const currentUser = await getCurrentUser();
      const userAttributes = await fetchUserAttributes();

      const client = generateClient();

      const MFNDtls = await client.query({
        query: getSMAccount,
        variables: { awsemail: userAttributes.email },
      });

      const { balance, owner } = MFNDtls.data.getSMAccount;
      setUserDetails({ balance, owner });

      if (userAttributes.sub !== owner) {
        Alert.alert("Please first create a main account");
        return;
      }

      const Loanees = await client.query({
        query: listSMAccounts,
        variables: {
          filter: {
            and: {
              awsemail: { eq: userAttributes.email },
              acStatus: { eq: "AccountActive" },
            },
          },
        },
      });

      setLoanees(Loanees.data.listSMAccounts.items);
    } catch (error) {
      Alert.alert("Error", "Please first create a main account on the home page.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const renderLoanee = ({ item }) => (
    <View style={styles.loaneeContainer}>
      <Text style={styles.loaneeName}>Name: {item.name}</Text>
      <Text style={styles.loaneeBalance}>Balance: Ksh {item.balance.toFixed(2)}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#87CEEB', '#f9f9f9']} style={styles.root}>
      <View style={styles.topBar}>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <FlatList
        style={{ width: '100%' }}
        data={loanees}
        renderItem={renderLoanee}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchUserDetails}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My Account</Text>
            <Text style={styles.subHeaderText}>(Please swipe down to load)</Text>
            <SMCvLnStts details={userDetails} />
          </View>
        )}
      />
    </LinearGradient>
  );
};

const SMCvLnStts = ({ details }) => {
  const {
    balance,
    ttlDpstSM = 0,
    TtlWthdrwnSM = 0,
    ttlNonLonsRecSM = 0,
    ttlNonLonsSentSM = 0,
    MaxTymsBL = 0,
  } = details;

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.sectionTitle}>General Information Summary</Text>

      <ScrollView>
        <Text style={styles.infoText}>Ac Balance (Ksh): {balance.toFixed(2)}</Text>
        <Text style={styles.infoText}>Times I am Black-Listed: {MaxTymsBL}</Text>

        <Text style={styles.sectionTitle}>Cash Flow</Text>
        <Text style={styles.infoText}>Total Deposits (Ksh): {ttlDpstSM.toFixed(2)}</Text>
        <Text style={styles.infoText}>Total Withdrawn (Ksh): {TtlWthdrwnSM.toFixed(2)}</Text>
        <Text style={styles.infoText}>Total Non Loans Received (Ksh): {ttlNonLonsRecSM.toFixed(2)}</Text>
        <Text style={styles.infoText}>Total Non Loans Sent (Ksh): {ttlNonLonsSentSM.toFixed(2)}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  topBar: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'flex-start',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#888',
  },
  loaneeContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  loaneeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loaneeBalance: {
    fontSize: 14,
    color: '#444',
  },
  summaryContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#3b5998',
  },
  infoText: {
    fontSize: 14,
    marginVertical: 5,
    color: '#444',
  },
});

export default FetchSMNonCovLns;
