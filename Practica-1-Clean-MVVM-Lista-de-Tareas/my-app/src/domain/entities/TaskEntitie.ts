// export default class Task {
//     constructor(
//         public id: string,
//         public title: string,
//         public description: string,
//         public completed: boolean = false
//     ) { }
// }


// Interfaz representativa 

export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}