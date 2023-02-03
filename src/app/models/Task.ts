export interface ITask {
    id: string;
    title: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}