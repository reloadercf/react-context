import React,{useContext} from 'react';
import {GlobalContext} from "../context/Context"
import Print from './Print'

function Movie() {
    let {movie, handleDelToro, handleTarantino}=useContext(GlobalContext)
    return (
        <div>
            <Print />
            {movie==="Blade"?
            <span>
                <h2>Pelicula de Guillermo del Toro</h2>
                <button onClick={handleTarantino}>Haz Click para ver algo de Tarantino</button>
            </span>
            :movie==="Django"?
            <span>
                <h2>Pelicula de Tarantino</h2>
                <button onClick={handleDelToro}>Haz Click para ver algo de Guillermo del Toro</button>
            </span>
            :<span>
                <button onClick={handleTarantino}>Haz Click para ver algo de Tarantino</button>
                <button onClick={handleDelToro}>Haz Click para ver algo de Guillermo del Toro</button>
            </span>
            }
        </div>
    );
}

export default Movie;