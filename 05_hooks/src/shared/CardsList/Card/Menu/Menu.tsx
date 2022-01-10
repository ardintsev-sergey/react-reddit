import React from 'react';
import { merge } from '../../../../utils/js/merge';
import { EAs, GenericList } from '../../../../utils/react/GenericList';
import { Dropdown } from '../../../Dropdown/Dropdown';
import styles from './menu.css';

const MenuBtn = () => {
  return (
    <button className={styles.menuBtn}>
      <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
        <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
        <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
      </svg>
    </button>    
)
}

let menuList = [
  { text: 'Комментарии',
    id: '1',
    className: styles.dropDownItem,   
    As: EAs.li,
  },

  { text: 'Скрыть',
    id: '2',
    className: styles.dropDownItem,    
    // onClick: null,
    As: EAs.div,
  },
  { text: 'Поделиться',
    id: '3', 
    className: styles.dropDownItem,   
    As: EAs.a,
  },
  { text: 'Сохранить',
    id: '4',
    className: styles.dropDownItem,    
    As: EAs.li,
  },
  { text: 'Пожаловаться',
    id: '5',
    className: styles.dropDownItem,   
    As: EAs.button,
  },
]

export function Menu() {
  const [list, setList] = React.useState(menuList)
  const handleItemClick = (id: string) => {
  setList(list.filter((item) => item.id != id))
}
  return (
    <div className={styles.menu}>
      <Dropdown
        button = { <MenuBtn />}
        children = {<GenericList list={menuList.map(merge({onClick: handleItemClick }))} />}
      ></Dropdown>
    </div>
  );
}