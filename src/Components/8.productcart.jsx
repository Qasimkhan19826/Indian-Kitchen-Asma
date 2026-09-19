import { useState } from "react";
import { useCart } from "../9.CartContext.jsx";

function Productcart(props)
{
    const {
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity
    } = useCart();

    const [warning, setWarning] = useState(false);
    const [warntext, setWarnText] = useState("");

    const warn = () => {
        setWarnText(props.text[props.language].warn);
        setWarning(true);

        setTimeout(() => {
            setWarning(false);
        }, 2000);
    };

    const cartItem = cart.find(
        (item) => item.id === props.id
    );

    const quantity = cartItem
        ? cartItem.quantity
        : 0;

    return (
        <>
            {quantity === 0 ? (
                <button
                    className="btn2"
                    onClick={() =>
                        addToCart({
                            id: props.id,
                            name: props.name,
                            price: props.price
                        })
                    }
                >
                    {props.text[props.language].cart}
                </button>
            ) : (
                <div className="center">

                    <button
                        className="btn5"
                        onClick={() => decreaseQuantity(props.id)}
                    >
                        -
                    </button>

                    <span>{quantity}</span>

                    <button
                        className="btn5"
                        onClick={() => {
                            if (quantity < 3) {
                                increaseQuantity(props.id);
                            } else {
                                warn();
                            }
                        }}
                    >
                        +
                    </button>

                </div>
            )}

            {warning && (
                <div className="cart-warning">
                    {warntext}
                </div>
            )}
        </>
    );
}

export default Productcart;