import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

const Container = styled.section`
    /* Afastamento padrão das seções */
    & {
        padding: 2.5rem 6.25rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        .box-title {
            display: flex;
            justify-content: space-between;
            gap: 1rem;

            .title__section {
                color: ${grayScaleColors.darkGray2};
                font-size: 1.5rem;
                font-weight: bold;
                flex: 1;
            }

            .title__section.center {
                text-align: center;
            }
            .title__section.left {
                text-align: left;
            }

            .link__section {
                color: ${actionsColors.primary};
                font-size: 1.125rem;
            }
        }
    }

    @media screen and (max-width: 769px) {
        & {
            padding: 1.875rem 1.25rem;

            .box-title {
                .title__section {
                    font-size: 1rem;
                }

                .link__section {
                    font-size: .0.875rem;
                }
            }
        }
    }
`;

const Section = ({
    activeTitle = true, 
    activeLink = false, 
    title = "Título",
    titleAlign = "left",
    link = {
        text: "Show More",
        href: "#"
    },
    className, children
}) => {
    return (
        <Container className={className} >
            {activeTitle 
                ? (<div className="box-title">
                        <h2 className={`title__section ${titleAlign === "center" ? "center" : "left"}`}>
                            {title}
                        </h2>
                        {activeLink 
                            ? <a 
                                className="link__section" 
                                href={link.href} 
                                referrerPolicy="no-referrer"
                              >
                                {link.text}
                              </a>
                            : <></>
                        }
                    </div>)
                : <></>
            }
            {children}
        </Container>
    );
}
 
export default Section;