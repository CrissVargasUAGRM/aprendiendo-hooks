
interface Todo {
    id: number;
    text: string;
    completed: boolean;
};

interface TaskState {
    todos: Todo[],
    length: number,
    completed: number,
    pending: number,
};

export type TaskAction = {type: 'ADD_TODO', payload: string} 
                | {type: 'TOGGLE_TODO', payload: number} 
                | {type: 'DELETE_TODO', payload: number};

export const getTaskInitialState = (): TaskState => {
    return {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0,
    };
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch(action.type) {
        case 'ADD_TODO': {
            if(action.payload.length === 0) return state;

            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };

            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.length + 1,
                pending: state.pending + 1,
            };
        }

        case 'TOGGLE_TODO': {
            const todosUpdated = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });

            return {
                ...state,
                todos: todosUpdated,
                completed: todosUpdated.filter((todo) => todo.completed).length,
                pending: todosUpdated.filter((todo) => !todo.completed).length
            };
        }
        case 'DELETE_TODO': {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                completed: state.todos.filter((todo) => todo.completed).length,
                pending: state.todos.filter((todo) => !todo.completed).length
            };
        }
        default: {
            return state;
        }
    }

};