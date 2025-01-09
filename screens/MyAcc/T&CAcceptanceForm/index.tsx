import React, {useState, useRef,useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../components/CompTC";
import styles from './styles';
import { listReqLoans } from '../../../../src/graphql/queries';
import { listCompanies } from '../../../src/graphql/queries';



const FetchSMNonCovLns = props => {

    const[LneePhn, setLneePhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [UsrEmail, setUsrEmail] = useState(null);
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');

  const [itemPrys, setitemPrys] = useState('0');
  const [itemTwn, setitemTwn] = useState('0');
  const [lnPrsntg, setlnPrsntg] = useState('0');
  const [rpymntPrd, setrpymntPrd] = useState('0');

  
  


    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setLneePhn(userInfo.attributes.email);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {

            

              const Lonees:any = await API.graphql(graphqlOperation(listCompanies, 
               
                  ));
              setLoanees(Lonees.data.listCompanies.items);
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
            setChmPhn('');
            setPW('');
            setAWSEmail("")
            setChmDesc("")
            setChmNm("")
            setChmRegNo("")
            setMmbaID("")
            setSign2Phn("");
            setrpymntPrd("");
            setlnPrsntg("");
            setitemTwn("");
            setitemPrys("");
          };

          useEffect(() => {
            fetchLoanees();
          }, []);
          
          
  return (
    
    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Loanees}
        renderItem={({item}) => <LnerStts SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> Swipe down to load</Text>
            <Text style={styles.label2}> (Accept/Decline at the End of the Read)</Text>
          </>
        )}
      />

</View>


  );
};

export default FetchSMNonCovLns;