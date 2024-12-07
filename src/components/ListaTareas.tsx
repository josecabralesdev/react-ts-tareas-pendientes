import Tarea from "./Tarea"

type ListaTareas = {
  listaTareas: string[]
  borrarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareas) => {
  return (
    <div className="bg-slate-200 text-slate-700 p-2 rounded-sm grid gap-2">
      {listaTareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          borrarTarea={() => borrarTarea(index)}
        />
      ))}
    </div>
  )
}