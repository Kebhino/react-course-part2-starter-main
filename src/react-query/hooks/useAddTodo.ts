import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContex {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => { 

    const queryClient = useQueryClient();
      return  useMutation<Todo, Error, Todo, AddTodoContex>({
        mutationFn: (todo: Todo) =>
          axios
            .post<Todo>("/todos", todo)
            .then((res) => res.data),
    
        onMutate: (newTodo: Todo) => {
          const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
            newTodo,
            ...todos,
          ]);

          onAdd()
          
          return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
            todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
          );
    
          // 1 SPOSÓB:
          // I teraz trzeba powiedzieć do ReactQuery że jest coś nowego i dane ma stare, żeby pobrał sobie nowe.
          //     queryClient.invalidateQueries({
          //       queryKey: ["todos"],
          //     });
          //   },
          // });
          // 2 SPOSÓB Aktulizujemy dane w cache bezpośrednio
        },
        onError: (error, newTodo, contex) => {
          if (!contex) return;
    
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, contex.previousTodos);
        },
      });


}

export default useAddTodo