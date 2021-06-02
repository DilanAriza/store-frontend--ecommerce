import React from 'react'
import { Link } from 'react-router-dom';
// import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <div className="not-found">
        <div className="not-found__content-message">
            <h1>Error <code>404</code></h1>
            <p><i>No encontramos lo que buscabas</i></p>
            <Link to="/">Regresa al inicio</Link>
        </div>
    </div>
);

export default NotFound;