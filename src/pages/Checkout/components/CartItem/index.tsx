import { Minus, Plus, Trash } from "phosphor-react";
import { CartItemContainer } from "./styles";

import { CartContext } from "../../../../App";
import { useContext } from "react";

type CartItemProps = {
    id: number;
    name: string;
    amount: number;
    unitaryValue: number;
    image: string;
    onDeleteItem: (id: number) => void
}

export function CartItem({ id, name, amount, unitaryValue, image, onDeleteItem }: CartItemProps) {
    const { itemsCart, setItemsCart } = useContext(CartContext);

    const totalValue = amount * unitaryValue;

    function decreaseAmount(id: number) {
        if (amount > 1) {
            setItemsCart(prevItemsCart => {
                const updatedItemsCart = prevItemsCart.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            amount: item.amount - 1
                        };
                    } else {
                        return item;
                    }
                });

                return updatedItemsCart;
            });
        }
    }

    function increaseAmount(id: number) {
        setItemsCart(prevItemsCart => {
            const updatedItemsCart = prevItemsCart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        amount: item.amount + 1
                    };
                } else {
                    return item;
                }
            });

            return updatedItemsCart;
        });
    }

    return (
        <CartItemContainer>
            <div className="details">
                <img src={image} />
                <div className="detailsTextAndButton">
                    <h3>{name}</h3>

                    <div className="alignButtonsContainer">
                        <div className="chooseQuantityButton">
                            <div onClick={() => { decreaseAmount(id) }}>
                                <Minus size={14} weight="fill" />
                            </div>
                            <span>{amount}</span>
                            <div onClick={() => { increaseAmount(id) }}>
                                <Plus size={14} weight="fill" />
                            </div>
                        </div>
                        <button type="button" className="deleteButton" onClick={() => { onDeleteItem(id) }}>
                            <Trash className="deleteButtonIcon" />
                            REMOVER
                        </button>
                    </div>

                </div>
            </div>
            <div className="price">
                <span>R$ {totalValue.toFixed(2).toString().replace(".", ",")}</span>
            </div>
        </CartItemContainer>
    );
}