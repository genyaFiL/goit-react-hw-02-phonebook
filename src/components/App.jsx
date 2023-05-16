import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { nanoid } from 'nanoid';

// import user from '../data/user';
// import data from '../data/data';
// import friends from '../data/friends';
// import transactions from '../data/transactions';

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

  createContacts = data => {
    // console.log('data=>', data);
    const newContact = {
      ...data,
      id: nanoid(),
    };
    // console.log('newContact=>', newContact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    console.log('this.state = ', this.state);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getfilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    console.log(this.state.contacts);
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = this.getfilteredContacts;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createContacts={this.createContacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts()} />
      </div>
    );
  }
}
export default App;
