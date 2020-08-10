import React,{useState,createContext} from 'react';

let GlobalContext=createContext()
let {Provider,Consumer}=GlobalContext

function Context({children}){
    let[movie,setMovie]=useState("No se ha seleccionado ninguna pelicula")
    
    let handleDelToro=()=>{
        setMovie("Blade")
    }
    let handleTarantino=()=>{
        setMovie("Django")
    }

    return(
    <Provider value={{movie, handleDelToro, handleTarantino}}>
        {children}
    </Provider>
    )
}export{Context, Consumer as UseConsumer, GlobalContext}