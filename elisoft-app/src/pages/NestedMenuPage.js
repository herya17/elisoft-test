import React from 'react';
import MenuForm from '../components/MenuForm';
import MenuItem from '../components/MenuItem';

function NestedMenuPage() {
  const [name, setName] = React.useState('');

  const [menuData,  setMenuData] = React.useState([
    {
      id: 1,
      name: 'Home',
      children: [],
    },
    {
      id: 2,
      name: 'Programs',
      children: [
        {
          id: 4,
          name: 'Jiu Jitsu',
          children: [],
        },
        {
          id: 5,
          name: 'Privat Course',
          children: [
            {
              id: 6, name: 'English Club', children: [],
            },
            {
              id: 7, name: 'Indonesia Club', children: [],
            },
          ]
        },
      ],
    },
    {
      id: 3,
      name: 'News',
      children: [],
    },
  ]);

  const onDeleteMenu = (id, menuData) => {
    return menuData.filter((menu) => {
      if (menu.id === id) {
        return false;
      } else if (menu.children && menu.children.length > 0) {
        menu.children = onDeleteMenu(id, menu.children);
        return true;
      } else {
        return true;
      }
    })
  }

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  }

  const onAddMenuHandler = () => {
    if (name.length > 0) {
      setMenuData([...menuData, { id: Date.now(), name, children: [] }]);
      setName('');
    } else {
      window.alert('Nama menu masih kosong!');
    }
  }

  const onCancelAddMenuHandler = () => {
    setName('');
  }

  const onAddChildMenu = (parentId, menuData, name) => {
    return menuData.map((menu) => {
      if (menu.id === parentId) {
        menu.children.push({
          id: Date.now(),
          name,
          children: [],
        });
      } else if (menu.children && menu.children.length > 0) {
        menu.children = onAddChildMenu(parentId, menu.children, name);
      }
      return menu;
    });
  }

  const onDeleteMenuHandler = (id) => {
    const updateMenuData = onDeleteMenu(id, menuData);
    setMenuData(updateMenuData);
  }

  const onAddChildMenuHandler = (parentId, name) => {
    const updateMenuData = onAddChildMenu(parentId, menuData, name);
    setMenuData(updateMenuData);
  }

  return (
    <div className='nested-menu-page'>
      <MenuForm
        name={name} 
        onChangeNameHandler={onChangeNameHandler}
        onAddHandler={onAddMenuHandler}
        onCancelAddHandler={onCancelAddMenuHandler} />
      <ul>
        {
          menuData.map((menu) => (
            <MenuItem
              key={menu.id}
              menu={menu}
              onDelete={onDeleteMenuHandler}
              onAddChild={onAddChildMenuHandler} />
          ))
        }
      </ul>
    </div>
  );
}

export default NestedMenuPage;
