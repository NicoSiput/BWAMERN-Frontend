import { CHECKOUT_BOOKING } from "../types";

const initialState = null;

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};
