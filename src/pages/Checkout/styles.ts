import styled from 'styled-components';

export const CheckoutContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 448px;
    gap: 2rem;
    align-items: flex-start;
    margin-top: 2.5rem;

    .checkoutContainerLeft {

        .checkoutContainerLeftTitle {
            color: ${props => props.theme['base-subtitle']};
            font-family: 'Baloo 2', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.3;
            margin-bottom: 1rem;
        }

    }

    .completeOrderContainer {
        padding: 2.5rem;
        background-color: ${props => props.theme['base-card']};
        border-radius: 6px;
        margin-bottom: 0.75rem;

        .addressDetailsContainer {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 2rem;

            .addressDetailsText {
                display: flex;
                flex-direction: column;
                gap: 0.125rem;

                h2 {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 1.3;
                    color: ${props => props.theme['base-subtitle']};
                }

                span {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 0.875rem;
                    line-height: 1.3;
                    color: ${props => props.theme['base-text']};
                }

            }

        }

        .completeOrderForm {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .completeOrderFormLine {
                display: flex;
                gap: 0.75rem;
            }

            input {
                height: 2.625rem;
                padding: 0.75rem;
                border-radius: 4px;
                border: 1px solid ${props => props.theme['base-button']};

                :focus {
                    border-color: ${props => props.theme['yellow-dark']};
                }

                ::placeholder {
                    color: ${props => props.theme['base-label']};
                    font-style: normal;
                    font-weight: 400;
                    font-size: 0.875rem;
                    line-height: 1.3;
                }

            }

            .addressZipInput, .numberInput, .districtInput {
                width: 12.5rem;
            }

            .complementInput, .cityInput {
                flex: 1;
            }

            .stateInput {
                width: 5rem;
            }

        }

    }

    .paymentContainer {
        background-color: yellow;
        padding: 2.5rem;
        background-color: ${props => props.theme['base-card']};
        border-radius: 6px;
        margin-bottom: 15rem;

        .paymentContainerDetails {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 2rem;

            .paymentContainerText {

                h2 {
                    color: ${props => props.theme['base-subtitle']};
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 1.3;
                    margin-bottom: 0.125rem;
                }

                span {
                    color: ${props => props.theme['base-text']};
                    font-style: normal;
                    font-weight: 400;
                    font-size: 0.875rem;
                    line-height: 1.3;
                }

            }

        }

        .choosePaymentMethodContainer {
            display: flex;
            gap: 0.75rem;

            ul {
                list-style: none;
            }

            li {
                list-style-type: none;
            }

            input {
                display: none;
            }

            label {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.75rem;
                height: 3.125rem;
                background-color: ${props => props.theme['base-button']};
                cursor: pointer;
                width: 11.166875rem;
                font-style: normal;
                font-weight: 400;
                font-size: 0.75rem;
                line-height: 1.6;
                color: ${props => props.theme['base-text']};
                border-radius: 6px;

                :hover {
                    background-color: ${props => props.theme['base-hover']};
                }

                .buttonIcon {
                    width: 1rem;
                    height: 1rem;
                    color: ${props => props.theme['purple']};
                }

            }

            input:checked + label {
                background: ${props => props.theme['purple-light']};
                border: 1px solid ${props => props.theme['purple']};
            }

        }

    }

    .checkoutContainerRight {

        h2 {
            color: ${props => props.theme['base-title']};
            font-family: 'Baloo 2', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.3;
            margin-bottom: 1rem;
        }

        .productListContainer {
            background-color: ${props => props.theme['base-card']};
            padding: 2.5rem;
            border-radius: 6px 44px;
        }

        .listItemsContainer {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            margin-bottom: 3rem;

            .emptyCartMessage {
                color: #ccc;
            }
        }

        .priceSummaryContainer {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            .prices {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;

                .singleLinePrice {
                    display: flex;
                    justify-content: space-between;

                    p:first-of-type {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 0.875rem;
                        line-height: 1.3;
                        color: ${props => props.theme['base-text']};
                    }

                    p:last-of-type {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 1rem;
                        line-height: 1.3;
                        color: ${props => props.theme['base-text']};
                    }

                    strong {
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1.25rem;
                        line-height: 1.3;
                        color: ${props => props.theme['base-subtitle']};
                    }

                }

            }

        }

        .confirmOrderButton {
            width: 100%;
            height: 2.875rem;
            background-color: ${props => props.theme['yellow']};
            color: ${props => props.theme['white']};
            border: none;
            cursor: pointer;
            border-radius: 6px;
            font-style: normal;
            font-weight: 700;
            font-size: 0.875rem;

            :hover {
                background-color: ${props => props.theme['yellow-dark']};
            }

        }

    }
`;

export const EmptyCartMessage = styled.span`
    font-size: 1.25rem;
    margin-top: 2rem;
    color: #aaa;
    font-style: italic;

    a {
        color: ${props => props.theme['purple']};
    }
`;