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

//Gravatar
// import gravatar from '../utils/gravatar';

//Statics
// import logo from '../assets/static/logo-platzi-video-BW2.png';
// import userIcon from '../assets/static/user-icon.png';

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
                
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none text-uppercase fw-bold fs-3 br-10 p-2" to="/new">STORE</Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-dark">Categorías</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Productos</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Rating</a></li>
                    </ul> 

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Buscar..." />
                    </form>

                    <div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://image.flaticon.com/icons/png/512/2121/2121815.png" alt="mdo" width="32" height="32" />
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
                                {/* <li>
                                    <Link className="dropdown-item" to="/my-cart">Mi carrito</Link>    
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/settings">Configuración</Link>    
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/acount">Cuenta</Link>    
                                </li>
                                <li><hr className="dropdown-divider"/></li> */}
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