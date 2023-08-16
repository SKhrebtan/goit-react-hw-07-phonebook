import PropTypes from 'prop-types';
import Form from './Form';

import ListUpdate from './ListUpdate/ListUpdate';
import Filter from './FilterName/FilterName';


function App() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>
        <ListUpdate />
      </div>
    )       
               };

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array
}

export default App;

  // <h1>Phonebook</h1>
  //       <Form onSubmit={addUser} />
  //       <h2>Contacts</h2>
  //       <Filter onChange={changeFilter} value={filter} />
  //       <ListUpdate options={filteredContacts} onDeleteContacts={deleteContact} />