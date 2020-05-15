export class TaskType {
    Id: number;
    IconName: string;
    TaskType: string;
}

export class Task {
    Id: number;
    Title: string;
    Description: string;
    DueDate: Date;
    Status: boolean;
    Type: TaskType;
}