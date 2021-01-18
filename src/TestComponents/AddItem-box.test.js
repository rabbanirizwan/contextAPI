import React from 'react';
import ReactDom from 'react-dom';
import { render, fireEvent, cleanup, getRoles, screen, getAllByAltText, getByTestId } from "@testing-library/react";
import InputBox from '../componet/InputBox';
import AddItem from '../componet/AddItem-box';
import { MyContext } from '../MyProvider'
import { configure, shallow } from 'enzyme';
import ListItem from '../componet/ListItem';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App'
afterEach(cleanup);

it("when component inititialize", () => {
    const { container, getByText, getByLabelText, getByTestId } = render(
        <App />

    );
    expect(getByText(/value change/i).textContent).toBe("value change:")
    fireEvent.change(getByLabelText("Input Text:"), { target: { value: "funny" } })
    //fireEvent.submit(getByTestId('form'),{target:{text1:{value:"jalebie"}}})
    // expect(getByText(/jalebie/i).textContent).toBe("jalebie")

});

it("add element in the list", () => {
    const { getByTestId, getByText, getByLabelText } = render(<App />);
    fireEvent.change(getByLabelText("Input Text:"), { target: { value: "funny" } })
    fireEvent.submit(getByTestId('form'), { target: { text1: { value: "super man" } } });
    expect(getByText(/super/i).textContent).toBe("super man");
});

it("delete element in the list", () => {
    const { getByText, getByTestId } = render(<App />);
    expect(getByText(/Avengers/i).textContent).toBe("Avengers")
    fireEvent.click(getByTestId(/delete 1/i));
    expect(getByTestId(/delete 1/i).textContent).not.toBe("Avengers")

});

it("update element in the list", () => {
    const { getByText, getByTestId } = render(<App />);
    expect(getByText(/Spider man/i).textContent).toBe("Spider man");
    fireEvent.click(getByTestId(/update 2/i));
    fireEvent.change(getByTestId(/input Spider man/i), { target: { value: "bad" } })
    fireEvent.click(getByTestId(/update Spider man/i));
    expect(getByText(/bad/i).textContent).toBe("bad");
    //expect(getByTestId(/update 2/i).textContent).not.toBe("good");

})



//configure({adapter: new Adapter()});
// it("renders without crashing",()=>{
//    const {queryByTestId,queryByPlaceholderText} = render(<InputBox/>)

//    expect(queryByPlaceholderText("Add Item")).toBeTruthy()
// })

// describe("Input value",()=>{
//     it("updates on change",()=>{
//         const {queryByPlaceholderText} = render(<InputBox/>)
//         const searchInput = queryByPlaceholderText("Add Item");

//         fireEvent.change(searchInput,{target:{value:"apple"}});
//         expect(searchInput.value).toBe("apple");
//     })
// })

// describe("Add item in the list",()=>{

//     it("add item",()=>{
//         const TestComponent = () =>(
//             <MyContext.Provider value={"dsdsd"}>
//                  <ListItem/>
//             </MyContext.Provider>
//         );
//         const element = shallow(<TestComponent/>);
//         expect(element.find(ListItem).dive.text())
//     })
// })

