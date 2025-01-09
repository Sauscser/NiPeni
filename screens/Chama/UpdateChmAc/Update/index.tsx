import React, {useEffect, useState} from 'react';

import {  updateCompany, updateGroup} from '../../../../src/graphql/mutations';
import {  getCompany, getGroup,  getSMAccount } from '../../../../src/graphql/queries';
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
import { updateBankAdmin } from '../../../../src/graphql/mutations';


  


const UpdtChm = (props) => {
  const navigation = useNavigation();
  const [SigntryPW, setSigntryPW] = useState("");
  const [groupCnt, setgroupCnt] = useState("");
  const [LnAcCod, setLnAcCod] = useState("");
  const [SMPW, setSMPW] = useState("");
  const[isLoading, setIsLoading] = useState(false);


  
 
        const fetchChmAuthorDtls = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            const userInfo = await Auth.currentAuthenticatedUser();
    
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getSMAccount,{awsemail:userInfo.attributes.email})
                );
                const loanAcceptanceCodes = compDtls.data.getSMAccount.loanAcceptanceCode                
                const pws = compDtls.data.getSMAccount.pw
                const owner = compDtls.data.getSMAccount.owner
               
                const ftchChmDtls = async () =>{
                  if(isLoading){
                    return;
                  }
                  setIsLoading(true);
                  try{
                    const compDtls :any= await API.graphql(
                      graphqlOperation(getGroup,{grpContact:groupCnt})
                      );
                      
                      const grpNames = compDtls.data.getGroup.grpName
                      const statuss = compDtls.data.getGroup.status
                      const owners = compDtls.data.getGroup.owner
                
                        
                                      
                          
                                      const updtChmDtls = async () => {
                                        if(isLoading){
                                          return;
                                        }
                                        setIsLoading(true);
                                        try{
                                            await API.graphql(
                                              graphqlOperation(updateGroup,{
                                                input:{
                                                  grpContact:groupCnt,
                                                  signitoryPW:SigntryPW
                                                }
                                              })
                                            )
                                    
                                            
                                        }
                                        catch(error){if (error){
                                          Alert.alert("Update unsuccessful; Retry")
                                          return
                                        }
                                    }
                                        setIsLoading(false);
                                        Alert.alert(userInfo.attributes.username +" has updated "+grpNames+"'s Chama password");
                                      } 

                                      if(SMPW!==pws)
                                      {
                                          Alert.alert("Wrong Main A/C PW; Prove authorship of Chama");
                                      }

                                      else if(userInfo.attributes.sub !==owners)
                                      {
                                          Alert.alert("You are not the author of the Chama");
                                      }

                                      else if(statuss!=="AccountActive")
                                      {
                                          Alert.alert("This Chama Account is inactive");
                                      }

                                      
                                      else {updtChmDtls();}

        
                                    } catch (error) {
                                      if(error){
                                        Alert.alert("Check internet; otherwise Chama doesnt exist")
                                        return
                                      }
                                    }}

                                    if (userInfo.attributes.sub !== owner)
    {Alert.alert ("Please first create main account")}
    else{
                                    await ftchChmDtls();   }         

            } catch (error) {
                if(error){
                  Alert.alert("Check internet; otherwise Chama doesnt exist")
                  return
                }
              }
         
           

            setIsLoading(false);
              setgroupCnt("");
              setSigntryPW("")
              setSMPW("")
              setLnAcCod("")
          
            }
        
        useEffect(() =>{
          const groupCnts=groupCnt
            if(!groupCnts && groupCnts!=="")
            {
              setgroupCnt("");
              return;
            }
            setgroupCnt(groupCnts);
            }, [groupCnt]
             );

             useEffect(() =>{
                const SigntryPWs=SigntryPW
                  if(!SigntryPWs && SigntryPWs!=="")
                  {
                    setSigntryPW("");
                    return;
                  }
                  setSigntryPW(SigntryPWs);
                  }, [SigntryPW]
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
                        const SMPWs=SMPW
                          if(!SMPWs && SMPWs!=="")
                          {
                            setSMPW("");
                            return;
                          }
                          setSMPW(SMPWs);
                          }, [SMPW]
                           );
  
  
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Group Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={groupCnt}
                      onChangeText={setgroupCnt}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Group Phone</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={SMPW}
                      onChangeText={setSMPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Signitory User PW</Text>
                  </View>       

                  

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={SigntryPW}
                      onChangeText={setSigntryPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>New Group PassWord</Text>
                  </View>                       
        
                  <TouchableOpacity
                    onPress={fetchChmAuthorDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Update Group Details
                    </Text>
                    {isLoading && <ActivityIndicator color={'Blue'} size="large"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default UpdtChm;