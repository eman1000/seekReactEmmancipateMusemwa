import React from "react";
import * as css from "./OptionsContainer.scss";
import AdsCard from "../AdsCard";
import { DropdownButton, MenuItem } from "react-bootstrap";
import classnames from "classnames";


export const OptionsContainer = ({toggleModal, adChoicesData, addToCart, cartData, updateCartItem, getInput, inputData, qty}) => {
    const { adChoices, customers } = adChoicesData || [];
    const { customer } = inputData || {};
    const title = customer && customer.name || "Default";
    function handleInput(key,ev) {
        getInput({
            key,
            value : ev.target.value
        });
    }
    function getCards(){
        return (
            <div className="row">
            {
                adChoices && adChoices.map((obj, index) => {
                    return (
                        <div key={index} className="col-sm-4">
                            <AdsCard adChoice={obj} addToCart={addToCart} cartData={cartData} updateCartItem={updateCartItem} inputData={inputData} getInput={getInput} qty={qty}/>
                        </div>
                    );
                })
            }
            </div>
        );
    }
    function getDeals() {
        return (
            <DropdownButton className="form-control" id="customers_dropdown" title={title}>
                {
                    customers && customers.map((obj, index)=>{
                        return (
                            <MenuItem  key={index} onClick={getInput.bind(this, {"key": "customer", "value":obj})}>{obj.name}</MenuItem>
                        );
                    })
                }
            </DropdownButton>
        );
    }
    return (
       <div className={`row ${css.wrapper}`}>
            <div className="row">
                <div className="col-sm-12">
                    <h1>Select Your Ad Option</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <label>Select a test user</label>
                    <br/>
                    {getDeals()}
                    <br/>
                </div>
               <div className="col-sm-8"/>
            </div>
            {getCards()}
       </div>
    );
};
export default OptionsContainer;
