import React, {useEffect, useState} from 'react';

import {  updateAgent, updateCompany, updateGroup, updateGrpMembers, updateSAgent, updateSMAccount} from '../../../src/graphql/mutations';
import {  getAgent, getBankAdmin, getCompany, getGroup, getGrpMembers, getSAgent, getSMAccount } from '../../../src/graphql/queries';
import {  graphqlOperation, API,Auth} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import { updateBankAdmin } from '../../../src/graphql/mutations';


  


const UpdtMFNPW = (props) => {
  const navigation = useNavigation();
  const [SigntryPW, setSigntryPW] = useState("");
  const [AdminID, setAdminId] = useState("");
  const [LnAcCod, setLnAcCod] = useState("");
  const [NewAdmnPW, setNewAdmnPW] = useState("");
  const [OldAdmnPW, setOldAdmnPW] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  const[ownr, setownr] = useState(null);
  const[names, setName] = useState(null);
  
  
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    
    setName(userInfo.username);
    setownr(userInfo.attributes.sub);
    
    
  };
  useEffect(() => {
    fetchUser();
  }, []);

  
        const fetchMFNDtls = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
              const MFNDtls :any= await API.graphql(
                graphqlOperation(getAgent,{phonecontact:AdminID})
                );
                const pws = MFNDtls.data.getAgent.pw   
                const owners = MFNDtls.data.getAgent.owner 
                const acStatuss = MFNDtls.data.getAgent.status            
                
                          
                                      const updtMFNDtls = async () => {
                                        if(isLoading){
                                          return;
                                        }
                                        setIsLoading(true);
                                        try{
                                            await API.graphql(
                                              graphqlOperation(updateAgent,{
                                                input:{
                                                  phonecontact:AdminID,
                                                  pw:NewAdmnPW
                                                }
                                              })
                                            )
                                    
                                            
                                        }
                                        catch(error){if(error){
                                          if (error){
                                            Alert.alert("Update unsuccessful; Retry")
                                            return
                                          }
                                      } 
                                    }
                                        setIsLoading(false);
                                        Alert.alert(names +", You have successfully updated your PassWord");
                                      } 

                                      if(pws!==OldAdmnPW)
                                      {
                                          Alert.alert("Wrong Old Password; call HR");
                                      }
                                      
                                      else if(ownr!==owners)
                                      {
                                          Alert.alert("You are not the owner of this MFNdogo A/c");
                                      }

                                      else if(acStatuss!=="AccountActive")
                                      {
                                          Alert.alert("This MFNdogo Account is inactive");
                                      }

                                      
                                      else {updtMFNDtls();}

        
                                

            } catch (error) {
                if(error){
                  Alert.alert("Retry or update app or call customer care")
                  return
                }
              }
         
           

            setIsLoading(false);
              setNewAdmnPW("");
              setSigntryPW("")
              setOldAdmnPW("")
              setAdminId("")
          
            }
        
        useEffect(() =>{
          const NewAdmnPWs=NewAdmnPW
            if(!NewAdmnPWs && NewAdmnPWs!=="")
            {
              setNewAdmnPW("");
              return;
            }
            setNewAdmnPW(NewAdmnPWs);
            }, [NewAdmnPW]
             );

             useEffect(() =>{
                const OldAdmnPWs=OldAdmnPW
                  if(!OldAdmnPWs && OldAdmnPWs!=="")
                  {
                    setOldAdmnPW("");
                    return;
                  }
                  setOldAdmnPW(OldAdmnPWs);
                  }, [OldAdmnPW]
                   );

                   useEffect(() =>{
                    const LnAcCods=LnAcCod
                      if(!LnAcCods && LnAcCods!=="")
                      {
                        setLnAcCod("");
                        return;
                      }
                      setLnAcCod(LnAcCods);
                      }, [LnAcCod]
                       );

                       useEffect(() =>{
                        const AdminIDs=AdminID
                          if(!AdminIDs && AdminIDs!=="")
                          {
                            setAdminId("");
                            return;
                          }
                          setAdminId(AdminIDs);
                          }, [AdminID]
                           );
  
  
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill MFN Details Below</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={AdminID}
                      onChangeText={setAdminId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFNdogo Phone</Text>
                  </View> 
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={OldAdmnPW}
                      onChangeText={setOldAdmnPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Old MFN PW</Text>
                  </View>   

                       

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={NewAdmnPW}
                      onChangeText={setNewAdmnPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>New MFN PW</Text>
                  </View>     

                                   
        
                  <TouchableOpacity
                    onPress={fetchMFNDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Update MFN Details
                    </Text>
                    {isLoading && <ActivityIndicator color={'Blue'} size="large"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default UpdtMFNPW;