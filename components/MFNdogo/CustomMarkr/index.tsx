import React, { useState, useEffect } from 'react';
import {View, Text, Alert, Pressable} from 'react-native';
import {Marker} from 'react-native-maps';
import {generateClient} from 'aws-amplify/api';
import { getCompany } from '../../../src/graphql/queries';
import { useNavigation } from '@react-navigation/native';




const CustomMarker = props => {
  const [Alrt, setAlrt] = useState ( );
  const navigation = useNavigation();
  const client = generateClient();
  const VwMFNDtls = () => {
    navigation.navigate ("VwMFNAcDtls", {phonecontact})
 }
  

  const gtCompDtls = async () =>{
    
      
    try{
      const compDtls :any= await client.graphql({
        query: getCompany,
        variables: {AdminId:"BaruchHabaB'ShemAdonai2"}
      })
     
  const compcom = compDtls.data.getCompany.companyCom
        setAlrt(compcom)
        
      }
      
      catch(e){
        console.log(e)
       
      }};
  
      useEffect(() => {
        gtCompDtls();
      }, []);
    const {coordinate, name, onPress, isSelected, phonecontact, town, longitude, latitude, MFNWithdrwlFee, phone} = props;
    return (
      <Marker coordinate={coordinate} onPress={VwMFNDtls}>
        <View
          style={{
            backgroundColor: 'black',
            padding: 3,
            borderRadius: 5,
            borderColor: 'green',
            borderWidth: 1,
            flexDirection: "column"
          }}>
            
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              fontWeight: 'bold',
              
            }}>
           {MFNWithdrwlFee} %
          </Text>
          
        </View>
      </Marker>
    );
  };
  
  export default CustomMarker;