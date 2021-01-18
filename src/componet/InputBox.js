import React, { useState } from 'react';

const InputBox = () => {
    const [itemName, setName] = useState("");
    const [values, setValues] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!itemName) return;
        addTask(itemName);
        setName("");

    }
    const addTask = (name) => {
        const newTask = [...values, { name }];
        setValues(newTask);

    }
    return (
        <div>
            <h2>add element</h2>
            {values.map((val,index)=>{
                return(
                    <p key={index}>{val.name}</p>
                )
            })}
            <form
                onSubmit={handleSubmit}
            >
                <input
                    //disabled={indexOfUpdatingItem !== -1}
                    value={itemName}
                    type="text"
                    placeholder="Add Item"
                    onChange={evt => setName(evt.target.value)}
                />
            </form>
        </div>

    )
}
export default InputBox;
