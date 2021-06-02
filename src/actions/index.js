export const actions = {
    loginReqest: 'LOGIN_REQUEST',
    registerRequest: 'REGISTER_REQUEST',
    logoutRequest: 'LOGOUT_REQUEST',
    addToCart: 'ADD_TO_CART',
};


export const loginRequest = payload => ({
    type: actions.loginReqest,
    payload,
});

export const registerRequest = payload => ({
    type: actions.registerRequest,
    payload,
});

export const logoutRequest = payload => ({
    type: actions.logoutRequest,
    payload,
});

export const addToCart = payload => ({
    type: actions.addToCart,
    payload,
});