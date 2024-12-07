import { useState } from "react"
import { ListaTareas } from "./components/ListaTareas"

export const App = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddTask = () => {
    if (nuevaTarea.trim() === '') return
    setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setNuevaTarea('')
  }

  const handleBorrarTarea = (index: number) => {
    setListaTareas(tareas => tareas.filter((_, i) => i !== index))
  }

  return (
    <div className="grid place-items-center gap-4">
      <h1 className="text-4xl font-bold">Lista de Tareas</h1>
      <div className="grid place-items-center gap-4">
        <input
          className="bg-[#333] px-2 py-1 rounded"
          value={nuevaTarea}
          onChange={e => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button className="bg-sky-500 py-2 px-1 hover:bg-opacity-70 rounded" onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={handleBorrarTarea}
      />
    </div>
  )
}