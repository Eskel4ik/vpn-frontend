import React from 'react';
import './Payment.css';
import BackButton from '../BackButton/BackButton';
import PaymentsEmailForm from '../PaymentsEmailForm/PaymentsEmailForm';
import { useSelector } from 'react-redux';
import FormLabel from '../FormLabel/FormLabel';
import AppButton from '../AppButton/AppButton';
import { getPaymentLink, payWithBalance } from '../../utils/roboApi';
import { setCurrentUser, setPaymentUrl } from '../../redux/actions/actions';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import useAnalyticsEventTracker from '../../hooks/useAnanlyticsEventTracker';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const payment = useSelector((state) => state.payment);
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  const paymentUrl = useSelector((state) => state.paymentUrl);
  const [withBalance, setWithBalance] = React.useState(false);
  const [method, setMethod] = React.useState('');
  const navigate = useNavigate();
  const gaEventTracker = useAnalyticsEventTracker('payment');

  function handlePay() {
    const balanceInUse = withBalance ? 1 : 0;
    gaEventTracker('click', 'payment button click');
    if (withBalance && currentUser.balance > payment) {
      payWithBalance(currentUser.userId, payment.toString())
        .then((res) => {
          setCurrentUser(res);
          navigate(paymentUrl);
          setPaymentUrl('success');
        })
        .catch((err) => console.log(err));
    } else {
      getPaymentLink(
        currentUser.userId,
        payment.toString(),
        paymentUrl,
        balanceInUse
      )
        .then((res) => {
          window.location.href = res;
          setPaymentUrl('success');
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <motion.section
      className='payment'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BackButton
        path={-1}
        text=''
        title='Способы оплаты'
        currentClass='wide'
      />
      {!currentUser.email && !currentUser.email.length ? (
        <PaymentsEmailForm />
      ) : (
        <>
          <div className='payment__methods'>
            <FormLabel
              name='method'
              currentClass='form-label__method'
              title='Банковская карта'
              text='Мир и другие'
              elementValue='card'
              handler={(data) => setMethod(data)}
              defaultChecked={true}
            />
            <FormLabel
              name='method'
              currentClass='form-label__method disabled'
              title='Крипта (в разработке)'
              text='Биткоин и другие'
              elementValue='crypto'
              handler={(data) => setMethod(data)}
              disabled={true}
            />
            <motion.label
              className='form-label__method checkbox'
              whileTap={{ scale: 0.95 }}
            >
              <span className='form-label__title form-label__title_moved'>
                Оплатить за счет баланса
              </span>
              <span className='form-label__text-secondary'>{`На вашем балансе ${currentUser.balance} ₽`}</span>
              <input
                className='form-label__radio-input'
                type='checkbox'
                checked={withBalance}
                onChange={() => setWithBalance((state) => !state)}
              />
            </motion.label>
          </div>
          <div className='payment__button-box'>
            <div className='payment__value'>
              <span className='payment__value-title'>К оплате</span>
              <span className='payment__value-data'>
                {withBalance
                  ? currentUser.balance > payment
                    ? 0
                    : payment - currentUser.balance
                  : payment}{' '}
                ₽
              </span>
            </div>
            <AppButton
              currentClass='primary white bg-dark-blue margin-top'
              text='Оплатить'
              handler={handlePay}
            />
          </div>
        </>
      )}
    </motion.section>
  );
}

export default Payment;