import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Button } from '../components/Button';

export default function SelectHouseUbication({ navigation }: RootTabScreenProps<'SelectHouseUbication'>) {
  
  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const mapRef = React.useRef<MapView>(null);
  const [location, setLocation] = React.useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = React.useState<string| null>(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest
      });
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        ref={mapRef}
        showsMyLocationButton={true}
        showsUserLocation={true}
        onPress={(event)=> {
          setPin(event.nativeEvent.coordinate);
        }}
        onMapReady={async () => {
          let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest
          });
          /* mapRef.current?.animateToRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }) */
          mapRef.current?.setCamera({
            center: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
            zoom: 19
          })
        }}
      >
        
        <Marker
          draggable
          coordinate={pin}
          onDragEnd={e => {
            setPin(e.nativeEvent.coordinate);
          }} />
      </MapView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width:'100%',
          zIndex: 20
        }}
      >
        <Button 
          style={
            {
              backgroundColor: '#397cf5',
              borderRadius: 5,
              paddingVertical: 15,
            }
          }

          styleText={{
            color:'white',
            textAlign: 'center'
          }}
          onPress={() => {
            navigation.push('Root', {
              screen: 'EnterKWS'
            })
          }}
        >
          Select House
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
