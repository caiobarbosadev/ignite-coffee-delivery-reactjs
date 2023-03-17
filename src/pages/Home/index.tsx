import {
    CoffeeListContainer,
    FeaturesContainer,
    LeftContainer,
    RightContainer,
    WelcomeContainer
} from "./styles";

import { CartContext } from '../../App';
import { useContext, useState } from "react";

import { Card } from './components/Card';

import heroImage from '../../assets/hero-image.png';
import iconCart from '../../assets/Cart.svg';
import iconClock from '../../assets/Clock.svg';
import iconBox from '../../assets/Box.svg';
import iconCoffee from '../../assets/Coffee.svg';
import coffeeImage from '../../assets/coffee.png';
import Swal from 'sweetalert2'

export function Home() {
    const [coffees, setCoffees] = useState([
        {
            id: 1,
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            value: 9.90,
            tags: ['Tradicional'],
            image: coffeeImage
        },
        {
            id: 2,
            name: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            value: 9.90,
            tags: ['TRADICIONAL'],
            image: coffeeImage
        },
        {
            id: 3,
            name: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            value: 9.90,
            tags: ['TRADICIONAL'],
            image: coffeeImage
        },
        {
            id: 4,
            name: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            value: 9.90,
            tags: ['TRADICIONAL', 'GELADO'],
            image: coffeeImage
        },
        {
            id: 5,
            name: 'Café com Leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            value: 9.90,
            tags: ['TRADICIONAL', 'COM LEITE'],
            image: coffeeImage
        },
        {
            id: 6,
            name: 'Latte',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            value: 9.90,
            tags: ['TRADICIONAL', 'COM LEITE'],
            image: coffeeImage
        },
        {
            id: 7,
            name: 'Capuccino',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            value: 9.90,
            tags: ['TRADICIONAL', 'COM LEITE'],
            image: coffeeImage
        },
        {
            id: 8,
            name: 'Macchiato',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            value: 9.90,
            tags: ['TRADICIONAL', 'COM LEITE'],
            image: coffeeImage
        },
        {
            id: 9,
            name: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            value: 9.90,
            tags: ['TRADICIONAL', 'COM LEITE'],
            image: coffeeImage
        },
        {
            id: 10,
            name: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            value: 9.90,
            tags: ['ESPECIAL', 'COM LEITE'],
            image: coffeeImage
        },
        {
            id: 11,
            name: 'Cubano',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            value: 9.90,
            tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
            image: coffeeImage
        },
        {
            id: 12,
            name: 'Havaiano',
            description: 'Bebida adocicada preparada com café e leite de coco',
            value: 9.90,
            tags: ['ESPECIAL'],
            image: coffeeImage
        },
        {
            id: 13,
            name: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            value: 9.90,
            tags: ['ESPECIAL'],
            image: coffeeImage
        },
        {
            id: 14,
            name: 'Irlandês',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            value: 9.90,
            tags: ['ESPECIAL', 'ALCOÓLICO'],
            image: coffeeImage
        }
    ]);

    const { itemsCart, setItemsCart } = useContext(CartContext);

    function addItemToCart(id: number, name: string, amount: number, unitaryValue: number, image: string) {
        const itemIndex = itemsCart.findIndex(item => item.id === id);

        const updatedItems = [...itemsCart];
        if (itemIndex >= 0) {
            updatedItems[itemIndex].amount = amount;

            Swal.fire({
                title: 'Uhuuu!',
                text: '☕ Café(s) adicionado(s) no carrinho.',
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                toast: true
            });

            setItemsCart(updatedItems);
        } else {
            updatedItems.push({ id, name, amount, unitaryValue, image });

            Swal.fire({
                title: 'Uhuuu!',
                text: '☕ Café(s) adicionado(s) no carrinho.',
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                toast: true
            });

            setItemsCart(updatedItems);
        }
    }

    return (
        <div>
            <WelcomeContainer>
                <LeftContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <FeaturesContainer>
                        <div className="column">
                            <div className="line">
                                <img src={iconCart} />
                                <span>Compra simples e segura</span>
                            </div>
                            <div className="line">
                                <img src={iconClock} />
                                <span>Entrega rápida e rastreada</span>
                            </div>
                        </div>
                        <div className="column">
                            <div className="line">
                                <img src={iconBox} />
                                <span>Embalagem mantém o café intacto</span>
                            </div>
                            <div className="line">
                                <img src={iconCoffee} />
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </div>
                    </FeaturesContainer>
                </LeftContainer>

                <RightContainer>
                    <img src={heroImage} />
                </RightContainer>
            </WelcomeContainer>

            <CoffeeListContainer>
                <h2>Nossos cafés</h2>

                <div className="list">
                    {coffees.map(coffee => {
                        return (
                            <Card
                                key={coffee.id}
                                id={coffee.id}
                                name={coffee.name}
                                description={coffee.description}
                                value={coffee.value}
                                image={coffee.image}
                                onAddItemToCart={addItemToCart}
                            />
                        )
                    })}
                </div>
            </CoffeeListContainer>
        </div>
    );
}