import React from "react";
import { screen, render, getByTestId,type,fireEvent } from '@testing-library/react';
import TaskList from "../TodoItem/TodoItem.js";

describe("Testing the ui",()=>{

    beforeEach(()=>{
        render(<TaskList/>)
    })
    it("Should contain task albel",()=>{
        const label=screen.getByTestId("todo-label");

        expect(label).toBeInTheDocument();
    })

    it("Should contain done button",()=>{
        const buttonDone=screen.getByTestId("todo-done");

        expect(buttonDone).toBeInTheDocument();
    })

    it("Should contain trash icon",()=>{
        const binIcon=screen.getByTestId("bin");

        expect(binIcon).toBeInTheDocument();
    })

    it("Should contain delete button",()=>{
        const tick=screen.getByTestId("tick");

        expect(tick).toBeInTheDocument();
    })

})