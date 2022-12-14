import React from 'react';
import './MenuButton.css';
import { motion } from 'framer-motion';
import { setDirection } from '../../redux/actions/actions';
import PropTypes from 'prop-types';

function MenuButton({ image, currentClass, title, text, addText, handler }) {
  function handleClick() {
    setDirection(true);
    handler();
  }
  return (
    <motion.button
      whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      onClick={handleClick}
      className={`menu-button  ${currentClass}`}
    >
      <img className='menu-button__icon' src={image} alt='current icon' />
      <h2 className={`menu-button__title ${currentClass}`}>{title}</h2>
      <p className='menu-button__text'>{text}</p>
      {!!addText && <p className='menu-button__additional-text'>{addText}</p>}
    </motion.button>
  );
}
MenuButton.propTypes = {
  image: PropTypes.string.isRequired,
  currentClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  addText: PropTypes.string,
  handler: PropTypes.func.isRequired,
};
export default MenuButton;
