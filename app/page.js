'use client'
import { Cairo } from "next/font/google";
import { useState } from "react";

export default function Home() {
   // Aqui entra o javascript normal 
  const [ carrinho, alteraCarrinho ] = useState(0); //toda vez
  const [ precoProduto, alteraPrecoProduto ] = useState(25);
  const [ valorTotal, alteraValorTotal ] = useState( 0 );

  function manipulaCarrinho( adicionar ){
    if(adicionar == true){
      alteraCarrinho( carrinho + 1 )
    }else{
      alteraCarrinho( carrinho - 1 )
    }
  }
  
  function limparCarrinho(){
    alteraCarrinho(carrinho = 0)
  }

  function aplicaCupom(){
    alteraPrecoProduto( precoProduto - precoProduto * 0.25)
  }






  return (
    <div>
      <h1 className="bg-sky-500 text-white p-3">Lojinha do Next</h1>
      <p className="p-3 text-lg">
        Carrinho: <strong>{carrinho}</strong> itens.
        <br/>
        <button onClick={()=>limparCarrinho()} className="bg-orange-400 text-black mt-5 p-3">Limpar</button>
        <button onClick={()=>aplicaCupom()} className="bg-black text-white mt-5 p-3 m-5">Adicionar cupom</button>

      
      </p>

      

      <hr/>

      <p className="p-3 text-lg text-red-900">
          Valor total: R$ <strong> { valorTotal } </strong>
      </p>

      <h2>Produtos</h2>


      <div className="border bg-sky-700 w-fit p-2 text-center text-white">
        <img className="" src="https://placehold.co/200"/>
        <h3 className="text-lg text-lime-200 font-bold">Produto modelo</h3>
        <p>R$ {precoProduto}</p>
        <button onClick={()=>manipulaCarrinho(true)} className="bg-lime-400 text-black mt-5 p-3">Adicionar ao carrinho</button>
        <br/>
        <button onClick={()=>manipulaCarrinho(false)} className="bg-red-400 text-black mt-5 p-3">Remover carrinho</button>
      </div>
    
    </div>
  );
}
