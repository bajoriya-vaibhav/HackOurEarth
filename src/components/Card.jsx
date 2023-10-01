import React from 'react'
import styles from '../styles/styles';

const Card = ({project}) => {
  const {title,img,desc} = project;
  return (
    <div className={`bg-transparent m-4`}>
      <img src={`${img}`} className=' border-none rounded-2xl h-1/2 '/>
      <div className={`${styles.textLg} py-2 text-white font-bold`}>{title}</div>
      <div className={`${styles.yPaddings} ${styles.textLg}`}>{desc}</div>
    </div>
  )
}

export default Card
