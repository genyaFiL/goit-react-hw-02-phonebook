import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactListStyles.module.css';

class ContactList extends Component {
  render() {
    const { onDeleteContacts } = this.props;

    return (
      <ul>
        {this.props.contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onDeleteContacts(id)}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.func.isRequired,
};
export default ContactList;
