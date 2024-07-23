export interface Todo {
  id: number | string;
  title: string;
  content:string,
  done: boolean;
  createdTime: Date;
  updatedTime: Date;
  usedTime: Date;
  startTime?: Date;
  endTime?: Date;
}
