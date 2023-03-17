import { CardContainer } from './styles';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState, useContext } from 'react';
import { CartContext } from '../../../../App';

interface CardProps {
    id: number
    name: string
    description: string
    value: number
    image: string
    onAddItemToCart: (id: number, name: string, amount: number, unitaryValue: number, image: string) => void
}

export function Card({ id, name, description, value, image, onAddItemToCart }: CardProps) {
    const { itemsCart, setItemsCart } = useContext(CartContext);

    const itemInCart = itemsCart.find(item => item.id === id);
    const [countCoffee, setCountCoffee] = useState(itemInCart ? itemInCart.amount : 1);
    const [valueCoffee, setValueCoffee] = useState(value);

    function decreaseAmountCoffee() {
        if (countCoffee > 1) {
            const updatedCountCoffee = countCoffee - 1;
            setCountCoffee(updatedCountCoffee);

            handleAmountCoffeeChange(updatedCountCoffee);
        }
    }

    function increaseAmountCoffee() {
        const updatedCountCoffee = countCoffee + 1;
        setCountCoffee(updatedCountCoffee);

        handleAmountCoffeeChange(updatedCountCoffee);
    }

    function handleAmountCoffeeChange(newAmount: number) {
        const updatedValueCoffee = value * newAmount;
        setValueCoffee(updatedValueCoffee);
    }

    return (
        <CardContainer>
            <img className="illustrativePicture" src={image} />
            <div className="divTags">
                <span className="singleTag">TRADICIONAL</span>
            </div>
            <p className="coffeeName">{name}</p>
            <span className="coffeeDescription">{description}</span>
            <div className="bottomCard">
                <strong className="coffeeValue">
                    <span>R$ </span>{valueCoffee.toFixed(2).toString().replace(".", ",")}
                </strong>
                <div className="buttonsContainer">
                    <div className="buttonsContainerLeft">
                        <button onClick={decreaseAmountCoffee}>
                            <Minus size={14} weight="fill" />
                        </button>
                        <span>{countCoffee}</span>
                        <button onClick={increaseAmountCoffee}>
                            <Plus size={14} weight="fill" />
                        </button>
                    </div>
                    <button onClick={() => { onAddItemToCart(id, name, countCoffee, value, image) }} className="shoppingCartButton">
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </div>
        </CardContainer>
    );
}