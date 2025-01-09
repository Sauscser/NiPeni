import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';
import styles from './styles';



     
     export interface ChmCvLnSttusRec {
         Loanee: {
           id: string,
           itemName: string,
           sellerContact:string,
           buyerContact: string,
           
           SellerName:string,
        
           amountSold: number,
           amountexpectedBack: number,
           amountRepaid: number,
           repaymentPeriod: number,
           lonBala:number,
           description: string,
           status: string,
           advregnu: string,
           createdAt:string,
           updatedAt:string,
             
         }}
     
     const CredSlrCvLnStts = (props:ChmCvLnSttusRec) => {
        const {
         Loanee: {
           id,
           itemName,
           SellerName,
           sellerContact,
           lonBala,
         
        }} = props ;
        const navigation = useNavigation();
     
        const SndChmMmbrMny = () => {
           navigation.navigate("RpayCredSlrCovs", {id})
        }
         return (
           <Pressable 
           onPress={SndChmMmbrMny}
           style = {styles.container}>            
                 <View style = {{alignItems:"center"}}>
                 <Text style = {styles.loanAdvert}>                       
                            {/*loaner details */}   
                            {SellerName}               
                         </Text>
                 </View>
                 
                          <Text style = {styles.ownerName}>                       
                            {/*loaner details */}   
                            Loan Id: {id}                 
                         </Text>

                        
                         
                         <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Item Name: {itemName}                 
                    </Text> 
     
                         <Text style = {styles.interest}>                       
                            {/* interest*/}
                            Loan Balance(Ksh): {lonBala.toFixed(2)}                    
                         </Text> 
                         
             
                     
             </Pressable>
         );
     }; 
     
     export default CredSlrCvLnStts
     