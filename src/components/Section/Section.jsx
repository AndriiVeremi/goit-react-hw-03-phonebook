import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css'


import Header from 'components/Header/Header';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <Header title={title} />
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};