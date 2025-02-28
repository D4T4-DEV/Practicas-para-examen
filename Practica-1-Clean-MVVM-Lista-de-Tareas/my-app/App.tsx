import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskListScreen from './src/presentation/views/TaskListScreen';
import { TaskViewModelProvider } from './src/presentation/view_models/TaskViewModel';

export default function App() {
  return (
    <TaskViewModelProvider>
      <View style={styles.container}>
        <TaskListScreen />
        <StatusBar style="auto" />
      </View>
    </TaskViewModelProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
});
