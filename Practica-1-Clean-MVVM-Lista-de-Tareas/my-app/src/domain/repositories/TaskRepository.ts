import { Task } from "../entities/TaskEntitie"

export interface TaskRepository {
    getTasks(): Promise<Task[]>
    addTask(task: Task): Promise<void>
    completeTask(id: string): Promise<void>
    deleteTask(id: string): Promise<void>
}