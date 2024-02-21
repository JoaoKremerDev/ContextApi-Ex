"use client"

import { useReducer, useState } from "react";
import { Item } from "./types/Item";
import { listReducer } from "@/reducers/listReducer";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const handleAddButton = () => {
    if (addField.trim() === '') return false;
    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    })
    setAddField('')
  }

  const handleDoneCheckBox = (id: number) => {
    dispatch({
      type: 'toggleDone',
      payload: { id }
    })
  }

  const handleEdit = (id: number) => {
    const item = list.find(it => it.id === id);
    if (!item) return false;
    const newText = window.prompt("Editar Tarefa", item.text);
    if (!newText || newText?.trim() === '') return false;

    dispatch({
      type: 'editText',
      payload: {
        id,
        newText: newText,
      },
    })
  }

  const handleRemove = (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir?")) return false;
    dispatch({
      type: 'remove',
      payload: {
        id
      }
    })
  }

  return (
    <div className="bg-black w-screen h-screen">
      <div className="mx-auto max-w-2xl text-white py-4">
        <h1 className="text-center text-4xl">Lista de Tarefas</h1>
        <div className="border bg-gray-900 p-4 my-4 mt-4 flex gap-4 rounded">
          <input
            type="text"
            className="border border-white p-3 rounded bg-transparent outline-none flex-1 text-white"
            placeholder="Digite um item"
            value={addField}
            onChange={(e) => setAddField(e.target.value)}
          />
          <button
            className="border p-2 bg-green-500 rounded-md"
            onClick={handleAddButton}
          >
            Adicionar
          </button>
        </div>
        <ul className="max-w-2xl mx-auto">
          {list?.map((item) => {
            return (
              <li key={item.id}
                className="flex p-3 gap-3 border-b border-gray-700">
                <div className="flex flex-1 gap-4">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-6 h-6"
                    checked={item.done}
                    onChange={() => handleDoneCheckBox(item.id)}
                  />
                  <p className="flex-1 text-lg">{item.text}</p>
                </div>
                <button className="mx-4 text-white hover:text-gray-500"
                  onClick={() => handleEdit(item.id)}
                >
                  Editar
                </button>
                <button className="mx-4 text-white hover:text-gray-500"
                  onClick={() => handleRemove(item.id)}
                >
                  Excluir
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default Page;