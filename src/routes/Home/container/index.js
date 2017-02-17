import { connect } from "react-redux";
import {} from "../module";
import Home from "../components/Home";
import {
    toggleCart,
    getAdChoices,
    addToCart,
    updateCartItem,
    getInput,
    toggleModal,
    makePayment
} from "../module";

const mapStateToProps = (state) => ({
    showModal:state.home.showModal,
    adChoicesData:state.home.adChoicesData || {},
    inputData:state.home.inputData || {},
    cartData:state.home.cartData || [],
    qty:state.home.qty || {},
    totalPerItem:state.home.totalPerItem || {},
    showCart:state.home.showCart,
    price:state.home.price,
    paymentSuccessful:state.home.paymentSuccessful
});

const mapDispatchToProps = {
    toggleCart,
    toggleModal,
    getAdChoices,
    addToCart,
    updateCartItem,
    getInput,
    makePayment

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
