import React, {useEffect, useState} from 'react';

import {deleteAdvocate, updateAdvocate, updateCompany} from '../../../../../src/graphql/mutations';
import { getCompany} from '../../../../../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import { useNavigation } from '@react-navigation/native';



import {
  View,
  Text,
 
  TextInput,
  ScrollView,
  
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';


  


const DeregMFAdvForm = (props) => {
  
const client = generateClient()
  const [AdvRegNo, setAdvRegNo] = useState("");
  const[isLoading, setIsLoading]= useState(false);
const navigation = useNavigation();


  const gtCompDtls = async () =>{
    if (isLoading){
      return;
    }
    setIsLoading(true);
    try{
      const compDtls :any= await client.graphql({
        query: getCompany,
        variables: {AdminId:"BaruchHabaB'ShemAdonai2"}
      })
      
        const ActvMFAdv = compDtls.data.getCompany.ttlKFAdvActv
        const ttlKFAdvInActvs = compDtls.data.getCompany.ttlKFAdvInActv

        const KFAdminDtls = async () => {
          
          try{
              await client.graphql({
                query: deleteAdvocate,
                variables: {
                  input:{
                    advregnu:AdvRegNo,
                    
                  }
                }
              }) 
      
              
          }
      
          
          catch(error){if(error){Alert.alert("Error! Access denied!")
      return;} }
      setIsLoading(false);
          

          const updtActAdm = async()=>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
                await client.graphql({
                  query: updateCompany,
                  variables: {
                    input:{
                      AdminId:"BaruchHabaB'ShemAdonai2",
                      ttlKFAdvActv:parseFloat(ActvMFAdv) - 1,
                      ttlKFAdvInActv:parseFloat(ttlKFAdvInActvs) + 1,
                    }
                  }
                }) 
            }
            catch(error){if(error){Alert.alert("Error! Access denied!")
        return;}}
        setIsLoading(false);
          }
          await updtActAdm();
         
        } 
        KFAdminDtls();         
                  
          } catch (error) {
            if(error){Alert.alert("Error! Access denied!")
        return;};
          }
          setIsLoading(false);
          setAdvRegNo("") 
          Alert.alert(AdvRegNo + " successfully deregistered.")
        };    
        
        useEffect(() =>{
          const RegN=AdvRegNo
            if(!RegN && RegN!=="")
            {
              setAdvRegNo("");
              return;
            }
            setAdvRegNo(RegN);
            }, [AdvRegNo]
             );


 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView showsVerticalScrollIndicator={false}>
           
                  <TouchableOpacity style={styles.loanTitleView}
                  onPress
                  ={() => navigation.navigate('Homesss') }>
                    <Text style={styles.title}>Go Home</Text>
                  </TouchableOpacity>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={AdvRegNo}
                      onChangeText={setAdvRegNo}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFAdvocate License Number</Text>
                  </View>
        
                  
        
                  <TouchableOpacity
                    onPress={gtCompDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to DeRegister 
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default DeregMFAdvForm;