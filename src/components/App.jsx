import PropTypes from 'prop-types';
import Form from './Form';
import ListUpdate from './ListUpdate';
import Filter from './FilterName';

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
