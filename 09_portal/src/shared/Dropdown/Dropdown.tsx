import React from 'react';
import styles from './dropdown.css'
import ReactDOM from 'react-dom'
import { EAs, GenericList } from '../../utils/react/GenericList';
import { EColor, Text } from '../Text/Text';
import { merge } from '../../utils/js/merge';
import { IconsName } from '../Icons/Icon';

interface IDropdownProps {
  button?: React.ReactNode;
  children?: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

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

export function Dropdown({ isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect( ()=> setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect( () => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const [list, setList] = React.useState(menuList)
  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id != id))
  }

  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.container}>
      {/* <div onClick={handleOpen}>
        { button }
      </div> */}
      {/* {isDropdownOpen && ( */}
      <div className={styles.listContainer}>
        <ul className={styles.list}
          // onClick={() => setIsDropdownOpen(false)}
        >
           <div className={styles.dropdown}>
           <GenericList list={menuList.map(merge({onClick: handleItemClick }))}/>
           <button className={styles.closeBtn}>
          <Text mobileSize={12} size={14} color={EColor.grey66}>
             Закрыть
           </Text>
         </button>
         </div>
        </ul>
      </div>
      {/* )} */}
    </div>
  ), node);
}
