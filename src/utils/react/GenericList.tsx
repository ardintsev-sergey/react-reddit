import React from 'react'
import Icon, { IconsName } from '../../shared/Icons/Icon';
import { EColor, Text } from '../../shared/Text/Text';
import styles from './../../shared/CardsList/Card/Menu/MenuItemsList/menuItemsList.css'


export enum EAs {
  a = 'a',
  li = 'li',
  button = 'button',
  div = 'div',
}
interface IItem {
  text: string;
  id: string;
  onClick: (id: string) => void;
  className?: string;
  As?: EAs;
  href?: string;
  type?: IconsName;
}

interface IGenericListProps {
  list: IItem[];
};

// export function MyList({ list }: IMyListProps) {
//   return (
//     <ul>
//       {list.map((item: IItem) => (
//         <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//       ))}
//     </ul>
//   )
// }

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = EAs.li, text, onClick, className, id, href, type }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
            <Icon type={type} />
            <Text mobileSize={12} size={14} color={EColor.grey66}>{text}</Text>
          <div className={styles.divider}/>
        </As>
      ))}
    </>
  );
}
