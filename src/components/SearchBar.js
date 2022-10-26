import React from 'react'
import { useState, useRef, useEffect } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({getSearchTerm}) => {
    // const [input, setInput] = useState("");
    const inputRef = useRef();

    const searchSubmitHandler=(event)=>{
        event.preventDefault();
    //     if (input.trim() !== ""){
    //         getSearchTerm(input); 
    // }
    // setInput("");

    const input = inputRef.current;
        if (input.value.trim() !== ""){
            getSearchTerm(input.value); 
    }
};

useEffect(()=>{
    console.log(inputRef);
    inputRef.current.focus();
},[]);

  return (
    <form  onSubmit={searchSubmitHandler} className={styles.search}>
        <input
        type='search'
        ref={inputRef}
        // value={input}
        // onChange={(e) => setInput(e.target.value)}
        ></input>
        <button>Search</button>
    </form>
  )
}

export default SearchBar;