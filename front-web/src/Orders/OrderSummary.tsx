import { formatPrice } from "./helpers";

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;//apenas para identificar um clique
}

function OrderSummary({amount, totalPrice, onSubmit}: Props){
    return(
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                <span className="selected-container">
                    <strong className="amount-selected">{amount}</strong>
                    SELECTED ORDER(S)
                </span>
                <span className="order-summary-total">
                    <strong className="amount-selected"> {formatPrice(totalPrice)}</strong>
                    AMOUNT
                </span>
                </div>
                <button 
                    className="order-summary-make-order"
                    onClick = {onSubmit}
                    >
                    Finish the order
                </button>
            </div>
            
        </div>
    )
}

export default OrderSummary;