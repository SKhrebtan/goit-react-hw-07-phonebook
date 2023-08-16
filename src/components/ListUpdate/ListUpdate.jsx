import css from './ListUpdate.module.css';
import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { remove } from '../../redux/myContactsSlice/myContactsSlice';
// import { getContacts } from '../../redux/myContactsSlice/myContactsSlice';
import { getFilter } from '../../redux/myFilterSlice/myFilterSlice';
import PropTypes from 'prop-types';
import { fetchContactsThunk, deleteContactThunk } from 'redux/AsyncThunk/AsyncThunk';

const ListUpdate = () => {

    const dispatch = useDispatch();
 const { items, isLoading, error } = useSelector(state => state.contacts);
       useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch, items]);

    
    //   const contacts = useSelector(getContacts);
      const filter = useSelector(getFilter)
   
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
                            onClick={() => dispatch(deleteContactThunk(id))}
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