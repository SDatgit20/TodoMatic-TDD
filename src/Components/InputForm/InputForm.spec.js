import React from "react";
import { screen, render, getByTestId,type,fireEvent } from '@testing-library/react';
import Form from "../InputForm/InputForm.js";

describe("Testing the ui",()=>{

    beforeEach(()=>{
        render(<Form/>)
    })
    it("Should contain an input field",()=>{
        const inputField=screen.getByTestId("test-input");

        expect(inputField).toBeInTheDocument();
    })

    it("Should contain submit button",()=>{
        const buttonSubmit=screen.getByTestId("test-submit");

        expect(buttonSubmit).toBeInTheDocument();
    })

    it("Should change the input value as user types",()=>{
        const inputField=screen.getByTestId("test-input");
        fireEvent.change(inputField,{"target":{"value":"Water plants"}});
        
        expect(inputField).toHaveAttribute("value","Water plants");
    })

})

//try using mocks for addtask