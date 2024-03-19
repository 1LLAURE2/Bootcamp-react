import React, { useEffect, useState } from 'react'
import { Video17 } from './Video17';
import {Settings17} from './Settings17';

import {motion,AnimatePresence}  from "framer-motion";
/**
 * Funcion anomina para crear un comoponente principal
 * @returns [Reac.Component] Componente principal de nuestra aplicacion
 */
export const App17 = () => {
    
    //console.log(JSON.parse(config));
    
    const [dark,setDark]=useState(false);
    const [showSettings,setShowSettings]=useState(false);
    /**
     * Documentacion de use Effect
     * Se crea una variable de estado donde se almacenen el valor de la configuracuon en localstorage
     */
    useEffect( ()=>{
        // try {
        //     const config=localStorage.getItem("config");
        //     setDark(config.theme);
        // } catch (error) {
            
        // }
        setDark(false);
    },[])

    /**
     * Funcion para  cambiar el tema a dark o light
     */
    const toggleDark=()=>{
        setDark(!dark);
    };
    return (
        <div className={`${dark?"dark" :""}`}>
            <div className={`h-screen p-4 flex flex-col  bg-gray-100 dark:bg-slate-800 transition dark:text-gray-50`}>
                <Video17 saludo="Holas" showSettings={showSettings} setShowSettings={setShowSettings}/>
                
                <AnimatePresence
                    initial={false}
                    mode='wait'
                    onExitComplete={()=>null}
                >
                    {
                        showSettings
                        &&
                        <motion.div initial={{y:'100vh'}} animate={{y:'0'}} exit={{y:'100vh'}}>
                            <Settings17  toggleDark={toggleDark}></Settings17>
                        </motion.div> 
                    }
                </AnimatePresence>
                {/* {
                    showSettings
                    &&
                    <motion.div initial={{y:'100vh'}} animate={{y:'0'}} exit={{y:'100vh'}}>
                        <Settings17  toggleDark={toggleDark}></Settings17>
                    </motion.div> 
                } */}
            </div>
        </div>
    )
}

