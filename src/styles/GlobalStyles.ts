import { createGlobalStyle } from 'styled-components';
import '@fontsource/work-sans/400.css';

export default createGlobalStyle`

    body {
        font-family: 'Work Sans', sans-serif;
        margin: 0;
        font-size: 16px;
    }

    bold {
        font-weight: 600;
    }

    html {
        box-sizing: border-box !important;
    }

    a {
        color: #3F8BFC;
        text-decoration: none;
    }
`;
