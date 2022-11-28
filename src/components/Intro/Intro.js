import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom';
import introImg from '../../images/intro_smile_0.svg';
import sector1 from '../../images/sector1.svg';
import sector2 from '../../images/sector2.svg';
import sector3 from '../../images/sector3.svg';
import sector4 from '../../images/sector4.svg';
import AppButton from '../AppButton/AppButton';
import { useSwipeable } from 'react-swipeable';

function Intro() {
  const [progress, setProgress] = React.useState(0);
  const [isFaded, setIsFaded] = React.useState(false);
  const [isMoved, setIsMoved] = React.useState(false);

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });
  const progressBarItems = [...Array(5).keys()];

  React.useEffect(() => {
    isFaded && setTimeout(setIsFaded, 400, false);
    isMoved && setTimeout(setIsMoved, 600, false);
    progress > 4 && setProgress(4);
  }, [isFaded, isMoved, progress]);
  function handleSkip() {
    setIsMoved(true);
    setTimeout(navigate, 500, '/instruction');
  }
  function handleButtonClick() {
    if (progress >= 4) {
      setIsMoved(true);
      setTimeout(navigate, 500, '/instruction');
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }
  function handleSwipeRight() {
    if (progress === 0) {
      return;
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => --state);
    }
  }
  function handleSwipeLeft() {
    if (progress > 3) {
      return;
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }

  return (
    <section {...handlers} className={`intro ${isMoved && 'moved'}`}>
      <div className='intro__image-container'>
        <img className='intro__image' src={introImg} alt='happy face' />
        <img
          className={`intro__image-sector ${progress === 1 && 'active'}`}
          src={sector1}
          alt='sector'
        />
        <img
          className={`intro__image-sector ${progress === 2 && 'active'}`}
          src={sector2}
          alt='sector'
        />
        <img
          className={`intro__image-sector ${progress === 3 && 'active'}`}
          src={sector3}
          alt='sector'
        />
        <img
          className={`intro__image-sector ${progress === 4 && 'active'}`}
          src={sector4}
          alt='sector'
        />
      </div>
      <div className={`intro__text-container ${isFaded && 'faded'}`}>
        {(progress === 0 && (
          <>
            <h1 className='intro__title'>
              Одна установка — <br />
              <span className='intro__title_colored'>
                {' '}
                про VPN можно забыть
              </span>
            </h1>
            <p className='intro__text'>
              Можно забыть о выключении и включении VPN по 10 раз на дню.
              Instagram, Netflix и YouTube. Авито, Сбер и Госуслуги. Robo
              работает везде — и на рф, и на зарубежных сайтах, вне зависимости
              от того где вы находитесь.
            </p>
          </>
        )) ||
          (progress === 1 && (
            <>
              <h1 className='intro__title'>
                Безопасность <br />
                от
                <span className='intro__title_colored'> Google</span>
              </h1>
              <p className='intro__text'>
                Мы не устанавливаем ничего своего вам на телефон. А предлагаем
                один раз установить надежное приложение от Jigsaw (Google) —
                Outline.
              </p>
            </>
          )) ||
          (progress === 2 && (
            <>
              <h1 className='intro__title'>
                Вcтроенное <br />
                приложение <br />
                <span className='intro__title_colored'> прямо в Telegram</span>
              </h1>
              <p className='intro__text'>
                Не нужно искать приложения и что-то настраивать. Встроенное
                приложение в телеграмм всегда под рукой, а алгоритмы robo
                сообщат о важном прямо в чате.
              </p>
            </>
          )) ||
          (progress === 3 && (
            <>
              <h1 className='intro__title'>
                100% гарантия <br />
                <span className='intro__title_colored'> возврата </span> всегда
              </h1>
              <p className='intro__text'>
                А не первые 7 или 30 дней как у ... но, вероятно, возврат не
                потребуется. Наши технологии не заблокировали даже в Китае. А мы
                пошли еще дальше.
              </p>
            </>
          )) ||
          (progress === 4 && (
            <>
              <h1 className='intro__title'>
                Бесплатно <br />
                <span className='intro__title_colored'> каждый месяц</span>
              </h1>
              <p className='intro__text'>
                До 10 Гб каждый месяц всем пользователям. Без ограничений. Если
                не хватит — тарифы доступны от 69 рублей.
              </p>
            </>
          ))}
      </div>
      <div className='intro__progress'>
        {progressBarItems.map((el) => (
          <span
            key={el}
            className={`intro__progress-item ${progress >= el && 'active'}`}
          ></span>
        ))}
      </div>
      <AppButton
        text='Далее'
        currentClass='border-blue secondary blue'
        handler={handleButtonClick}
      />
      <AppButton
        currentClass='primary white bg-blue margin-top'
        text='Установить VPN'
        handler={handleSkip}
      />
    </section>
  );
}

export default Intro;
