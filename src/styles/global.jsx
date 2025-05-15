import { createGlobalStyle as globalStyle } from "styled-components";
import { actionsColors, grayScaleColors } from "./colors/cores";
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

    .primary-button {
        font-size: 1rem;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: .75px;
        font-family: ${tipography.familia};
        background-color: ${actionsColors.primary};
        color: ${grayScaleColors.lightGray3};
        padding: .75rem 1rem;
        border-radius: .5rem;
        cursor: pointer;
        transition: all .3s ease-in;
    }

    .primary-button:hover {
        background-color: ${actionsColors.tertiary};
    }
`;

export default Global;