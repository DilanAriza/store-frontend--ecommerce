import { actions } from '../actions';


const reducer = (state, action) => {
    switch (action.type) {
        case actions.addToCart:
            // Verify is exist id in the state.myCart
            const existId = state.myCart.find(item => item.id === action.payload.id);

            // Variable to ecual or other amont
            let itemIcual;

            // Verify if this id exist in the state
            if (existId) {

                state.myCart.map((item) => {

                    // Verify if the id and payload is ecual in the state 
                    if (item.id === action.payload.id && item.amount === action.payload.amount) {
                        itemIcual = 'ecual';
                    }

                    // Verify if the id is ecual and amount isn't ecual, correct this shit! :)
                    if (item.id === action.payload.id && item.amount !== action.payload.amount) {
                        item.amount = action.payload.amount;
                        itemIcual = 'd-amount';
                    }

                    // return item maped to state (default or updated)
                    return item;
                })
            }

            // return ecual information to props
            if (itemIcual === 'ecual') {
                return {...state }
            }

            // return direfent information to props (IMPORTANT REVIEW THIS SHIT, UPDATE THIS SHIT PLEACE!)
            if (itemIcual === 'd-amount') {
                return {
                    ...state,
                    myCart: [...state.myCart]
                }
            }

            // Return data aditional to props
            return {
                ...state,
                myCart: [...state.myCart, action.payload]
            }

            // Get info of producto of state to props 
        case actions.getInfoProduct:
            return {
                ...state,
                product: state.trends.find(item => item.id === Number(action.payload)) || []
            }


        case actions.deleteItemToCart:
            // Function to delete producto of my cart
            return {
                ...state,
                myCart: state.myCart.filter(items => items.id !== action.payload)
            }

        case actions.addPriceToCart:
            return {
                ...state,
                priceCart: state.priceCart + action.payload,
            }


            // Administrative actions
        case actions.loginReqest:
            return {
                ...state,
                user: action.payload,
            }

        case actions.logoutRequest:
            return {
                ...state,
                user: action.payload,
            }

        case actions.registerRequest:
            console.log(action.payload);
            console.log('Cerrando sesión');
            return {
                ...state,
                user: action.payload,
            }


        default:
            return state
    }
}

export default reducer;