import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

//Styles 
import '../assets/styles/components/ItemCard.scss';

//Actions
import { addToCart } from '../actions';

const ItemCard = (props) =>{
    const {id, title, description, rating, cover} = props;
    
    const handleAddToCart = () => {
        props.addToCart({
            id, cover, title, description, rating
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

    return(
        <div key={id} >
            <Link className="card" to={`/item/${id}`}>
                <img src={cover} className="card-img-top" alt="cover-image-card"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </Link>
        </div>
    )
};

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(ItemCard)