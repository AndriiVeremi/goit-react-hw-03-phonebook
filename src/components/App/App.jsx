import React, { Component } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addToList = (name, number) => {
    const nameId = nanoid();
    const { contacts } = this.state;
    const newContact = {
      id: nameId,
      name,
      number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContacts = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== userId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addToList} />
          <Header title="Contacts" />
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContacts={this.deleteContacts}
          />
        </Section>
      </div>
    );
  }
}

export default App;
