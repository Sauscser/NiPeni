import React, {useEffect, useState} from 'react';


import { getCompany, getGroup, getSMAccount, listSMAccounts, } from '../../../../../src/graphql/queries';
import {Auth, DataStore, graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';


  


const ChmSignIn = (props) => {

  
  
  

  const navigation = useNavigation();

  const [grpContact, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [phoneContacts, setPhoneContacts] = useState("");
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [memberPhn, setmemberPhn] = useState(''); 
  const[ownr, setownr] = useState(null);
  const ChmNMmbrPhns = grpContact

  

  const FetchGrpLonsSts = () => {
    navigation.navigate("Vw2BLNonCovs", {ChmNMmbrPhns});
  };
  

  
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      
      setName(userInfo.username);
      setownr(userInfo.attributes.sub);     
          
    };
    useEffect(() => {
      fetchUser();
    }, []);


    

    
                const gtChmDtls = async () =>{
                  if(isLoading){
                    return;
                  }
                  setIsLoading(true);
                  try{
                    const compDtls :any= await API.graphql(
                      graphqlOperation(getGroup,{grpContact:grpContact})
                      );
                      const signitoryPWs = compDtls.data.getGroup.signitoryPW;  
                      const owners = compDtls.data.getGroup.owner;  

                      if(signitoryPWs!==pword){Alert.alert("Wrong author credentials")}
                      else if(ownr!==owners){Alert.alert("You are not the author of the group")}
                      else{FetchGrpLonsSts();}
                    }

                    
            
            catch(e){
              console.log(e)
              if(e){
                Alert.alert("Group does not exist; otherwise check inernet connection")
                return;
            }
            }
            setIsLoading(false)
            setChmPhn('');
            setPW('');
            setPhoneContacts("")
            setChmDesc("")
            setChmNm("")
            setmemberPhn("")
                        setIsLoading(false)
                        
            };
              
               

            
              
      
                  
    
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
  const ChmPhns=grpContact
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [grpContact]
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
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Chama Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={grpContact}
                      onChangeText={setChmPhn}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama Phone Number</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    
                      value={pword}
                      onChangeText={setPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama PassWord</Text>
                  </View>

                 
        
                  <TouchableOpacity
                    onPress={gtChmDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to View
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default ChmSignIn;