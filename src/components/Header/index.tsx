import { useContext } from 'react';
import { CartContext } from '../../App';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { CartContainer, HeaderContainer, LocationContainer, MenuContainer } from './styles';

import logo from '../../assets/coffee-delivery-logo.svg';

export function Header() {
    const { itemsCart } = useContext(CartContext);

    const countItems = itemsCart.reduce((total, item) => {
        return total + item.amount;
    }, 0);

    return (
        <HeaderContainer>
            <Link to="/">
                <img src={logo} />
            </Link>

            <MenuContainer>
                <LocationContainer>
                    <MapPin size={22} weight="fill" />
                    São João da Boa Vista, SP
                </LocationContainer>

                <Link to="/checkout">
                    <CartContainer>
                        <ShoppingCart size={22} weight="fill" />
                        {countItems != 0 ? countItems : null}
                    </CartContainer>
                </Link>
            </MenuContainer>
        </HeaderContainer>
    );
}