import React from 'react'
import ImageItem from './ImageItem'
import  styles from'./ImageGallery.module.css'

const ImageGallery = ({images}) => {
  return (
    <div className={styles["image-gallery"]}>{images.map((image)=>(
        <ImageItem 
        key={image.id} 
        src={image.urls.regular} 
        alt={image.alt_description}></ImageItem>
    ))}</div>
  );
};

export default ImageGallery