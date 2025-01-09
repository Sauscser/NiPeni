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
import { LinearGradient } from 'expo-linear-gradient';
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';
import { listSMAccounts, getSMAccount } from '../../src/graphql/queries';
import {useNavigation} from '@react-navigation/native';
import LnerStts from '../../components/VwMyAcsz'

const FetchSMNonCovLns = () => {
  const [loanees, setLoanees] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const navigation = useNavigation();

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const currentUser = await getCurrentUser();
      const userAttributes = await fetchUserAttributes();

      const client = generateClient();

      const MFNDtls = await client.graphql({
        query: getSMAccount,
        variables: { awsemail: userAttributes.email },
      });

      const ownr = MFNDtls.data.getSMAccount.owner;
      

      if (userAttributes.sub !== ownr) {
        Alert.alert('Please first create a main account');
        return;
      }

      const Loanees = await client.graphql({
        query: listSMAccounts,
        variables: {
          filter: {
            and: {
              awsemail: { eq: userAttributes.email },
              acStatus: { eq: 'AccountActive' },
            },
          },
        },
      });

      setLoanees(Loanees.data.listSMAccounts.items);
    } catch (error) {
      Alert.alert('Error', 'Please first create a main account on the home page.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  

   return (
     <LinearGradient colors={['#e58d29', '#f9f9f9']} style={styles.root}>
       <View style={styles.topBar}>
         <Button 
         title="Go Home" onPress={() => navigation.navigate('Homesss')} >
         </Button>
       </View>
       <FlatList
         style={{ width: '100%', padding:20 }}
         data={loanees}
         renderItem={({item}) => <LnerStts details={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchUserDetails}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
         ListHeaderComponent={() => (
           <View style={styles.headerContainer}>
             <Text style={styles.headerText}>My Account</Text>
             <Text style={styles.subHeaderText}>(Please swipe down to load)</Text>
             
           </View>
         )}
       />
     </LinearGradient>
   );
 };
 
 
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
   },
   topBar: {
     padding: 30,
     backgroundColor: 'skyblue',
     borderBottomWidth: 1,
     borderBottomColor: '#ccc',
     alignItems: 'flex-start',
     marginTop: 50,
     borderRadius: 20,
   },
   headerContainer: {
     alignItems: 'center',
     padding: 30,
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