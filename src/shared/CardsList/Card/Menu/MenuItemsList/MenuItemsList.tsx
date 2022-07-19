import React from 'react';
import BlockIcon from '../../../../Icons/BlockIcon';
import styles from './menuItemsList.css';
import ReportIcon from '../../../../Icons/ReportIcon';
import { EColor, Text } from '../../../../Text/Text';
;

interface IMenuItemsListProps {
    postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <BlockIcon />
                <Text size={12} color={EColor.grey99}>Скрыть</Text>
            </li>

            <div className={styles.divider}/>
            <li className={styles.menuItem}>
                <ReportIcon />
                <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
            </li>
        </ul>
    )
}
