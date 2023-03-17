import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;
    background-color: ${props => props.theme['base-card']};
    padding: 1.25rem;
    text-align: center;
    border-radius: 6px 36px;

    .illustrativePicture {
        width: 7.5rem;
        margin-top: calc(0px - 2.5rem);
        margin-bottom: 0.75rem;
    }

    .singleTag {
        display: block;
        color: ${props => props.theme['yellow-dark']};
        background-color: ${props => props.theme['yellow-light']};
        font-style: normal;
        font-weight: 700;
        font-size: 0.625rem;
        line-height: 1.3;
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        margin-bottom: 1rem;
    }

    .coffeeName {
        font-family: 'Baloo 2', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 0.5rem;
    }

    .coffeeDescription {
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${props => props.theme['base-label']};
        margin-bottom: 2rem;
    }

    .bottomCard {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .coffeeValue {
        font-family: 'Baloo 2', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 1.3;
        color: ${props => props.theme['base-text']};
    }

    .coffeeValue span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;
    }

    .buttonsContainer {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .buttonsContainerLeft {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${props => props.theme['base-button']};
        width: 4.5rem;
        height: 2.375rem;
        padding: 0.5rem;
        border-radius: 6px;
    }

    .buttonsContainerLeft button {
        height: 2.375rem;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: ${props => props.theme['purple']};
    }

    .buttonsContainerLeft button:last-of-type:hover, .buttonsContainerLeft button:first-of-type:hover {
        color: ${props => props.theme['purple-dark']};
    }

    .buttonsContainerLeft span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${props => props.theme['base-title']};
    }

    .shoppingCartButton {
        height: 2.375rem;
        background-color: ${props => props.theme['purple-dark']};
        color: ${props => props.theme['white']};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 6px;
        border: none;
        cursor: pointer;
    }

    .shoppingCartButton:hover {
        background-color: ${props => props.theme['purple']};
    }

`;