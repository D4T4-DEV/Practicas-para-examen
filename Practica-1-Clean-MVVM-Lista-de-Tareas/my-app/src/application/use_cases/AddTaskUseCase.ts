import { Task } from "../../domain/entities/TaskEntitie";
import { TaskRepository } from "../../domain/repositories/TaskRepository";

export class AddTaskUseCase {
    constructor(
        private taskRepository: TaskRepository
    ) { }

    async execute(task: Task): Promise<void> {
        await this.taskRepository.addTask(task);
    }
}