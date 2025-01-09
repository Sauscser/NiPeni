import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  ScrollView,
  StyleSheet,
  Button
} from 'react-native';

const SMCvLnStts = ({ details }) => {
   const {
     balance,
     ttlDpstSM,
     TtlWthdrwnSM,
     ttlNonLonsRecSM,
     ttlNonLonsSentSM,
     MaxTymsBL,
   } = details;
 
   return (
     <View style={styles.summaryContainer}>
       <Text style={styles.sectionTitle}>General Information Summary</Text>
 
       <ScrollView>
         <Text style={styles.infoText}>Ac Balance (Ksh): {balance.toFixed(2)}</Text>
         <Text style={styles.infoText}>Times I am Black-Listed: {MaxTymsBL.toFixed(2)}</Text>
 
         <Text style={styles.sectionTitle}>Cash Flow</Text>
         <Text style={styles.infoText}>Total Deposits (Ksh): {ttlDpstSM.toFixed(2)}</Text>
         <Text style={styles.infoText}>Total Withdrawn (Ksh): {TtlWthdrwnSM.toFixed(2)}</Text>
         <Text style={styles.infoText}>Total Non Loans Received (Ksh): {ttlNonLonsRecSM.toFixed(2)}</Text>
         <Text style={styles.infoText}>Total Non Loans Sent (Ksh): {ttlNonLonsSentSM.toFixed(2)}</Text>
       </ScrollView>
     </View>
   );
 };

 export default SMCvLnStts

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