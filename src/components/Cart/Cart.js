import React from 'react';
import './Cart.css'

const Cart = (props ) => {
    // console.log(props );
    const{cart}=props;
    let total=0;
    let shippint=0;
    for(const product of cart){
        total=total+product.price;
        shippint=shippint+product.shipping;
    }
    const tax=(total*10/100).toFixed(2)
    // tax.toFixed(4);
    return (
        <div className='cart' >
            <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price:${total}</p>
                <p>Total Shipping:${shippint}</p>
                <p>Tax :${tax}</p>
                <h5>Grand Total</h5>
        </div>
    );
};

export default Cart;