import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import Controls from '../componet/Controls';

describe("<Controls/>",()=>{
    it("render without crashing",()=>{
        render(<Controls/>)
    });
    it("strike",()=>{
        let clicked = true;
        const {getByText} = render(<Controls/>);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        

    })
})