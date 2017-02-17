import React from "react";
import * as css from "./Cart.scss";
import Item from "./Item";
import classnames from "classnames";

export const Cart = ({toggleCart, adChoices, cartData, qty, updateCartItem, totalPerItem, inputData, getInput, price, toggleModal}) => {
    const { classicFree } = inputData || {};
    function getTotal ( obj ) {
        var sum = 0;
        for ( var el in obj ) {
            if ( obj.hasOwnProperty( el ) ) {
                sum += parseFloat( obj[el] );
            }
        }
        return sum;
    }
    function getItem(){
       return (
            cartData.map((obj, index) =>{
                return (
                    <Item key={index} item={obj} qty={qty} updateCartItem={updateCartItem} getInput={getInput} classicFree={classicFree} price={price}/>
                );
            })
        );
    }
    return (
        <div className={css.cartWrapper}>
            <div className={`row ${css.top}`}>
                <div className="col-xs-8"/>
                <div className="col-xs-4">
                    <div className={css.close} onClick={()=>toggleCart()}>x</div>
                </div>
            </div>
            { getItem() }
            <div className={`row ${css.total}`}>
                <div className="col-xs-8">
                    <h4>Total</h4>
                </div>
                <div className="col-xs-4">
                    $ {getTotal(totalPerItem)}
                </div>
            </div>
            <div className={`row ${css.total}`}>
                <div className="col-sm-6">
                    <button className="btn btn-primary" onClick={()=>toggleCart()}> Continue Shopping</button>
                </div>
                <div className="col-sm-6">
                     <button className="btn btn-danger" onClick={()=>toggleModal()}>Checkout</button>
                </div>
            </div>
        </div>
    );
};
export default Cart;