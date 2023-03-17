import styled from 'styled-components';

export const CartItemContainer = styled.div`

    display: flex;
    justify-content: space-between;

    .details {
        display: flex;
        gap: 1.25rem;

        img {
            width: 4rem;
            height: 4rem;
        }

    }

    .chooseQuantityButton {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${props => props.theme['base-button']};
        width: 4.5rem;
        height: 2.375rem;
        padding: 0.5rem;
        border-radius: 6px;
    }

    .chooseQuantityButton div {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: ${props => props.theme['purple']};
    }

    .chooseQuantityButton div:last-of-type:hover, .chooseQuantityButton div:first-of-type:hover {
        color: ${props => props.theme['purple-dark']};
    }

    .chooseQuantityButton span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${props => props.theme['base-title']};
    }

    .detailsTextAndButton {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h3 {
            color: ${props => props.theme['base-subtitle']};
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.3;
        }

    }

    .alignButtonsContainer {

        display: flex;
        gap: 0.5rem;

        .deleteButton {

            background-color: ${props => props.theme['base-button']};
            color: ${props => props.theme['base-text']};
            padding: 0.4rem 0.5rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-style: normal;
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 1.6;

            .deleteButtonIcon {
                color: ${props => props.theme['purple']};
                width: 1rem;
                height: 1rem;
            }

        }

    }

    .price span {
        color: ${props => props.theme['base-text']};
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.3;
    }

`;