import { FontAwesome, Fontisto, MaterialCommunityIcons , Entypo, MaterialIcons, Octicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as React from 'react';

import FindKFNdogoLoc from "../../screens/MFNdogo/SignInMFN";
import OtherProds from "../../screens/OtherProds";
import MyAccount from '../../screens/MyAcc';
import Homes from "../../screens/Homes";



import LoanChmz from "../../screens/Ads/Search/LoanChm";
import SrchItemAdz from "../../screens/Ads/Search/SrchItemAd";
import SrchLoanAdz from "../../screens/Ads/Search/SrchLoanAd";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

const HomeTabNavigator = props => {
  return (

    
    <BottomTab.Navigator
     
      >
      <BottomTab.Screen
        name='Home'
        component={Homes}
        options={{
            headerShown: false,
          tabBarIcon: ({color: string}) => (
            <Fontisto name="home" size={25} color={'skyblue'} />
          ),
        }}
      />
      <BottomTab.Screen
        name='MFNdogo'
        component={FindKFNdogoLoc}
        options={{
          headerShown: false,
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="map-marker" size={25} color={'skyblue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='MyAc'
        component={MyAccount}
        options={{
          headerShown: false,
          tabBarIcon: ({color: string}) => (
            <MaterialCommunityIcons name="account" size={25} color={'skyblue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='Pal Deals'
        component={SrchLoanAdz}
        options={{
          headerShown: false,
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="search" size={25} color={'skyblue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='Sales'
        component={SrchItemAdz}
        options={{
          headerShown: false,
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="search" size={25} color={'skyblue'} />
          ),
        }}
      />


<BottomTab.Screen
        name='Other Products'
        component={OtherProds}
        options={{
            headerShown: false,
          tabBarIcon: ({color: string}) => (
            <AntDesign name="stepforward" size={24} color="black" />
          ),
        }}
      />




    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
 export default HomeTabNavigator;