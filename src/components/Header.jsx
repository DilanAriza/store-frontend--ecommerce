// React and React-Router
import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import {connect} from 'react-redux'

//Actions
// import {logoutRequest} from '../actions'

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

    // const handlerLogout = () => {
    //     props.logoutRequest({});
    // }
    const headerClass = classNames('header p-3 border-bottom', {
        isLogin,
        isRegister,
    }) 

    return(
        <header className={headerClass}>
            <div className="container">
                
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none text-uppercase fw-bold fs-3 br-10 p-2" to="/new">STORE</Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {/* <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li> */}
                        <li><a href="#" className="nav-link px-2 link-dark">Categorías</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Productos</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Rating</a></li>
                    </ul> 

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Buscar..." />
                    </form>

                    <div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            <li>
                                <Link className="dropdown-item" to="/new">New proyect...</Link>    
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/settings">Settings...</Link>    
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/new">Profile...</Link>    
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <Link className="dropdown-item" to="/new">Sign out...</Link>    
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        (hasUser)? 
                        <img src={gravatar(user.email)} alt={user.email}/>:
                        <img src={userIcon} alt=""/> 
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {
                        hasUser ? 
                        <>
                            <li><a href="/">{user.name}</a></li>
                            <li>
                                <a href="#" onClick={handlerLogout}>Cerrar Sesión</a>
                            </li>
                        </>:
                        <li>
                            <Link to="/login">Iniciar sesión</Link>
                        </li>
                    }
                </ul>
            </div> */}
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
    // logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)  