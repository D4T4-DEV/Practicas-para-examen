# **Instrucciones para Desarrollar la Aplicación de Lista de Tareas con Clean Architecture**

## **1. Configuración del Proyecto**
- Crea un nuevo proyecto en React Native con TypeScript.  
- Organiza las carpetas siguiendo la estructura propuesta.  

## **2. Definir el Dominio**
- Crea una clase `Task` con las propiedades:
  - `id: string`
  - `title: string`
  - `description: string`
  - `completed: boolean` (inicialmente `false`)
- Define una interfaz `TaskRepository` con los métodos:
  - `addTask(task: Task): Promise<void>`
  - `getTasks(): Promise<Task[]>`
  - `completeTask(id: string): Promise<void>`
  - `deleteTask(id: string): Promise<void>`

## **3. Implementar los Casos de Uso**
- Crea las siguientes clases en la capa de casos de uso:
  - `AddTask` → Para agregar una tarea.
  - `GetTasks` → Para obtener todas las tareas.
  - `CompleteTask` → Para marcar una tarea como completada.
  - `DeleteTask` → Para eliminar una tarea.
- Cada clase debe recibir `TaskRepository` como dependencia e implementar un método `execute()`.

## **4. Implementar el Repositorio**
- Crea `TaskRepositoryImpl`, que almacenará las tareas en un array en memoria.
- Implementa los métodos de `TaskRepository` en esta clase.

## **5. Crear el ViewModel**
- Crea `TaskViewModel` que use el repositorio y los casos de uso.
- Implementa los métodos:
  - `addTask(task: Task)`: Agrega una nueva tarea.
  - `getTasks(): Promise<Task[]>`: Obtiene todas las tareas.
  - `completeTask(id: string)`: Marca una tarea como completada.
  - `deleteTask(id: string)`: Elimina una tarea.

## **6. Construir la UI**
- Crea `TaskListScreen` para mostrar las tareas en una lista.
- Usa `FlatList` para renderizar las tareas.
- Agrega botones para completar o eliminar tareas.
- Vincula los eventos con los métodos del `TaskViewModel`.

## **7. Probar la Aplicación**
- Asegúrate de que puedes:
  - Agregar nuevas tareas.
  - Listar todas las tareas.
  - Completar una tarea.
  - Eliminar una tarea.
- Verifica que los cambios se reflejen en la UI correctamente.

---

✅ **Objetivo:** Implementar una arquitectura limpia con capas bien definidas y asegurarse de que la aplicación funcione correctamente. 🚀
