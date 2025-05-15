import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

export const Section = styled.section`
    /* Afastamento padrão das seções */
    & {
        padding: 0 6.25rem;
    }

    &.banner {
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

                    /* Conteudo */
                    .p-carousel-items-content {
                        .p-carousel-items-container {
                            .p-carousel-item {
                                /* Banner Card */
                                .banner__container {
                                    display: flex;
                                    gap: 3rem;

                                    .left__content {
                                        display: flex;
                                        flex-direction: column;
                                        gap: 1.25rem;
                                        width: 30%;
                                        height: fit-content;  

                                        .impact__text {
                                            font-weight: 700;
                                            line-height: 24px;
                                            letter-spacing: .75px;
                                            color: ${actionsColors.warning};
                                        }
                                        h1 {
                                            font-size: 4rem;
                                            color: ${grayScaleColors.darkGray};
                                            font-weight: 800;
                                            line-height: 4.125rem;
                                            letter-spacing: 1px;
                                        }
                                        .subtitle {
                                            font-size: 1.125rem;
                                            color: ${grayScaleColors.darkGray};
                                            line-height: 2.125rem;
                                            letter-spacing: .75px;
                                        }
                                        .primary-button {
                                            width: 13.75rem;
                                            margin-top: 1.25rem;
                                        }
                                    }
                                    .right__content {
                                        display: flex;
                                        padding-left: 2rem;

                                        img {
                                            width: 80%;
                                            object-fit: scale-down;
                                        }
                                    }
                                }
                            }
                        }
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
    }

    @media screen and (max-width: 769px) {
        &.banner {
            overflow: hidden;
            
            /* Carrosel */
            .custom-carousel {
                padding: 4rem 1.25rem 2.5rem;

                /* Conteudo */
                .p-carousel-content {
                    gap: 2.5rem;

                    /* Container */
                    .p-carousel-container {
                        /* Conteudo */
                        .p-carousel-items-content {
                            .p-carousel-items-container {
                                .p-carousel-item {
                                    /* Banner Card */
                                    .banner__container {
                                        flex-direction: column-reverse;

                                        .left__content {
                                            gap: .625rem;
                                            width: 100%;
                                            text-align: center;

                                            .impact__text {
                                                font-size: .875rem;
                                                line-height: 22px;
                                                color: ${actionsColors.primary};
                                            }
                                            h1 {
                                                font-size: 2.5rem;
                                                line-height: 3.125rem;
                                            }
                                            .subtitle {
                                                font-size: .875rem;
                                                color: ${grayScaleColors.darkGray2};
                                                line-height: 1.375rem;
                                                letter-spacing: .25px;
                                                margin-top: .625rem;
                                            }
                                            .primary-button {
                                                width: 100%;
                                                margin-top: 1.875rem;
                                            }
                                        }
                                        .right__content {
                                            padding-left: 0;
                                            justify-content: center;

                                            img {
                                                width: 65%;
                                            }
                                        }
                                    }
                                }
                            }
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
                top: 1.25rem;
                right: -4rem;
                width: 35%;
            }
        }
    }
`;