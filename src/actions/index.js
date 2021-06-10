export const actions = {
    loginReqest: 'LOGIN_REQUEST',
    registerRequest: 'REGISTER_REQUEST',
    logoutRequest: 'LOGOUT_REQUEST',
    addToCart: 'ADD_TO_CART',
    getInfoProduct: 'GET_INFO_PRODUCT',
    deleteItemToCart: 'DELETE_PRODUCT_TO_CART',
    addPriceToCart: 'ADD_PRICE_TO_CART',
    removePriceToCart: 'REMOVE_PRICE_TO_CART',
    changeItemMount: 'CHANGE_ITEM_MOUNT',
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

export const getInfoProduct = payload => ({
    type: actions.getInfoProduct,
    payload,
});

export const deleteItemToCart = payload => ({
    type: actions.deleteItemToCart,
    payload,
});

export const addPriceToCart = payload => ({
    type: actions.addPriceToCart,
    payload,
});

export const removePriceToCart = payload => ({
    type: actions.removePriceToCart,
    payload,
});

export const changeItemMount = payload => ({
    type: actions.changeItemMount,
    payload,
});