import { useEffect, useState, useRef } from "react"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import { useHistory } from "react-router-dom";

import Cabecalho  from "./components/cabecalho"

import  { StyledInput } from "./components/input/styled.js"
import { StyledTextArea } from "./components/textarea/styled";



import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import Menu from "./components/menu"

import { Conteudo } from "./styled.cop"

import Api from "../service/api"
const api = new Api();

export default function  ConteudoPrinci() {
    
    // const navegation = useHistory();

    const [idAlterado, setIdAlterado] = useState(0);
    const [produtos, setProdutos] = useState([]);
    const [nm, setNm] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precoDe, setPrecoDe] = useState('');
    const [precoPor, setPrecoPor] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [descProduto, setdescProduto] = useState('');
    const [estoque, setEstoque] = useState('');
    const [img, setImg] = useState('');


    const loading = useRef(null);
    
    const listar = async () => {
      
        loading.current.continuousStart();
        
        const  r = await api.listarProdutos()
        
        setProdutos(r) 
        
        if(loading.current != null) 
            loading.current.complete();
        
    }

 
    useEffect(() => {
       
        
        listar()

       
    }, [])

    

    const validarResposta = (resp) => {
       

        if (!resp.erro)
            return true;
            toast.error(`${resp.erro}`);
        return false;
    }

    const criarAluno = async () => {
     
        if(precoPor < 0)
        return  toast.error('Não pode  inserir número negativo')

        if(precoDe < 0)
        return  toast.error('Não pode  inserir número negativo')

        if(avaliacao < 0)
        return  toast.error('Não pode  inserir número negativo')


        if(estoque < 0)
        return  toast.error('Não pode  inserir número negativo')
       

        if(nm === '')
        return toast.error("O Campo Nome Precisa ser Preenchido!");
    
        if(categoria === '')
        return toast.error("O Campo Categoria Precisa ser Preenchido!");
    
        if(precoDe  === '')
        return toast.error("O Campo Preço De Precisa ser Preenchido!");

        if(precoPor  === '')
        return toast.error("O Campo Preço Por Precisa ser Preenchido!");
    
        if(avaliacao  === '')
        return toast.error("O Campo  Avaliação Precisa ser Preenchido!");

        if(descProduto  === '')
        return toast.error("O Campo Descrição Precisa ser Preenchido!");

        if(estoque  === '')
        return toast.error("O Campo estoque Precisa ser Preenchido!");

        if(img === '')
        return toast.error("O Campo Imagem Precisa ser Preenchido!");
     
        if(idAlterado === 0) {
        const r = await api.inserirProdutos(nm, categoria, precoDe, precoPor, avaliacao, descProduto, estoque, img)
        if (!validarResposta(r)) 
        return        
        toast.success('Produto Inserido Com Sucesso')
     } else {
       const r = await api.alterarProduto(idAlterado, nm, categoria, precoDe, precoPor, avaliacao, descProduto, estoque, img)
        if (!validarResposta(r)) 
        return
       toast.success('Produto Alterado Com Sucesso')
    }
        reset()
        listar()
    }

    async function reset() {
        setIdAlterado(0);
        setCategoria('');
        setEstoque('');
        setImg('');
        setNm('');
        setPrecoDe('');
        setPrecoPor('');
        setAvaliacao('');
        setdescProduto('');
    }


   async function alterarProduto(item)  {
        
    setIdAlterado(item.id_produto)
    setCategoria(item.ds_categoria)
    setEstoque(item.qtd_estoque)
    setImg(item.img_produto)
    setNm(item.nm_produto)
    setPrecoDe(item.vl_preco_de)
    setPrecoPor(item.vl_preco_por)
    setAvaliacao(item.vl_avaliacao)
    setdescProduto(item.ds_produto)
    }




    const deletarProduto = async(info) => {
        confirmAlert({
            title: 'Deletar Produto',
            message: `Certeza Que Deseja Deletar O Produto ${info.nm_produto} ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        await api.removerProduto(info.id_produto)
                        toast.success('Produto Deletado Com Sucesso')

                        listar()
                    }
                },
                {
                label: 'Não',
                }
            ]
        })
    }

    
    

    return  (
    <Conteudo> 
    <ToastContainer />
    <LoadingBar color= "#10EAEA" ref={loading} />
    <Menu />
      <div className="right-box"> 
      <Cabecalho />
       
        <div className="botton-bar-right-reader"> </div>
      
        <div className="body-right-box">
            <div className="new-student-box">
                <div className="text-new-student">
                    <div className="bar-new-student"></div>
                    <div className="text-new-student">{ idAlterado > 0 ? `Alterar Produto${idAlterado}`  : `Novo Produto` }</div>
                </div>
                <div className="input-new-student"> 
                    <div className="input-left">
                       <div className="agp-input01"> 
                        
                        <div className="name-student"> Nome: </div>  
                        <StyledInput value={nm} onChange={e => setNm(e.target.value)} />  
                        <div class="agp-input111"> 
                        <div className="corse-student"> Preço DE: </div>  
                        <StyledInput  value={precoDe} onChange={ e => setPrecoDe(e.target.value)}/> 
                        </div>
                    </div> 
                    <div className="agp-input02">
                        <div className="number-student"> Categoria: </div>  
                        <StyledInput value={categoria} onChange={e => setCategoria(e.target.value)}  /> 
                        <div class="agp-input222"> 
                        <div className="class-student"> Preço POR: </div>  
                        <StyledInput value={precoPor} onChange={e => setPrecoPor(e.target.value)}/> 
                       </div>
                       </div>


                       <div className="agp-input03">
                        <div className="number-student"> Avaliação: </div>  
                        <StyledInput value={avaliacao} onChange={e => setAvaliacao(e.target.value)}  /> 
                        <div class="agp-input333"> 
                        <div className="class-student"> Estoque: </div>  
                        <StyledInput value={estoque} onChange={e => setEstoque(e.target.value)}/> 
                        </div>
                       </div>


                       <div className="agp-input04">
                        <div className="number-student"> Link da Imagem: </div>  
                        <StyledInput value={img} onChange={e => setImg(e.target.value)} className="input-big" style={{width: "659px"}}/> 
                       </div>
                    
                       <div className="agp-input1">
                        <div className="number-student1"> Drescrição: </div>  
                        <StyledTextArea value={descProduto} onChange={e => setdescProduto (e.target.value)}/>
                       </div>

                    </div>
                    <div className="button-create"> <button onClick={criarAluno}> { idAlterado > 0 ? "Alterar" : "Cadastrar" } </button> </div>
                </div>
            </div>

            <div className="student-registered-box">
               <div className="row-bar"> 
                <div className= "bar-new-student"> </div>
                <div className="text-registered-student"> Produtos Cadastrados </div>
               </div>
            
                <table className ="table-user">
                    
                    <thead>
                        <tr>
                            <th className="a"> </th>
                            <th> ID </th>
                            <th> Produto </th>
                            <th> Categoria </th>
                            <th>  Preço </th>
                            <th> Estoque </th>
                            <th className="a"> </th>
                            <th className="a"> </th>
                             
                        </tr>
                    </thead>
            

            
                  
                      
                        <tbody>

                        {produtos.map((x, i) => 

                            <tr className={i % 2 === 1 ? "int" : ""}>
                                <td> <img src={x.img_produto} alt="" style={{height:"60px", width:"60px"}} /> </td>
                                <td> {x.id_produto} </td>
                                <td title={x.nm_produto}> 
                                {x.nm_produto != null && x.nm_produto.length >= 20 
                                ? x.nm_produto.substr(0,20) + "..." 
                                : x.nm_produto} 
                                </td>
                                <td> {x.ds_categoria} </td>
                                <td> {x.vl_preco_de} </td>
                                <td> {x.qtd_estoque} </td>
                                    <td> <button onClick={ () => alterarProduto(x) }> <img   src="/assets/images/editiButton.svg" alt="" /> </button> </td>
                                <td> <button onClick={ () => deletarProduto(x) }> <img  src="/assets/images/Group106.svg" alt="" /> </button> </td>
                            </tr>

                           
                            )}

                    
                           
                        </tbody> 
                        
                        
        </table>
                    
        </div>
                    
        </div>
                    
    </div>
    </Conteudo>
)}

