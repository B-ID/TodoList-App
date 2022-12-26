import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import {
  CheckIcon,
  MailOpenIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function SingleTodo({ todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  function handleDone(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function handleDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEdit() {
    // e.preventDefault()
    
    if (edit && todo.isDone) return;
    setEdit(!edit);
  }

  function handleEditSubmit(e: React.FormEvent, id:number) {
    e.preventDefault()
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, todo: editTodo}  : todo
    )))
    setEdit(false)

  }
  

  
  const inputRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])
  
  
  
  
  let dynamicClassName: string;

  dynamicClassName = `flex items-center justify-between bg-yellow-300 space-x-6 p-2 rounded-md  hover:shadow-md transition linear duration-100 ${
    todo.isDone ? "underline bg-green-400" : ""
  } `;
  return (
    <>
    {/* <p>{Date.now()}</p> */}
    <form 
    onSubmit={(e) => handleEditSubmit(e, todo.id)}
    className={dynamicClassName}>
      {edit ? <input 
      ref={inputRef}
      className="outline-none rounded-sm px-1 py-1 flex-1"
      value={editTodo}
      onChange={(e) => setEditTodo(e.target.value)}
      /> : <span className="flex-wrap">{todo.todo}</span>}
      <div className="flex items-center space-x-1">
        <CheckIcon
          onClick={() => handleDone(todo.id)}
          className="h-5 cursor-pointer"
        />
        <TrashIcon
          onClick={() => handleDelete(todo.id)}
          className="h-5 cursor-pointer"
        />
        <PencilAltIcon
          onClick={() => handleEdit()}
          className="h-5 cursor-pointer"
        />
      </div>
    </form>
    </>
  );
}
