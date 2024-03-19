import React, { useEffect, useState } from 'react'

export const useLocalStorage =(key,defaultValue=null) => {
    const [value,setValue]=useState(()=>{
        try{
            const item=localStorage.getItem(key);
            if(item!==null){
                // console.log('item!')
                return JSON.parse(item);
            }
            return defaultValue;
        }catch(error){
            // console.log('cathc Error',error);
            return defaultValue;
        }
    });

    useEffect(()=>{
        //Clave     Valor
        //config    null
        localStorage.setItem(key,JSON.stringify(value));
    },[value, key]);
    // console.log(value)
    return [value,setValue];
}
