import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import React from 'react';
import { Task } from '../../domain/entities/TaskEntitie';
import { useTask } from '../view_models/TaskViewModel';

const TaskListScreen = () => {
    const { tasks, addTask, completeTask, deleteTask } = useTask();

    const handleAddTask = () => {
        const newTask: Task = {
            id: Date.now().toString(),
            title: 'Nueva Tarea',
            description: 'Descripción de la tarea',
            completed: false
        };
        addTask(newTask);
    };

    console.log({ tasks })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tareas</Text>
            <Button title="Agregar Tarea" onPress={handleAddTask} />
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                            ID: {item.id}
                        </Text>
                        <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                            {item.title} - {item.description}
                        </Text>
                        <Button title="Completar" onPress={() => completeTask(item.id)} />
                        <Button title="Eliminar" onPress={() => deleteTask(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    taskContainer: { padding: 10, borderBottomWidth: 1 },
    taskText: { fontSize: 16 },
    completedTask: { textDecorationLine: 'line-through', color: 'gray' }
});

export default TaskListScreen;
