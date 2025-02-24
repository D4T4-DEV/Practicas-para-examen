import React, { createContext, useContext, useState, useEffect } from "react";
import { Task } from "../../domain/entities/TaskEntitie";
import { TaskRepositoryImpl } from "../../data/repositories/TaskRepositoryImp";
import { GetTasksUseCase } from "../../application/use_cases/GetTasksUseCase";
import { AddTaskUseCase } from "../../application/use_cases/AddTaskUseCase";
import { CompleteTaskUseCase } from "../../application/use_cases/CompleteTaskUseCase";
import { DeleteTaskUseCase } from "../../application/use_cases/DeleteTaskUseCase";

const TaskContext = createContext<any>(null);
export const useTask = () => useContext(TaskContext);



// Contexto sin uso de AsyncStorage
// export const TaskViewModelProvider = ({ children }: { children: React.ReactNode }) => {
//     const taskRepository = new TaskRepositoryImpl();

//     // Inyectamos los casos de uso
//     const getTasksUseCase = new GetTasksUseCase(taskRepository);
//     const addTaskUseCase = new AddTaskUseCase(taskRepository);
//     const completeTaskUseCase = new CompleteTaskUseCase(taskRepository);
//     const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

//     const [tasks, setTasks] = useState<Task[]>([]);

//     useEffect(() => {
//         getTasksUseCase.execute().then(setTasks);
//     }, []);

//     const addTask = async (task: Task) => {
//         await addTaskUseCase.execute(task);
//         setTasks((prevTasks) => [...prevTasks, task])
//     };


//     const completeTask = async (id: string) => {
//         await completeTaskUseCase.execute(id);
//         setTasks((prevTasks) =>
//             prevTasks.map(task =>
//                 task.id === id ? { ...task, completed: true } : task // Marca como completada sin sobrescribir
//             )
//         );
//     };

//     const deleteTask = async (id: string) => {
//         await deleteTaskUseCase.execute(id);
//         setTasks((prevTasks) =>
//             prevTasks.filter(task => task.id !== id) // Filtra y elimina la tarea sin sobrescribir
//         );
//     };

//     return (
//         <TaskContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
//             {children}
//         </TaskContext.Provider>
//     );
// };

// Contexto con uso de asyncstorage
export const TaskViewModelProvider = ({ children }: { children: React.ReactNode }) => {
    const taskRepository = new TaskRepositoryImpl();

    // Inyectamos los casos de uso
    const getTasksUseCase = new GetTasksUseCase(taskRepository);
    const addTaskUseCase = new AddTaskUseCase(taskRepository);
    const completeTaskUseCase = new CompleteTaskUseCase(taskRepository);
    const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getTasksUseCase.execute().then(setTasks);
    }, []);

    const addTask = async (task: Task) => {
        await addTaskUseCase.execute(task);
        setTasks(await getTasksUseCase.execute());
    };


    const completeTask = async (id: string) => {
        await completeTaskUseCase.execute(id);
        setTasks(await getTasksUseCase.execute());
    };

    const deleteTask = async (id: string) => {
        await deleteTaskUseCase.execute(id);
        setTasks(await getTasksUseCase.execute());
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};