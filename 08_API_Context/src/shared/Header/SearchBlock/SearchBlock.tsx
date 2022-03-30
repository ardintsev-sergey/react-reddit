import React, { useContext } from 'react';
import styles from './searchBlock.css'
import { UserBlock } from './UserBlock/UserBlock';
import { useUserData } from '../../../hooks/useUserData';
import { userContext } from '../../context/userContext';

export function SearchBlock() {
  const { iconImg, name } = useContext(userContext)
  
  return (
   <div className={styles.searchBlock}>
     <UserBlock avatarSrc={iconImg} username={name}/>
   </div>
  );
}