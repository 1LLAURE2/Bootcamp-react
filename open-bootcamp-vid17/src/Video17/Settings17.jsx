import React from 'react'
import {useLocalStorage} from './Hooks/useLocalStorage';

const defaultConfig= {
    theme: "dark",
    lang:"es"
};

export const Settings17 = ({toggleDark}) => {
    
    // const [config,setConfig]=useLocalStorage('config',defaultConfig);
    // const [config,setConfig]=useLocalStorage('config',JSON.stringify(defaultConfig));
    // const [config,setConfig]=useLocalStorage('config',JSON.parse(defaultConfig));
    const [config,setConfig]=useLocalStorage("config",defaultConfig);

    /**
     * Funcion para intercambiar light<->dark
     * 
     * @param {*} event - Evento de Click proveniente de React
     */
    const toggleMode=(event)=>{
        event.preventDefault();
        //theme:oldConfig.theme==="ligth"?"dark":"ligth",
        setConfig((oldConfig)=>(
            {
                ...oldConfig,
                theme:oldConfig.theme==="ligth"?"dark":"ligth",
            }),
        );
        toggleDark();
        //console.log("togleMode");
    };

    return (
        <div className='text-right'>
            
            <hr className='my-4'/>

            <h1 className='text-3xl text-cyan-800 font-semibold.mb-4 dark:text-cyan-400'>APP SETTINGS</h1>
            <p className='text-sm'>Config Actual: <span className='italic'>{config.theme}</span></p>
            <p>{JSON.stringify(config)}</p>
            <button
                type='button'
                className='btn mt-4'
                onClick={toggleMode}
            >
                Toggle DarkMode
            </button>
            {/* <label htmlFor='theme'>Choose a Theme: </label> */}
        </div>
    )
}
