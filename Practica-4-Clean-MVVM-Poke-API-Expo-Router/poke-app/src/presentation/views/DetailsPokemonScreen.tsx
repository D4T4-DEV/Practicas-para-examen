import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { usePokemon } from '../viewmodels/PokemonViewModel';

const DetailsPokemonScreen = () => {
  const { pokemons, getPokemonDescription } = usePokemon();
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await getPokemonDescription(id.toString(), 'es');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const pokemon = pokemons.find((p) => p.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.numberPokemon}>{pokemon?.id}</Text>
      <Image
        style={styles.image}
        source={{ uri: pokemon?.url_image }}
      />
      <Text style={styles.namePokemon}>
        {pokemon?.name}
      </Text>
      <Text style={styles.description}>{pokemon?.description || "Cargando descripción..."}</Text>
    </View>
  )
}

export default DetailsPokemonScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 10,
    marginRight: 10,
  },
  numberPokemon: {
    fontSize: 48,
    fontWeight: "bold",
  },
  namePokemon: {
    fontSize: 32,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
  }
});