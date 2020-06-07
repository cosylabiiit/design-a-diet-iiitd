import React from 'react';
import {useState} from 'react';
import { StyleSheet, TextInput, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function Header(props) {

    const [quantity, changeQuantity] = useState(100);

    const onChangeText = (value) => {
      props.onQuantityChange(quantity);
    }
  return (
    <View style={styles.container}>
        <TextInput keyboardType='numeric' onSubmitEditing={onChangeText()} onChangeText={(value) => changeQuantity(value)} value={quantity} style={styles.text} placeholder="Enter Amount in grams" placeholderTextColor="#000000"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#ff6ae5',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  
  text: {
    width: 300,
    borderRadius: 25,
    backgroundColor: '#C4C4C4',
    padding: 10,
    textAlign: 'center',
  }

  
});
