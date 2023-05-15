import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props.contacts;

    return (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
