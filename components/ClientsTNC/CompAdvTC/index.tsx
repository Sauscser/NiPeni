import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';


import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      AdminId:string,
      AdvocateTC:string
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        AdminId,
        AdvocateTC
   }} = props ;

   const[isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   

   



const CreateSMAcs = () => {
  navigation.navigate('MFAdvocateReg');
};

const GoBack = () => {
  navigation.navigate('Homesss');
};
 


    return (
        
                  
                  
            <View style = {{marginTop:"10%",  alignItems: 'center',
              justifyContent: 'center'}}>

                  
                       
                      <View >
                      <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      {AdvocateTC}       
                    </Text>
                    </View>  
                     
                    <View style = {styles.viewForPressables2}>
                    <View>
                    <Pressable
                      onPress={CreateSMAcs}
                      style = {styles.loanFriendButton}
                      >            
                        <Text>Accept</Text>            
                    </Pressable>
                    </View>   
                    <View>
                    <Pressable
                      onPress={GoBack}
                      style = {styles.loanFriendButton}>            
                        <Text>Decline</Text>            
                    </Pressable>  
                    </View>
                     
                    </View>
                      

      
            </View>
            
                
        
    );
}; 

export default SMCvLnStts