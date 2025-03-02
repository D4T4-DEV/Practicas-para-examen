import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { usePokemon } from '../viewmodels/PokemonViewModel';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
    const router = useRouter();
    const { pokemons, getPokemons } = usePokemon();

    const [loading, setLoading] = useState<boolean>(false);
    const [pageLimit, setpageLimit] = useState<number>(0);

    const fetchData = async () => {
        if (loading) return;
        setLoading(true);

        try {
            await getPokemons(pageLimit);
            setpageLimit((prevLimit) => prevLimit + 1);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handlePress = (idPokemon: string) => {
        console.log(`Presionaste al pokemon ${idPokemon}`);
        router.push(`/about/${idPokemon}`)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <FlatList
            data={pokemons}
            onEndReached={fetchData}
            onEndReachedThreshold={0.5}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={({ item }) => <PokemonCard pokemon={item} onPress={handlePress} />}
            ListHeaderComponent={<Text style={styles.header}>📷 Pokedex</Text>}
            ListFooterComponent={loading ? <ActivityIndicator size="large" color="red" /> : null}
            showsVerticalScrollIndicator={false}
            getItemLayout={(data, index) => ( // si los elementos tienen un tamaño fijo
                { length: 100, offset: 100 * index, index }
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10, // Mejora el diseño
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default HomeScreen;
