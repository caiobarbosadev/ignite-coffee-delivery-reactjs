import { useContext } from 'react';
import { CartContext } from '../../App';
import { OrderContext } from '../../App';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';

import { CartItem } from './components/CartItem';

import { defaultTheme } from '../../styles/themes/default';
import { CheckoutContainer, EmptyCartMessage } from './styles';
import { Link, useNavigate } from 'react-router-dom';

export function Checkout() {
    const { itemsCart, setItemsCart } = useContext(CartContext);
    const { order, setOrder } = useContext(OrderContext);
    const navigate = useNavigate();

    function deleteItem(id: number) {
        const updatedCart = itemsCart.filter(item => {
            return item.id !== id;
        })

        setItemsCart(updatedCart);
    }

    const totalValueOfItems = itemsCart.reduce((total, item) => {
        return total + (item.amount * item.unitaryValue);
    }, 0);

    function handleSaveNewOrder(event: any) {
        event.preventDefault();

        navigate('/success');
    }

    return (
        itemsCart.length > 0 ?
            <form onSubmit={handleSaveNewOrder}>
                <CheckoutContainer>
                    <div className="checkoutContainerLeft">
                        <h2 className="checkoutContainerLeftTitle">Complete seu pedido</h2>

                        <div className="completeOrderContainer">
                            <div className="addressDetailsContainer">
                                <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
                                <div className="addressDetailsText">
                                    <h2>Endereço de entrega</h2>
                                    <span>Informe o endereço onde deseja receber seu pedido</span>
                                </div>
                            </div>

                            <div className="completeOrderForm">
                                <input
                                    required
                                    className="addressZipInput"
                                    id="addressZip"
                                    type="text"
                                    placeholder="CEP"
                                    value={order.addressZip}
                                    onChange={(e) => setOrder({ ...order, addressZip: e.target.value })}
                                />
                                <input
                                    required
                                    className="roadInput"
                                    id="street"
                                    type="text"
                                    placeholder="Rua"
                                    value={order.street}
                                    onChange={(e) => setOrder({ ...order, street: e.target.value })}
                                />

                                <div className="completeOrderFormLine">
                                    <input
                                        required
                                        className="numberInput"
                                        id="number"
                                        type="number"
                                        placeholder="Número"
                                        value={order.number}
                                        onChange={(e) => setOrder({ ...order, number: e.target.value })}
                                    />
                                    <input
                                        required
                                        className="complementInput"
                                        id="complement"
                                        type="text"
                                        placeholder="Complemento"
                                        value={order.complement}
                                        onChange={(e) => setOrder({ ...order, complement: e.target.value })}
                                    />
                                </div>

                                <div className="completeOrderFormLine">
                                    <input
                                        required
                                        className="districtInput"
                                        id="district"
                                        type="text"
                                        placeholder="Bairro"
                                        value={order.district}
                                        onChange={(e) => setOrder({ ...order, district: e.target.value })}
                                    />
                                    <input
                                        required
                                        className="cityInput"
                                        id="city"
                                        type="text"
                                        placeholder="Cidade"
                                        value={order.city}
                                        onChange={(e) => setOrder({ ...order, city: e.target.value })}
                                    />
                                    <input
                                        required
                                        className="stateInput"
                                        id="state"
                                        type="text"
                                        placeholder="UF"
                                        value={order.state}
                                        onChange={(e) => setOrder({ ...order, state: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="paymentContainer">
                            <div className="paymentContainerDetails">
                                <CurrencyDollar size={22} color={"purple"} />
                                <div className="paymentContainerText">
                                    <h2>Pagamento</h2>
                                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                                </div>
                            </div>

                            <ul className="choosePaymentMethodContainer">
                                <li>
                                    <input required type="radio" name="paymentMethod" id="creditCard" value="Cartão de crédito" onChange={(e) => setOrder({ ...order, paymentMethod: e.target.value })} />
                                    <label htmlFor="creditCard"><CreditCard className="buttonIcon" /> CARTÃO DE CRÉDITO</label>
                                </li>
                                <li>
                                    <input required type="radio" name="paymentMethod" id="debitCard" value="Cartão de débito" onChange={(e) => setOrder({ ...order, paymentMethod: e.target.value })} />
                                    <label htmlFor="debitCard"><Bank className="buttonIcon" /> CARTÃO DE DÉBITO</label>
                                </li>
                                <li>
                                    <input required type="radio" name="paymentMethod" id="money" value="Dinheiro" onChange={(e) => setOrder({ ...order, paymentMethod: e.target.value })} />
                                    <label htmlFor="money"><Money className="buttonIcon" /> DINHEIRO</label>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="checkoutContainerRight">
                        <h2>Cafés selecionados</h2>

                        <div className="productListContainer">

                            <div className="listItemsContainer">
                                {itemsCart.map(item => {
                                    return (
                                        <CartItem
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            amount={item.amount}
                                            unitaryValue={item.unitaryValue}
                                            image={item.image}
                                            onDeleteItem={deleteItem}
                                        />
                                    )
                                })}
                            </div>

                            <div className="priceSummaryContainer">
                                <div className="prices">
                                    <div className="singleLinePrice">
                                        <p>Total de itens</p>
                                        <p>R$ {totalValueOfItems.toFixed(2).toString().replace(".", ",")}</p>
                                    </div>
                                    <div className="singleLinePrice">
                                        <p>Entrega</p>
                                        <p>R$ 3,50</p>
                                    </div>
                                    <div className="singleLinePrice">
                                        <strong>Total</strong>
                                        <strong>R$ {(totalValueOfItems + 3.5).toFixed(2).toString().replace(".", ",")}</strong>
                                    </div>
                                </div>

                                <button type="submit" className="confirmOrderButton">
                                    CONFIRMAR PEDIDO
                                </button>
                            </div>
                        </div>
                    </div>
                </CheckoutContainer>
            </form> :
            <EmptyCartMessage>😕 Ops! Parece que seu carrinho está vazio agora. <Link to="/">Clique aqui para retornar ao cardápio!</Link></EmptyCartMessage>
    );
}