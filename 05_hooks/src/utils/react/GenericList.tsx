import React from 'react'
import Icon, { IconsName } from '../../shared/Dropdown/Icons/Icon';


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
  type: IconsName;
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
        <Icon type={type} />
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}