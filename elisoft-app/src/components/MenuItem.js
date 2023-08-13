import React from 'react';
import PropTypes from 'prop-types';
import MenuForm from '../components/MenuForm';
import { MdAddCircle, MdDeleteOutline } from 'react-icons/md';

function MenuItem({ menu, onDelete, onAddChild }) {
  const [name, setName] = React.useState('');
  const [addMode, setAddMode] = React.useState(false);

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  }

  const onDeleteHandler = () => {
    onDelete(menu.id);
  }

  const onAddChildInputHandler = () => {
    setAddMode(true);
    setName('');
  }

  const onCancelAddChildHandler = () => {
    setAddMode(false);
  }

  const onAddChildHandler = () => {
    if (name.length > 0) {
      onAddChild(menu.id, name);
      setAddMode(false);
    } else {
      window.alert('Nama menu masih kosong!');
    }
  }

  return (
    <li>
      {
        addMode ? (
          <MenuForm 
            name={name} 
            onChangeNameHandler={onChangeNameHandler} 
            onAddHandler={onAddChildHandler} 
            onCancelAddHandler={onCancelAddChildHandler} />
        ) : (
          <div>
            <button onClick={onAddChildInputHandler}><MdAddCircle /></button>
            <button onClick={onDeleteHandler}><MdDeleteOutline /></button>
            <span>{menu.name}</span>
            {menu.children && menu.children.length > 0 && (
              <ul>
                {
                  menu.children.map((child) => (
                    <MenuItem
                      key={child.id}
                      menu={child}
                      onDelete={onDelete}
                      onAddChild={onAddChild} />
                  ))
                }
              </ul>
            )}
          </div>
        )
      }
    </li>
  );
}

MenuItem.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onAddChild: PropTypes.func.isRequired,
}

export default MenuItem;
