import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    *:focus{
        outline: 0;
    }

   
    /* html,
    div#__next,
    body
    /* body > div:first-child, */
    /* div#__next > div, */
    /* #root */
   // {
     //   height: 100%;
       // min-height: 100%;
        //scroll-behavior: smooth;
    //} */



    body {
        -moz-font-smoothing: antialiased !important;
        -webkit-font-smoothing: antialiased !important;
        /* text-rendering: optimizeLegibility; */
    }


    textarea, input[type="text"] {
      -webkit-appearance: none;
    }

    
    body, input, button, a {
      border: 0;
      outline: 0;
      /* font-size: 16px; */
      font-family: 'Roboto';
      color: #fbfdfd;
    }

    body{
      background-color:#fff;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button, label {
        cursor: pointer;
    }

    button{
      background-color: #00000000;
    }

`;
