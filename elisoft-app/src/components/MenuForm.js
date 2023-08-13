import React from "react";
import { MdClose, MdCheck, } from 'react-icons/md';
import PropTypes from 'prop-types';

function MenuForm({ name, onChangeNameHandler, onAddHandler, onCancelAddHandler }) {
  return (
    <div className='nested-menu-page__input'>
      <input
        type='text'
        value={name}
        placeholder='Nama Menu'
        onChange={onChangeNameHandler}
        required />
      <button onClick={onAddHandler}><MdCheck /></button>
      <button onClick={onCancelAddHandler}><MdClose /></button>
    </div>
  );
};

MenuForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeNameHandler: PropTypes.func.isRequired,
  onAddHndler: PropTypes.func.isRequired,
  onCancelAddHandler: PropTypes.func.isRequired,
}

export default MenuForm;
