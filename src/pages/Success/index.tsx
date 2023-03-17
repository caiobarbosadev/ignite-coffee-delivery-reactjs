import { SuccessContainer } from "./styles";
import successImage from "../../assets/success.svg";
import localeIcon from "../../assets/locale.svg";
import timerIcon from "../../assets/timer.svg";
import paymentIcon from "../../assets/payment.svg";
import { OrderContext } from "../../App";
import { useContext } from "react";

export function Success() {
    const { order } = useContext(OrderContext);

    return (
        <SuccessContainer>
            <h2>Uhu! Pedido confirmado</h2>
            <h3>Agora é só aguardar que logo o café chegará até você.</h3>

            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <img src={localeIcon} />
                        <div className="itemContainerText">
                            <p>Entrega em <strong>Rua {order.street}, {order.number}</strong></p>
                            <p>{order.district} - {order.city}, {order.state}</p>
                        </div>
                    </div>
                    <div className="itemContainer">
                        <img src={timerIcon} />
                        <div className="itemContainerText">
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min</strong></p>
                        </div>
                    </div>
                    <div className="itemContainer">
                        <img src={paymentIcon} />
                        <div className="itemContainerText">
                            <p>Pagamento na entrega</p>
                            <p><strong>{order.paymentMethod}</strong></p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <img src={successImage} />
                </div>
            </div>
        </SuccessContainer>
    );
}