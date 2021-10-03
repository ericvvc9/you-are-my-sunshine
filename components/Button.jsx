import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from './Themed';

export function Button(props) {
  //const { children, ...otherProps } = props;
  //const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <TouchableOpacity {...props}>
      <Text style={props.styleText}>{props.children}</Text>
      {/* <DefaultView style={[{ backgroundColor }, style]} {...otherProps} /> */}
  </TouchableOpacity>
}