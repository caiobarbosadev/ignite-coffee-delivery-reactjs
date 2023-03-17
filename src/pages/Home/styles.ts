import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3.5rem;
    margin-top: 5.75rem;
    margin-bottom: 5.75rem;
`;

export const LeftContainer = styled.div`

    width: 36.75rem;

    h1 {
        font-size: 3rem;
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['base-title']};
        font-style: normal;
        font-weight: 800;
        line-height: 1.3;
        margin-bottom: 1rem;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 4.125rem;
    }

`;

export const FeaturesContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 2.5rem;

    .column {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .line {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .line span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${props => props.theme['base-text']};
    }

`;

export const RightContainer = styled.div`

    width: 29.75rem;

    img {
        width: 100%;
    }

`;

export const CoffeeListContainer = styled.div`

    margin-bottom: 10rem;

    h2 {
        margin-bottom: 3.375rem;
        color: ${props => props.theme['base-subtitle']};
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 1.3;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }

`;