import React from "react";
import * as css from "./Item.scss";
import classnames from "classnames";

export const Cart = ({toggleModal, adChoices, item, qty, updateCartItem, classicFree, getInput, price}) => {

   const circleClasses = classnames({
        [css.circle] : true,
        [css.classic] : item.id === "classic",
        [css.standout]: item.id === "standout",
        [css.premium]: item.id === "premium"
   });

    return (
        <div className="row">
            <div className={`col-xs-3 col-sm-2 ${css.item}`}>
                <div className={circleClasses}/>
            </div>
            <div className={`col-xs-5 col-sm-6 ${css.item}`}>
                <h4><i>{item.name}</i></h4>
                <p><i>{item.currency} {price[item.id]} each</i></p>
            </div>
            <div className={`col-xs-2 col-sm-2 ${css.item}`}>
                <input value={qty[item.id]} onChange={updateCartItem.bind(this, item.id)} type="number" className="form-control"/>
            </div>
            <div className={`col-xs-2 col-sm-2 ${css.item}`}>
            { classicFree &&
             `+  ${classicFree} Free `
            }
            </div>
        </div>
    );
};
export default Cart;