import { bindActionCreators } from 'redux';
import { dispatch } from '../store/store';

const setCurrentUserAction = (payload) => {
  return {
    type: 'USER/SET',
    payload,
  };
};
const setPaymentAction = (payload) => {
  return {
    type: 'PAYMENT/SET',
    payload,
  };
};
const setPricesAction = (payload) => {
  return {
    type: 'PRICES/SET',
    payload,
  };
};
const setDirectionAction = (payload) => {
  return {
    type: 'DIRECTION/SET',
    payload,
  };
};
export const { setCurrentUser, setPayment, setPrices, setDirection } =
  bindActionCreators(
    {
      setCurrentUser: setCurrentUserAction,
      setPayment: setPaymentAction,
      setPrices: setPricesAction,
      setDirection: setDirectionAction,
    },
    dispatch
  );