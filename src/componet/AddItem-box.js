import React, { useContext, useState } from 'react'
import { MyContext } from '../MyProvider';

const AddItem = () => {
  const [itemName, setName] = useState("");
  const { movies, setMovies, indexOfUpdatingItem } = useContext(MyContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!itemName) return;
    addTask(event.target.text1.value);
    setName("");

  }
  const addTask = (name) => {
    const newTask = [...movies, { name }];
    setMovies(newTask);

  }
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <label htmlFor="text1">Input Text:</label>
      <input
        id="text1"
        disabled={indexOfUpdatingItem !== -1}
        value={itemName}
        type="text"
        placeholder="enter item name"
        onChange={evt => setName(evt.target.value)}
      />
      <p>value change:{itemName}</p>
    </form>
  )
}
export default AddItem