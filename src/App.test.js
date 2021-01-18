import React from 'react';
import ReactDom from 'react-dom'
import { Router } from 'react-router-dom';

import App from './App';

test("renders the correct content",()=>{
    const root = document.createElement("div");
    ReactDom.render(<App/>,root);

    expect(root.querySelector("h5").textContent).toBe("To Do List");
})