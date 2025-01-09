import React, {useEffect, useState} from 'react';


import {  getSMAccount, } from '../../../../../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import {fetchUserAttributes} from 'aws-amplify/auth';

import {useNavigation} from '@react-navigation/native';


import {
  View,  Text,  ImageBackground,  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { getBizna, listPersonels } from '../../../../../src/graphql/queries';


  


const ChmSignIn = (props) => {

  
  
  

  const navigation = useNavigation();

  const [BiznaContact, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [phoneContacts, setPhoneContacts] = useState("");
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [memberPhn, setmemberPhn] = useState(''); 
  const[ownr, setownr] = useState(null);
  
const client = generateClient();


  const FetchGrpLonsSts = () => {
    navigation.navigate("VwSlsAds2Remove", {BiznaContact});
  };
  
  const goToMainAccount = () => {
    navigation.navigate("Homesss");
  };
  
  const gtUzr = async () =>{
   if (isLoading) return;
           setIsLoading(true);
           try {
             Alert.alert('Success', 'proceed to view!');
           } catch (error) {
             Alert.alert('Error', error.message || 'An unexpected error occurred.');
           } finally {
             setIsLoading(false);
           }
    const userInfo = await fetchUserAttributes();
    try{
      const compDtls :any= await client.graphql({
query: getSMAccount,
  variables:{
    awsemail:userInfo.email
  }

      });
       
        const owner = compDtls.data.getSMAccount.owner;
        const pws = compDtls.data.getSMAccount.pw;

    const ChckPersonelExistence = async () => {
      
      try {
        const UsrDtls:any = await client.graphql({
          query:listPersonels,
          variables:{
            filter:{
              and:{
                phoneKontact: { eq: userInfo.email},
              BusinessRegNo:{eq: BiznaContact}
              }
            }
          }
        })
        
        
    
                const gtChmDtls = async () =>{
                  
                  try{
                    const compDtls :any= await client.graphql({
                      query:getBizna,
                      variables:{BusKntct:BiznaContact}
                    });                   
                
                      const signitoryPWs = compDtls.data.getBizna.pw;  
                      

                      if(pws!==pword){Alert.alert("Wrong PassWord")}
                      else if (UsrDtls.data.listPersonels.items.length < 1) {
                        Alert.alert("You do not work here");
                        return;
                        
                      }
                      
                      else{FetchGrpLonsSts();}
                    }

                    
            
            catch(e){
              console.log(e)
              if(e){
                Alert.alert("Error! Access denied")
                return;
            }
            }

          }
        await gtChmDtls();
      }

          catch(e){
          console.log(e)
          if(e){
          Alert.alert("Error! Access denied")
          return;
          }
          }
            setIsLoading(false)
            
                        
                        
            };

            if (userInfo.sub !== owner)
            {Alert.alert ("Please first create main account")}
            else{

            await ChckPersonelExistence();
            }
          } catch (e) {
          
          }
          setIsLoading(false);
          setChmPhn('');
          setPW('');
          setPhoneContacts("")
          setChmDesc("")
          setChmNm("")
          setmemberPhn("")}
  
          
    
            useEffect(() =>{
              const memberPhns=memberPhn
                if(!memberPhns && memberPhns!=="")
                {
                  setmemberPhn("");
                  return;
                }
                setmemberPhn(memberPhns);
                }, [memberPhn]
                 );
  
                 useEffect(() =>{
        const phoneContactss=phoneContacts
          if(!phoneContactss && phoneContactss!=="")
          {
            setPhoneContacts("");
            return;
          }
          setPhoneContacts(phoneContactss);
          }, [phoneContacts]
           );

      useEffect(() =>{
        const ChmNms=ChmNm
          if(!ChmNms && ChmNms!=="")
          {
            setChmNm("");
            return;
          }
          setChmNm(ChmNms);
          }, [ChmNm]
           );

           useEffect(() =>{
            const ChmDescs=ChmDesc
              if(!ChmDescs && ChmDescs!=="")
              {
                setChmDesc("");
                return;
              }
              setChmDesc(ChmDescs);
              }, [ChmDesc]
               );

useEffect(() =>{
  const ChmPhns=BiznaContact
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [BiznaContact]
     );

     useEffect(() =>{
      const pws=pword
        if(!pws && pws!=="")
        {
          setPW("");
          return;
        }
        setPW(pws);
        }, [pword]
         );
        
          return (
              <LinearGradient colors={['#87ceeb', '#e58d29']} style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <TouchableOpacity onPress={goToMainAccount} 
                  style={styles.titleContainer}>
                    <LinearGradient colors={['#87ceeb', '#e58d29']} style={styles.titleGradient}>
                      <Text style={styles.title}>Go Home</Text>
                    </LinearGradient>
                  </TouchableOpacity>
          
                  
                    <LinearGradient colors={['#87ceeb', '#e58d29']} style={styles.inputGradient}>
                      <Text style={styles.label}>Business Number</Text>
                      <TextInput
                        value={BiznaContact}
                        onChangeText={setChmPhn}
                        secureTextEntry
                        style={styles.input}
                        placeholderTextColor="#555"
                      />
                    </LinearGradient>
                  
          
                  
                    <LinearGradient colors={['#87ceeb', '#e58d29']} style={styles.inputGradient}>
                      <Text style={styles.label}>User Main Account Password</Text>
                      <TextInput
                        value={pword}
                        onChangeText={setPW}
                        secureTextEntry
                        style={styles.input}
                        placeholderTextColor="#555"
                      />
                    </LinearGradient>
                 
          
                  <TouchableOpacity onPress={gtUzr} style={styles.buttonContainer}>
                    <LinearGradient colors={['#e58d29', '#87ceeb']} style={styles.button}>
                      <Text style={styles.buttonText}>Sign In</Text>
                    </LinearGradient>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </LinearGradient>
            );
          };
          
          const styles = StyleSheet.create({
            container: {
              flex: 1,
            },
            titleContainer: {
              marginVertical: 20,
              alignItems: 'center',
            },
            titleGradient: {
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
            },
            title: {
              fontSize: 28,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
            },
            inputContainer: {
              marginHorizontal: 20,
              marginBottom: 15,
            },
            inputGradient: {
              borderRadius: 10,
              padding: 10,
            },
            label: {
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
              marginBottom: 5,
            },
            input: {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 8,
              padding: 10,
              color: '#333',
            },
            buttonContainer: {
              marginTop: 20,
              marginHorizontal: 20,
            },
            button: {
              borderRadius: 8,
              paddingVertical: 12,
              alignItems: 'center',
            },
            buttonText: {
              color: '#fff',
              fontSize: 18,
              fontWeight: '600',
            },
          });
        
        export default ChmSignIn;