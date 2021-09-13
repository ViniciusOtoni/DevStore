import styled  from "styled-components";


const Container = styled.div `

    display: flex;
    flex-direction: row;

    .agp-esq {
        display: flex;
        flex-direction: column;
        background-color: #2B3031; 
        width: 50%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .agp-direita {
        display: flex;
        flex-direction: column;
        background-color:  #262626;
        width: 50%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .titulo span {
        color: #10EAEA;
        font-size: 65px;
    }
    .titulo {
        color: #fff;
        font-size: 65px;
    }
    img {
        width: 200px;
        height: 200px;
        margin-left: 2em;
        
    }
    .expecificar {
        color:  #10EAEA;
        font-size: 75px;
        margin-bottom: 9em;
        margin-left: 0em;
        position: absolute;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        padding-bottom: 10em;
        padding-top: 10em;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: space-between;
        height: 3em;
        margin-top: 5em;
    }

    .botoes {
        display: flex;
        flex-direction: row;
        margin-right: 4em;
    }

    .desc-input {
        color: #ffff;
        font-size: 40px;
        margin-right: 2em;
  
    }

    .bar {
      
            border: 4px solid  #119FDC;
            border-radius: .5em;
            margin-right: .7em;
        
    
    }
    
    
    
    .botoes {
        display: flex;
        flex-direction: row;
    }


`


const InputLogin = styled.input `
width: 309px;
height: 56px;

background: #FFFFFF;
border: 1px solid #A8A8A8;
box-sizing: border-box;
border-radius: 5px;
`

const ButtonLogin = styled.button `
width: 330px;
height: 40px;
color: #00000;
font-size: 20px;
border-radius: 5em;
background-color: #10EAEA;
border: none;
margin-left: 5em;
margin-rigth: 5em;
text-align: center;
cursor: pointer;
`

export { Container, InputLogin, ButtonLogin }
