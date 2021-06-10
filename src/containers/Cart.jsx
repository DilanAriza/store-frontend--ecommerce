// Libs
import React, { useState, useLayoutEffect } from 'react';
import {connect} from 'react-redux';

// Components
import Header from '../components/Header';
import ItemCartToPay from '../components/ItemCartToPay';
import GoToTop from '../components/GoToTop';

// Styles
import '../assets/styles/containers/Cart.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faInfoCircle, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = props => {
    const {myCart, priceCart, tax} = props;
    const items = myCart.length;
    const [isActiveCupon, setIsActiveCupon] = useState(false);

    // Functions to format price
    const formatCurrency = (locales, currency, fractionDigits, number) =>{
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);

        return formatted;
    }

    const handleCupon = ()=>{
        setIsActiveCupon(!isActiveCupon);
    }

    return (
        <>
        <Header />
        <div className="cart-page">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8">
                        <div className="mb-3">
                            {myCart.length > 0 &&
                                <div className="pt-4 wish-list">
                                    <h5 className="mb-4">
                                        Carrito (
                                            {items}
                                            {(items > 1) ? " productos": " producto"}
                                        )
                                    </h5>
                                    {myCart.map(item=> 
                                        <ItemCartToPay 
                                            key={item.id}
                                            {...item}
                                        />
                                    )}
                                    <p className="text-primary mb-0">
                                        <FontAwesomeIcon icon={faInfoCircle} /> No demore la compra, agregar artículos a su carrito no significa reservarlos.
                                    </p>
                                </div>
                            }
                        </div>
                        <div className="mb-5">
                            <div className="pt-4">

                            <h5 className="mb-4">Entrega de envío esperada</h5>

                            <p className="mb-0"> Martes. 10AM, Juevez 7PM</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="pt-4">

                            <h5 className="mb-4">Nosotros aceptamos</h5>

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

                            <h5 className="mb-3">Cantidad total</h5>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Monto temporal
                                    <span>{formatCurrency("en-US", "USD", 2, priceCart)}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    Envío
                                    <span>Gratis</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Cantidad total a pagar</strong>
                                        <strong>
                                            <p className="mb-0">(incluye IVA de {tax})</p>
                                        </strong>
                                    </div>
                                    <span><strong>{formatCurrency("en-US", "USD", 2, ((priceCart / 100) * tax + (priceCart)))}</strong></span>
                                </li>
                            </ul>

                            <button type="button" className="btn btn-primary btn-block">Verificar compra</button>

                        </div>
                    </div>
                    <div className="mb-3 code-discount-optional">
                        <div className="pt-4">
                            <a className="dark-grey-text d-flex justify-content-between" href="#" onClick={handleCupon}>
                                Agregar código de descuento -optional
                                <span><FontAwesomeIcon className="pt-1" icon={faChevronDown} /></span>
                            </a>

                            <div className={isActiveCupon ? "collapse show": "collapse"}>
                                <div className="mt-3">
                                    <div className="md-form md-outline mb-0">
                                        <input type="text"className="form-control font-weight-light"
                                        placeholder="Escriba su código de descuento" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                </div>
            </div>
        </div>
        <GoToTop />
        </>
    );
}

const mapStateToProps = state => {
    return {
        myCart: state.myCart,
        trends: state.trends,
        user: state.user,
        priceCart: state.priceCart,
        tax: state.tax,
    }
}

export default connect(mapStateToProps, null)(Cart)