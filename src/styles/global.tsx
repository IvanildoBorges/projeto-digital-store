import { createGlobalStyle as globalStyle } from "styled-components";
import { actionsColors } from "./colors/cores";
import { tipography } from "./fonts/tipografia";

const Global = globalStyle`
    * {
        margin: 0;
        padding: 0;
        border-box: box-sizing;
    }

    html {
        font-size: 16px;
    }

   body, input, textarea {
        font-family: ${tipography.familia};
        font-weight: ${tipography.peso};
    }

    body {
        width: 100%;
        min-width: 320px;
        min-height: 100dvh;
        background-color: ${actionsColors.bg};
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
`;

export default Global;