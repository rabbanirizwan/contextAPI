import React from 'react'
import {fireEvent,render,screen,act,cleanup} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BlogPost from '../componet/Theme'
import App from "../App"
import {MyContext} from "../MyProvider";

afterEach(cleanup)

it("initial value",()=>{
    const {container,getByText} = render(
        <App>
            <MyContext.Provider>
                <BlogPost/>
            </MyContext.Provider>
        </App>
    );
    expect(getByText(/Some/i).textContent).toBe("Some Text");

    fireEvent.click(getByText("Change Text"));
    expect(getByText(/Some/i).textContent).toBe("Some Other Text")
    //  expect(getByText(/dark/i)).textContent.toBe('dark')
})