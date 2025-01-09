import React, {useState, useRef,useEffect} from 'react';
import {View, Text, Button, StyleSheet, TextInput, FlatList, ActivityIndicator, Alert} from 'react-native';
import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';
import LnerStts from "../../../../components/Ads/VwChmPrfl";
import {useNavigation} from '@react-navigation/native';
import { listGroups, listSMAccounts } from '../../../../src/graphql/queries';
import { LinearGradient } from 'expo-linear-gradient';


const FetchSMNonCovLns = props => {

  const[LneePhn, setLneePhn] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Loanees, setLoanees] = useState([]);
  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [UsrEmail, setUsrEmail] = useState(null);
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');

  const [itemPrys, setitemPrys] = useState('a');
  const [itemTwn, setitemTwn] = useState('');
  const [lnPrsntg, setlnPrsntg] = useState('a');
  const [rpymntPrd, setrpymntPrd] = useState('');
  const client = generateClient();
  const navigation = useNavigation();
        const fetchLoanees = async () => {
            setLoading(true);
            const userInfo = await fetchUserAttributes();
            try {
              const Lonees:any = await client.graphql({
                query: listGroups,
                variables:{
                  filter:{
                    and: {oprtnArea: { contains: itemPrys},
                    venture: { contains: lnPrsntg}}
                  }
                }
              })
              
              
              setLoanees(Lonees.data.listGroups.items);
              if (Lonees.data.listGroups.items.length < 1) {
                                  Alert.alert("No chamas, change specifications please")
                                }
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
            setChmPhn('');
            setPW('');
            setAWSEmail("")
            setChmDesc("")
            setChmNm("")
            setChmRegNo("")
            setMmbaID("")
            setSign2Phn("");
            setrpymntPrd("");
            setlnPrsntg("");
            setitemTwn("");
            setitemPrys("");
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
                    <Text style={styles.headerText}>Available Chamas</Text>
                    <Text style={styles.subHeaderText}>(Please swipe down to load)</Text>
                    
                  </View>
                  
                )
              }
              
              />
              <View style={styles.BotBar}>
              <TextInput
                     placeholder='Enter Region'
                      value={itemPrys}
                      onChangeText={setitemPrys}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    
                    <TextInput
                    placeholder='Enter Venture type'
                      value={lnPrsntg}
                      onChangeText={setlnPrsntg}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
              </View>
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

export default FetchSMNonCovLns;