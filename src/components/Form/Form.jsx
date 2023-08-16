import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, API } from 'redux/contacts';
import { nanoid } from 'nanoid';
import css from './Form.module.css'
import PropTypes from 'prop-types';


function Form() {
  const dispatch = useDispatch();
  const {items} = useSelector(selectors.getContacts)
   const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
    const nameFormId = nanoid();
    const numberFormId = nanoid();

    const handleInput = event => {
      const { name, value } = event.currentTarget;
      switch (name) {
        case 'name': setName(value);
          break;
        case 'number': setNumber(value);
          break;
        default:
          console.log('щось пішло не так')
          
      }
    }

    const handleSubmit = event => {
      event.preventDefault();
            const newContact = {
      name,
      number,
      id: nanoid(),
      }
  if (items.find(contact => contact.name.includes(newContact.name))) {
        return alert('ay, такий контакт вже існує')
      }
      dispatch(API.addContactThunk(newContact))
        
          reset();
    }
    
    const reset = () => {
      setName('');
      setNumber('');
    }   

    return (
      <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={nameFormId} className={css.label}>
        Name
      <input
      type="text"
       name="name"
      value={name}
     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.input}
        id={nameFormId}
        onChange={handleInput}
/>
      </label>
      <label htmlFor={numberFormId} className={css.label}>
        Number
        <input
        type="tel"
         name="number"
         value={number}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.input}
              id={numberFormId}
          onChange={handleInput}
/>
      </label>
        <button type="submit" className={css.btn}>Add contact</button>
               </form>)
    }


Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}

export default Form;