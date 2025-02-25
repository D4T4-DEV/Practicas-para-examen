# 🔐 Ejercicio: Implementando Autenticación con Clean Architecture y MVVM en React Native con TypeScript

## 📌 Objetivo
Construir una aplicación de autenticación básica con **inicio de sesión** y **cierre de sesión**, aplicando **Clean Architecture** y **MVVM**.

---

## 📂 Estructura del Proyecto
Organiza el código de la siguiente manera:


---

## 🏗 Paso 1: Definir el Modelo de Usuario
En `src/domain/models/User.ts`:

```typescript
export interface User {
  id: string;
  email: string;
  name: string;
}

🏗 Paso 2: Definir la Interfaz del Repositorio
En src/domain/repositories/AuthRepository.ts:
import { User } from "../models/User";

export interface AuthRepository {
  login(email: string, password: string): Promise<User | null>;
  logout(): Promise<void>;
  getUser(): Promise<User | null>;
}

🏗 Paso 3: Crear los Casos de Uso
En src/domain/usecases/LoginUseCase.ts:
import { AuthRepository } from "../repositories/AuthRepository";
import { User } from "../models/User";

export class LoginUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(email: string, password: string): Promise<User | null> {
    return this.repository.login(email, password);
  }
}
En src/domain/usecases/LogoutUseCase.ts:
import { AuthRepository } from "../repositories/AuthRepository";

export class LogoutUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(): Promise<void> {
    return this.repository.logout();
  }
}
En src/domain/usecases/GetUserUseCase.ts:
import { AuthRepository } from "../repositories/AuthRepository";
import { User } from "../models/User";

export class GetUserUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(): Promise<User | null> {
    return this.repository.getUser();
  }
}

🏗 Paso 4: Implementar el DataSource
En src/data/datasources/AuthLocalDataSource.ts (simula un almacenamiento local):
import { User } from "../../domain/models/User";

export class AuthLocalDataSource {
  private user: User | null = null;

  async login(email: string, password: string): Promise<User | null> {
    if (email === "test@demo.com" && password === "password") {
      this.user = { id: "1", email, name: "Test User" };
      return this.user;
    }
    return null;
  }

  async logout(): Promise<void> {
    this.user = null;
  }

  async getUser(): Promise<User | null> {
    return this.user;
  }
}

🏗 Paso 5: Implementar el Repositorio
En src/data/repositories/AuthRepositoryImpl.ts:
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { User } from "../../domain/models/User";
import { AuthLocalDataSource } from "../datasources/AuthLocalDataSource";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private dataSource: AuthLocalDataSource) {}

  async login(email: string, password: string): Promise<User | null> {
    return this.dataSource.login(email, password);
  }

  async logout(): Promise<void> {
    return this.dataSource.logout();
  }

  async getUser(): Promise<User | null> {
    return this.dataSource.getUser();
  }
}

🏗 Paso 6: Implementar el ViewModel
En src/presentation/viewmodels/AuthViewModel.ts:
import { makeAutoObservable } from "mobx";
import { User } from "../../domain/models/User";
import { LoginUseCase } from "../../domain/usecases/LoginUseCase";
import { LogoutUseCase } from "../../domain/usecases/LogoutUseCase";
import { GetUserUseCase } from "../../domain/usecases/GetUserUseCase";

export class AuthViewModel {
  user: User | null = null;

  constructor(
    private loginUseCase: LoginUseCase,
    private logoutUseCase: LogoutUseCase,
    private getUserUseCase: GetUserUseCase
  ) {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    this.user = await this.loginUseCase.execute(email, password);
  }

  async logout() {
    await this.logoutUseCase.execute();
    this.user = null;
  }

  async loadUser() {
    this.user = await this.getUserUseCase.execute();
  }
}

🏗 Paso 7: Crear las Pantallas
En src/presentation/screens/LoginScreen.tsx:
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthViewModel } from "../viewmodels/AuthViewModel";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = ({ viewModel }: { viewModel: AuthViewModel }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    await viewModel.login(email, password);
    if (viewModel.user) {
      navigation.navigate("Home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
};
En src/presentation/screens/HomeScreen.tsx:
import React from "react";
import { View, Text, Button } from "react-native";
import { AuthViewModel } from "../viewmodels/AuthViewModel";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = ({ viewModel }: { viewModel: AuthViewModel }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Bienvenido, {viewModel.user?.name}</Text>
      <Button title="Cerrar sesión" onPress={() => {
        viewModel.logout();
        navigation.navigate("Login");
      }} />
    </View>
  );
};

🏗 Paso 8: Integrar en la Aplicación
En src/App.tsx:

tsx
Copiar
Editar
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./presentation/screens/LoginScreen";
import { HomeScreen } from "./presentation/screens/HomeScreen";
import { AuthViewModel } from "./presentation/viewmodels/AuthViewModel";
import { AuthRepositoryImpl } from "./data/repositories/AuthRepositoryImpl";
import { AuthLocalDataSource } from "./data/datasources/AuthLocalDataSource";
import { LoginUseCase } from "./domain/usecases/LoginUseCase";
import { LogoutUseCase } from "./domain/usecases/LogoutUseCase";
import { GetUserUseCase } from "./domain/usecases/GetUserUseCase";

const Stack = createStackNavigator();
const repository = new AuthRepositoryImpl(new AuthLocalDataSource());
const viewModel = new AuthViewModel(
  new LoginUseCase(repository),
  new LogoutUseCase(repository),
  new GetUserUseCase(repository)
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {() => <LoginScreen viewModel={viewModel} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {() => <HomeScreen viewModel={viewModel} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}