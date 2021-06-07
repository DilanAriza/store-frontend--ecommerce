// React and React-Router
import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import {connect} from 'react-redux'

//Actions
import {logoutRequest} from '../actions'

//prop-types
import PropTypes from 'prop-types';

//Classnames
import classNames from 'classnames'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

//Styles 
import '../assets/styles/components/Header.scss'


const Header = props => {

    const {user, isLogin, isRegister} = props;
    const hasUser = Object.keys(user).length > 0; 

    const handlerLogout = () => {
        props.logoutRequest({});
    }
    const headerClass = classNames('header p-3 border-bottom', {
        isLogin,
        isRegister,
    });

    return(
        <header className={headerClass}>
            <div className="container">
                
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start sub-container-header">
                    <Link className="d-flex align-items-center mb-lg-0 text-dark text-decoration-none text-uppercase fw-bold fs-3 br-10 p-2 store-link-navbar" to="/">STORE</Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-md-0 links-navbar justify-content-around list-nav-items-store">
                        <li><a href="#" className="nav-link px-2 link-dark">Categorías</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Productos</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Rating</a></li>
                        <li><button className="nav-link px-2 link-dark" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><FontAwesomeIcon icon={faBars} /></button></li>
                    </ul> 
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                            </div>
                            <div className="dropdown mt-3">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                Dropdown button
                            </button>
                            {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul> */}
                            </div>
                        </div>
                    </div>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search-bar">
                        <input type="search" className="form-control" placeholder="Buscar..." />
                    </form>

                    <div className="dropdown text-end cart-image">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://image.flaticon.com/icons/png/512/2121/2121815.png" alt="mdo"/>
                        </a>
                        {
                            hasUser ?
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li>
                                    <Link className="dropdown-item" to="/my-cart">Mi carrito</Link>    
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/settings">Configuración</Link>    
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/acount">Cuenta</Link>    
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <Link className="dropdown-item" to="#" onClick={handlerLogout}>Cerrar Sesión</Link>    
                                </li>
                            </ul>: 
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li>
                                    <Link className="dropdown-item" to="/login">Iniciar Sesión</Link>    
                                </li>
                            </ul>
                        }
                        
                    </div>
                </div>
            </div>
        </header>

    );
}

Header.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)  