import React, {useEffect, useState} from 'react';

import {createBizna, createChamaMembers, createGroup,   createPersonel,   updateCompany} from '../../../src/graphql/mutations';
import { getBizna, getCompany, getSMAccount, listChamasRegConfirms, vwViaPhonss,  } from '../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  
  
  TextInput,
  ScrollView,
  
  
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

export type UserReg = {
  usr:String;
  
}

const CreateChama = (props:UserReg) => {

  const{usr} = props;

  


  const navigation = useNavigation();

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [phoneContact, setPhoneContact] = useState(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');


  const WorkerID = ChmDesc+ChmRegNo


    
      const ChckUsrExistence = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        const userInfo = await Auth.currentAuthenticatedUser();
      
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(getSMAccount, { awsemail:ChmPhn}),
                        
          )

          const nationalidsss = UsrDtls.data.getSMAccount.nationalid;
          const namess = UsrDtls.data.getSMAccount.name;
          const awsemails = UsrDtls.data.getSMAccount.awsemail;
          const owners = UsrDtls.data.getSMAccount.owner;

          const PckBiznaDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
              const BznaDtls:any = await API.graphql(
                graphqlOperation(getBizna, { BusKntct:ChmRegNo}),
                            
              )
    
              const pws = BznaDtls.data.getBizna.pw;
              const ownerz = BznaDtls.data.getBizna.owner;
              const BiznaNames = BznaDtls.data.getBizna.busName;
              const Admin1 = BznaDtls.data.getBizna.Admin1;
              const Admin2 = BznaDtls.data.getBizna.Admin2;
              const Admin3 = BznaDtls.data.getBizna.Admin3;
              const Admin4 = BznaDtls.data.getBizna.Admin4;
              const Admin5 = BznaDtls.data.getBizna.Admin5;
              const Admin6 = BznaDtls.data.getBizna.Admin6;
              const Admin7 = BznaDtls.data.getBizna.Admin7;
              const Admin8 = BznaDtls.data.getBizna.Admin8;
              const Admin9 = BznaDtls.data.getBizna.Admin9;
              const Admin10 = BznaDtls.data.getBizna.Admin10;
              const Admin11 = BznaDtls.data.getBizna.Admin11;
              const Admin12 = BznaDtls.data.getBizna.Admin12;
              const Admin13 = BznaDtls.data.getBizna.Admin13;
              const Admin14 = BznaDtls.data.getBizna.Admin14;
              const Admin15 = BznaDtls.data.getBizna.Admin15;
              const Admin16 = BznaDtls.data.getBizna.Admin16;
              const Admin17 = BznaDtls.data.getBizna.Admin17;
              const Admin18 = BznaDtls.data.getBizna.Admin18;
              const Admin19 = BznaDtls.data.getBizna.Admin19;
              const Admin20 = BznaDtls.data.getBizna.Admin20;
              const Admin21 = BznaDtls.data.getBizna.Admin21;
              const Admin22 = BznaDtls.data.getBizna.Admin22;
              const Admin23 = BznaDtls.data.getBizna.Admin23;
              const Admin24 = BznaDtls.data.getBizna.Admin24;
              const Admin25 = BznaDtls.data.getBizna.Admin25;
              const Admin26 = BznaDtls.data.getBizna.Admin26;
              const Admin27 = BznaDtls.data.getBizna.Admin27;
              const Admin28 = BznaDtls.data.getBizna.Admin28;
              const Admin29 = BznaDtls.data.getBizna.Admin29;
              const Admin30 = BznaDtls.data.getBizna.Admin30;
              const Admin31 = BznaDtls.data.getBizna.Admin31;
              const Admin32 = BznaDtls.data.getBizna.Admin32;
              const Admin33 = BznaDtls.data.getBizna.Admin33;
              const Admin34 = BznaDtls.data.getBizna.Admin34;
              const Admin35 = BznaDtls.data.getBizna.Admin35;
              const Admin36 = BznaDtls.data.getBizna.Admin36;
              const Admin37 = BznaDtls.data.getBizna.Admin37;
              const Admin38 = BznaDtls.data.getBizna.Admin38;
              const Admin39 = BznaDtls.data.getBizna.Admin38;
              const Admin40 = BznaDtls.data.getBizna.Admin40;
              const Admin41 = BznaDtls.data.getBizna.Admin41;
              const Admin42 = BznaDtls.data.getBizna.Admin42;
              const Admin43 = BznaDtls.data.getBizna.Admin43;
              const Admin44 = BznaDtls.data.getBizna.Admin44;
              const Admin45 = BznaDtls.data.getBizna.Admin45;
              const Admin46 = BznaDtls.data.getBizna.Admin46;
              const Admin47 = BznaDtls.data.getBizna.Admin47;
              const Admin48 = BznaDtls.data.getBizna.Admin48;
              const Admin49 = BznaDtls.data.getBizna.Admin49;
              const Admin50 = BznaDtls.data.getBizna.Admin50;
              
              
      const onCreateNewSMAc = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          await API.graphql(
          graphqlOperation(createPersonel, {
          input: {
            BusinessRegNo: ChmRegNo,
            phoneKontact:ChmPhn,
            name: namess,
            workerId: WorkerID,
            workId:ChmDesc,
            email: awsemails,
            nationalid:nationalidsss,
            BiznaName:BiznaNames,
            ownrsss: owners,
                  },
                }),
              );
              
            } catch (error) {
              if (error){
                Alert.alert("Error! Access denied!")
                return
              }
            
            }
            Alert.alert("Sales Officer added successfully")
            
            setIsLoading(false);
            
            
          };
          if (pws!==pword){
            Alert.alert("Wrong Business password")
          }

          else if (ownerz === userInfo.attributes.sub 
            ||
            Admin1 === userInfo.attributes.email
            ||
            Admin2 === userInfo.attributes.email 
            ||
            Admin3 === userInfo.attributes.email
            ||
            Admin4 === userInfo.attributes.email 
            ||
            Admin5 === userInfo.attributes.email
            ||
            Admin6 === userInfo.attributes.email 
            ||
            Admin7 === userInfo.attributes.email
            ||
            Admin8 === userInfo.attributes.email 
            ||
            Admin9 === userInfo.attributes.email
            ||
            Admin10 === userInfo.attributes.email 
            ||
            Admin11 === userInfo.attributes.email
            ||
            Admin12 === userInfo.attributes.email 
            ||
            Admin13 === userInfo.attributes.email
            ||
            Admin14 === userInfo.attributes.email 
            ||
            Admin14 === userInfo.attributes.email
            ||
            Admin15 === userInfo.attributes.email 
            ||
            Admin16 === userInfo.attributes.email
            ||
            Admin17 === userInfo.attributes.email 
            ||
            Admin18 === userInfo.attributes.email
            ||
            Admin19 === userInfo.attributes.email 
            ||
            Admin20 === userInfo.attributes.email
            ||
            Admin21 === userInfo.attributes.email 
            ||
            Admin22 === userInfo.attributes.email
            ||
            Admin23 === userInfo.attributes.email 
            ||
            Admin24 === userInfo.attributes.email
            ||
            Admin25 === userInfo.attributes.email 
            ||
            Admin26 === userInfo.attributes.email
            ||
            Admin27 === userInfo.attributes.email 
            ||
            Admin28 === userInfo.attributes.email
            ||
            Admin29 === userInfo.attributes.email 
            ||
            Admin30 === userInfo.attributes.email
            ||
            Admin31 === userInfo.attributes.email 
            ||
            Admin32 === userInfo.attributes.email
            ||
            Admin33 === userInfo.attributes.email 
            ||
            Admin34 === userInfo.attributes.email
            ||
            Admin35 === userInfo.attributes.email 
            ||
            Admin36 === userInfo.attributes.email
            ||
            Admin37 === userInfo.attributes.email 
            ||
            Admin38 === userInfo.attributes.email
            ||
            Admin39 === userInfo.attributes.email 
            ||
            Admin40 === userInfo.attributes.email
            ||
            Admin41 === userInfo.attributes.email 
            ||
            Admin42 === userInfo.attributes.email
            ||
            Admin43 === userInfo.attributes.email 
            ||
            Admin44 === userInfo.attributes.email
            ||
            Admin45 === userInfo.attributes.email 
            ||
            Admin46 === userInfo.attributes.email
            ||
            Admin47 === userInfo.attributes.email 
            ||
            Admin48 === userInfo.attributes.email
            ||
            Admin49 === userInfo.attributes.email 
            ||
            Admin50 === userInfo.attributes.email 
            ){
              onCreateNewSMAc();
          }
          else{
         
            Alert.alert("Neither the Creator nor Admin of this business")
          }
      } catch (error) {
        
        if (error){Alert.alert("Error! Access denied!")
      return}
      }
  
      setIsLoading(false)
                
    }

    await PckBiznaDtls();
      

    } catch (e) {
      console.error(e);

      if (e){Alert.alert("Error! Access denied!")
    return}
    }

    setIsLoading(false)
              setChmPhn('');
              setPW('');
              
              setChmDesc("")
              setChmNm("")
              setChmRegNo("")
              setMmbaID("")
              setSign2Phn("");
  }

    
      useEffect(() =>{
        const MmbaIDs=MmbaID
          if(!MmbaIDs && MmbaIDs!=="")
          {
            setMmbaID("");
            return;
          }
          setMmbaID(MmbaIDs);
          }, [MmbaID]
           );
           
           useEffect(() =>{
        const ChmRegNos=ChmRegNo
          if(!ChmRegNos && ChmRegNos!=="")
          {
            setChmRegNo("");
            return;
          }
          setChmRegNo(ChmRegNos);
          }, [ChmRegNo]
           );
           
           

      useEffect(() =>{
        const ChmNms=ChmNm
          if(!ChmNms && ChmNms!=="")
          {
            setChmNm("");
            return;
          }
          setChmNm(ChmNms);
          }, [ChmNm]
           );

           useEffect(() =>{
            const ChmDescs=ChmDesc
              if(!ChmDescs && ChmDescs!=="")
              {
                setChmDesc("");
                return;
              }
              setChmDesc(ChmDescs);
              }, [ChmDesc]
               );

useEffect(() =>{
  const ChmPhns=ChmPhn
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [ChmPhn]
     );

     useEffect(() =>{
      const pws=pword
        if(!pws && pws!=="")
        {
          setPW("");
          return;
        }
        setPW(pws);
        }, [pword]
         );

         useEffect(() =>{
          const Sign2Phns=Sign2Phn
            if(!Sign2Phns && Sign2Phns!=="")
            {
              setSign2Phn("");
              return;
            }
            setSign2Phn(Sign2Phns);
            }, [Sign2Phn]
             );

        
          return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                     placeholder="Email"
                      value={ChmPhn}
                      onChangeText={setChmPhn}
                     
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Sales Officer Email</Text>
                  </View>

                  
                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                     placeholder="+2547xxxxxxxx"
                      value={ChmRegNo}
                      onChangeText={setChmRegNo}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Phone</Text>
                  </View>

                 
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business PassWord</Text>
                  </View>

                  <View style={styles.sendAmtViewDesc}>
                    <TextInput
                      value={ChmDesc}
                      onChangeText={setChmDesc}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Sales Officer Work ID</Text>
                  </View>

        
                  <TouchableOpacity
                    onPress={ChckUsrExistence}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Register Sales Officer
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateChama;