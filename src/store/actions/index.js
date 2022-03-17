
import shop from '../../api/shop'
import * as types from '../constants/ActionTypes'
const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})
export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}
const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})
export const addToCart = productId => (dispatch, getState) => {
 if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}
const removeFromCartUnsafe = productId => ({
  type: types.DELETE_SINGLE_ITEM,
  productId
})
export const removeItemFromCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(removeFromCartUnsafe(productId))
  }
}
 export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()
  dispatch({
   type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}


// import shop from "../../api/shop";
// import * as types from "../constants/ActionTypes";

// export const receiveProducts = (payload) => ({
//   type: types.RECEIVE_PRODUCTS,
//   payload,
// });



// export const getAllProducts = () => (dispatch) => {
//   shop.getProducts((payload) => {
//     dispatch(receiveProducts(payload));
//   });
// };


// export const checkout = (products) => (dispatch, getState) => {
//   const { cart } = getState();

//   dispatch({
//     type: types.CHECKOUT_REQUEST,
//   });
//   shop.buyProducts(products, () => {
//     dispatch({
//       type: types.CHECKOUT_SUCCESS,
//       cart,
//     });
//   });
// };



// export const addToCart = () => {

// };
