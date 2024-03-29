import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

//Styles 
import '../../assets/styles/components/Category.component.scss';

const CategoryComponent = (props) =>{
    const {id, title, cover} = props;
    
    return(
        <div key={id} >
            <Link className="card categories" to={`/categories`}>
                <img src={cover} className="card-img-top" alt="cover-image-card"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </Link>
        </div>
    )
};

export default connect(null, null)(CategoryComponent)