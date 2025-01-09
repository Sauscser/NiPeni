import React, {useState, useRef,useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Alert} from 'react-native';
import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import LnerStts from "../../../../../components/Ads/VwLnItms2Dlt";
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { listSokoAds } from '../../../../../src/graphql/queries';

const FetchSMCovLns = props => {

    const[LneePhn, setLneePhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const route = useRoute();
    const client = generateClient();
    const navigation = useNavigation();

        const fetchLoanees = async () => {
          const userInfo = await fetchUserAttributes();
            try {
              const Lonees:any = await client.graphql({
              query:listSokoAds,
              variables:{
                filter:{
                  
                sokokntct: { eq: route.params.BiznaContact},               
                },
                sortDirection: 'DESC',
                  limit: 100
              }
              })
              
              const salesAds = Lonees.data.listSokoAds.items
              setLoanees(salesAds);
              if (salesAds.length < 1) 
                                {Alert.alert ("No adverts, change specifications")}
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
                    <Text style={styles.headerText}>Biz Sales Ads</Text>
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