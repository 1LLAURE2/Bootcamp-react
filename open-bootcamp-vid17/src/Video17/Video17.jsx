/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {motion}  from "framer-motion";


export const Video17 = ({showSettings,setShowSettings}) =>{
    const [tasklist,setTaskList]=React.useState([]);
    const [newtask,setNewTask]=React.useState("");
    
    
    /**
     * Esta funcion cambia el estado newTask a traves del input
     * 
     * @param {*} e - Evento de change proveniente de reac
     * @returns 
     */
    const handleChange=e=>setNewTask(e.target.value);

    /**
     * Añade una nueva tarea a la lista de tareas
     * v2: La nueva tarea se añade como un objeto {task:nombre de la tareas,completed: si esta completa}
     */
    const addNewTask=()=>{
        // setTaskList([...tasklist,newtask])
        if(newtask==="") return;
        setTaskList([...tasklist,{task:newtask,completed:false}])
        setNewTask("");
    }

    /**
     * Funcion para verificar si la lislta de tareas esta vacia
     * 
     * @returns true si tasklist.length===0
     */
    const tasklistEmpty=()=>tasklist.length===0;

    /**
     * Funcion para editar el nombre de la nueva tarea
     * 
     * @param {*} Evento onchange proveniente de react 
     * @returns 
     */
    const editNewItem=(e)=>setNewTask(e.target.value)

    /**
     * Funcion para eliminar una tarea en concreto
     * 
     * @param {*} index - Indice de la tarea a eliminar
     */
    const removeItem=(index)=>{
        const newTaskList=tasklist.filter((item,i)=> i !== index)
        setTaskList(newTaskList);
    }

    /**
     * 
     * Cambia el item por completado<->pendiente
     * @param {*} index 
     */
    const toggleCompleteItem=(index)=>{
        const newTaskList=tasklist;
        console.log(newTaskList[index].completed)
        newTaskList[index].completed=!newTaskList[index].completed;
        console.log(newTaskList[index].completed)
        setTaskList([...newTaskList]);
    }
    /**
     * Añade una nueva tarea cuando se presiona Enter
     * @param {*} e - Evento onkeyup que proviene por defecto en React
     * @returns 
     */
    const insertNewItemOnEnterKey=e=>e.key==="Enter" && addNewTask();
    return (
        <>
            <header className='flex justify-between'>
                <h1 className="text-3xl font-bold underline">↓Mira </h1>
                <h1 className='text-xl text-sky-700 font-semibold dark:text-sky-300'>Task List</h1>

                <motion.button
                    whileHover={{scale:1.1}} 
                    whileTap={{scale:0.9}}
                    
                    className='btn' onClick={()=>setShowSettings(!showSettings)}>
                    {!showSettings?"Show Setings":"Hide Setings"}                    
                </motion.button>
            </header>
            
            <div className='my-4'>
                <input
                    className='shadow py-1 px2 rounded-lg outline-none transition-all duration-150 focus:ring-2 mr-2 dark:text-slate-700'
                    type="text"
                    value={newtask}
                    onKeyDown={insertNewItemOnEnterKey}
                    onChange={handleChange}
                    placeholder='New Task'
                />
                <button
                    className='btn'
                    onClick={addNewTask}>
                    Añadir Task
                </button>
                <div>
                    {
                        tasklistEmpty()
                        ? <h1>La lista de tareas esta vacia</h1>
                        : tasklist.map(
                            // (t,i)=><p key={i}>{t}</p>
                            (t,i)=>
                            <motion.li 
                                initial={{x:'100vw'}}
                                animate={{x:0}}
                                key={i}
                            > 
                                <label>
                                    <input
                                        type='checkbox'
                                        // onClick={()=>removeItem(i)}
                                        // checked={false}
                                        onClick={()=>toggleCompleteItem(i)}
                                        checked={t.completed}
                                        onChange={()=>{}}
                                    />
                                    <span className={`ml-2 text-gray-800 dark:text-gray-100 text-sm italic ${t.completed && "line-through"}`}>{t.task}</span>
                                </label>
                            </motion.li>
                        )
                    }
                </div>
            </div>
        </>
    )
}

