//Libs
import React, { useState, useLayoutEffect } from 'react';
import {connect} from 'react-redux';

//Components
import Header from '../components/Header';

// Styles
import '../assets/styles/containers/Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faInfoCircle, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faLess } from '@fortawesome/free-brands-svg-icons';

//Actions
// import { addToCart, getInfoProduct } from '../actions';

const Cart = props => {
    
    // Functions to format price
    const formatCurrency = (locales, currency, fractionDigits, number) =>{
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);

        return formatted;
    }

    return (
        <>
        <Header />
        <section className="cart-page">
            <div className="container">
                <section>

                <div className="row">

                    <div className="col-lg-8">
                    <div className="mb-3">
                        <div className="pt-4 wish-list">

                        <h5 className="mb-4">Cart (2 items) </h5>

                        <div className="row mb-4">
                            <div className="col-md-5 col-lg-3 col-xl-3">
                                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                    <img className="img-fluid w-100"
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-9 col-xl-9">
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h5>Blue denim shirt</h5>
                                            <p className="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                                            <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                                            <p className="mb-3 text-muted text-uppercase small">Size: M</p>
                                        </div>
                                        <div className="amount-selector">
                                            <div className="def-number-input number-input safari_only mb-0 w-100">
                                                <button>
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                </button>
                                                <input className="quantity" min="0" name="quantity" defaultValue="1" type="number" />
                                                <button>
                                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                                </button>
                                            </div>
                                                <small id="passwordHelpBlock" className="form-text text-muted text-center">
                                                    (Note, 1 piece)
                                                </small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center options-item-selector">
                                        <div>
                                            <button href="#!" type="button" className="small text-uppercase mr-3">
                                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                                Remove item 
                                            </button>
                                        </div>
                                        <p className="mb-0">
                                            <span>
                                                <strong id="summary">$17.99</strong>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="row mb-4">
                            <div className="col-md-5 col-lg-3 col-xl-3">
                                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                    <img className="img-fluid w-100"
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" alt="Sample" />
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-9 col-xl-9">
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h5>Red hoodie</h5>
                                            <p className="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                                            <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                                            <p className="mb-3 text-muted text-uppercase small">Size: M</p>
                                        </div>
                                        
                                        <div className="amount-selector">
                                            <div className="def-number-input number-input safari_only mb-0 w-100">
                                                <button>
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                </button>
                                                <input className="quantity" min="0" name="quantity" defaultValue="1" type="number" />
                                                <button>
                                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center options-item-selector">
                                        <div>
                                            <button href="#!" type="button" className="small text-uppercase mr-3">
                                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                                Remove item 
                                            </button>
                                        </div>
                                        <p className="mb-0">
                                            <span>
                                                <strong id="summary">$17.99</strong>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-primary mb-0">
                            <FontAwesomeIcon icon={faInfoCircle} /> Do not delay the purchase, adding
                            items to your cart does not mean booking them.
                        </p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="pt-4">

                        <h5 className="mb-4">Expected shipping delivery</h5>

                        <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="pt-4">

                        <h5 className="mb-4">We accept</h5>

                        <img className="m-2" width="45px"
                            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                            alt="Visa" />
                        <img className="m-2" width="45px"
                            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                            alt="American Express" />
                        <img className="m-2" width="45px"
                            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                            alt="Mastercard" />
                        <img className="m-2" width="45px"
                            src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                            alt="PayPal acceptance mark" />
                        </div>
                    </div>

                    </div>
                    <div className="col-lg-4">

                    <div className="mb-3">
                        <div className="pt-4">

                        <h5 className="mb-3">The total amount of</h5>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Temporary amount
                            <span>$25.98</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                            Shipping
                            <span>Gratis</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>The total amount of</strong>
                                <strong>
                                <p className="mb-0">(including VAT)</p>
                                </strong>
                            </div>
                            <span><strong>$53.98</strong></span>
                            </li>
                        </ul>

                        <button type="button" className="btn btn-primary btn-block">go to checkout</button>

                        </div>
                    </div>
                    <div className="mb-3 code-discount-optional">
                        <div className="pt-4">
                            <a className="dark-grey-text d-flex justify-content-between" href="#">
                                Add a discount code -optional
                                <span><FontAwesomeIcon className="pt-1" icon={faChevronDown} /></span>
                            </a>

                            <div className="collapse show">
                                <div className="mt-3">
                                    <div className="md-form md-outline mb-0">
                                        <input type="text"className="form-control font-weight-light"
                                        placeholder="Enter discount code" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                </div>

                </section>
            </div>
            </section>
        </>
    );
}

const mapStateToProps = state => {
    return {
        product: state.product,
        myCart: state.myCart
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)