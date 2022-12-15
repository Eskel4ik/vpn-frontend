import React from 'react';
import './Gift.css';
import Popup from '../Popup/Popup';
import AppButton from '../AppButton/AppButton';
import { useSwipeable } from 'react-swipeable';
import { useSelector } from 'react-redux';
import FormLabel from '../FormLabel/FormLabel';
import { useNavigate } from 'react-router-dom';
import {
  setDirection,
  setPayment,
  setPaymentUrl,
} from '../../redux/actions/actions';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const variants = {
  visible: { opacity: 1, transition: { duration: 0.2 } },
  faded: { opacity: 0, transition: { duration: 0.2 } },
};

function Gift() {
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState('0');
  const [isFaded, setIsFaded] = React.useState(false);
  const [isGiftPopupHidden, setIsGiftPopupHidden] = React.useState(true);
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  const prices = useSelector((state) => state.prices);
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  React.useEffect(() => {
    isFaded && setTimeout(setIsFaded, 300, false);
  }, [isFaded]);

  function handleSwipeLeft() {
    if (progress >= 2) {
      setProgress(2);
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }
  function handleSwipeRight() {
    if (progress <= 0) {
      setProgress(0);
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => --state);
    }
  }

  function handleClick() {
    setIsFaded(true);
    setTimeout(setProgress, 300, (state) => ++state);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
  }
  function handlePaymentSubmit() {
    setPaymentUrl('gift-success');
    setDirection(true);
    if (value === '2') {
      currentUser.giftDiscount > 0
        ? setPayment(
            Math.floor(
              ((prices.Nolimit_12 * 12) / 100) * currentUser.giftDiscount
            )
          )
        : setPayment(prices.Nolimit_12 * 12);
    } else if (value === '1') {
      currentUser.giftDiscount > 0
        ? setPayment(
            Math.floor(
              ((prices.Nolimit_3 * 3) / 100) * currentUser.giftDiscount
            )
          )
        : setPayment(prices.Nolimit_3 * 3);
    } else {
      currentUser.giftDiscount > 0
        ? setPayment(
            Math.floor((prices.Nolimit_1 / 100) * currentUser.giftDiscount)
          )
        : setPayment(prices.Nolimit_1);
    }
    setIsFaded(true);
    navigate('/payment');
  }
  function handleBackButtonClick() {
    if (progress > 0) {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => --state);
    } else {
      setDirection(false);
      navigate('/');
    }
  }
  return (
    <motion.section
      {...handlers}
      className='gift'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='#fff' />
      <button onClick={handleBackButtonClick} className='gift__back-button'>
        {progress > 0 ? (
          <span className='gift__back-button-text'>Назад</span>
        ) : (
          <span className='gift__back-button-text'>Главное меню</span>
        )}
        <span className='gift__back-button-corner' />
        {progress === 0 ? (
          <span className='gift__back-button-title'>Подарить VPN</span>
        ) : null}
      </button>
      <motion.div
        className='gift__content'
        initial={{ opacity: 0 }}
        animate={isFaded ? 'faded' : 'visible'}
        variants={variants}
      >
        {progress === 0 && (
          <>
            <h1 className='gift__title'>
              Подарить <br />
              VPN друзьям <br />и близким
            </h1>
            <h2 className='gift__subtitle'>
              Подарить — просто:
              <br /> подарок просто нужно
              <br /> будет переслать
              <br /> в Telegram.
            </h2>
            <AppButton
              currentClass='primary orange'
              text='Выбрать подарок'
              handler={handleClick}
            />
            <span className='gift__explanation'>
              Выбрав подарок — вы принимаете условия сервиса.{' '}
            </span>
            <Popup
              title='Подробные условия'
              currentClass='popup-gift'
              isHidden={isGiftPopupHidden}
              handleHide={setIsGiftPopupHidden}
            >
              {
                <div className='popup-gift__text'>
                  <p className='gift__popup-text'>
                    1. Чтобы программа действовала — вам нужно поделиться
                    подарком (ссылкой) с другом, а ему просто перейти по ссылке,
                    и зарегистирироваться будто новый пользователь.{' '}
                  </p>
                  <p className='gift__popup-text'>
                    {' '}
                    2. Оплаченный тариф начинает действовать с момента вашей
                    оплаты его в качестве подарка, а не с момента его активации
                    со стороны пользователя.{' '}
                  </p>
                  <p className='gift__popup-text'>
                    3. Подарок подлежит возврату только в соответствии с общими
                    условиями возврата. С условиями можно ознакомиться в разделе
                    — тарифы, подробные условия. Коротко — только в случае, если
                    нас заблокируют, и robo не сможет предоставить рабочий
                    доступ к сервису в течение суток.{' '}
                  </p>
                  <AppButton
                    text='Понятно'
                    currentClass='secondary white bg-orange border-transparent margin-top'
                    handler={() => setIsGiftPopupHidden(true)}
                  />
                </div>
              }
            </Popup>
          </>
        )}
        {progress === 1 && (
          <>
            <h1 className='gift__title'>
              Выберите
              <br />
              тариф
            </h1>
            <form
              onSubmit={(e) => handleSubmit(e)}
              id='tariff-form'
              className='gift__form'
            >
              <FormLabel
                elementValue='0'
                name='gift'
                handler={(data) => setValue(data)}
                currentClass={`form-label-item-gift ${
                  currentUser.giftDiscount > 0 &&
                  'form-label-item-gift_discounted'
                }`}
                title='Mесяц NOLIMIT'
                text={null}
                valueMain={`${prices.Nolimit_1} ₽`}
                valueSecondary={`${
                  currentUser.giftDiscount > 0
                    ? Math.floor(
                        (prices.Nolimit_1 / 100) * currentUser.giftDiscount
                      ).toString()
                    : prices.Nolimit_1
                } ₽`}
                isDiscounted={currentUser.giftDiscount > 0}
                discountValue={`${currentUser.giftDiscount}%`}
                defaultChecked={true}
              />
              <FormLabel
                elementValue='1'
                name='gift'
                handler={(data) => setValue(data)}
                currentClass={`form-label-item-gift ${
                  currentUser.giftDiscount > 0 &&
                  'form-label-item-gift_discounted'
                }`}
                title='3 месяца NOLIMIT'
                text={null}
                valueMain={`${prices.Nolimit_3}/мес ₽`}
                valueSecondary={`${
                  currentUser.giftDiscount > 0
                    ? Math.floor(
                        (prices.Nolimit_3 / 100) * currentUser.giftDiscount
                      ).toString()
                    : prices.Nolimit_3
                }/мес ₽`}
                isDiscounted={currentUser.giftDiscount > 0}
                discountValue={`${currentUser.giftDiscount}%`}
              />
              <FormLabel
                elementValue='2'
                name='gift'
                handler={(data) => setValue(data)}
                currentClass={`form-label-item-gift ${
                  currentUser.giftDiscount > 0 &&
                  'form-label-item-gift_discounted'
                }`}
                title='12 месяцев NOLIMIT'
                text={null}
                valueMain={`${prices.Nolimit_12}/мес ₽`}
                valueSecondary={`${
                  currentUser.giftDiscount > 0
                    ? Math.floor(
                        (prices.Nolimit_12 / 100) * currentUser.giftDiscount
                      ).toString()
                    : prices.Nolimit_12
                }/мес ₽`}
                isDiscounted={currentUser.giftDiscount > 0}
                discountValue={`${currentUser.giftDiscount}%`}
              />
            </form>
            <motion.button
              whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className='gift__submit-button'
              type='submit'
              form='tariff-form'
              value='submit'
            >
              Далее
            </motion.button>
          </>
        )}
        {progress === 2 && (
          <>
            <h1 className='gift__title'>
              Подарить <br />
              просто
            </h1>
            <h2 className='gift__subtitle'>
              1. Выберите подарок.
              <br />
              2. Оплатите.
              <br />
              3. Перешлите
              <br />
              подарок в Telegram <br />
              от robo.
            </h2>
            <span className='gift__user-selection'>
              {value === '0' && (
                <span className='gift__user-selection-placeholder'>
                  Месяц NO LIMIT
                  <div className='gift__user-selection-placeholder-value'>
                    {currentUser.giftDiscount > 0 ? (
                      <span>
                        {Math.floor(
                          (prices.Nolimit_1 / 100) * currentUser.giftDiscount
                        ).toString()}{' '}
                        ₽
                      </span>
                    ) : (
                      <span>{prices.Nolimit_1} ₽</span>
                    )}
                  </div>
                </span>
              )}
              {value === '1' && (
                <span className='gift__user-selection-placeholder'>
                  3 месяца NO LIMIT
                  <div className='gift__user-selection-placeholder-value'>
                    {currentUser.giftDiscount > 0 ? (
                      <span>
                        {Math.floor(
                          (prices.Nolimit_3 / 100) *
                            currentUser.giftDiscount *
                            3
                        ).toString()}{' '}
                        ₽
                      </span>
                    ) : (
                      <span>{prices.Nolimit_3} ₽</span>
                    )}
                  </div>
                </span>
              )}
              {value === '2' && (
                <span className='gift__user-selection-placeholder'>
                  12 месяцев NOLIMIT
                  <div className='gift__user-selection-placeholder-value'>
                    {currentUser.giftDiscount > 0 ? (
                      <span>
                        {Math.floor(
                          (prices.Nolimit_12 / 100) *
                            currentUser.giftDiscount *
                            12
                        ).toString()}{' '}
                        ₽
                      </span>
                    ) : (
                      <span>{prices.Nolimit_12} ₽</span>
                    )}
                  </div>
                </span>
              )}
            </span>
            <AppButton
              currentClass='primary orange'
              text='Перейти к оплате'
              handler={handlePaymentSubmit}
            />
          </>
        )}
      </motion.div>
    </motion.section>
  );
}

export default Gift;
