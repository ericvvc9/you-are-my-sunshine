import * as React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../components/Button';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SelectRoofType({ navigation }: RootTabScreenProps<'SelectRoofType'>) {
  const [house, setHouse] = React.useState<string | null>(null);
  const roofs = [
    {
      path: require('../assets/images/roofs/a-la-holandesa.png'),
      name: 'a-la-holandesa.png',
    },
    {
      path: require('../assets/images/roofs/abuhardillado.png'),
      name: 'abuhardillado.png',
    },
    {
      path: require('../assets/images/roofs/arqueado.png'),
      name: 'arqueado.png',
    },
    {
      path: require('../assets/images/roofs/cobertizo.png'),
      name: 'cobertizo.png',
    },
    {
      path: require('../assets/images/roofs/cuatro-vertientes.png'),
      name: 'cuatro-vertientes.png',
    },
    {
      path: require('../assets/images/roofs/de-dos-agua.png'),
      name: 'de-dos-agua.png',
    },
    {
      path: require('../assets/images/roofs/linterna.png'),
      name: 'linterna.png',
    },
    {
      path: require('../assets/images/roofs/mariposa.png'),
      name: 'mariposa.png',
    },
    {
      path: require('../assets/images/roofs/plano.png'),
      name: 'plano.png',
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={roofs}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setHouse(item.name)
              }}
            >
              <Image
                source={item.path}
                style={
                  house === item.name ?
                    {
                      borderWidth: 1,
                      borderColor: 'red'
                    } : {}}
              />
            </TouchableOpacity>
          );
        }}
      />
      <Button
        style={
          {
            backgroundColor: 'blue',
            paddingVertical: 12,
            minWidth: '100%',
          }
        }

        styleText={{
          color:'white',
          textAlign: 'center'
        }}
        onPress={() => {
          navigation.push('Root', {
            screen: 'ChooseCardinalPoint'
          })
        }}
      >
        Select Roof Type
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
