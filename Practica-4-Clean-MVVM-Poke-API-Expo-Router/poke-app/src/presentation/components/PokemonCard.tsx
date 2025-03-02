import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Pokemon from "../../domain/entities/Pokemon";
import { memo } from "react";

interface PokemonCardProps {
    pokemon: Pokemon;
    onPress(idPokemon: string): void
}

const PokemonCard: React.FC<PokemonCardProps> = memo(({ pokemon, onPress }) => {
    // console.log('renderizando el pokemon', { pokemon });
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(pokemon.id)}>
            <Text style={styles.namePokemon}>
                {pokemon.id}
            </Text>
            <Image
                style={styles.image}
                source={{ uri: pokemon.url_image }}
            />
            <Text style={styles.namePokemon}>
                {pokemon.name}
            </Text>
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },
    namePokemon: {
        fontSize: 22,
        fontWeight: "500",
    },
});


export default PokemonCard;