import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    descripcion = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level) {
        this.name = name;
        this.descripcion = description;
        this.completed = completed;
        this.level = level;
    }
}