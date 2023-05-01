export type ActionType = { type: string; [any: string]: any };
export type TodoType = {
  id: number;
  content: string;
  isDone: boolean;
  doneAt: string;
};
export type TodosType = TodoType[];
