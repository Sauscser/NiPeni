import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Alert, Button, StyleSheet} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import NonLnSent from "../../../components/Advocate/VwChmCovLns";



import {  getCompany, getSMAccount, listCvrdGroupLoans } from '../../../src/graphql/queries';
import { useRoute } from '@react-navigation/core';
import { updateCompany, updateSMAccount } from '../../../src/graphql/mutations';

const FetchSMNonLnsSnt = props => {

    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const client = generateClient();
    const navigation = useNavigation()
    const route = useRoute();

    

      const fetchUsrDtls = async () => {
        const userInfo = await fetchUserAttributes();
      
        
        try {
                const MFNDtls: any = await client.graphql(
                  {
                    query: getSMAccount,
                    variables: {awsemail: userInfo.email}
                  }
                )
               
  
                const balances = MFNDtls.data.getSMAccount.balance;
                const owner = MFNDtls.data.getSMAccount.owner;

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await client.graphql({
                query: listCvrdGroupLoans,
                variables: {
                  filter: {
                    and: {
                      
                      lonBala:{gt:0},
                      advEmail: {eq:userInfo.email}
                      
                    }
                  },
                  sortDirection: 'DESC',
                    limit: 100
                }
              })
              
              const chmas = Lonees.data.listCvrdGroupLoans.items
                  setRecvrs(chmas);
                  
                            
                            const fetchCompDtls = async () => {
                              try {
                                      const MFNDtls: any = await client.graphql({
                                        query: getCompany,
                                        variables: {AdminId: "BaruchHabaB'ShemAdonai2"}
                                      })
                                      
                      
                                      const companyEarningBals = MFNDtls.data.getCompany.companyEarningBal;
                                      const companyEarnings = MFNDtls.data.getCompany.companyEarning;
                                      const enquiryFees = MFNDtls.data.getCompany.enquiryFee;
                                      
                                      
                                                  const updtActAdm = async()=>{
                                                    
                                                    try{
                                                        await client.graphql({
                                                          query: updateCompany,
                                                          variables: {
                                                            input:{
                                                              AdminId:"BaruchHabaB'ShemAdonai2",
                                                              companyEarningBal:parseFloat(companyEarningBals) + parseFloat(enquiryFees),
                                                              companyEarning:parseFloat(companyEarnings) + parseFloat(enquiryFees),
                                                            }
                                                          }
                                                        })
                                                       
                                                    }
                                                    catch(error){
                                                      if(error){
                                                        Alert.alert("Error! Access denied!")
                                                        return;
                                                    }
                                                    }
                                                    await updtUsrAc();
                                                    
                                                  }
              
                                                  const updtUsrAc = async()=>{
                                                    
                                                    try{
                                                        await client.graphql({
                                                          query: updateSMAccount,
                                                          variables: {
                                                            input:{
                                                              awsemail:userInfo.email,
                                                              balance:parseFloat(balances) - parseFloat(enquiryFees),
                                                            }
                                                          }
                                                        })
                                                       
                                                    }
                                                    catch(error){
                                                      if(error){
                                                        Alert.alert("Error! Access denied!")
                                                        return;
                                                    }
                                                    }
                                                    
                                                    
                                                  }
                              
              
              
                              
              
                      if(parseFloat(balances) < parseFloat(enquiryFees) ){
                          Alert.alert("Account Balance is very little");
                        }
                        else{
                            
                          await updtActAdm();
                            }
                            
                              }
                          catch (e)
                          {
                            if(e){
                              Alert.alert("Error! Access denied!");
                              return;
                            }
                              console.log(e)
                             
                              
                          }    
              
                  
                           }
                           await fetchCompDtls();
              
                          }
              
                          catch (e)
                          {
                            if(e){
                              Alert.alert("Error! Access denied!");
                              return;
                            }
                              console.log(e)
                             
                              
                          }    
              
                          
                           }

                           if (userInfo.sub !== owner)
    {Alert.alert ("Please first create main account")}
    else{
                           await fetchLoanees();}
                  
            
          
        }
              
        catch (e)
        {
          if(e){
            Alert.alert("Error! Access denied!");
            return;
          }
            console.log(e)
           
            
        }    

        
         }
      
        
          useEffect(() => {
            fetchUsrDtls();
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
               onRefresh={fetchUsrDtls}
               refreshing={loading}
               showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                  <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Chama Deals</Text>
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