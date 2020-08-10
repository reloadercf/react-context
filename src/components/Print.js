import React,{useContext} from 'react';
import {GlobalContext} from "../context/Context"

function Print() {
    let {movie}=useContext(GlobalContext)
    return (
        <div>
            <h1>{movie}</h1>
        </div>
    );
}

export default Print;