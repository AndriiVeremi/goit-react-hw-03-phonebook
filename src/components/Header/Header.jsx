import React from 'react';
import PropTypes from 'prop-types';
import css from './Header.module.css'

const Header = ({ title }) => {
  return <p className={css.title}>{title}</p>;
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};


