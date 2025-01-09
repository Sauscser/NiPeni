import React, {useState, useRef,useEffect} from 'react';
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
import { generateClient} from 'aws-amplify/api';
import { fetchUserAttributes} from 'aws-amplify/auth';
import LnerStts from "../../../../../components/Ads/VwLn2Dlt";

import {useNavigation} from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { getSMAccount, listRafikiLnAds, listSokoAds } from '../../../../../src/graphql/queries';

const FetchSMCovLns = props => {

    
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const route = useRoute();
    const client = generateClient();
    const navigation = useNavigation();

    
          const fetchLoanees = async () => {
            if (isLoading) return;
            setIsLoading(true); // Prevent multiple fetch calls
            const userInfo = await fetchUserAttributes()
            try {
                const Lonees:any = await client.graphql({
                  query:listRafikiLnAds,
                  variables:{
                  filter:{
                    rafikiEmail: { eq: userInfo.email}
                  }
                }
                  
                })

                
              
                const fetchedLoanees = Lonees.data.listRafikiLnAds.items;
                setLoanees(fetchedLoanees)
                if (fetchedLoanees.length < 1) 
                  {Alert.alert ("You have no adverts")}
                console.log (fetchedLoanees.length)
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
            

            
          };

          
          
        
        
          useEffect(() => {
            fetchLoanees();
          }, [])

          return (
            <LinearGradient colors={['#e58d29', '#f9f9f9']} style={styles.root}>
              <View style={styles.topBar}>
                <Button 
                title="Go Home" onPress={() => navigation.navigate('Homesss')} >
                </Button>
              </View>
              <FlatList
                style={{ width: '100%', padding:20 }}
                data={Loanees}
                renderItem={({item}) => <LnerStts SMAc={item} />}
               keyExtractor={(item, index) => index.toString()}
               onRefresh={fetchLoanees}
               refreshing={loading}
               showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                  <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>My Pal Ads</Text>
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
        
        export default FetchSMCovLns;