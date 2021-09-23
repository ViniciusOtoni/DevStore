import { ContainerCabecalho } from "./styled"
// import { useRef } from "react"; 

import Cookies from "js-cookie";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'

import Api from "../../../service/api";
const api = new Api();

function lerUsuarioQuelogou(navegation) {
    let logado = Cookies.get('usuario-logado');
    if(logado == null) {
    navegation.push('/')
    return null;
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;

    

}






export  default function Cabecalho() {
    const navegation = useHistory();
    let usuarioLogado = lerUsuarioQuelogou(navegation) || {};
    const[nm] = useState(usuarioLogado.nm_usuario);
    const[img] = useState(usuarioLogado.img_usuario);
    const [setProdutos] = useState([]);

    const logof = () => {
        Cookies.remove('usuario-logado')
        navegation.push('/');
    }


    
    
    const listar = async () => {
      
      
        const  r = await api.listarProdutos()
        console.log(r)
        
        setProdutos(r) 
        
    
         
        
    }

    return (
       <ContainerCabecalho>
           <LoadingBar />
        <div className = "box-user"> 
          <div className ="user-image">  <img src= {img} alt = "" /> <div className="absolute">  3   </div>  </div>
          
          <div className ="user-name"> olá, <b>  {nm} </b> </div>
         </div>
         <div className ="box-image">
             <div className="refresh-button"> <button onClick={listar}> <img  src="/assets/images/Vector.svg" alt = "" />  </button> </div>
             <div className="left-button" onClick={logof}> <button> <img src="/assets/images/Group_104.svg" alt = "" />  </button> </div>
         </div>
    </ContainerCabecalho>
    
   
    )
}