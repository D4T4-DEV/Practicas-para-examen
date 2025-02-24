import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../../domain/entities/TaskEntitie";

export class LocalTaskDataSource {

    // Obtiene los datos dentro del almacenamiento local usado
    async getTasks(): Promise<Task[]> {
        const tasks = await AsyncStorage.getItem('tasks');
        // Devuelve las tareas en array si existen y si no devuelve un array vacio
        return tasks ? JSON.parse(tasks) : [];
    }

    async savedTasks(tasks: Task[]): Promise<void> {
        // Guardamos las tareas en formato Array en formato JSON
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    }
}