import React from 'react'
// import styles from './ImageItem.module.css'

const ImageItem = ({src, alt}) => {
  return (
    <img src={src} alt={alt}/>
  );
};

export default ImageItem;