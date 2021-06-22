//Libs
import React, { useState, useLayoutEffect } from 'react';
import {connect} from 'react-redux';

//Components
import Header from '../components/Header.component';
import GoToTop from '../components/GoToTop.component';
import Category from '../components/CategoryCard.component';

// Styles
import '../../assets/styles/pages/Category.page.scss';

const CategoriesPage = props => {
    
    const { categories } = props;

    // Define const
    const {id} = props.match.params;
    console.log(id);


    return (
        <>
        <Header />
        <main>
            <div className="container">
                <h1 className="text-break text-center fs-1 m-5">Categorias</h1>
                <div className="section-content">
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
        </main>
        <GoToTop />
        </>
    );
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
    }
}

export default connect(mapStateToProps, null)(CategoriesPage)