import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList, Alert} from 'react-native';
import { getSMAccount, listSMLoansCovereds } from '../../../../../../../src/graphql/queries';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../../../components/MyAc/RepyLn/Vw2RpayCov";
import styles from './styles';
import { useRoute } from '@react-navigation/native';

const FetchSMCovLns = props => {

  const route = useRoute()
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);

    const fetchUsrDtls = async () => {

      const userInfo = await Auth.currentAuthenticatedUser();
      try {
              const MFNDtls: any = await API.graphql(
                  graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}
              ),);

              const balances = MFNDtls.data.getSMAccount.balance;
              const owner = MFNDtls.data.getSMAccount.owner;

        const fetchLoanees = async () => {
            setLoading(true);
            const userInfo = await Auth.currentAuthenticatedUser();
              
        
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listSMLoansCovereds, 
                { filter: {
                    and: {
                      loanerEmail: { eq: route.params.memberPhn},
                      lonBala:{gt:0}
                      
                    }
                  }}
                  ));
              setLoanees(Lonees.data.listSMLoansCovereds.items);
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
          };
          if (userInfo.attributes.sub!==owner) {
            Alert.alert("Please first create a main account")
            return;
          }  else {
           await fetchLoanees();}
} catch (e) {
console.log(e);
} finally {
setLoading(false);
}
};

useEffect(() => {
fetchUsrDtls();
}, [])   
  return (
    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Loanees}
        renderItem={({item}) => <LnerStts Loanee={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchUsrDtls}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> My Loaners</Text>
            <Text style={styles.label2}> (Please swipe down to load)</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMCovLns;