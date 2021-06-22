// Libs
import React, { useState, useLayoutEffect } from 'react';
import {connect} from 'react-redux';

// Components
import Header from '../components/Header.component';
import ItemCartToPay from '../components/ItemCartToPay.component';
import GoToTop from '../components/GoToTop.component';

// Styles
// import '../assets/styles/containers/Cart.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faInfoCircle, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CheckoutCart = props => {
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

    const handlePromo = (e)=>{
        console.log(e.target.value);
    }

    return (
        <>
        <Header />
        <div className="cart-page">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8">
                        <div className="mb-3">
                            <div className="wish-list pb-1">
                                <div className="card-body">
                                    <h5 className="mb-2">Billing details</h5>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="md-form md-outline mt-3 mb-lg-4">
                                                <label htmlFor="firstName">Nombres</label>
                                                <input type="text" id="firstName" placeholder="Pepito" className="form-control mb-0 mb-lg-2" />
                                            </div>
                                        </div>
                                    <div className="col-lg-6">
                                        <div className="md-form md-outline mt-3">
                                            <label htmlFor="lastName">Apellidos</label>
                                            <input type="text" id="lastName" placeholder="Perez" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="md-form md-outline my-0 mt-0">
                                    <label htmlFor="companyName">Nombre de la compañia (Opccional)</label>
                                    <input type="text" id="companyName" placeholder="Google xd" className="form-control mb-0" />
                                </div>

                                <div className="md-form md-outline mt-3">
                                    <label htmlFor="form17" className="">Provincia / Estado</label>
                                    <input type="text" id="form17" placeholder="Jalisco, Santa Fe, Cundinamarca" className="form-control" />
                                </div>
                
                                <div className="md-form md-outline mt-1">
                                    <label htmlFor="form14" className="active">Ciudad</label>
                                    <input type="text" id="form14" placeholder="Ciudad de México, Buenos Aires, Bogotá" className="form-control" />
                                </div>


                                <div className="md-form md-outline mt-3">
                                    <label htmlFor="form15" className="active">Dirección</label>
                                    <input type="text" id="form15" placeholder="Carrera 101 N° 57 - 40 SUR" className="form-control" />
                                </div>

                                <div className="md-form md-outline mt-3">
                                    <label htmlFor="form16" className="">Código postal / ZIP</label>
                                    <input type="text" id="form16" placeholder="110711" className="form-control" />
                                </div>

                                <div className="md-form md-outline mt-3">
                                    <label htmlFor="form18">Número de telefono</label>
                                    <input type="text" id="form18" placeholder="+(Código de país) (Número de telefono), ejmp: +57 3216139356" className="form-control" />
                                </div>

                                <div className="md-form md-outline mt-3">
                                    <label htmlFor="form19" className="">Dirección Email</label>
                                    <input type="email" id="form19" placeholder="ejmp: lareconchadetuhermana@tuputamadre.com" className="form-control" />
                                </div>

                                <div className="md-form md-outline mt-3">
                                    <label htmlFor="form76" className="">Información adicional</label>
                                    <textarea id="form76" className="md-textarea form-control" placeholder="Casa de fachada Azul, el dueño de la casa recibe el pedido, preguntar por Dilan, Tener cuidado con los perros y por ultimo, ella no te ama" rows="4"></textarea>
                                </div>
                            </div>
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
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Descuento de Cupón
                                        <span>{formatCurrency("en-US", "USD", 2, 0)}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Envío
                                        <span>Gratis</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Cantidad total a pagar</strong>
                                            <strong>
                                                <p className="mb-0">(incluye IVA de {tax}%)</p>
                                            </strong>
                                        </div>
                                        <span><strong>{formatCurrency("en-US", "USD", 2, ((priceCart / 100) * tax + (priceCart)))}</strong></span>
                                    </li>
                                </ul>

                                <Link type="button" to="/checkout-cart" className="btn btn-primary btn-block">Finalizar compra</Link>

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
        products: state.products,
        user: state.user,
        priceCart: state.priceCart,
        tax: state.tax,
    }
}

export default connect(mapStateToProps, null)(CheckoutCart)