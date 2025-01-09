import React, {useState, useRef,useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { generateClient } from 'aws-amplify/api';
import NonLnSent from "../../../components/MFNdogo/MFNCarousel";
import {useNavigation} from '@react-navigation/native'


import { listAgents} from '../../../src/graphql/queries';
import { useRoute } from '@react-navigation/core';

const FetchSMNonLnsSnt = props => {

    const[SenderPhn, setSenderPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const route = useRoute();
    const client = generateClient();
    const navigation = useNavigation()

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await client.graphql({
                query: listAgents,
                variables: {
                  filter: {
                    and: {
                      phonecontact: { eq: route.params.phonecontact},
                      status: { eq: "AccountActive"},
                      
                    }
                  }
                }
              })
              
              const mfnz = Lonees.data.listAgents.items
                  setRecvrs(mfnz);
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
                    
                     <TouchableOpacity style ={styles.sendLoanInput} 
                     onPress={() => navigation.navigate('Homesss')}
                       >
                     <Text style={styles.headerText}>Go Home</Text>
                      
                     </TouchableOpacity>
                   
              <FlatList
              style= {{width:"100%", padding:20}}
                data={Recvrs}
                renderItem={({item}) => <NonLnSent Agent={item} />}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={fetchLoanees}
                refreshing={loading}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={() => (
                  <>
                    
                    <Text style={styles.headerText}> Details</Text>
                    <Text style={styles.subHeaderText}> (Please swipe down to load)</Text>
                  </>
                )}
              />
             </LinearGradient>
          );
        };
        const styles = StyleSheet.create({
            root: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
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
              width: "90%",
              height: "10%",
              borderRadius: 10,
              marginTop: 60,
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