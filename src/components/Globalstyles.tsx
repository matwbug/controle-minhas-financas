import { createGlobalStyle } from 'styled-components';
import {shade} from 'polished'

export default createGlobalStyle`
    *, button, input{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        background: none;
    }
    
    html, body, #root{
        width: 100%;
        height: 100%;
        max-height: 100vh;
        max-width: 100vw;
        overflow-y: auto;
        overflow-x: hidden;
    }
    html{background: var(--bg);}

    :root{
        --bg: #f1f1f1;
        --bg-panel: #fdfdfd;
        --color-primary: #ff0048;
        /* --color-primary-light: ${shade(0.01,'#e8591c')}; */
        --color-text: white;
        --text-gray: #d4d4d4;
        --color-text-reverse: black;
    }

    /* scroll bar */
    ::-webkit-scrollbar {width: 8px;}
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb {background: var(--color-text); }
    ::-webkit-scrollbar-thumb:hover {background: var(--color-text); }
`
