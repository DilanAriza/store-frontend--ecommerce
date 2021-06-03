import { actions } from '../actions';


const reducer = (state, action) => {
    switch (action.type) {
        case actions.addToCart:
            const exist = state.myCart.find(item => item.id === action.payload.id)
            if (exist) return {...state }

            return {
                ...state,
                myCart: [...state.myCart, action.payload]
            }

            // case actions.deleteFavorite:
            //     return {
            //         ...state,
            //         myList: state.myList.filter(items => items.id !== action.payload)
            //     }

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
        case actions.getInfoProduct:
            return {
                ...state,
                product: state.trends.find(item => item.id === Number(action.payload)) || []
            }

        default:
            return state
    }
}

export default reducer;