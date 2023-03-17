import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { createContext, useState } from 'react'

type CartItemProps = {
  id: number;
  name: string;
  amount: number;
  unitaryValue: number;
  image: string;
};

type OrderProps = {
  addressZip: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: string;
}
export const CartContext = createContext<{
  itemsCart: CartItemProps[];
  setItemsCart: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
}>({
  itemsCart: [],
  setItemsCart: () => { },
});
export const OrderContext = createContext<{ order: OrderProps; setOrder: React.Dispatch<React.SetStateAction<OrderProps>> }>({ order: { addressZip: '', street: '', number: '', complement: '', district: '', city: '', state: '', paymentMethod: '' }, setOrder: () => { } });

export function App() {
  const [itemsCart, setItemsCart] = useState<CartItemProps[]>([]);
  const [order, setOrder] = useState<OrderProps>({
    addressZip: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    paymentMethod: ''
  });

  return (
    <CartContext.Provider value={{ itemsCart, setItemsCart }}>
      <OrderContext.Provider value={{ order, setOrder }}>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </OrderContext.Provider>
    </CartContext.Provider>
  )
}