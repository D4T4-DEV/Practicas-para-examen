import { Stack } from "expo-router"


const StackLayout = () => {
  return (
    <Stack
      screenOptions={{

      }}
    >
      {/* Pagina principal */}
      <Stack.Screen name='index' options={{ title: 'Pokedex' }} />

      {/* Datos del pokemon */}
      <Stack.Screen name='about/[id]' options={{
        title: 'Datos del Pokemon'
      }} />
    </Stack>
  )
}

export default StackLayout