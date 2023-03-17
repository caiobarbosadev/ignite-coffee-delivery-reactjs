import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const LocationContainer = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${props => props.theme['purple-light']};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme['purple-dark']};
`;

export const CartContainer = styled.div`
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow']};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
`;