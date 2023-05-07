import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiTwotonePhone,
} from 'react-icons/ai';

import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <form
        className={css.form}
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <label className={css.label} htmlFor={this.nameId}>
          <AiOutlineUser className={css.name_icon} />
          Name :{' '}
          <input
            className={css.form__input}
            id={this.nameId}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label} htmlFor={this.numberId}>
          <AiTwotonePhone className={css.name_icon} />
          Number : 
          <input
            className={css.form__input}
            id={this.numberId}
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btn} type="submit">
          <AiOutlineUserAdd className={css.btn__icon} />
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
