import { createContext , useContext} from  'react';

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            msg : "Task 1",
            completed: false
        }
    ],
    addTodo : (todo) =>{},
    updateTodo : (id, todo) =>{},
    deleteTodo : (id) =>{},
    toggleTodo : (todo) =>{},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}
