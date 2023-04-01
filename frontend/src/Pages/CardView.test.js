import {render,screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import CardView from "./CardView";
import {add} from "nodemon/lib/rules";
import {MemoryRouter} from "react-router-dom";




describe('Properties of viewing a card product', () => {

    test('renders 1 if the + button was clicked', () => {
        //Arrange

        render(<MemoryRouter> <CardView></CardView></MemoryRouter>);

        //Act

        const addButton = screen.getByText('+');
        userEvent.click(addButton)

        //Assert
        const outputElement = screen.getByText('1');
        expect(outputElement).toBeInTheDocument();
    })

    test('renders 0 if the - button is clicked', () => {
        render(<MemoryRouter><CardView></CardView></MemoryRouter>);

        const subButton = screen.getByText('-');
        userEvent.click(subButton)

        const outputElement = screen.getByText('0');
        expect(outputElement).toBeInTheDocument();
    })

})