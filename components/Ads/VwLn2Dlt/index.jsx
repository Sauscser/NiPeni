import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { generateClient } from 'aws-amplify/api';


import { deleteRafikiLnAd } from '../../../src/graphql/mutations';





const ViewSMDeposts = ({SMAc}) => {
 const {
    
       
       rafikiName,  
       rafikicntct,
       id,
       rafikiamnt,
       rafikidesc,  
       rafikiprcntg,
       rafikirpymntperiod,


                 
   } = SMAc ;

   const [isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   
   const SndChmMmbrMny = () => {
      navigation.navigate ("DtldSalesInfo", {id})
   }

   const DeleteSlsAd = async()=>{
      if(isLoading){
        return;
      }
      setIsLoading(true);
      const client = generateClient();
          try{
              await client.graphql ({
                query: deleteRafikiLnAd,
                variables:
                {
                  input:{
                    input:{id:id}
                  }
                }
              })
          }
          catch(error){
            console.log(error)
            if(error){
              Alert.alert("Check your internet")
              return;
            }
          }
          
            setIsLoading(false)
            Alert.alert("Ad deleted. Refresh to load other ads")
        }
  
        
   
    return (
      <TouchableOpacity style={styles.summaryContainer} onPress={DeleteSlsAd}>
             <Text style={styles.sectionTitle}>General Information Summary</Text>
       
             <ScrollView>
               <Text style={styles.infoText}>Loaner Name : {rafikiName}</Text>
               <Text style={styles.infoText}>Loaner Contact: {rafikicntct}</Text>
       
               
               <Text style={styles.infoText}>Loan Amount: {rafikiamnt.toFixed(2)}</Text>
              
             </ScrollView>
           </TouchableOpacity>
    );
}; 

export default ViewSMDeposts

 const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    topBar: {
      padding: 10,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems: 'flex-start',
    },
    headerContainer: {
      alignItems: 'center',
      padding: 10,
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