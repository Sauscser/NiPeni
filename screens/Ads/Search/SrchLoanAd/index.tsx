import React, {useState, useRef,useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {generateClient } from 'aws-amplify/api';
import LnerStts from "../../../../components/Ads/VwPrsnlLns";

import {  listGroups, listRafikiLnAds, listSMAccounts } from '../../../../src/graphql/queries';
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

  const [itemPrys, setitemPrys] = useState('0');
  const [itemTwn, setitemTwn] = useState('0');
  const [lnPrsntg, setlnPrsntg] = useState('100');
  const [rpymntPrd, setrpymntPrd] = useState('0');
const client = generateClient();
const navigation = useNavigation();
const GoHome = () => { navigation.navigate("Homesss")}

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await client.graphql({
                query: listRafikiLnAds,
                variables: {
                  filter: {
                    rafikiamnt: { gt: parseFloat(itemPrys)}
                  },
                  sortDirection: 'DESC',                  
                  limit: 100
                }
              })
              
              
              const Ad = Lonees.data.listRafikiLnAds.items
                            setLoanees(Ad);
                            
                            if (Ad.length < 1) {
                                Alert.alert("No Pal Deals, change specifications please")
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
          }, []);
          
        return (  
          <LinearGradient colors={['#e58d29', '#f9f9f9']} style={styles.root}>
         
          <TouchableOpacity style ={styles.sendLoanInput} 
          onPress={GoHome}
            >
          <Text style={styles.headerText}>Go Home</Text>
           
          </TouchableOpacity>
        
        
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
              <Text style={styles.headerText}>Available Deals</Text>
              <Text style={styles.subHeaderText}>(Please swipe down to load)</Text>
              
            </View>
            
          )
        }
        
        />
       
        <TextInput
                   placeholder='Enter minimum amount'
                   
                    value={itemPrys}
                    onChangeText={setitemPrys}
                    style={styles.sendLoanInput}
                    editable={true}></TextInput>
        
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

export default FetchSMNonCovLns;