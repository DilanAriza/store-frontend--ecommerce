// React and React-Router
import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import {connect} from 'react-redux'

//Actions
import {logoutRequest} from '../../actions'

//prop-types
import PropTypes from 'prop-types';

//Classnames
import classNames from 'classnames'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faPersonBooth, faUser, faUserCircle, faUserLock } from '@fortawesome/free-solid-svg-icons'

//Styles 
import '../../assets/styles/components/Header.component.scss'


const HeaderComponent = props => {

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
                
                <div className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-start sub-container-header">
                    <Link className="d-flex align-items-center mb-lg-0 text-dark text-decoration-none text-uppercase fw-bold fs-3 br-10 p-2 store-link-navbar" to="/">STORE</Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-md-0 links-navbar justify-content-around list-nav-items-store">
                        <li><a href="#" className="nav-link px-2 link-dark">Categorias</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Ofertas</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Explorar</a></li>
                        <li><button className="nav-link px-2 link-dark" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><FontAwesomeIcon icon={faBars} /></button></li>
                    </ul> 
                    <div className="offcanvas offcanvas-start d-flex flex-column flex-shrink-0 p-3 bg-light" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                                <span className="offcanvas-title fs-4">Menu</span>
                            </Link>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr />
                        <div className="offcanvas-body">
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item">
                                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                        <input type="search" className="form-control" placeholder="Buscar..." />
                                    </form>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link active" aria-current="page">
                                        <FontAwesomeIcon className="bi me-2" icon={faHome} />
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link link-dark">
                                        <FontAwesomeIcon className="bi me-2" icon={faHome} />
                                        Categorias 
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link link-dark">
                                        <FontAwesomeIcon className="bi me-2" icon={faHome} />
                                        Ofertas
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link link-dark">
                                        <FontAwesomeIcon className="bi me-2" icon={faHome} />
                                        Explorar
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        {
                            hasUser ?
                            <div className="dropdown">
                                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="true">
                                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                    <strong>Fabian Bermudez</strong>
                                </a>
                                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" data-popper-placement="top-start">
                                    <li><Link to="/my-cart" className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close">Mi Carrito</Link></li>
                                    <li><a className="dropdown-item" href="#">Mi Cuenta</a></li>
                                    <li><a className="dropdown-item" href="#">Configración</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" onClick={handlerLogout} to="#">Cerrar Sesión</Link></li>
                                </ul>
                            </div>:
                            <div className="dropdown">
                                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="true">
                                    <FontAwesomeIcon icon={faUserCircle} className="rounded-circle me-2 user-login-icon-slideber" />
                                    <strong>Mi cuenta</strong>
                                </a>
                                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" data-popper-placement="top-start">
                                    <li><Link className="dropdown-item" to="/login">Iniciar Sesión</Link></li>
                                </ul>
                            </div>
                        }
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

HeaderComponent.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)  