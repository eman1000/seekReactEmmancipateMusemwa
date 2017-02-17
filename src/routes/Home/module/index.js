import request from "../../../util/request";
import update from "react/lib/update";
import { push } from "react-router-redux";
import services from "../../../services";
import constants from "./actionConstants";
const {
    TOGGLE_MODAL,
    GET_AD_CHOICES,
    GET_INPUT,
    ADD_TO_CART,
    UPDATE_CART_ITEM,
    TOGGLE_CART,
    MAKE_PAYMENT
} = constants;
export function toggleModal(payload){
    return {
        type:TOGGLE_MODAL,
        payload
    };
}
export function makePayment(){
    return {
        type:MAKE_PAYMENT
    };
}
export function toggleCart(payload){
    return {
        type:TOGGLE_CART,
        payload
    };
}
export function getAdChoices(){
    return (dispatch, store)=>{
        request.get(services.getAdChoices)
        .finish((error, res) => {
            dispatch({
                type:GET_AD_CHOICES,
                payload:res.body
            });
        });
    };
}
export function addToCart(payload){
    return {
        type:ADD_TO_CART,
        payload
    };
}
export function updateCartItem(payload){
    return {
        type:UPDATE_CART_ITEM,
        payload
    };
}
export function getInput(payload){
    return {
        type:GET_INPUT,
        payload
    };
}
function handleToggleModal(state, action){
    return update(state, {
        showModal:{
            $set:!state.showModal
        },
        showCart:{
            $set:false
        }
    });
}
function handleGetAdChoices(state, action){
    return update(state, {
        adChoicesData:{
            $set:action.payload
        }
    });
}
function handleGetInput(state, action){
    const { key, value } = action.payload;
    return update(state, {
        inputData:{
            [key]:{
                $set:value
            }
        }
    });
}
function handleAddToCart(state, action){
    return update(state, {
        cartData:{
            $push:[action.payload.adChoice]
        },
        qty:{
            [action.payload.adChoice.id]:{
                $set:1
            }
        },
        totalPerItem:{
            [action.payload.adChoice.id]:{
                $set:action.payload.price
            }
        },
        price:{
            [action.payload.adChoice.id]:{
                $set:action.payload.price
            }
        },
        showCart:{
            $set:true
        }
    });

}
function handleUpdateCartItem(state, action){
    return update(state, {
        qty:{
            [action.payload]:{
                $set: ++state.qty[action.payload]
            }
        },
        totalPerItem:{
            [action.payload]:{
                $set:state.price[action.payload] * (state.qty[action.payload])
            }
        },
        showCart:{
            $set:true
        }
    });

}
function handleToggleCart(state, action){
    return update( state, {
        showCart:{
            $set:!state.showCart
        }
    });
}
function handleMakePayment(state, action){
    return update( state, {
        paymentSuccessful:{
            $set:true
        }
    });
}
const ACTION_HANDLERS = {
    TOGGLE_MODAL:handleToggleModal,
    GET_AD_CHOICES:handleGetAdChoices,
    GET_INPUT:handleGetInput,
    ADD_TO_CART:handleAddToCart,
    UPDATE_CART_ITEM:handleUpdateCartItem,
    TOGGLE_CART:handleToggleCart,
    MAKE_PAYMENT:handleMakePayment
};

const initialState = {
    showPanel:{},
    cartData:[],
    qty:{},
    totalPerItem:{},
    price:{},
    inputData:{}
};
export default function welcomeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
