import { TaskRepository } from "../../domain/repositories/TaskRepository";

export class DeleteTaskUseCase {
    constructor(
        private taskRepository: TaskRepository
    ) { }

    async execute(id: string): Promise<void> {
        await this.taskRepository.deleteTask(id);
    }
}