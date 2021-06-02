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
import '../assets/styles/containers/Home.scss';
import ItemCard from '../components/ItemCard';


const Home = (props) => {
    const { myCart, trends, originals } = props;

    console.log(myCart)

    return (
        <>
        <Header />
        <div className="lading-page background-fixed-landing-page">
            <div className="container title-landing-page">
                <div className="title-compact">
                    <h4 className="text-uppercase-titles">The</h4>
                    <h1 className="text-uppercase-titles">Store</h1>
                    <p className="fs-4">
                        Diseños elegantes para personas elegantes
                    </p>
                </div>
            </div>
        </div>
        {trends.length > 0 &&
        <div className="container mt-5 pt-2">
            <h1 className="text-break d-fles text-center fs-1 m-5">Productos destacados</h1>
                <div className="trends">
                    <p className="text-black text-center text-bold">Estos son los productos mejor calificados por nuestros clientes</p>
                    <div className="container-card">
                        {trends.map(item => 
                            <ItemCard 
                                key={item.id}
                                {...item}
                            />    
                        )}
                    </div>
                </div>
        </div>
        }
        {/* <Search isHome/>
        {myList.length > 0 &&
            <Categories title="Mi Lista">
            <Carousel>
                {myList.map(item =>
                    <CarouselItem 
                        key={item.id} 
                        {...item} 
                        isList
                    />
                )}
            </Carousel>
            </Categories>
        }
        <Categories title="Tendencias">
            <Carousel>
            {trends.map(item =>
                <CarouselItem key={item.id} {...item} isList={false}/>
            )}
            </Carousel>
        </Categories>
        <Categories title="Originales de Platzi Video">
            <Carousel>
            {originals.map(item =>
                <CarouselItem key={item.id} {...item} isList={false}/>
            )}
            </Carousel>
        </Categories> */}
        </>
    );
}

const mapStateToProps = state => {
    return {
        myCart: state.myCart,
        trends: state.trends,
        originals: state.originals,
    };
} 

export default connect(mapStateToProps, null)(Home)
