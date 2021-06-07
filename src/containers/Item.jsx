//Libs
import React, { useState, useLayoutEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import {connect} from 'react-redux';

//Components
import Header from '../components/Header';

// Styles
import '../assets/styles/containers/Item.scss';

//Actions
import { addToCart, getInfoProduct } from '../actions';

const Item = props => {
    
    // Search information of product to props
    useLayoutEffect(()=>{
        props.getInfoProduct(id);
    }, []);

    // Define const
    const {id} = props.match.params;
    const product = props.product;
    const rating = parseInt(product.rating);

    // Execute multiple functions in onClick addToCart Button
    const onClickFunctionButton = ()=>{
        handleToggleNotificationAddToCart()
        handleAddToCart()
    }

    const onClickHandlerButton = ()=>{
        handleToggleNotificationAddToCart(true)
    }
    
    // Define 
    const [isActiveNotificationAddToCart, setActiveNotificationAddToCart] = useState(false);
    const [itemAmount, setItemAmount] = useState(1);
    
    // Set Amount items to cart
    const handleItemAmount = (event) => {
        setItemAmount(event.target.value);
    }

    // Controll display notification addtocart
    const handleToggleNotificationAddToCart = (onClickFunctionButton) => {
        (!onClickFunctionButton && isActiveNotificationAddToCart) 
        ? setActiveNotificationAddToCart(isActiveNotificationAddToCart) 
        : setActiveNotificationAddToCart(!isActiveNotificationAddToCart)
    }
    
    // Send to Reducers
    const handleAddToCart = () => {
        props.addToCart({
            id: product.id,
            amount: itemAmount
        });
    };
    
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
        <main>

            <div className="d-md-flex flex-md-equal w-100 container-principal-information">
                <div className="bg-light pt-md-5 px-md-5 text-center overflow-hidden colum-information">
                    <img className="image-principal-product" src={product.cover} alt="item-image" />
                </div>
                <div className="pt-3 px-3 pt-md-5 px-md-5 overflow-hidden colum-information bg-white">
                    <h2>{product.title}</h2>
                    <p className="lead title-product">Precio:
                        <span className="badge bg-light text-dark p-1">{formatCurrency("en-US", "USD", 2, product.price)} USD</span>
                    </p>
                    <div className="rating-content">
                        <h4>Rating</h4>
                        <span>
                            <Rating name="read-only" value={rating} readOnly/>
                        </span>
                    </div>
                    <div className="save-to-card">
                        <div className="save-to-cart-container">
                            <div className="text-helper">
                                <div className="text-dark">Seleccione la cantidad</div>
                            </div>
                            <select 
                                className="form-select" 
                                aria-label="Default select example"
                                onChange={handleItemAmount}
                            >
                                <option defaultValue="1">1</option>
                                <option defaultValue="2">2</option>
                                <option defaultValue="3">3</option>
                            </select>
                        </div>
                        <br />
                        <button 
                            type="button"
                            className="btn btn-dark me-3"
                            onClick={onClickFunctionButton}
                        >
                            Agregar a mi carrito
                        </button>
                        <button className="btn btn-primary">Comprar</button>

                        {/* Notificatión addToCard */}
                        <div className="position-fixed bottom-0 end-0 p-3 notification-to-cart">
                            <div id="liveToast" className={isActiveNotificationAddToCart ? "toast show bg-dark": "toast hide bg-dark"} role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header bg-dark">
                                    <svg className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <rect width="100%" height="100%" fill="#007aff"></rect>
                                    </svg>
                                    <strong className="me-auto text-white">¡Hecho!</strong>  
                                    <small className="text-white">Ahora</small>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close" onClick={onClickHandlerButton}></button>
                                </div>
                                <div className="toast-body text-white body-alert-to-cart">
                                    El producto se ha añadido a tu carrito  
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="dropdown-divider"/>
                    <div className="description-container">
                        <h4>Descripción</h4>
                        <p>{product.description}</p>
                    </div>
                    
                </div>
            </div>
        </main>
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
    addToCart,
    getInfoProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)