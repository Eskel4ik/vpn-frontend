import React from 'react';
import './Support.css';
import AppButton from '../AppButton/AppButton';
import BackButton from '../BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function Support() {
  const navigate = useNavigate();
  return (
    <section className='support'>
      <BackButton
        text='Мой VPN'
        path='/my-vpn'
        currentClass='back-button-traffic'
      />
      <p className='support__text'>
        Напишите все вопросы — мы ответим в течение суток (как правило в течение
        часа). Как только вам поступит обстоятельный ответ — robo оповестит вас
        прямо в телеграм.{' '}
      </p>
      <p className='support__text'>
        Возможно, вам поможет раздел{' '}
        <span onClick={() => navigate('/faq')} className='support__link'>
          FAQ
        </span>
        .
      </p>
      <AppButton
        text='Саппорт чат'
        currentClass='app-button-support'
        handler={() => (window.location.href = 'https://t.me/b0ringclub')}
      />
    </section>
  );
}

export default Support;
