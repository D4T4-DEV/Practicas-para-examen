import { Task } from "../../domain/entities/TaskEntitie";
import { TaskRepository } from "../../domain/repositories/TaskRepository";
import { LocalTaskDataSource } from "../datasources/LocalTaskDataSource";

export class TaskRepositoryImpl implements TaskRepository {

    private dataTasksSource = new LocalTaskDataSource();

    // private tasks: Task[] = [];

    async getTasks(): Promise<Task[]> {

        // Cuando si lo hay
        return this.dataTasksSource.getTasks();

        // Cuando no hay un dataSource
        // return this.tasks;
    }

    async addTask(task: Task): Promise<void> {
        // Cuando si lo hay
        const tasks = await this.getTasks();
        tasks.push(task);
        await this.dataTasksSource.savedTasks(tasks);

        // Cuando no hay un dataSource
        // this.tasks.push(task);
    }

    async completeTask(id: string): Promise<void> {

        // Cuando hay un dataSource
        let tasks = await this.getTasks()
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: true } : task
        );
        await this.dataTasksSource.savedTasks(tasks);

        // Cuando no hay un dataSource
        // this.tasks = this.tasks.map(task =>
        //     task.id === id ? { ...task, completed: true } : task
        // );
    }

    async deleteTask(id: string): Promise<void> {
        let tasks = await this.getTasks()
        tasks = tasks.filter(task => task.id !== id);
        await this.dataTasksSource.savedTasks(tasks);

        // Cuando no hay
        // this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
