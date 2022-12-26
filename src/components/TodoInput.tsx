import React from "react";
import { useState } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void

}
export default function TodoInput({ todo, setTodo, handleAdd }: Props) {


  return (
      <form onSubmit={handleAdd} className="mx-auto sm:max-w-2xl mb-3">
        <div className="relative">
          <input
            className="p-2 outline-none w-full rounded-full border focus:border-gray-400 transition-all ease-in-out duration-100"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Enter a task"
          />
          <div className="absolute pr-2 right-0 inset-y-0 flex items-center">
            <button className="bg-blue-300 hover:bg-blue-400 active:scale-95 transition duration-75 text-white p-1 rounded-full">
              GO
            </button>
          </div>
        </div>
      </form>
  );
}
