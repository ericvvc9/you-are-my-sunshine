import * as React from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Button } from '../components/Button';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function EnterKWS({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.title}>Enter KW of your bills</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{
        width: '100%'
      }}>
        <TextInput 
          style={{
            width: '100%',
            //backgroundColor: ''
          }}
          placeholder="kWh"
        />
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
              screen: 'SelectRoofType'
            })
          }}
        >
          Select KWH
        </Button>
      </View>
      <Image 
        source={require('../assets/images/electrical-bill.png')}
        style={{
          width:'100%',
          resizeMode: 'contain'
        }}
        
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
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
