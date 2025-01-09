import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { listAgents } from '../../../src/graphql/queries';
import * as Location from 'expo-location';
import { generateClient } from 'aws-amplify/api';
import { useRoute, useNavigation } from '@react-navigation/core';
import CustomMarker from '../../../components/MFNdogo/CustomMarkr';

const GenralShpMpViewThree = props => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [MFN, setMFN] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  const client = generateClient();
  const flatlist = useRef();
  const map = useRef();

  const fetchMFN = async () => {
    try {
      const response = await client.graphql({
        query: listAgents,
        variables: {
          filter: {
            and: {
              town: { contains: route.params.town },
            },
          },
        },
      });

      const mfns = response.data.listAgents.items;
      setMFN(mfns);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMFN();
  }, []);

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = MFN.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({ index });

    const selectedPlace = MFN[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* "Go Home" Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Homesss')}
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          backgroundColor: '#1E90FF',
          padding: 10,
          borderRadius: 5,
          zIndex: 1, // Ensures button stays on top of the MapView
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Home</Text>
      </TouchableOpacity>

      {/* MapView with Markers */}
      <MapView
        ref={map}
        style={{ width: '100%', height: '100%' }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: -0.5261561709274195,
          longitude: 37.58980744767201,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {MFN.map(place => (
          <CustomMarker
            key={place.phonecontact}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            MFNWithdrwlFee={place.MFNWithdrwlFee}
            name={place.name}
            phonecontact={place.phonecontact}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default GenralShpMpViewThree;
