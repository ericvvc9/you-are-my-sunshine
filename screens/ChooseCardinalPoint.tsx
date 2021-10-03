import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as Location from 'expo-location';

export default function ChooseCardinalPoint({ navigation }: RootTabScreenProps<'Home'>) {
  const [heading , setHeading] = React.useState<Location.LocationHeadingObject|null>(null)
  const [textN , setTextN] = React.useState<string|null>(null)
  React.useEffect(() => {
    let watcher: Location.LocationSubscription | undefined;
    const watch = Location.watchHeadingAsync((location) => {
      console.log("here")
      setHeading(location)
      if(location.magHeading >23 && location.magHeading <= 67){
        setTextN("NE")
      } else if(location.magHeading >68 && location.magHeading <= 112){
        setTextN("E")
      } else if(location.magHeading >113 && location.magHeading <= 167){
        setTextN("SE")
      } else if(location.magHeading >168 && location.magHeading <= 202){
        setTextN("S")
      } else if(location.magHeading >203 && location.magHeading <= 247){
        setTextN("SW")
      } else if(location.magHeading >248 && location.magHeading <= 293){
        setTextN("W")
      } else if(location.magHeading >294 && location.magHeading <= 337){
        setTextN("NW")
      } else if(location.magHeading >=338 || location.magHeading <= 22){
        setTextN("N")
      }
    }).then((s) => {
      watcher = s;
    })
    return () => {
      watcher?.remove()
    }
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardinal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>{textN}</Text>
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
});
