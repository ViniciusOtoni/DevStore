import styled from "styled-components"


const Container = styled.div `

display: flex;
flex-direction: row;


.agp-esq {
    display: flex;
    flex-direction: column;
    background-color: #2B3031;
    height: 100vh;
    width: 50%;
    justify-content: center;
    align-items: center;
}

.agp-direita {
    display: flex;
    flex-direction: column;
    background-color: #262626;
    width: 100vh;
    width: 50%; 
    justify-content: center;
    text-align: left;
}

.row {
    display: flex;
    flex-direction: row;
    margin-top: 2em;
}

.desc {
    font-size: 40px;
    color: #ffff;
    margin-right: 2.9em;
}
.desc1 {
    font-size: 40px;
    color: #ffff;
    margin-right: 7.2em;
}
.desc2 {
    font-size: 40px;
    color: #ffff;
    margin-right: 7.6em;
}
.desc3 {
    font-size: 40px;
    color: #ffff;
    margin-right: 7.3em;
}

.titulo span{
    font-size: 50px;
    color: #10EAEA;
}

.titulo {
    font-size: 50px;
    color: #ffff;
}

.pag {
    position: absolute;
    margin-bottom: 10em;
    font-size: 60px;
    margin-left: 6em;
    color: #10EAEA;
}

.logo  img {
    width: 200px;
    height: 200px;
   
}

.botao {
    display: flex;
    margin-top: 45em;
    
    position: absolute;
    margin-left: 2em;
}

.inputs {
    display: flex;
    flex-direction: column;
    margin-left: 6em;
}




`

export { Container }