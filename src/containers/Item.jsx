//Libs
import React, { useState, useLayoutEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import {connect} from 'react-redux';

//Components
import Header from '../components/Header';

// Styles
import '../assets/styles/containers/Item.scss';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//Actions
import { addToCart, getInfoProduct } from '../actions';

const Item = props => {
    
    const {id} = props.match.params;

    console.log(props.product);

    const product = props.product;

    const handleAddToCart = () => {
        props.addToCart({
            id: product.id, 
            cover: product.cover, 
            title: product.title, 
            description: product.description, 
            rating: product.rating
        });
    };

    const formatCurrency = (locales, currency, fractionDigits, number) =>{
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);

        return formatted;
    }

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    useLayoutEffect(()=>{
        props.getInfoProduct(id);
    }, []);

    const rating = parseInt(product.rating);

    return (
        <>
        <Header />
        <main>

            <div className="d-md-flex flex-md-equal w-100 container-principal-information">
                <div className="bg-light pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden colum-information">
                    <img className="image-principal-product" src={product.cover} alt="item-image" />
                </div>
                <div className="pt-3 px-3 pt-md-5 px-md-5 overflow-hidden colum-information bg-white">
                    <h2>{product.title}</h2>
                    <p className="lead title-product">Precio:
                        <span class="badge bg-light text-dark p-1">{formatCurrency("en-US", "USD", 2, product.price)} USD</span>
                        {/* <span className="text-primary m-2">{formatCurrency("es-CO", "COP", 2, product.price)}</span> */}
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
                                onChange={handleChange}
                            >
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <br />
                            <button className="btn btn-dark me-3">Agregar a mi carrito</button>
                            <button className="btn btn-primary">Comprar</button>
                    </div>
                    <hr className="dropdown-divider"/>
                    <div className="description-container">
                        <h4>Descripción</h4>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam. Veniam esse asperiores ratione a velit dolorem voluptatum, nostrum quia pariatur! Provident assumenda error sint? Optio alias nulla, iure veritatis maxime dolor esse, aspernatur consequuntur, incidunt aperiam eveniet ipsa dignissimos tenetur facilis dolore porro reiciendis aliquam quaerat amet illum? Officia sed vitae a harum voluptate minima expedita, laudantium enim neque accusantium nam atque unde ab cum suscipit numquam deleniti aperiam nulla voluptates nemo inventore magni libero impedit. Dolorum quas hic sunt minus beatae quasi architecto et dolor nemo consectetur!{product.description}</p>
                    </div>
                    
                </div>
            </div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">Punny headline</h1>
                    <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
            </div>
        {/* <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                    <h2 className="display-5">Another headline</h2>
                    <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-body shadow-sm mx-auto style-headline-1-"></div>
                </div>
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                    <h2 className="display-5">Another headline</h2>
                    <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-body shadow-sm mx-auto style-headline-1"></div>
                </div>
            </div> */}
        </main>
        </>
    );
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = {
    addToCart,
    getInfoProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)