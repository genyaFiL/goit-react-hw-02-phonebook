import { Component } from 'react';

const Filter = ({ value, onChange }) => {
  // render() {

  return (
    <div>
      <label htmlFor="inputFind">Find contacts by name</label>
      <input
        type="text"
        name="name"
        id="inputFind"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
// }

// class Filter extends Component {
//   render() {
//     // const { contacts } = this.props.contacts;

//     return (
//       <div>
//         <label htmlFor="inputFind">Find contacts by name</label>
//         <input
//           type="text"
//           name="name"
//           id="inputName"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           // onChange={this.handleChange}
//           // value={this.state.name}
//         />
//       </div>

//     );
//   }
// }
export default Filter;
