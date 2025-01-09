import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const RegKFKubwa = () => {
  const navigation = useNavigation();

  // Navigation Handlers
  const goToBuyFloat = () => navigation.navigate('BuyFltFm');
  const RegPwnBrkrss = () => navigation.navigate('RegPwnBrkrs');
  const AdjustUsrLimitsss = () => navigation.navigate('AdjustUsrLimitss');
  const DActvteMFAds = () => navigation.navigate('DActvteMFAd');
  const PwnBrkrRegss = () => navigation.navigate('PwnBrkrRegss');
  const ChamaRegss = () => navigation.navigate('ChamaRegss');
  const DActivateMFN = () => navigation.navigate('DActvteMFN');
  const DActivateMFK = () => navigation.navigate('DActvteMFK');
  const DActivateMFUsr = () => navigation.navigate('DActvteMFUsr');
  const UpdateMFAdminPWss = () => navigation.navigate('UpdateMFAdminPWs');
  const BLUsrsss = () => navigation.navigate('BLUsrss');
  const SendNonLonsRevSgnIns = () =>
    navigation.navigate('SendNonLonsRevSgnIn');
  const AddMFndogoss = () => navigation.navigate('AddMFNdogos');
  const AddMFKubwass = () => navigation.navigate('AddMFKubwas');
  const GoHome = () => navigation.navigate('Homesss');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.adminImage}>
        {/* Clients Section */}
        <View style={styles.clientsView}>
          <LinearGradient
            colors={['#ffffff', '#e58d29']}
            style={styles.gradientHeader}
          >
           <Pressable
                  onPress={GoHome}
                  style={styles.ClientsPressables}
                >
                 
                </Pressable>
                <Text style={styles.clientsPressableText}>Go Home</Text>
           
          </LinearGradient>

          <View style={styles.viewForClientsAndTitle}>
            <View style={styles.viewForClientsCategories}>
              <Text style={styles.salesPressableText}>MFNdogo</Text>
              <View style={styles.viewForClientsAndTitleMFNdogo}>
                <Pressable
                  onPress={DActivateMFN}
                  style={styles.ClientsPressables}
                >
                  <Text style={styles.clientsPressableText}>DeReg</Text>
                </Pressable>
                <Pressable
                  onPress={goToBuyFloat}
                  style={styles.ClientsPressables}
                >
                  <Text style={styles.clientsPressableText}>Buy Flt</Text>
                </Pressable>
                <Pressable
                  onPress={AddMFndogoss}
                  style={styles.ClientsPressables}
                >
                  <Text style={styles.clientsPressableText}>Add</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.viewForClientsCategories}>
              <Text style={styles.salesPressableText}>MFKubwa</Text>
              <View style={styles.viewForClientsPressables}>
                <Pressable
                  onPress={DActivateMFK}
                  style={styles.ClientsPressables}
                >
                  <Text style={styles.clientsPressableText}>DeRegMFK</Text>
                </Pressable>
                <Pressable onPress={ChamaRegss} style={styles.ClientsPressables}>
                  <Text style={styles.clientsPressableText}>RegChm</Text>
                </Pressable>
                <Pressable
                  onPress={AddMFKubwass}
                  style={styles.ClientsPressables}
                >
                  <Text style={styles.clientsPressableText}>Add</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.viewForClientsCategories}>
              <Text style={styles.salesPressableText}>Advocate</Text>
              <View style={styles.viewForClientsPressables}>
                <Pressable
                  onPress={DActvteMFAds}
                  style={styles.ClientsPressables}
                >
                  <Text style={styles.clientsPressableText}>DeRegMFAdv</Text>
                </Pressable>
                <Pressable
                  onPress={PwnBrkrRegss}
                  style={styles.ClientsPressables}
                >
                  <Text style={styles.clientsPressableText}>RegPwnBrkr</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Others Section */}
        <View style={styles.acEarningsView}>
          <Text style={styles.salesText}>Others</Text>
          <View style={styles.viewForAcEarningsPressables}>
            <Pressable
              onPress={UpdateMFAdminPWss}
              style={styles.earningsAcPressables}
            >
              <Text style={styles.earningsAcPressableText}>UpdatePW</Text>
            </Pressable>
            <Pressable
              onPress={RegPwnBrkrss}
              style={styles.earningsAcPressables}
            >
              <Text style={styles.earningsAcPressableText}>RegLner</Text>
            </Pressable>
            <Pressable
              onPress={SendNonLonsRevSgnIns}
              style={styles.earningsAcPressables}
            >
              <Text style={styles.earningsAcPressableText}>Reverse</Text>
            </Pressable>
          </View>
        </View>

        {/* SM Users Section */}
        <View style={styles.acEarningsView}>
          <Text style={styles.salesText}>SM Users</Text>
          <View style={styles.viewForAcEarningsPressables}>
            <Pressable
              onPress={DActivateMFUsr}
              style={styles.earningsAcPressables}
            >
              <Text style={styles.earningsAcPressableText}>DActivtUsr</Text>
            </Pressable>
            <Pressable onPress={BLUsrsss} style={styles.earningsAcPressables}>
              <Text style={styles.earningsAcPressableText}>BLUsr</Text>
            </Pressable>
            <Pressable
              onPress={AdjustUsrLimitsss}
              style={styles.earningsAcPressables}
            >
              <Text style={styles.earningsAcPressableText}>AdjUsrLim</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  
  },
  adminImage: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  clientsView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  gradientHeader: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  salesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  salesText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  viewForClientsAndTitle: {
    padding: 16,
  },
  viewForClientsCategories: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e58d29',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  salesPressableText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b5998',
    marginBottom: 8,
  },
  viewForClientsAndTitleMFNdogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  viewForClientsPressables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  ClientsPressables: {
    backgroundColor: '#e58d29',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  clientsPressableText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  acEarningsView: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  viewForAcEarningsPressables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  earningsAcPressables: {
    backgroundColor: '#3b5998',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  earningsAcPressableText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RegKFKubwa;
