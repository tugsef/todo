import { Todo } from "@/types";

export interface StateProps {
  todolist: Todo[];
  searchWord: string;
  ranking: string[];
  active: string;
  filteredTodoList: Todo[];
  sortBy:string
}

// Define action types
type Action =
  | { type: "ADD_TODO"; todo: Todo }
  | { type: "REMOVE_TODO"; id: number | string }
  | { type: "UPDATE_TODO"; id: number | string; updatedTodo: Partial<Todo> }
  | { type: "UPDATE_SEARCH_WORD"; searchWord: string }
  | { type: "ADD_RANKING"; ranking: string }
  | { type: "REMOVE_RANKING"; ranking: string }
  | { type: "UPDATE_ACTIVE"; text: string }
  | { type: "FILTER_TODO_BY_RANKING" }
  | { type: "FILTER_TODO_BY_ACTIVE" }
  | { type: "FILTER_TODO_BY_SEARCH_WORD"; searchWord: string }
  | { type: "UPDATE_SHORT_BY"; text: string }

export function appReducer(state: StateProps, action: Action): StateProps {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todolist: [...state.todolist, action.todo] };
    case "REMOVE_TODO":
      return {
        ...state,
        todolist: state.todolist.filter((todo) => todo.id !== action.id),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todolist: state.todolist.map((todo) =>
          todo.id === action.id ? { ...todo, ...action.updatedTodo } : todo
        ),
      };
    case "UPDATE_SEARCH_WORD":
      return { ...state, searchWord: action.searchWord };
    case "ADD_RANKING":
      return { ...state, ranking: [...state.ranking, action.ranking] };
    case "REMOVE_RANKING":
      return {
        ...state,
        ranking: state.ranking.filter((rank) => rank !== action.ranking),
      };
    case "UPDATE_ACTIVE":
      return { ...state, active: action.text };
    case "FILTER_TODO_BY_RANKING":
      return {
        ...state,
        filteredTodoList: state.todolist.filter((todo) =>
          state.ranking.includes(todo.title)
        ),
      };
    case "FILTER_TODO_BY_ACTIVE":
      return {
        ...state,
        filteredTodoList: state.todolist.filter((todo) => {
          if (state.active === "complated") return todo.done;
          if (state.active === "continue") return !todo.done;
          return true;
        }),
      };
      case "FILTER_TODO_BY_SEARCH_WORD":
        const searchWord = action.searchWord.toLowerCase();
        const filteredTodoList = state.filteredTodoList.filter((todo) => {
          // Convert all fields to strings and check if searchWord is included in any of them
          return Object.values(todo).some(value =>
            value.toString().toLowerCase().includes(searchWord)
          );
        });
        return {
          ...state,
          searchWord: action.searchWord,
          filteredTodoList: filteredTodoList,
        };
      case "UPDATE_SHORT_BY":
        return { ...state, sortBy: action.text };
    default:
      return state;
  }
}
