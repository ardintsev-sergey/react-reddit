import React, { Children, useEffect, useRef, useState } from 'react';
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

interface IMenuProps {
  postId: string;
}


export function Menu({ postId }: IMenuProps) {

  const ref = useRef<HTMLDivElement>(null);

  // const rect = ref.current?.getBoundingClientRect();
  const rect = document.body.getBoundingClientRect();
  // function btnCoord = (e: MouseEvent) => {
  //   const btn = e.target.getBoundingClientRect();
  // }

  console.log(rect)
  console.log(rect.top, rect.left)

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <div className={styles.menu}>
      <button className={styles.menuBtn} onClick={() => { setIsDropdownOpened(true); } }>
          <MenuIcon />
      </button>

      {isDropdownOpened && (
        <Dropdown
        onClose={() => {setIsDropdownOpened(false)}}
        className={styles.dropdown}
        style={{
          top: Math.round(rect ? rect.top + rect?.height : 0),
          // top: Math.round(rect ? rect.top : 0),
          left: Math.round(rect ? rect.left + rect?.width/2 : 0),
          // left: Math.round(rect ? rect.left  : 0),
        }}/>
      )}

    </div>

    /* <Dropdown
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
      />  */
  );
}
