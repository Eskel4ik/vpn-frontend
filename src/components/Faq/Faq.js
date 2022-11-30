import React from 'react';
import DataItem from '../DataItem/DataItem';
import DataList from '../DataList/DataList';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import './Faq.css';
import BackButton from '../BackButton/BackButton';
import { motion } from 'framer-motion';

function Faq() {
  const navigate = useNavigate();
  return (
    <motion.section
      className='faq'
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.6 } }}
      exit={{ x: '100vw', opacity: 0, transition: { duration: 0.3 } }}
    >
      <BackButton
        text='Назад'
        path={-1}
        currentClass='white narrow'
        title='FAQ'
      />
      <DataList currentClass='data-list-faq'>
        <DataItem title='А вы кто?'>
          <p className='data-item__text'>
            Мы команда it специалистов с <b>опытом более 30 лет работы</b> в
            индустрии (сбер, skyeng и др.). До 2022 года мы занимались разными
            проектами в топовых it компаниях. Но недавно поняли, что стоит
            делать что-то важное. В чем одноврменно есть большая потребность И в
            чем мы сильны. Потребность — свобода, а сила — в it. В целях
            безопасности близких, мы пока не готовы раскрывать информацию об
            основателях проекта. С точки зрения — пользоваться нами или нет, это
            мало важная информация, потому что мы безопасно. Почему? Следующий
            пункт.
          </p>
        </DataItem>
        <DataItem title='Почему вами безопасно пользоваться?'>
          <p className='data-item__text'>
            <b>Мы не устанавливаем ничего своего вам на телефон</b> или любое
            устройство. А предлагаем один раз установить надежное приложение от
            jigsaw <b>(google) — outline</b>. Данные в outline зашифрованы так,
            что всем массонам мира вас не взломать (не то что... wi-fi в
            starbucks). Коммуникация с нами остается на уровне телеграм. Мы
            знаем лишь только те данные, которые есть у всех...сотовых
            операторов, сайтов и даже no-logs vpn. IP, размер гб и тип
            устройства — без них не возможно подключение к интернету.
          </p>
        </DataItem>
        <DataItem title='Почему вас не заблокируют?'>
          <p className='data-item__text'>
            Для этого мы используем лучшие мировые технологии, адаптированные
            под robo. <b>Протокол shadowsocks</b>, который не смогли
            заблокировать даже в Китае. <b>Так же свои разработки</b> —
            например, децентрализация users на подсети, разные ip/domains. Ну, и
            вишенка на торте (которую мы не встречали на рынке) —{' '}
            <b>мы даем 100% гарантию на возврат</b> в любой момент времени (а не
            первые 7 или 30 дней как у большинства), если не сможем предоставить
            вам доступ к сервису в случае блокировки (блокировать пытаться могут
            всех).
          </p>
        </DataItem>
        <DataItem title='Как именно работает возврат средств?'>
          <p className='data-item__text'>
            Мы гарантируем 100% возврат только в случае если нас заблокирует ркн
            и мы не сможем вам предоставить доступ к впн в течение суток. В этом
            случае, robo сам напишет вам в телеграм и скажет что нажать (прямо
            из тг), чтобы все сделать.
            <br />
            Если у вас есть вопросы по возврату, то можете написать нам на почту{' '}
            <a className='data-item__link' href='mailto:care@getrobovpn.com'>
              care@getrobovpn.com
            </a>
            . В теле письма, пож-ста, укажите ваш ID в тг, а в названии напишите
            слово возврат. Ну и вопрос, не забудьте :) Возврат может быть не
            произведен в двух случаях, Подробнее про условия возврата в разделе
            — тарифы.
          </p>
        </DataItem>
        <DataItem title='Могу ли я из-за рубежа... зайти на рф сайты?'>
          <p className='data-item__text'>
            Да, можете. Алгоритимы функции <b>умный впн</b> — позволяют вне
            зависимости от вашего расположения со свлюченным впн заходить
            одноврменно и на рф, и не на рф сайты. Instagram, netflix и youtube.
            авито, сбер и госуслуги. Можно забыть о выключении и включении vpn
            по 10 раз за день.
          </p>
        </DataItem>
        <DataItem title='Чем вы отличаетесь от других сервисов vpn?'>
          <p className='data-item__text'>
            Отличий много, но основных 5. Про них мы написали в разделе — мне не
            понятно, возможности (
            <span
              onClick={() => navigate('/possibilities')}
              className='data-item__link'
            >
              линк
            </span>
            ).
          </p>
        </DataItem>
        <DataItem title='Сколько одновременно и какие устройства доступны?'>
          <p className='data-item__text'>
            <b>Сколько угодно</b>, а среди устройств —{' '}
            <b>IOS, Android, Mac, Windows, Linux и Google Chrome</b>, все их
            можно скачать на сайте outline. Единственное ограничение:
            <b>1 пользователь = 1 доступ</b>. Если условие будет нарушено, и вы
            поделитесь ссылкой с кем-то, то для нас это фрод — мы оставляем за
            собой права заблокировать доступ без возврата средств с детализацией
            ситуации вам в директ или с возвратом, без объяснения причин.
          </p>
        </DataItem>
        <DataItem title='Я могу делиться с кем-то своей ссылкой в outline?'>
          <p className='data-item__text'>
            <b>Увы, нет</b>. Для нас это нарушение правил, поскольку так будет
            не честно, ведь вы заплатили за одного пользователя, а в итоге
            потбреляют наши услуги двое или больше.
            <b>
              Если вам хочется дать доступ близким, вы можете просто поделиться
              сервисом robo через реферальную программу или кому-то подарить
              впн, через раздел — подарок.
            </b>
            За нарушение правила — оно для нас критическое. Мы оставляем за
            собой право вернуть вам деньги без объяснения причин, и больше не
            давать доступ к сервису. Или не возвращать деньги совсем, объяснив
            причины.
          </p>
        </DataItem>
        <DataItem title='Как с вами связаться?'>
          <p className='data-item__text'>
            Пока мы в процессе разработки автоматизированной партнерской
            программы. но в целом готовы уже сейчас договариваться. если вы
            блоггер или сообщество и разделяете наши ценности —{' '}
            <a className='data-item__link' href='mailto:collab@getrobovpn.com'>
              collab@getrobovpn.com
            </a>
            <br />В целом, так как мы data driven проект — мы видим, что
            работает, а что — нет. Тем не менее, так как недавно запустились,
            будем рады любому конструктуривному фидбэку или предложению —
            <a className='data-item__link' href='mailto:care@getrobovpn.com'>
              care@getrobovpn.com
            </a>
            , по вопросам поддержки — нужно обращаться в чат.
          </p>
        </DataItem>
      </DataList>
      <div className='faq__button-box'>
        <AppButton
          text='Главное меню'
          currentClass='secondary margin-bottom white'
          handler={() => navigate('/')}
        />
        <AppButton
          text='Выбрать тариф'
          currentClass='primary violet'
          handler={() => navigate('/tariffes')}
        />
      </div>
    </motion.section>
  );
}

export default Faq;
