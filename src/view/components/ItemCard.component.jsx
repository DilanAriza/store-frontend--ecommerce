import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Rating from '@material-ui/lab/Rating';

//Styles 
import '../../assets/styles/components/ItemCard.scss';

//Actions
import { addToCart } from '../../actions';

const ItemCard = (props) =>{
    const {id, title, rating, cover} = props;
    
    return(
        <div key={id} >
            <Link className="card products" to={`/item/${id}`}>
                <img src={cover} className="card-img-top" alt="cover-image-card"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span>
                        <Rating name="read-only" value={rating} readOnly/>
                    </span>
                </div>
            </Link>
        </div>
    )
};

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(ItemCard)