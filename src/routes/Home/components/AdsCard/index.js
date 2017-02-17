import React from "react";
import * as css from "./AdsCard.scss";
import classnames from "classnames";

export const AdsCard = ({toggleModal, adChoice, addToCart, cartData, updateCartItem, inputData, qty, getInput}) => {
    const { customer } = inputData || {};
    const { deals } = customer || {};
    const { classic, standout, premium } = deals || {};
    const { adsToMeet, adsToAdd} = classic || 0;
    let isStandoutDiscount = (standout && (adChoice.id === "standout"));
    let isPremiumDiscount = (premium && (adChoice.id === "premium") && (qty[adChoice.id] >= premium.conditionPurchase));
    const priceClasses = classnames({
        [css.price]: true,
        [css.cancelPrice]: isStandoutDiscount || isPremiumDiscount
    });
    const price = (isStandoutDiscount || isPremiumDiscount) ? (standout.discountedPrice || premium.discountedPrice ) : adChoice.price;
    function findId(data){
        return data.id === adChoice.id;
    }
    function handleAddToCart(){
        let foundObj = cartData.find(findId) || {};
        if (foundObj.id === adChoice.id) {
            updateCartItem(adChoice.id);
        } else {
            addToCart({"adChoice":adChoice, price:price});
        }
        if ((qty[foundObj.id] % adsToMeet) === 0 ){
            let newQty = (qty[foundObj.id] / adsToMeet) * adsToAdd;
            let freeItem = newQty - qty[foundObj.id];
            getInput({"key":"classicFree", "value":freeItem});
        }
    }
    return (
        <div className={`${css.cardContainer} ${css[adChoice.id]}`}>
            <h4>{ adChoice.name }</h4>
            <p>{ adChoice.description }</p>
            <p className={priceClasses}>
            { isStandoutDiscount || isPremiumDiscount && 
                <span>Original Price</span>
            }
            { adChoice.currency } { adChoice.price } </p>
            { (standout && (adChoice.id === "standout")) &&
                <p className={css.discountedPrice}>{ adChoice.currency } {standout.discountedPrice}</p>
            }
            { isStandoutDiscount || isPremiumDiscount &&
                <p className={css.discountedPrice}>{ adChoice.currency } {premium.discountedPrice}</p>
            }
            <button onClick={handleAddToCart} className="btn btn-success">
                Add to Cart
            </button>
        </div>
    );
};
export default AdsCard;