import { useNavigation } from "@react-navigation/native";
import { View, Button, Text } from "react-native";
import { AuthViewModel } from "../view_models/AuthViewModel";

export const HomeScreen = ({ viewModel }: { viewModel: AuthViewModel }) => {
    const navigation = useNavigation();
  
    return (
      <View>
        <Text>Bienvenido, {viewModel.user?.name}</Text>
        <Button title="Cerrar sesión" onPress={() => {
          viewModel.logout();
          navigation.replace("Login");
        }} />
      </View>
    );
  };