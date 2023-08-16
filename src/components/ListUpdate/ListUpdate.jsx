import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors, API } from 'redux/contacts';
import css from './ListUpdate.module.css';
import PropTypes from 'prop-types';

const ListUpdate = () => {

    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(selectors.getContacts);
       useEffect(() => {
        dispatch(API.fetchContactsThunk());
    }, [dispatch]);
  
      const filter = useSelector(selectors.getFilter)
      const normalizedFilter = filter.toLowerCase();
  
         const filteredContacts = useMemo(() => {
         if (items.length > 0) 
          return items.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter))
          },[normalizedFilter, items])
   
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            <ul className={css.list}>
            {filteredContacts && filteredContacts.length > 0 && filteredContacts.map(({ name, number, id }) => {
                return (
                    <li key={id} className={css.item}>
                        <p className={css.text}>
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                            onClick={() => dispatch(API.deleteContactThunk(id))}
                            className={css.listBtn}                            >
                            Delete</button>
                    </li>
                )
            })}
            </ul>
            {error && <h1>Somethin went WRONG</h1>}
        </div>

       
    )
};

ListUpdate.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    id: PropTypes.string
}

export default ListUpdate;