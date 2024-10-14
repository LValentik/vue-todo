export enum Status {
    Active = 'active',
    Completed = 'completed',
  }
export interface ToDo {
    id: number;
    title: string;
    status: Status;
  }