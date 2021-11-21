import { cartProps } from './../../models/reduxProps/cartProps';
import { AddProductCart } from './../actions-interfaces/index';
import { ActionType } from "../action-types";

interface stateProps {
  data: cartProps;
}
const initialState: stateProps = { data: {
  products: [],
  quantity: 0,
  total: 0
} };

type Action = AddProductCart;

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT_TO_CART:
      state.data.products = [...state.data.products, action.payload];
      state.data.quantity += action.payload.quantity!;
      state.data.total += action.payload.price * action.payload.quantity!;
      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
