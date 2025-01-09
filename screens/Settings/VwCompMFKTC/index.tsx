import React, {useState, useRef,useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes } from 'aws-amplify/auth';
import NonLnSent from "../../../components/ClientsTNC/CompMFKTC";
import { useNavigation } from '@react-navigation/native';
import { listCompanies,    } from '../../../src/graphql/queries';
import { LinearGradient } from 'expo-linear-gradient';

const FetchSMNonLnsSnt = props => {

    const[SenderPhn, setSenderPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const client = generateClient();
    const navigation = useNavigation()

        const fetchLoanees = async () => {
          const userInfo = await fetchUserAttributes();
            setLoading(true);
            try {
              const Lonees:any = await client.graphql ({
                query: listCompanies,
                variables: {
                  filter: {
                    AdminId: {eq:"BaruchHabaB'ShemAdonai2"}
                  }
                }
              })
             
              const mfktcs = Lonees.data.listCompanies.items

                  setRecvrs(mfktcs);
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
                renderItem={({item}) => <NonLnSent SMAc={item} />}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={fetchLoanees}
                refreshing={loading}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                ListHeaderComponent={() => (
                  <>
                    
                    <Text style={styles.headerText}> Terms and Conditions</Text>
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