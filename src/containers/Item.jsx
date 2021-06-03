//React
import React, { useState, useEffect } from 'react';

// React Redux
import {connect} from 'react-redux';

//Components
// import Search from '../components/Search';
// import Categories from '../components/Categories';
// import Carousel from '../components/Carousel';
// import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
// import useInitialState from '../hooks/useInitialState';

// Styles
import '../assets/styles/containers/Item.scss';

//Actions
import { addToCart } from '../actions';

const Item = (props) => {

    const handleAddToCart = () => {
        props.addToCart({
            id, cover, title, description, rating
        });
    };

    return (
        <>
        <Header />
        <main>

            <div className="d-md-flex flex-md-equal w-100">
                <div className="bg-light pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                </div>
                <div className="bg-dark pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
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

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(Item)