import { StyledMenu } from "./styled"


export default function Menu() {
    return (
       <StyledMenu> 
        <header className="header-left-box">
            <div className="svg-cabecalho-left-box"> <img src="/assets/images/gitlab.svg" alt=""/> </div>
            <div className="devSchool"> <span>Dev</span> Store </div>
        </header>
        <div className="black-box"></div>
        <div className="left-box-management">
            <div> Gerenciamento </div>
            <img src="/assets/images/SetaBaixo.svg" alt="" />
        </div>
        <div className="left-box-aluno">
            <div> Produtos </div>
        </div> 
    </StyledMenu>
)}

