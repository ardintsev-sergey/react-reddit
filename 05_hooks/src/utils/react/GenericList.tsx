import React from 'react'

interface IItem {
  text: string;
  id: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
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
      {list.map(({ As = "li", text, onClick, className, id, href }) => (
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