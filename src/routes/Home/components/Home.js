import React from "react";
import OptionsContainer from "./OptionsContainer";
import Cart from "./Cart";
import PaymentProcessor from "./PaymentProcessor";
class Home extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        this.props.getAdChoices();
    }
    render () {
    return (
        <div className="container">
            <OptionsContainer
                toggleModal={this.props.toggleModal}
                adChoicesData={this.props.adChoicesData}
                addToCart={this.props.addToCart}
                cartData={this.props.cartData}
                updateCartItem={this.props.updateCartItem}
                getInput={this.props.getInput}
                inputData={this.props.inputData}
                qty={this.props.qty}
            />
            { this.props.showCart &&
                <Cart
                    cartData={this.props.cartData}
                    qty={this.props.qty}
                    updateCartItem={this.props.updateCartItem}
                    totalPerItem={this.props.totalPerItem}
                    inputData={this.props.inputData}
                    getInput={this.props.getInput}
                    toggleCart={this.props.toggleCart}
                    price={this.props.price}
                    toggleModal={this.props.toggleModal}
                />
            }
            {
                this.props.showModal &&
                <PaymentProcessor
                    toggleModal={this.props.toggleModal}
                    paymentSuccessful={this.props.paymentSuccessful}
                    makePayment={this.props.makePayment}
                />
            }
        </div>
    );
  }
}

export default Home;