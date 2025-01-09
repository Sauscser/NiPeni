import React, {useEffect, useState} from 'react';



import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  
 
} from 'react-native';
import styles from './styles';



const MFNSignIn = (props) => {  
  const navigation = useNavigation();

  const [town, settown] = useState("");
   
  
  const VwMFNAc = () => {
    navigation.navigate("ViewAdvs", {town});
  };

    
    


             useEffect(() =>{
              const towns=town
                if(!towns && towns!=="")
                {
                  settown("");
                  return;
                }
                settown(towns);
                }, [town]
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
                    
                      value={town}
                      onChangeText={settown}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Convenient Town</Text>
                  </View>
        
                  
                  <TouchableOpacity
                    onPress={VwMFNAc}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Search
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default MFNSignIn;