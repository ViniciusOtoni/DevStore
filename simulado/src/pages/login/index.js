import { Container, InputLogin, ButtonLogin } from "./styled"

import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from "react";
import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie';

import Api from '../../service/api';
const api = new Api();

export default function Login() {
    
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('')

    const navegacao = useHistory()


    const logar = async () => {
        let r =  await api.login(usuario, senha)
      
        if(r.error) {
            toast.error(`${r.error}`)
        } else {
             Cookies.set('usuario-logado' ,JSON.stringify(r));
            navegacao.push('/site')
        }
    }

    const registrar = async () => {
        navegacao.push('/registrar')
    }
    return (
        <Container> 
            <ToastContainer />
            <div className="agp-esq">
               
                 <div className="agp-img"> 
                    <div className="logo-login"> <img src="/assets/images/gitlab.svg" alt="" /> </div>
                    <div className="titulo"> <span> Dev </span> Store </div>
            </div>
            </div>
            
            <div className="agp-direita"> 
             <div className="expecificar"> Login </div>
                <div className="inputs"> 
                 <div className="row"> 
                <div className="bar"> </div>
                 <div className="desc-input"> Email: </div>
                    <div className="input"> <InputLogin value={usuario} onChange={e => setUsuario(e.target.value)}/> </div>
                 </div>
                 <div className="row"> 
                    <div className="bar"> </div>
                    <div className="desc-input"> Senha: </div>
                    <div className="input"> <InputLogin value={senha} onChange={e => setSenha(e.target.value)}/> </div>
                 </div>
                </div>
                
                <div className="botoes"> 
                    <div className="botao1"> <ButtonLogin style={{backgroundColor:"#ffff"}} onClick={registrar} > Criar </ButtonLogin> </div>
                    <div className="botao2"> <ButtonLogin style={{color: "#ffff" }} onClick={logar}> Logar </ButtonLogin>  </div>
                </div>
            
            </div>
           
        </Container>
    )
}