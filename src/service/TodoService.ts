import type {TodosType} from '../components/typedefs'

const mockTodos = [
    {
        id: 1,
        content: "New Todo 1",
        isDone: false,
      },
      {
        id: 2,
        content: "New Todo 2",
        isDone: true,
      },
      {
        id: 3,
        content: "New Todo 3",
        isDone: false,
      },
]

/**
 * Mock todo data fetching.
 */
export function fetchTodos(filter: string): Promise<TodosType>{
    return new Promise(resolve => {
        setTimeout(() => {
            let filterTodos = mockTodos.filter((todo) => {
                if (filter === "all") return true;
                if (filter === "done") return todo.isDone;
                if (filter === "undone") return !todo.isDone;
              })
            resolve(filterTodos)
        }, 500)
    })

}