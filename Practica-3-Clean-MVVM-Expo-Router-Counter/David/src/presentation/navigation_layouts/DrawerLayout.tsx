import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../views/HomeScreen';
import AddValueScreen from '../views/AddValueScreen';
import SubtractValueScreen from '../views/SubstractValueScreen';
import AutomaticCounterScreen from '../views/AutomaticCounterScreen';

// Creamos el objeto de navegacion del drawer
const Drawer = createDrawerNavigator();

const DrawerLayout = () => {
    return (
        <Drawer.Navigator initialRouteName="index">
            {/* Pantalla de inicio */}
            <Drawer.Screen name="index" component={HomeScreen} options={{ title: 'Inicio' }} />
            {/* Pantalla de sumarle al contador uno */}
            <Drawer.Screen name="addValue" component={AddValueScreen} options={{ title: 'Añadir valores' }} />
            {/* Pantalla de restarle al contador uno */}
            <Drawer.Screen name="subtractValue" component={SubtractValueScreen} options={{ title: 'Restart valores' }} />
            {/* Pantalla que suma y resta automaticamente */}
            <Drawer.Screen name="automaticValue" component={AutomaticCounterScreen} options={{ title: 'Auto sumador y restador valores' }} />
        </Drawer.Navigator>
    )
}

export default DrawerLayout