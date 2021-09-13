import styled from "styled-components";

const Conteudo = styled.div `


    display: flex;
    flex-direction: row;
    min-width: 100%;
    min-height: 100vh;


    
    .right-box {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .botton-bar-right-reader {
        border: 1px solid #D9D9D9;
        width: 97%;
        align-self: center;
    }

    .body-right-box {
        display: flex;
        flex-direction: column;
    
        background-color: #F5F5F5;
    
        padding: 3em;
        padding-right: 2.7em;
        
        height: 100%;
        padding-bottom: 0em;
        margin-bottom: 0em;
        padding-right: 0em;
        margin-right: 0em;
    }

    .button-create  button {
        width: 106px;
        height: 36px;
    
        background: #119FDC;
        border-radius: 44px;
        border: none;
        color: white;
        font-size: 14px;
        margin-left: -7em;
        font-weight: bold;
        margin-rigth: 20em;
    }

    .button-create {
        align-items: flex-end;
        display: flex;
    }

    .input-new-student {
        display: flex;
        flex-direction: row;
        padding-top: 2.4em;
        
    }
    
    .agp-input01 {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        margin-left: 3.4em;
    }

    .agp-input1 {
        display: flex;
        flex-direction: row;
        margin-left: 4em;
    }

    .agp-input02 {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        margin-left: 3.4em;
    }
    

    .agp-input03 {
        display: flex;
        flex-direction: row;
        align-items: center;
       
        margin-left: 3.4em;
    }

    .agp-input04 {
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    .agp-input05 {
        display: flex;
        flex-direction: row;
        align-items: center;
      
        margin-left: 1em;
    }

    .agp-input06 {
        display: flex;
        flex-direction: row;
        align-items: center;
       
        margin-left: .3em;
    }

    .agp-input07 {
        display: flex;
        flex-direction: row;
        align-items: center;
       
        margin-left: .3em;
    }

    .agp-input07 {
        display: flex;
        flex-direction: row;
        align-items: center;
      
        margin-left: 1.7em;
    }

 

    .input {
        margin-top: 1em;
    }
    

.agp-input111 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 1em;
    align-items: center;
}


.agp-input222 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: .2em;
    align-items: center;
}


.agp-input333 {
    display: flex;
    flex-direction: row;
    margin-left: 1.7em;

    align-items: center;
}
    .input-left {
        display: flex;
        flex-direction: column;
        margin-right: 3em;
       
        
    }
    .input {
        margin-bottom: 1em;
    }
    
    .input-right {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
       
    }

    .name-student {
        font-size: 18px;
        color: #615858;
        margin-right: 1.1em;
        padding-left: 1em;
        font-weight: 800;
        padding-right: .3em;
    }

    .number-student {
        font-size: 18px;
        color: #615858;
        margin-right: 0.8em;
        font-weight: 800;
    }

    .number-student1 {
        font-size: 18px;
        color: #615858;
        margin-right: 0.8em;
        font-weight: 800;
       margin-left: -1em;
       margin-right: 1.8em;
    }
    
    .class-student {
        font-size: 18px;
        color: #615858;
        margin-right: 0.8em;
        font-weight: 800;
    }
    
    .corse-student {
        font-size: 18px;
        color: #615858;
        margin-right: 1em;
        font-weight: 800;
    }
    .row-bar {
        display: flex;
        flex-direction: row;
    }

    .bar-new-student {
        border: 6px solid #119FDC;
        border-radius: .5em;
    
        margin-right: .4em;
    }

    .new-student-box {
        display: flex;
        flex-direction: column;
    
        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
            
    }

    .text-new-student {
        display: flex;
        flex-direction: row;
    
       font-size: 32px;
    }
    .text-new-student div {
        font-weight: bolder;
    }

    .bar-new-student {
        border: 6px solid  #119FDC;
        border-radius: .5em;
    
        margin-right: .4em;
    }

    .text-registered-student {
        display: flex;
        flex-direction: row;
        font-weight: bolder;
       font-size: 32px;
       padding-left: .3em;
    }

    .table-user {
        border-collapse: collapse;
    }

    .int {
        background-color: #fff;
    }

    thead {
        background-color:   #6CC3DF;   
    }


    table {
        margin-top: 2em;
        border: 1px solid #E2E2E2;
        box-sizing: border-box;
    }

    tbody {
        background-color: #F5F5F5;
    }
  

    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 31px;
        height: 31px;
    }
   
    .text-registered-student {
        display: flex;
        flex-direction: row;
        font-weight: bolder;
       font-size: 32px;
       padding-left: .3em;
    }

    .student-registered-box {
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
        margin-top: 2em;
        
    }

    .button-create button:hover {
        background-color:  #27355a;
        transition: 2s;
    }

    button {
        cursor: pointer;
    }

    img {
        cursor: pointer;
    }

    
.a {
    width: .1em;
}

.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;
    
}

.user-image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;
    
}

.body-right-box {
    padding-right: 2.7em;
}









.information-purple {
    display: flex;
    flex-direction: row;
    background: #986CDF;
    width: 1454px;
    height: 67px;
    color: #FFFFFF;
    justify-content: space-evenly;
    margin-top: 2em;
    align-items: center;
    font-size: 18px ;
    margin-bottom: 1em;
}


td {
    text-align: left;
    height:  29.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

th {
    height: 29.93px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: bold;
   
} `

export  { Conteudo }