import styled from "styled-components";
import Section from "../../components/layout/Section";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

export const SectionBanner = styled(Section)`
    padding: 0;
    position: relative;
    
    /* Carrosel */
    .custom-carousel {
        background-color: ${grayScaleColors.lightGray3};
        padding: 7.75rem 6.25rem 3.313rem;

        /* Conteudo */
        .p-carousel-content {
            gap: 3rem;

            /* Container */
            .p-carousel-container {
                /* Botões de voltar e avançar */
                button.p-link {
                    display: none;
                }
            }

            /* Indicadores de progresso */
            .p-carousel-indicators {
                display: flex;
                gap: .625rem;

                li.p-carousel-indicator button {
                    height: .75rem;
                    width: .75rem;
                    border-radius: 100%;
                    background-color: ${grayScaleColors.lightGray2};
                }

                li.p-carousel-indicator.p-highlight button {
                    background-color: ${actionsColors.primary};
                }
            }
        }
    }

    .img-absolute {
        position: absolute;
        top: 4.875rem;
        right: 2.313rem;
        width: 9%;
    }

    @media screen and (max-width: 769px) {
        overflow: hidden;
        
        /* Carrosel */
        .custom-carousel {
            padding: 4rem 1.25rem 2.5rem;

            /* Conteudo */
            .p-carousel-content {
                gap: 2.5rem;

                /* Indicadores de progresso */
                .p-carousel-indicators {
                    display: flex;
                    gap: .625rem;

                    li.p-carousel-indicator button {
                        height: .75rem;
                        width: .75rem;
                        border-radius: 100%;
                        background-color: ${grayScaleColors.lightGray2};
                    }

                    li.p-carousel-indicator.p-highlight button {
                        background-color: ${actionsColors.primary};
                    }
                }
            }
        }

        .img-absolute {
            top: 1.25rem;
            right: -4rem;
            width: 35%;
        }
    }
`;