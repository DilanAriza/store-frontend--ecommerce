//React
import React, { useState, useEffect } from 'react';

// React Redux
import {connect} from 'react-redux';

//Components
import Header from '../components/Header.component';
import ItemCard from '../components/ItemCard.component';
import GoToTop from '../components/GoToTop.component';

// Styles
import '../../assets/styles/pages/Home.page.scss';
import Category from '../components/CategoryCard.component';


const Home = (props) => {
    const { myCart, products, tax, categories } = props;

    const items = products.sort((a, b)=>{
        return b["rating"] - a["rating"]
    }).slice(0,4);

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
        {products.length > 0 &&
        <div className="container mt-5 pt-2">
            <h1 className="text-break text-center fs-1 m-5">Productos destacados</h1>
                <div className="section-content">
                    <p className="text-black text-center text-bold">Estos son los productos mejor calificados por nuestros clientes</p>
                    <div className="container-card">
                        {items.map(item => 
                            <ItemCard 
                                key={item.id}
                                {...item}
                            />    
                        )}
                    </div>
                </div>
        </div>
        }
        {categories.length > 0 &&
        <div className="container mt-2 pt-2">
            <h1 className="text-break text-center fs-1 m-5">Categorias destacados</h1>
                <div className="section-content">
                    <p className="text-black text-center text-bold">Estas son las categorias mas visitadas por nuestros clientes</p>
                    <div className="container-card">
                        {categories.map(category => 
                            <Category
                                key={category.id}
                                {...category}
                            />    
                        )}
                    </div>
                </div>
        </div>
        }
        <GoToTop />
        </>
    );
}

const mapStateToProps = state => {
    return {
        myCart: state.myCart,
        products: state.products,
        tax: state.tax,
        categories: state.categories,
    };
} 

export default connect(mapStateToProps, null)(Home)
