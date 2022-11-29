import React from 'react';
import './MessageUs.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';

function MessageUs() {
  const navigate = useNavigate();
  return (
    <section className='message-us'>
      <BackButton
        path='/help'
        text='Мне не понятно'
        currentClass='white'
        title='Напишите нам'
      />
      <p className='message-us__text_main'>
        Персональная поддержка доступна только на тарифе NOLIMIT. Однако мы рады
        любому конструктивному фидбеку или предложению.
      </p>
      <p className='message-us__text_secondary'>
        Вы всегда можете написать нам на почту{' '}
        <a className='message-us__link' href='mailto:care@getrobovpn.com'>
          care@getrobovpn.com.
        </a>
      </p>
      <AppButton
        text='Все тарифы'
        handler={() => navigate('/tariffes')}
        currentClass='orange primary'
      />
    </section>
  );
}

export default MessageUs;
