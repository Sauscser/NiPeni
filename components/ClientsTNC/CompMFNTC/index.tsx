import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   StyleSheet, Pressable, TouchableOpacity} from 'react-native';

export interface SMAccount {
    SMAc: {
      MFNdogoTC:string
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        MFNdogoTC
   }} = props ;

   
   const navigation = useNavigation();
   const Decline = () => {
    navigation.navigate('Homesss');
  };

const CreateSMAcs = () => {
  navigation.navigate('RegisterMFNdogo');
};

 return (
         
                   
                   
             <View style = {{marginTop:"10%"}}>
 
                   
 <View >
                       
                       <Text style = {styles.ownerName}>                       
                        {/*loaner details */}   
                       {MFNdogoTC}       
                     </Text>
                     </View>
                      
                     <View style = {styles.viewForPressables2}>
                     
                     <Pressable
                       onPress={CreateSMAcs}
                       style = {styles.loanFriendButton}
                       >            
                         <Text>Accept</Text>            
                     </Pressable>
                        
                     
                     <Pressable
                       onPress={Decline}
                       style = {styles.loanFriendButton}>            
                         <Text>Decline</Text>            
                     </Pressable>  
                     
                      
                     </View>
                       
 
       
             </View>
             
                 
         
     );
 }; 
 
 
 
 const styles = StyleSheet.create({
   container: {
     margin: 20,
     padding: 10,
     backgroundColor: '#f8f9fa', // Light background for contrast
     borderRadius: 10,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     shadowRadius: 5,
     elevation: 3,
   },
 
   ownerName: {
     fontSize: 18,
     fontWeight: 'bold',
     color: '#ad1c65', // Retained theme color
     textAlign: 'center',
     marginBottom: 10,
   },
 
   viewForPressables2: {
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     alignItems: 'center',
     marginVertical: 20,
   },
 
   loanFriendButton: {
     backgroundColor: 'skyblue', // Facebook blue for buttons
     paddingVertical: 12,
     paddingHorizontal: 25,
     borderRadius: 8,
     alignItems: 'center',
     justifyContent: 'center',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.2,
     shadowRadius: 3,
     elevation: 2,
   },
 
   loanFriendButtonText: {
     fontSize: 16,
     fontWeight: '600',
     color: '#fff',
   },
 
   subTitle: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#88124e',
     marginTop: 20,
     textDecorationLine: 'underline',
     textAlign: 'center',
   },
 
   viewForPressables3: {
     backgroundColor: '#e9f7f7', // Subtle background to separate content
     marginHorizontal: 15,
     padding: 15,
     borderRadius: 15,
     alignItems: 'center',
   },
 
   chamaLoanAndCreditSalesButton: {
     backgroundColor: '#ffffff',
     padding: 15,
     borderRadius: 10,
     borderColor: '#d3d3d3',
     borderWidth: 1,
     marginVertical: 10,
     width: '90%',
     alignSelf: 'center',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     shadowRadius: 5,
     elevation: 2,
   },
 
   ChamaLoanAndCreditSalesText: {
     fontSize: 14,
     fontWeight: '600',
     color: '#333',
     textAlign: 'center',
   },
 
   title: {
     fontSize: 22,
     fontWeight: '700',
     color: 'skyblue',
     textAlign: 'center',
     marginBottom: 15,
   },
 });

export default SMCvLnStts