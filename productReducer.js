import { actionType } from "./actionType";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_PRODUCTS:
      return {
        ...state,products:payload
      }
    case actionType.ADD_PRODUCT:
      return {
        products: [...state.products, payload],
      };
      case actionType.DELL_PRODUCT:
        state.products.splice(payload, 1)
      return {
        products:[...state.products]
      };
      case actionType.EDIT_PRODUCT:
        state.products[payload.ind].name = payload.name
        state.products[payload.ind].image = payload.image
      return {
        products:[...state.products]
      };
    default:
      return state;
  }
};
