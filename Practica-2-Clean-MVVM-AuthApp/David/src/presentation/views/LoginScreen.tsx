import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthViewModel } from "../view_models/AuthViewModel";
import { View, TextInput, Button, Text } from "react-native";

export const LoginScreen = ({ viewModel }: { viewModel: AuthViewModel }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        await viewModel.login(email, password);
        if (viewModel.user) {
          navigation.replace("Home");
        } else {
          alert("Credenciales incorrectas");
        }
      };

    return (
        <View>
            <Text>Login screen</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
            <Button title="Ingresar" onPress={handleLogin} />
        </View>
    );
};