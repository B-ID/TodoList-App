import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo) return;
    if (todo.trim() === '') return 
    setTodos([...todos, { id: Date.now(), todo: todo.trim(), isDone: false }]);
    setTodo("");
    console.log(todo.trim().length, todo.trim())
    console.log(todos);
  };

  return (
    <div className="px-4 bg-slate-900 min-h-screen font-poppins">
      <div className="mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
        <Header />
        <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
