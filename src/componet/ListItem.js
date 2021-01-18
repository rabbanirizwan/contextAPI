import React, { useContext, useState } from 'react';
import { MyContext } from '../MyProvider';


const ListItem = (items) => {
  const { movies, setMovies, indexOfUpdatingItem, setUpdatingItemIndex } = useContext(MyContext);

  const [itemName, setName] = useState("")

  const deleteTask = (val) => {
    let newArray = movies.filter(item => item.name != val);
    setMovies(newArray);
    console.log("delte item");


  }

  const updateTask = (val) => {
    let itemUpdateIndex = movies.findIndex(item => item.name == val);
    setUpdatingItemIndex(itemUpdateIndex);

  }
  const saveChanges = () => {
    let newArray = [...movies];
    newArray[indexOfUpdatingItem].name = itemName;
    console.log(newArray);
    setUpdatingItemIndex(-1)


  }


  const itemList = movies.map((val, index) => {
    return (
      <p key={index}>
        <b data-testid={val.name}>{val.name}</b>
        <button data-testid={`delete ${index}`} onClick={() => deleteTask(val.name)}>delete</button>
        <button data-testid={`update ${index}`}onClick={() => updateTask(val.name)}>update</button>
        
        {indexOfUpdatingItem == index && <span>
          
          <input
            disabled = {indexOfUpdatingItem !==index}
            data-testid={`input ${val.name}`}
            type="text"
            onChange={e => setName(e.target.value)}
            required />
          <button onClick={saveChanges} data-testid={`update ${val.name}`}>
            save change
          </button>

        </span>
  }
      </p>
    )
  });
  return (
    itemList
  )
}

export default ListItem;