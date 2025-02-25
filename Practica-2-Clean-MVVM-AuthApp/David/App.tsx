import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginUseCase } from "./src/application/use_cases/auth/LoginUseCase";
import { LogoutUseCase } from "./src/application/use_cases/auth/LogoutUseCase";
import { GetUserUseCase } from "./src/application/use_cases/GetUserUseCase";
import { AuthLocalDataSource } from "./src/data/datasources/AuthLocalDataSource";
import { AuthViewModel } from "./src/presentation/view_models/AuthViewModel";
import { HomeScreen } from "./src/presentation/views/HomeScreen";
import { LoginScreen } from "./src/presentation/views/LoginScreen";
import { AuthUserRepositoryImpl } from "./src/data/repositories/AuthRepositoryImpl";

const Stack = createStackNavigator();
const repository = new AuthUserRepositoryImpl(new AuthLocalDataSource());
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