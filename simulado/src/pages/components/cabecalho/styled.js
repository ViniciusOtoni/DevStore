import styled from 'styled-components';


const ContainerCabecalho = styled.div `


    display: flex;
    flex-direction: row;
    background-color:  #fff;
    padding: 1.3em;
    align-items: center;
    justify-content: space-between;
 
    .box-image {
        display: flex;
        flex-direction: row;
        padding: 0.5em;
    }
    
    .box-user {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .user-name {
        padding-left: 1em;
    }
    
    .user-name  {
        font-size: 16px;
    }
    
    .user-name b {
        color: #000;
    }

    .left-button button {
        border-radius: 50%;
        background-color: #119FDC;
        width: 44px;
        height: 44px;
        border: none;
        margin: .4em;
    }
    
    .refresh-button button {
        border-radius: 50%;
        background-color: #119FDC;
        width: 44px;
        height: 44px;
        border: none;
        margin: .4em;
        
    }

    .box-image {
        display: flex;
        flex-direction: row;
        padding: 0.5em;
    }
    
    .box-user {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .absolute {
        color: white;
        background-color: #119FDC;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
       font-size: .7em;
       font-weigth: bold;
    }

`

export { ContainerCabecalho }
