import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom';
import { sendPage } from '../../utils/roboApi';
import introImg from '../../images/intro_smile_0.svg';
import sector1 from '../../images/sector1.svg';
import sector2 from '../../images/sector2.svg';
import sector3 from '../../images/sector3.svg';
import sector4 from '../../images/sector4.svg';
import AppButton from '../AppButton/AppButton';

function Intro() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();
  const progressBarItems = [...Array(5).keys()];
  function handleButtonClick() {
    progress >= 4 ? navigate('/') : setProgress((state) => ++state);
  }

  function sendCurrentPage(page) {
    sendPage(page)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <section className='intro'>
      <div className='intro__progress'>
        {progressBarItems.map((el) => (
          <span
            key={el}
            className={`intro__progress-item ${progress >= el && 'active'}`}
          ></span>
        ))}
      </div>
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
      <div className='intro__text-container'>
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
              работает везде — и на рф, и на зарубежных сайтах.
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
                придумали даже кое-что еще.
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
                10 Гб каждый месяц всем пользователям. Без ограничений. Если не
                хватит — тарифы доступны от 69 рублей.
              </p>
            </>
          ))}
      </div>
      <AppButton
        text='Далее'
        currentClass='app-button-intro-primary'
        handler={handleButtonClick}
      />
      <AppButton
        currentClass='app-button-intro-secondary'
        text='Попробовать VPN'
        handler={null}
      />
    </section>
  );
}

export default Intro;