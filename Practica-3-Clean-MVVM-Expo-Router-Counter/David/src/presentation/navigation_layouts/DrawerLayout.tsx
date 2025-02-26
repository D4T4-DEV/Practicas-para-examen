import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../views/HomeScreen';
import AddValueScreen from '../views/AddValueScreen';

// Creamos el objeto de navegacion del drawer
const Drawer = createDrawerNavigator();

const DrawerLayout = () => {
    return (
        <Drawer.Navigator initialRouteName="index">
            {/* Pantalla de inicio */}
            <Drawer.Screen name="index" component={HomeScreen} options={{ title: 'Inicio' }} />
            {/* Pantalla de sumarle al contador uno */}
            <Drawer.Screen name="addValue" component={AddValueScreen} options={{ title: 'Añadir valores' }} />
        </Drawer.Navigator>
    )
}

export default DrawerLayout