import { createGlobalStyle as globalStyle } from "styled-components";
import { actionsColors, grayScaleColors } from "./colors/cores";
import { tipography } from "./fonts/tipografia";

const Global = globalStyle`
    * {
        margin: 0;
        padding: 0;
        border-box: box-sizing;
        list-style: none;
    }

    html {
        font-size: 16px;
    }

   body, input, textarea {
        font-family: ${tipography.familia};
        font-weight: ${tipography.peso};
        color: ${grayScaleColors.darkGray2};
    }

    body {
        width: 100%;
        min-width: 320px;
        min-height: 100dvh;
        background-color: ${actionsColors.bg};
        font-size: 1rem;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    button, input {
        border: none;
    }

    .icone {
        path {
            fill: ${grayScaleColors.lightGray};
            transition: all 0.3s ease;
        }
    }
    .icone:hover {
        path {
            fill: ${actionsColors.primary};
        }
    }
    .icone.active {
        path {
            fill: ${actionsColors.primary};
        }
    }
`;

export default Global;