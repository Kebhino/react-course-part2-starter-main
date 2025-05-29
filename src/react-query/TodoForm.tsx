import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/txodos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // 1 SPOSÓB:
      // I teraz trzeba powiedzieć do ReactQuery że jest coś nowego i dane ma stare, żeby pobrał sobie nowe.
      //     queryClient.invalidateQueries({
      //       queryKey: ["todos"],
      //     });
      //   },
      // });

      // 2 SPOSÓB Aktulizujemy dane w cache bezpośrednio
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
