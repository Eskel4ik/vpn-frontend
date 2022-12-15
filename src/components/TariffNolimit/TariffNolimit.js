import React from 'react';
import './TariffNolimit.css';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import FormLabel from '../FormLabel/FormLabel';
import { useSelector } from 'react-redux';
import { parseTimestamp } from '../../utils/helpers';
import PropTypes from 'prop-types';

function TariffNolimit({ handler, error, value, setValue, setIsHidden }) {
  const currentUser = useSelector((state) => state.currentUser);
  const prices = useSelector((state) => state.prices);

  function addMonths(date, count) {
    let newDate = new Date(date);
    return newDate.setMonth(newDate.getMonth() + count);
  }
  const getProfitValue = (main, secondary, count) =>
    main * count - secondary * count;

  return (
    <TariffesTemplate
      currentClass='nolimit'
      buttonText='Оплата'
      handler={handler}
      error={error}
      setIsHidden={setIsHidden}
    >
      <div className='tariffes__content-nolimit'>
        <FormLabel
          elementValue={prices.Nolimit_1}
          name='package'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-nolimit'
          title='Месяц'
          text={
            value === '' + prices.Nolimit_1
              ? `Забудь про ограничения до ${parseTimestamp(
                  addMonths(currentUser.endDate, 1)
                )}`
              : null
          }
          valueMain={`${prices.Nolimit_1} ₽/мес`}
          isDiscounted={false}
        />
        <FormLabel
          elementValue={prices.Nolimit_3}
          name='package'
          handler={(data) => setValue((data * 3).toString())}
          currentClass='tariff-item-nolimit'
          title='3 месяца'
          text={
            value === '' + prices.Nolimit_3 * 3
              ? `Забудь про ограничения до ${parseTimestamp(
                  addMonths(currentUser.endDate, 3)
                )}`
              : null
          }
          valueMain={`${prices.Nolimit_3} ₽/мес`}
          valueSecondary={
            value === '' + prices.Nolimit_3 * 3
              ? `${prices.Nolimit_3 * 3}₽ всего`
              : null
          }
          isDiscounted={true}
          discountValue={
            value === '' + prices.Nolimit_3 * 3
              ? `Выгода ${getProfitValue(
                  prices.Nolimit_1,
                  prices.Nolimit_3,
                  3
                )}₽`
              : null
          }
        />
        <FormLabel
          elementValue={prices.Nolimit_12}
          name='package'
          handler={(data) => setValue((data * 12).toString())}
          currentClass='tariff-item-nolimit'
          title='12 месяцев'
          text={
            value === '' + prices.Nolimit_12 * 12
              ? 'Год матрицы без ограничений, Нео'
              : null
          }
          valueMain={`${prices.Nolimit_12} ₽/мес`}
          valueSecondary={
            value === '' + prices.Nolimit_12 * 12
              ? `${prices.Nolimit_12 * 12}₽ всего`
              : null
          }
          isDiscounted={true}
          discountValue={
            value === '' + prices.Nolimit_12 * 12
              ? `Выгода ${getProfitValue(
                  prices.Nolimit_1,
                  prices.Nolimit_12,
                  12
                )}₽`
              : null
          }
        />
      </div>
    </TariffesTemplate>
  );
}
TariffNolimit.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handler: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  setIsHidden: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TariffNolimit;