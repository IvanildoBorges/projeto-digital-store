import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

const Container = styled.section`
    /* Afastamento padrão das seções */
    & {
        padding: 0 6.25rem;
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

            .link__section {
                color: ${actionsColors.primary};
                font-size: 1.125rem;
            }
        }
    }
`;

const Section = ({
    activeTitle = false, 
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
                        <h2 className="title__section" style={{textAlign: titleAlign}}>
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