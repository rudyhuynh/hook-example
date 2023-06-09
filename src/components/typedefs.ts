
export type ActionType = {type: string, [any: string]: any}
export type TodoType = { id: number; content: string; isDone: boolean };
export type TodosType = TodoType[];