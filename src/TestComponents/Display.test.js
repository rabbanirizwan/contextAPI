import React from 'react';
import {render} from "@testing-library/react";
import Display from '../componet/Display';

describe("<Display/>",()=>{
    it("render without crashing",()=>{
        render(<Display/>);
    });
    it("props work",()=>{
      const display = render(<Display strikes={3} balls={4}/>);
      display.getByText(/Strikes:3/);
      display.getByText(/Balls:4/)
    })
})