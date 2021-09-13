import { InputLogin, ButtonLogin } from "../login/styled"
import { Container } from "./styled"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import { useHistory } from 'react-router-dom';




import Api from '../../service/api';

const api = new Api();

export default function Registrar() {

    const[image, setImage] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    const navegacao = useHistory()

    const Registrar = async  ()  => {
        let r =  await api.inserirUsuario(image, name, email, senha )
        console.log(r)
        if(r.erro) {
         return toast.error(`${r.erro}`)
        } else {
          navegacao.push('/')
        }
        console.log(r)
    }
   
    

    return (
        <Container> 
            <ToastContainer />
            <div className="agp-esq"> 
                
                <div className="logo"> <img src="/assets/images/gitlab.svg" alt="" /> </div>
                <div className="titulo"> <span> Dev </span>  Store </div>
                
            </div>
            <div className="agp-direita"> 
             <div className="pag"> Registrar </div>
                <div className="inputs"> 
                    <div className="row"> 
                        <div className="desc"> Link da Imagem: </div> 
                        <div className="input"> <InputLogin value={image} onChange={e => setImage(e.target.value)}   /> </div>
                    </div>
                    <div className="row"> 
                        <div className="desc1"> Nome: </div> 
                        <div className="input"> <InputLogin  value={name}   onChange={e => setName(e.target.value)} /> </div>
                    </div>
                    <div className="row">
                        <div className="desc2"> Email: </div>  
                        <div className="input"> <InputLogin  value={email}   onChange={e => setEmail(e.target.value)} /> </div>
                    </div>
                    <div className="row"> 
                        <div className="desc3"> Senha: </div> 
                        <div className="input"> <InputLogin value={senha}  onChange={e => setSenha(e.target.value)} /> </div>
                    </div>
                </div>
            
                <div className="botao">   <ButtonLogin onClick={Registrar}   style={{color: "#000000", backgroundColor:"#f3f3f3", width:"700px"}}> Criar Conta </ButtonLogin> </div>
            </div>
        </Container>
    )
}