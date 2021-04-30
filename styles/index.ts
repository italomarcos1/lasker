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

   
    html,
    body,
    /* body > div:first-child, */
    div#__next,
    /* div#__next > div, */
    #root
    {
        height: 100%;
    }



    body {
        -moz-font-smoothing: antialiased !important;
        -webkit-font-smoothing: antialiased !important;
        /* text-rendering: optimizeLegibility; */
    }

    /* @font-face {
      font-family: "OpenSans";
      src: local('Open Sans'), url('/fonts/OpenSans-Regular.ttf') format('truetype');
    }

    @font-face {
      font-family: "OpenSansBold";
      src: local('Open Sans'), url('/fonts/OpenSans-Bold.ttf') format('truetype');
    }
  
    @font-face {
      font-family: "OpenSansSemiBold";
      src: local('Open Sans'), url('/fonts/OpenSans-SemiBold.ttf') format('truetype');
    }

   */

    textarea, input[type="text"] {
      -webkit-appearance: none;
    }

    
    body, input, button {
      border:0;
      outline: 0;
      font: 16px 'Open Sans';
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
