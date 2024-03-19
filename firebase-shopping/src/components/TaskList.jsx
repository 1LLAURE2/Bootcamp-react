/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react"
import { addNewTask, getTasks,updateTask,deleteTask } from "../firebase/taskController";

const task={
    title:"Este es el titulo",
    description:"Esta es la descripcion"
}


export const TaskList = () => {
    const [task,setTask]=useState({title:"",description:""});
    const [tasks,setTasks]=useState([]);
    const [mode,setMode]=useState("add");
    

    const createNewTask= async()=>{
        // console.log("createNewTask")
        // console.log(task);
        await addNewTask(task);
        setTask({title:"",description:""})
        initializeTasks();
    };

    const updateExistingTask=async()=>{
        await updateTask(task);
        setTask({title:"",description:""});
        initializeTasks();
        setMode("add");
    };

    const initializeTasks=()=>{
        // console.log("initializeTask")
        getTasks()
            .then((t) => setTasks([...t]))
            .catch((e)=>console.log(e));
    };

    const editTask=(id)=>{
        // console.log("editTask")
        // console.log('ID ====>',id);
        setMode("update");
        const taskToEdit=tasks.find((t)=> t.id===id);
        // console.log(id);
        setTask({...taskToEdit});
    };

    const removeTask= async (id)=>{
        deleteTask(id);
        initializeTasks();
    }

    useEffect(()=>{
        // console.log("useEffect")
        // getTasks()
        // .then(t => setTasks([...t]))
        // .catch((e)=>console.log(e));
        initializeTasks();
    },[]);

    return (
        <div>
            <h1 className="text-sky-700 font-semibold text-lg">
                Estas en la Task List
            </h1>
            <div className="flex flex-col gap-4">
                <h2>Introduce una nueva tarea</h2>
                <input
                    type="text"
                    value={task.title}
                    placeholder="Titulo de la tarea"
                    className="border shadow outline-none focus:ring ring-sky-200 px-2 py-1 w-full"
                    onChange={e=>setTask({...task,title:e.target.value})}
                />
                <textarea
                    type="text"
                    rows={6}
                    value={task.description}
                    placeholder="Description de la tarea"
                    className="border shadow outline-none focus:ring ring-sky-200 px-2 py-1 w-full"
                    onChange={e=>setTask({...task,description:e.target.value})}
                />
                <button
                    className="bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold"
                    onClick={()=>mode==="add"?createNewTask:updateExistingTask()}
                >
                    {mode==="add"?"Añadir":"Actualizar"}
                </button>
            </div>
            {/* <button
                className="bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold"
                onClick={getTasks}
            >
                Obten Tareas
            </button> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {
                    tasks.map((task)=>(
                        <div
                            key={task.id}
                            className="rounded-lg border border-sky-300 p-4 flex flex-col gap-2"
                        >
                            <h1 className="font-semibold">{task.title}</h1>
                            <div className="border-t border-sky-300"></div>
                            <p>{task.description}</p>
                            <div className="flex justify-between">
                                <button
                                    className="bg-sky-400 text-white py-1 px-2 rounded"
                                    onClick={()=>editTask(task.id)}
                                >
                                    Editar
                                </button>
                                
                                <button
                                    className="bg-red-600 text-white py-1 px-2 rounded"
                                    onClick={()=>confirm("¿Seguro que quieres eliminar esta tarea?") && removeTask(task.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
