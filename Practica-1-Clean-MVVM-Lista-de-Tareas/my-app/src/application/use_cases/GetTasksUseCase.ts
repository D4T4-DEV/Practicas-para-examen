import { Task } from "../../domain/entities/TaskEntitie";
import { TaskRepository } from "../../domain/repositories/TaskRepository";

export class GetTasksUseCase {
    constructor(
        private taskRepository: TaskRepository
    ) { }

    async execute(): Promise<Task[]> {
        return await this.taskRepository.getTasks();
    }
}