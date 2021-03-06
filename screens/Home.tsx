import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '../components/Button';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INTI LIGHT</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button onPress={() => {
        console.log("d");
        
        navigation.push('Root', {
          screen: "SelectHouseUbication"
        })
      }}
        style={{
          backgroundColor: '#397cf5',
          width: '100%',
          borderRadius: 5,
          paddingVertical: 15,
        }}
        styleText={{
          color: 'white',
          textAlign:'center'
        }}
      >
        Select your house location
      </Button>
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
