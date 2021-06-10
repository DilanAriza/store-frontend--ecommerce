// Libs
import React, { useState, useLayoutEffect } from 'react';
import {connect} from 'react-redux';

// Styles
import '../assets/styles/containers/Cart.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

// Actions
import { 
    deleteItemToCart, 
    getInfoProduct, 
    removePriceToCart,
    addPriceToCart,
} from '../actions';

const ItemCartToPay = props => {
    const {myCart, trends, id} = props;
    
    // Define 
    // const [amountState, setAmountState] = useState(amount);
    
    // Define consts
    const searchItem = trends.filter(item => item.id === id);
    const item = searchItem[0];
    const product = myCart.find(item => item.id === id);

    // Functions to format price
    const formatCurrency = (locales, currency, fractionDigits, number) =>{
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);

        return formatted;
    }

    // Detele item in cart
    const deleteItemToCart = ()=>{
        props.deleteItemToCart(id);
        props.removePriceToCart((item.price*product.amount));
    }

    // Add Amount to Cart
    const addAmountToCart = () => {
        props.addPriceToCart({
            id: id,
            price: item.price
        });
    }

    // Remove Amount to Cart
    const removeAmountToCart = () => {
        props.removePriceToCart({
            id: id,
            price: item.price
        });
    }
    
    const controllerChange = (e)=>{
        // console.log(e)
    }

    return (
        <>
        <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img className="img-fluid w-100"
                        src={item.cover} 
                        alt={item.title} />
                </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{item.title}</h5>
                            <p className="mb-3 text-muted text-uppercase small">Shirt - Universal</p>
                            <p className="mb-2 text-muted text-uppercase small">Color: Universal</p>
                            <p className="mb-3 text-muted text-uppercase small">Size: Universal</p>
                        </div>
                        <div className="amount-selector">
                            <div className="def-number-input number-input safari_only mb-0 w-100">
                                <button onClick={removeAmountToCart}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input 
                                    className="quantity" 
                                    min="0" 
                                    name="quantity" 
                                    placeholder={product.amount}
                                    value={product.amount}
                                    type="number"
                                    onChange={controllerChange}
                                />
                                {/* <displayInputElement /> */}
                                <button onClick={addAmountToCart}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </div>
                            {/* Nota diseñada para los elementos finales o ultimos en stock */}
                            {/* <small id="passwordHelpBlock" className="form-text text-muted text-center">
                                (Note, 1 piece)
                            </small> */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center options-item-selector">
                        <div>
                            <button href="#!" type="button" className="small text-uppercase mr-3" onClick={deleteItemToCart}>
                                <FontAwesomeIcon icon={faTrash}/>
                                Eliminar producto
                            </button>
                        </div>
                        <p className="mb-0">
                            <span>
                                <strong id="summary">{formatCurrency("en-US", "USD", 2, item.price)}</strong>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr className="mb-4" />
        </>
    )
}

const mapStateToProps = state => {
    return {
        myCart: state.myCart,
        trends: state.trends,
        user: state.user,
        product: state.product
    }
}

const mapDispatchToProps = {
    deleteItemToCart,
    getInfoProduct,
    removePriceToCart,
    addPriceToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCartToPay)