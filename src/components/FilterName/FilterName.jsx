import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from 'redux/contacts';
import css from './FilterName.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
    const filterValue = useSelector(selectors.getFilter);
    const dispatch = useDispatch();
    const changeFilter = (event) => dispatch(actions.filter(event.currentTarget.value));

       return (
         <label className={css.filter_label}>
          Find contacts by name 
            <input type="text"
                name="filter"
                value={filterValue}
                onChange={changeFilter}
                className={css.input}
            />
        </label>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Filter;