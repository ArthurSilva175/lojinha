'use client'

import { useState } from "react";

function Cadastro () {

    const [ nome, alteraNome ] = useState("");

    function salvar(){
        console.log("O nome cadastrado é: "+nome);
        alteraNome( nome.toUpperCase() )
    }

    return ( 
        <div className="p-10">
            <h1 className="text-lg">Cadastro</h1>

            <hr/>

            <p>Digite seu nome:</p>
            <input onChange={ (e)=> alteraNome (e.target.value) } value={nome} className="outline" />

            <br/>

            <button onClick={ ()=> salvar() } className="p-3 mt-5 bg-lime-500 text-white">Salvar</button>
    

        </div>
     );
}

export default Cadastro ;