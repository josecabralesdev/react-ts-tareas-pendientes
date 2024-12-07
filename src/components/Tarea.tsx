type Tarea = {
  tarea: string
  borrarTarea: () => void
}

const Tarea = ({ tarea, borrarTarea }: Tarea) => {
  return (
    <div className="flex justify-between items-center p-2 w-full gap-6 border-b border-slate-400 last:border-none">
      <span>{tarea}</span>
      <button className="bg-red-500 text-white p-1 hover:bg-red-900 rounded" onClick={borrarTarea}>Borrar</button>
    </div>
  )
}

export default Tarea