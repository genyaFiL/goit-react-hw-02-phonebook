import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { onDeleteContacts } = this.props;
    // console.log('ContactList=', this.props.contacts);

    return (
      <ul>
        {this.props.contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => onDeleteContacts(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
