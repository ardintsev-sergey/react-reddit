import React from 'react';
import { merge } from '../../../../utils/js/merge';
import { EAs, GenericList } from '../../../../utils/react/GenericList';
import { Dropdown } from '../../../Dropdown/Dropdown';
import { IconsName } from '../../../Icons/Icon';
import { MenuIcon } from '../../../Icons/MenuIcon';
import { EColor, Text } from '../../../Text/Text';
import styles from './menu.css';
import { MenuItemsList } from './MenuItemsList/MenuItemsList';

let menuList = [
  { text: 'Комментарии',
    id: '1',
    className: styles.dropDownItem,   
    As: EAs.li,
    type: IconsName.comment,
  },

  { text: 'Скрыть',
    id: '2',
    className: styles.dropDownItem,    
    // onClick: null,
    As: EAs.li,
    type: IconsName.block,
  },
  { text: 'Поделиться',
    id: '3', 
    className: styles.dropDownItem,   
    As: EAs.li,
    type: IconsName.share,
  },
  { text: 'Сохранить',
    id: '4',
    className: styles.dropDownItem,    
    As: EAs.li,
    type: IconsName.save,
  },
  { text: 'Пожаловаться',
    id: '5',
    className: styles.dropDownItem,   
    As: EAs.li,
    type: IconsName.report,
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
        button = { 
        <button className={styles.menuBtn}>
          <MenuIcon />
        </button> }
        children = {<div className={styles.dropdown}>
          <GenericList list={menuList.map(merge({onClick: handleItemClick }))}/>
          <button className={styles.closeBtn}>
          <Text mobileSize={12} size={14} color={EColor.grey66}>
            Закрыть
          </Text>
        </button>
        </div>
        
      }
      />      
        {/* <div className={styles.dropdown}>
          <MenuItemsList postId='123'/>
          <button className={styles.closeBtn}>
            <Text mobileSize={12} size={14} color={EColor.grey66}>
              Закрыть
            </Text>
          </button>
        </div> */}
      {/* </Dropdown> */}
    </div>
  );
}