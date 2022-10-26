import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import {unsplash} from './api/unsplash'
import ImageGallery from './components/ImageGallery';

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getSearchTerm =(term)=>{
    setSearchTerm(term);
  };

  useEffect(()=>{
    const fetchPhotos = async () => {
        const result = await unsplash.get("/photos/random?count=15");
        setImages(result.data)
    }
    fetchPhotos();
  }, [searchTerm]);

  return (
   <div>
      <SearchBar getSearchTerm={getSearchTerm}/>
      <ImageGallery images={images}/>
   </div> 
  );
}

export default App;
