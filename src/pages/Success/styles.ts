import styled from 'styled-components';

export const SuccessContainer = styled.div`
    margin-top: 5rem;

    h2 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 1.3;
        color: ${props => props.theme['yellow-dark']};
        margin-bottom: 0.25rem;
    }

    h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 2.5rem;
    }

    .wrapper {
        display: flex;
        gap: 6.375rem;

        .left {
            width: 32.875rem;
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            height: min-content;
            background: linear-gradient(white, white) padding-box,
            linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%) border-box;
            border-radius: 6px 36px;
            border: 1px solid transparent;

            .itemContainer {
                display: flex;
                gap: 0.75rem;

                img {
                    width: 2rem;
                    height: 2rem;
                }

                .itemContainerText {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;

                    p {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 1rem;
                        line-height: 1.3;
                        color: ${props => props.theme['base-text']};
                    }

                }

            }

        }

        .right {

            img {
                width: 30.75rem;
            }

        }

    }

`;