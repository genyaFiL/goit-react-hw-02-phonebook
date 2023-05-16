import { Component } from 'react';

class ContactList extends Component {
  render() {
    // console.log('ContactList=', this.props.contacts);
    // const { contacts } = this.props.contacts;

    return (
      <ul>
        {this.props.contacts.map(({ name, number, id }) => (
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
