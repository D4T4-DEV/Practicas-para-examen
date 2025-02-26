import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { useCounter } from '../viewmodels/CouterViewModel';

const AddValueScreen = () => {

  const { width, height } = useWindowDimensions();
  const { counter, addValue } = useCounter();

  const isCellphone = width <= 600 ? true : false;

  const handlePress = async (type: number) => {

    switch (type) {
        case 1:
            await addValue(1);
            break;

        case 2:
            await addValue(2);
            break;

        default:
            break;
    }
}

  return (
    <View style={styles.principalContainer}>
      <Text style={[styles.title, { fontSize: isCellphone ? width * 0.06 : 48 }]}>Añade un valor al contador 🧮</Text>
      {/* Boton para sumar uno */}
      <Pressable
        onPress={()=>{handlePress(1)}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#FFFF',
          },
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.textButton}>
          Sumar uno al contador
        </Text>
      </Pressable>

        {/* Boton para sumar dos */}
      <Pressable
        onPress={()=>{handlePress(2)}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#FFFF',
          },
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.textButton}>
          Sumar dos al contador
        </Text>
      </Pressable>

      <Text style={[styles.parrafos]}>Contador va en </Text>
      <Text style={[styles.title]}>{counter.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  parrafos: {
    fontSize: 18
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  textButton: {
    fontSize: 18,
    margin: 5
},
});


export default AddValueScreen