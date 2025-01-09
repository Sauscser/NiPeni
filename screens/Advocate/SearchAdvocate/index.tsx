import React, {useState, useRef,useEffect} from 'react';
import {View, Text, FlatList, Alert, Button, StyleSheet} from 'react-native';

import { generateClient } from 'aws-amplify/api';
import NonLnSent from "../../../components/Advocate/SearchAdv";
import { useNavigation } from '@react-navigation/native';


import { listAdvocates } from '../../../src/graphql/queries';
import { useRoute } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';

const FetchSMNonLnsSnt = props => {

    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const route = useRoute();
    const client = generateClient( )
    const navigation = useNavigation()


        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await client.graphql({
                query: listAdvocates,
                variables: { filter: {
                  and: {
                    officeLoc: { contains: route.params.town},
                    
                    
                  }
                }}
              }) 

              const lns = Lonees.data.listAdvocates.items
              
                  setRecvrs(lns);

                  if (lns.length<1){
                    Alert.alert(" No Advocates, change town")
                  }
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
                data={Recvrs}
                renderItem={({item}) => <NonLnSent SMAc={item} />}
               keyExtractor={(item, index) => index.toString()}
               onRefresh={fetchLoanees}
               refreshing={loading}
               showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                  <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Available Advocates</Text>
                    <Text style={styles.subHeaderText}>(Please swipe down to load)</Text>
                    
                  </View>
                  
                )
              }
              
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
            marginBottom: 50,
            borderRadius: 20,
          },
          BotBar: {
            padding: 10,
            backgroundColor: 'skyblue',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',        
            borderRadius: 20,
            height: "20%",
            marginTop: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: 5,
          },
          sendLoanInput: {
            backgroundColor: 'white',
            width: "100%",
            height: "25%",
            borderRadius: 10,
            marginTop: 1,
            justifyContent: 'center',
            alignItems: 'center',
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
export default FetchSMNonLnsSnt;