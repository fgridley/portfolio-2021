import { createGlobalStyle } from 'styled-components';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/300.css';

export default createGlobalStyle`

    body {
        font-family: 'Work Sans', sans-serif;
        margin: 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.35;
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
