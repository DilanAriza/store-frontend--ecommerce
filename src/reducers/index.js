import { actions } from '../actions';


const reducer = (state, action) => {
    switch (action.type) {
        case actions.addToCart:
            // Verify is exist id in the state.myCart
            const existId = state.myCart.find(item => item.id === action.payload.id);

            // Variable to ecual or other amont
            let itemIcual;

            // Variable to save amount if and only if, is a diferent amont to state and payload
            let saveAmount;

            // Search product and save price amount product from payload
            const product = state.products.find(item => item.id === action.payload.id);
            let priceProduct = (product.price * action.payload.amount);

            // Verify if this id exist in the state
            if (existId) {

                state.myCart.map((item) => {

                    // Verify if the id and payload is ecual in the state 
                    if (item.id === action.payload.id && item.amount === action.payload.amount) {

                        itemIcual = 'ecual';
                    }

                    // Verify if the id is ecual and amount isn't ecual, correct this shit! :)
                    if (item.id === action.payload.id && item.amount !== action.payload.amount) {

                        // Save amount to minus for state and plus payload
                        saveAmount = item.amount;

                        // Save amount in the item
                        item.amount = action.payload.amount;
                        itemIcual = 'd-amount';
                    }

                    // return item maped to state (default or updated)
                    return item;
                })


                // return ecual information to props
                if (itemIcual === 'ecual') {
                    return {...state }
                }

                // return direfent information to props (IMPORTANT REVIEW THIS SHIT, UPDATE THIS SHIT PLEACE!)
                if (itemIcual === 'd-amount') {

                    // the previous value is subtracted from the product amount and updated to the new one
                    const priceToCart = ((state.priceCart - (product.price * saveAmount)) + priceProduct);

                    return {
                        ...state,
                        myCart: [...state.myCart],
                        priceCart: priceToCart,
                    }
                }
            } else {

                // Return data aditional to props
                return {
                    ...state,
                    myCart: [...state.myCart, action.payload],
                    priceCart: priceProduct + state.priceCart,
                }
            }

            // Get info of producto of state to props 
        case actions.getInfoProduct:
            return {
                ...state,
                product: state.products.find(item => item.id === Number(action.payload)) || []
            }


            // Function to delete producto of my cart
        case actions.deleteItemToCart:
            return {
                ...state,
                myCart: state.myCart.filter(items => items.id !== action.payload)
            }

            // Add Price to cart
        case actions.addPriceToCart:
            state.myCart.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount++;
                }
            });

            return {
                ...state,
                myCart: [...state.myCart],
                priceCart: state.priceCart + action.payload.price,
            }

            // Remove Price to cart
        case actions.removePriceToCart:
            state.myCart.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount--;
                }
            });

            return {
                ...state,
                myCart: [...state.myCart],
                priceCart: state.priceCart - action.payload.price,
            }

            // Handle price to cart
        case actions.changeItemMount:
            const { id, amount } = action.payload;
            const existItem = state.myCart.find(item => item.id === id);
            console.log(action.payload);
            console.log(existItem);

            // console.log(existItem.amount);


            if (existItem) {
                if (existItem.amount === amount) {
                    console.log('nice')
                }
            }

            return {
                ...state,
                priceCart: state.priceCart + action.payload.amount,
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