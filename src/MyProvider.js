import React, { useState, createContext } from 'react';

export const MyContext = createContext();
export const MyProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 1
        },
        {
            name: "Avengers",
            price: "$20",
            id: 2
        },
        {
            name: "Spider man",
            price: "$10",
            id: 3
        },
    ])
    const [theme, setTheme] = useState("Some Text");
    const [indexOfUpdatingItem, setUpdatingItemIndex] = useState(-1)

    return (
        <MyContext.Provider
            value={{
                movies, setMovies,
                indexOfUpdatingItem, setUpdatingItemIndex,
                theme, setTheme,

            }}>
            {props.children}
        </MyContext.Provider>
    );
}