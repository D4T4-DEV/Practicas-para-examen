import { Button, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useCatFact } from '../viewmodels/CatFactProvider'
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const { statictsUser } = useCatFact();
  const navigation = useRouter();


  const handleStartGame = () => {
    // console.log('presionaste el btn');
    navigation.navigate('/game');
  }

  return (
    <View style={styles.container}>
      <Button title='Iniciar juego' onPress={handleStartGame} />
      <Text>Correctas: {statictsUser?.correctAnswers | 0}</Text>
      <Text>Incorrectas: {statictsUser?.incorrectAnswers | 0}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})